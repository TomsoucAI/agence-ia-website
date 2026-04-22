# src/

Runtime code for the Agence IA site. Everything that ships in the build lives here.

## Structure

- `pages/` — Astro route entrypoints. `index.astro` composes the whole single-page narrative; legal pages are separate routes.
- `layouts/` — Shared shells (HTML wrapper, meta, fonts, analytics mount point).
- `components/sections/` — One `.astro` file per spec §4.x section. See `components/sections/README.md`.
- `components/ui/` — Reusable primitives (Card, Eyebrow, StatBlock, CtaPair, …).
- `components/islands/` — React islands that hydrate on the client. Zero JS ships to pages that don't use one.
- `content/` — Typed content layer (`site.ts`) and types (`types.ts`). **Single source of truth for every user-facing string.**
- `styles/` — `tokens.css` (design tokens, filled after the design pass) + `globals.css` (Tailwind layers + tokens import).

## Rules

- **TypeScript strict mode.** No `any`. Every prop, every helper, every content field is typed.
- **No hardcoded copy in components.** Pull from `content/site.ts`. Even a single word.
- **File naming:** kebab-case for `.astro` / `.ts` filenames used as routes/entries, PascalCase for component filenames (`Hero.astro`, `FaqAccordion.tsx`).
- **Language:** code and comments in English; user-facing copy in the content layer is Quebec French.
- **Bundle discipline:** Astro-default everywhere; React islands only where real interactivity is required.
