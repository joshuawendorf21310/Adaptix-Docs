import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadManifest, type ServiceManifestEntry } from './services';

const __filename = fileURLToPath(import.meta.url);
const ROOT = join(dirname(__filename), '..', '..');

export interface CortexServiceRecord {
  slug: string;
  name: string;
  description: string;
  domain: string;
  url: string;
  status: 'exposed' | 'not_exposed' | 'upstream_error' | 'network_error';
  httpStatus: number;
  elapsedMs: number;
  error: string | null;
  toolCount: number;
  fetchedAt: string;
}

export interface CortexIndex {
  generatedAt: string;
  gateway: string;
  totals: { services: number; exposed: number; tools: number };
  services: CortexServiceRecord[];
}

export function loadCortexIndex(): CortexIndex {
  const p = join(ROOT, 'public', 'api', 'cortex', 'index.json');
  if (existsSync(p)) {
    return JSON.parse(readFileSync(p, 'utf8'));
  }
  // Synthesize a "registry not yet aggregated" view, marked honestly.
  const services = loadManifest().map<CortexServiceRecord>((svc: ServiceManifestEntry) => ({
    slug: svc.slug,
    name: svc.name,
    description: svc.description,
    domain: svc.domain,
    url: `https://api.adaptixcore.com/api/v1/${svc.slug}/cortex/tools`,
    status: 'not_exposed',
    httpStatus: 0,
    elapsedMs: 0,
    error: 'no aggregation run yet',
    toolCount: 0,
    fetchedAt: new Date(0).toISOString(),
  }));
  return {
    generatedAt: new Date(0).toISOString(),
    gateway: 'https://api.adaptixcore.com',
    totals: { services: services.length, exposed: 0, tools: 0 },
    services,
  };
}

export function loadCortexToolsForService(slug: string): unknown | null {
  const p = join(ROOT, 'public', 'api', 'cortex', `${slug}.tools.json`);
  if (!existsSync(p)) return null;
  try {
    return JSON.parse(readFileSync(p, 'utf8'));
  } catch {
    return null;
  }
}
