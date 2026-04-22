# Agence IA — Website

Single-page French-first marketing site for Agence IA, a Quebec-French dual-channel AI consulting practice. Built with Astro 4, Tailwind CSS, and Framer Motion, deployed to GitHub Pages.

- Spec (authoritative): `docs/agence-ia-site-reference.md`
- Structural reference: `docs/merydian-site-reference.md`
- Project rules + do/don't: `CLAUDE.md`
- Open content items: `CONTENT_TODO.md`

## Requirements

- Node.js >= 20
- npm >= 10

## Quick start

```bash
# install
npm install

# local dev at http://localhost:4321
npm run dev

# production build to ./dist
npm run build

# preview the production build locally
npm run preview
```

## Project structure

```
Website/
  docs/                           # spec + structural reference (read-only)
  specs/                          # SpecKit-managed specs per phase
  src/
    pages/                        # index.astro + legal subpages
    layouts/                      # BaseLayout.astro
    components/
      sections/                   # one component per spec §4.x
      ui/                         # reusable primitives
      islands/                    # React islands (hydrate where needed)
    content/
      site.ts                     # every user-facing string (typed)
      types.ts                    # TypeScript types for content shape
    styles/
      tokens.css                  # design tokens (filled after design pass)
      globals.css                 # Tailwind layers + tokens import
  public/
    brand/                        # logo files (after brand pass)
    images/                       # founder photos, OG image
  .github/workflows/deploy.yml    # GitHub Pages deploy
```

## Content rules

- Every user-facing string lives in `src/content/site.ts`. Components never hardcode copy.
- Unresolved content is a typed `TODO` sentinel. See `CONTENT_TODO.md` for the live checklist.
- User-facing language: Quebec French. Code, comments, specs: English.

## Deploy

GitHub Pages via GitHub Actions. The workflow at `.github/workflows/deploy.yml` builds on push to `main` and publishes `./dist` to the `github-pages` environment.

Before the first deploy, in the repository settings:

1. Enable **Pages → Source: GitHub Actions**.
2. Ensure the repository has `pages: write` and `id-token: write` permissions enabled for workflows.
3. Once the final domain is supplied, set `site` in `astro.config.mjs` (and optionally `base` if deploying under a subpath).

## Constraints

- No AI buzzwords ("transformation IA", "révolution", "boost"). Concrete verbs only.
- No gradients (spec §6).
- No Google Analytics — contradicts the Loi 25 / data-sovereignty positioning. Use Plausible or Umami.
- Keep bundle size honest: Astro-default everywhere, React islands only where interactivity demands it.
