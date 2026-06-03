// Raw markdown endpoint for each vendor-research brief.
//
// Exposed at /vendor-research/<slug>.md. The Adaptix Web App marketing
// build can fetch the raw markdown directly (no HTML parsing) when it
// wants to render a section verbatim on /vs/<vendor> pages.
//
// Set X-Robots-Tag: noindex because the *content* is internal, even if the
// machine-readable URL itself is publicly fetchable for cross-repo build.

import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const entries = await getCollection('vendor-research');
  return entries.map((entry) => ({
    params: { slug: entry.id.replace(/\.md$/, '') },
    props: { entry },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const { entry } = props as {
    entry: Awaited<ReturnType<typeof getCollection<'vendor-research'>>>[number];
  };
  return new Response(entry.body || '', {
    status: 200,
    headers: {
      'content-type': 'text/markdown; charset=utf-8',
      'cache-control': 'public, max-age=300, s-maxage=300',
      'x-robots-tag': 'noindex, nofollow, noarchive',
      'access-control-allow-origin': '*',
    },
  });
};
