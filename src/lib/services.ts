// Reads services.yaml + public/api/index.json (produced by aggregate-openapi.mjs).
// All file reads happen at build time inside Astro pages.

import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const ROOT = join(dirname(__filename), '..', '..');

export interface ServiceManifestEntry {
  slug: string;
  name: string;
  repo: string;
  description: string;
  domain: string;
}

export interface AggregatedRecord extends ServiceManifestEntry {
  url: string;
  httpStatus: number;
  elapsedMs: number;
  error: string | null;
  status: 'live' | 'deferred' | 'unavailable';
  usedLastKnownGood: boolean;
  fetchedAt: string;
}

export interface AggregatedIndex {
  generatedAt: string;
  gateway: string;
  totals: {
    services: number;
    live: number;
    deferred: number;
    unavailable: number;
  };
  services: AggregatedRecord[];
}

export function loadManifest(): ServiceManifestEntry[] {
  const raw = readFileSync(join(ROOT, 'services.yaml'), 'utf8');
  const parsed = yaml.load(raw) as { services?: ServiceManifestEntry[] };
  return parsed?.services ?? [];
}

export function loadAggregated(): AggregatedIndex {
  const indexPath = join(ROOT, 'public', 'api', 'index.json');
  if (existsSync(indexPath)) {
    return JSON.parse(readFileSync(indexPath, 'utf8'));
  }
  // No aggregation has run yet — synthesize a "deferred for all" placeholder
  // so the site still builds.
  const services = loadManifest().map<AggregatedRecord>((svc) => ({
    ...svc,
    url: `https://api.adaptixcore.com/api/v1/${svc.slug}/openapi.json`,
    httpStatus: 0,
    elapsedMs: 0,
    error: 'no aggregation run yet',
    status: 'deferred',
    usedLastKnownGood: false,
    fetchedAt: new Date(0).toISOString(),
  }));
  return {
    generatedAt: new Date(0).toISOString(),
    gateway: 'https://api.adaptixcore.com',
    totals: {
      services: services.length,
      live: 0,
      deferred: services.length,
      unavailable: 0,
    },
    services,
  };
}

export function loadServiceSpec(slug: string): Record<string, unknown> | null {
  const p = join(ROOT, 'public', 'api', `${slug}.openapi.json`);
  if (!existsSync(p)) return null;
  try {
    return JSON.parse(readFileSync(p, 'utf8'));
  } catch {
    return null;
  }
}
