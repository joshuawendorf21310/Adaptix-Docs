// Public manifest of vendor-research briefs.
//
// Exposed at /vendor-research/manifest.json. Consumed by the Adaptix Web App
// (marketing /vs/<vendor> pages) at build time so the public comparison
// pages can show "based on the Adaptix vendor research dossier" excerpts
// without duplicating content.
//
// This manifest itself is NOT noindexed — it is the published API. The
// underlying full briefs (the HTML pages) ARE noindexed.

import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { VENDOR_RESEARCH, VENDOR_RESEARCH_BY_SLUG } from '../../lib/vendor-research';

export const GET: APIRoute = async () => {
  const entries = await getCollection('vendor-research');
  const entryBySlug = new Map(entries.map((e) => [e.id.replace(/\.md$/, ''), e]));

  // Extract the first non-heading paragraph from each brief as the
  // canonical excerpt (the marketing site uses this as the dossier blurb).
  function firstParagraph(body: string | undefined): string {
    if (!body) return '';
    const lines = body.split(/\r?\n/);
    const buf: string[] = [];
    let inPara = false;
    for (const raw of lines) {
      const line = raw.trim();
      if (!inPara) {
        if (!line) continue;
        if (line.startsWith('#') || line.startsWith('---') || line.startsWith('>')) continue;
        if (line.startsWith('**') && line.endsWith('**')) continue;
        inPara = true;
        buf.push(line);
        continue;
      }
      if (!line) break;
      if (line.startsWith('#')) break;
      buf.push(line);
    }
    return buf.join(' ').slice(0, 600);
  }

  const briefs = VENDOR_RESEARCH.map((meta) => {
    const entry = entryBySlug.get(meta.slug);
    return {
      slug: meta.slug,
      title: meta.title,
      cluster: meta.cluster,
      summary: meta.summary,
      vendors: meta.vendors,
      excerpt: firstParagraph(entry?.body),
      words: entry?.body ? entry.body.split(/\s+/).filter(Boolean).length : 0,
      docsUrl: `https://docs.adaptixcore.com/vendor-research/${meta.slug}`,
      rawUrl: `https://docs.adaptixcore.com/vendor-research/${meta.slug}.md`,
    };
  });

  // By-vendor index so /vs/<vendor> pages can look up the right brief by
  // vendor name (lowercase + dehyphenated).
  const byVendor: Record<string, string> = {};
  for (const meta of VENDOR_RESEARCH) {
    for (const v of meta.vendors) {
      const key = v
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
      if (!byVendor[key]) byVendor[key] = meta.slug;
    }
  }

  return new Response(
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        count: briefs.length,
        briefs,
        byVendor,
      },
      null,
      2,
    ),
    {
      status: 200,
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'public, max-age=300, s-maxage=300',
        // Allow the Adaptix Web App build to fetch this from anywhere.
        'access-control-allow-origin': '*',
      },
    },
  );
};

export { VENDOR_RESEARCH_BY_SLUG };
