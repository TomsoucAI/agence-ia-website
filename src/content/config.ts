/**
 * Astro content collections configuration.
 *
 * Intentionally empty: Agence IA's content layer lives in `./site.ts` as a
 * typed TypeScript constant, not as a content collection. This file exists
 * only to satisfy Astro's content-collection scanner so stray `.md` files
 * in this folder (such as `README.md`) don't emit a warning on every build.
 *
 * If a real collection is ever introduced (blog, case studies), define it
 * here via `defineCollection` from `astro:content`.
 */

export const collections = {};
