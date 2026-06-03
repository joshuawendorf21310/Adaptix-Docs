import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Vendor research collection.
//
// Source files live at the repo root in `vendor-research/*.md` (kept there so
// other Adaptix repos can pull the raw markdown directly without reaching
// into Astro internals). The glob loader projects them into the Astro content
// graph so we get type-safe rendering, slugs, and getCollection() iteration.
//
// These documents are INTERNAL ONLY. Pages that render them must emit
// `<meta name="robots" content="noindex,nofollow,noarchive" />` and are
// not linked from the public-facing navigation.
const vendorResearch = defineCollection({
  loader: glob({
    // Path is resolved relative to this config file by the glob loader.
    // src/content.config.ts -> ../../vendor-research at repo root.
    base: './vendor-research',
    pattern: '**/*.md',
  }),
  schema: z.object({
    title: z.string().optional(),
    cluster: z.string().optional(),
    summary: z.string().optional(),
  }),
});

export const collections = {
  'vendor-research': vendorResearch,
};
