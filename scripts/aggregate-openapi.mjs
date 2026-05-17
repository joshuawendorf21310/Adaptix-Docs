#!/usr/bin/env node
/**
 * aggregate-openapi.mjs
 *
 * Pulls /openapi.json for every Adaptix-* service listed in services.yaml from
 * the live production gateway (https://api.adaptixcore.com). Saves successful
 * specs to public/api/{slug}.openapi.json. Records reachability + last-known
 * status in public/api/index.json so the site can render badges.
 *
 * Rules:
 *  - NO mocks. NO fake specs. If a service is unreachable, mark it "deferred"
 *    and reuse the last-known-good spec if one is on disk.
 *  - 5s per-request timeout (per spec).
 *  - Exit 0 even if some services are down — partial aggregation is expected.
 */

import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = resolve(__dirname, '..');

const GATEWAY = process.env.ADAPTIX_GATEWAY_BASE || 'https://api.adaptixcore.com';
const TIMEOUT_MS = 5_000;
const OUT_DIR = join(ROOT, 'public', 'api');

async function loadServices() {
  const raw = await readFile(join(ROOT, 'services.yaml'), 'utf8');
  const parsed = yaml.load(raw);
  if (!parsed?.services?.length) {
    throw new Error('services.yaml has no services entries');
  }
  return parsed.services;
}

async function fetchWithTimeout(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  const startedAt = Date.now();
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'user-agent': 'adaptix-docs-aggregator/0.1 (+https://docs.adaptixcore.com)',
        accept: 'application/json',
      },
    });
    const elapsedMs = Date.now() - startedAt;
    const contentType = res.headers.get('content-type') || '';
    let body = null;
    if (res.ok && contentType.includes('json')) {
      try {
        body = await res.json();
      } catch (err) {
        return { ok: false, status: res.status, error: `invalid JSON: ${err.message}`, elapsedMs };
      }
    } else {
      // drain
      await res.text().catch(() => {});
    }
    return { ok: res.ok, status: res.status, body, elapsedMs };
  } catch (err) {
    const elapsedMs = Date.now() - startedAt;
    const code = err.name === 'AbortError' ? 'TIMEOUT' : 'NETWORK';
    return { ok: false, status: 0, error: `${code}: ${err.message}`, elapsedMs };
  } finally {
    clearTimeout(timer);
  }
}

async function lastKnownGoodExists(slug) {
  const path = join(OUT_DIR, `${slug}.openapi.json`);
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const services = await loadServices();

  console.log(`[aggregate] gateway=${GATEWAY}  services=${services.length}`);

  const results = [];
  for (const svc of services) {
    const url = `${GATEWAY}/api/v1/${svc.slug}/openapi.json`;
    const r = await fetchWithTimeout(url);

    let status = 'deferred';
    let usedLastKnownGood = false;

    if (r.ok && r.body && typeof r.body === 'object' && r.body.openapi) {
      const outPath = join(OUT_DIR, `${svc.slug}.openapi.json`);
      await writeFile(outPath, JSON.stringify(r.body, null, 2) + '\n', 'utf8');
      status = 'live';
    } else if (await lastKnownGoodExists(svc.slug)) {
      usedLastKnownGood = true;
      status = 'deferred';
    } else {
      status = 'unavailable';
    }

    const record = {
      slug: svc.slug,
      name: svc.name,
      repo: svc.repo,
      description: svc.description,
      domain: svc.domain,
      url,
      httpStatus: r.status,
      elapsedMs: r.elapsedMs,
      error: r.error || null,
      status,
      usedLastKnownGood,
      fetchedAt: new Date().toISOString(),
    };
    results.push(record);

    const tag = status === 'live'
      ? 'LIVE'
      : status === 'deferred'
        ? 'DEFERRED (LKG)'
        : 'UNAVAILABLE';
    console.log(
      `  [${tag.padEnd(15)}] ${svc.slug.padEnd(15)} http=${String(r.status).padEnd(3)}  ${r.elapsedMs}ms`
    );
  }

  const liveCount = results.filter((r) => r.status === 'live').length;
  const deferredCount = results.filter((r) => r.status === 'deferred').length;
  const unavailableCount = results.filter((r) => r.status === 'unavailable').length;

  const indexPath = join(OUT_DIR, 'index.json');
  await writeFile(
    indexPath,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        gateway: GATEWAY,
        totals: {
          services: results.length,
          live: liveCount,
          deferred: deferredCount,
          unavailable: unavailableCount,
        },
        services: results,
      },
      null,
      2
    ) + '\n',
    'utf8'
  );

  console.log(
    `[aggregate] done: live=${liveCount} deferred=${deferredCount} unavailable=${unavailableCount}`
  );
}

main().catch((err) => {
  console.error('[aggregate] fatal:', err);
  process.exit(1);
});
