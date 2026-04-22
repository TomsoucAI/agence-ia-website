// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

/*
 * Phase 6 — deploy-ready Astro config.
 *
 * `site` is set to the default GitHub Pages URL assuming the repo is served
 * from https://tomsoucy1.github.io/Website/ (user `tomsoucy1`, repo `Website`).
 * Update both `site` and `base` the moment Tom's custom domain is live — then
 * CONTENT_TODO.md's `meta.domain` can also be filled in.
 *
 * `base: "/Website"` ensures every internal link (assets, canonical URL, OG URL)
 * resolves correctly under the project-page subpath. If the repo ever moves to
 * a user-site (`tomsoucy1.github.io`), `base` should be removed.
 */

// https://astro.build/config
export default defineConfig({
  site: 'https://tomsoucai.github.io',
  base: '/agence-ia-website',
  integrations: [tailwind(), react()],
});
