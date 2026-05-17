#!/usr/bin/env node
/**
 * aggregate-cortex.mjs
 *
 * Pulls /api/v1/{slug}/cortex/tools for every service in services.yaml. Saves
 * the per-service registry to public/api/cortex/{slug}.tools.json and a
 * combined index to public/api/cortex/index.json. Honesty-first: services
 * that don't yet expose the registry are recorded as "not_exposed", NOT
 * faked.
 */

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = resolve(__dirname, '..');

const GATEWAY = process.env.ADAPTIX_GATEWAY_BASE || 'https://api.adaptixcore.com';
const TIMEOUT_MS = 5_000;
const OUT_DIR = join(ROOT, 'public', 'api', 'cortex');

async function loadServices() {
  const raw = await readFile(join(ROOT, 'services.yaml'), 'utf8');
  const parsed = yaml.load(raw);
  return parsed?.services ?? [];
}

async function fetchWithTimeout(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  const startedAt = Date.now();
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'user-agent': 'adaptix-docs-cortex-aggregator/0.1 (+https://docs.adaptixcore.com)',
        accept: 'application/json',
      },
    });
    const elapsedMs = Date.now() - startedAt;
    const ct = res.headers.get('content-type') || '';
    let body = null;
    if (res.ok && ct.includes('json')) {
      try {
        body = await res.json();
      } catch {
        return { ok: false, status: res.status, elapsedMs, error: 'invalid JSON' };
      }
    } else {
      await res.text().catch(() => {});
    }
    return { ok: res.ok, status: res.status, body, elapsedMs };
  } catch (err) {
    return {
      ok: false,
      status: 0,
      elapsedMs: Date.now() - startedAt,
      error: err.name === 'AbortError' ? 'TIMEOUT' : `NETWORK: ${err.message}`,
    };
  } finally {
    clearTimeout(timer);
  }
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const services = await loadServices();
  const records = [];
  let totalTools = 0;
  let exposedCount = 0;
  for (const svc of services) {
    const url = `${GATEWAY}/api/v1/${svc.slug}/cortex/tools`;
    const r = await fetchWithTimeout(url);

    let status = 'not_exposed';
    let toolCount = 0;
    if (r.ok && Array.isArray(r.body?.tools)) {
      status = 'exposed';
      toolCount = r.body.tools.length;
      totalTools += toolCount;
      exposedCount += 1;
      const outPath = join(OUT_DIR, `${svc.slug}.tools.json`);
      await writeFile(outPath, JSON.stringify(r.body, null, 2) + '\n', 'utf8');
    } else if (r.status === 404) {
      status = 'not_exposed';
    } else if (r.status === 0) {
      status = 'network_error';
    } else if (r.status >= 500) {
      status = 'upstream_error';
    } else {
      status = 'not_exposed';
    }

    records.push({
      slug: svc.slug,
      name: svc.name,
      description: svc.description,
      domain: svc.domain,
      url,
      status,
      httpStatus: r.status,
      elapsedMs: r.elapsedMs,
      error: r.error || null,
      toolCount,
      fetchedAt: new Date().toISOString(),
    });
    console.log(
      `  [${status.padEnd(15)}] ${svc.slug.padEnd(15)} http=${String(r.status).padEnd(3)} tools=${toolCount}`
    );
  }

  await writeFile(
    join(OUT_DIR, 'index.json'),
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        gateway: GATEWAY,
        totals: {
          services: records.length,
          exposed: exposedCount,
          tools: totalTools,
        },
        services: records,
      },
      null,
      2
    ) + '\n',
    'utf8'
  );

  console.log(`[cortex] done: exposed=${exposedCount}/${records.length}  tools=${totalTools}`);
}

main().catch((err) => {
  console.error('[cortex] fatal:', err);
  process.exit(1);
});
