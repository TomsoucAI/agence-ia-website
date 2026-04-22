/**
 * Astro content collections configuration.
 *
 * Intentionally empty: Agence IA's content layer lives in `./site.ts` as a
 * typed TypeScript constant, not as a content collection. This file exists
 * only to satisfy Astro's content-collection scanner.
 *
 * Note on `_README.md`: Astro's content scanner warns for any `.md` file that
 * lives directly under `src/content/` without being in a collection subdirectory.
 * The docs for this folder are therefore stored as `_README.md` — files/folders
 * whose name starts with an underscore are explicitly ignored by the scanner
 * (see Astro's `getEntryType` + `hasUnderscoreBelowContentDirectoryPath`).
 *
 * If a real collection is ever introduced (blog, case studies), define it
 * here via `defineCollection` from `astro:content`.
 */

export const collections = {};
