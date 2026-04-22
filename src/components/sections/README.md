# src/components/sections/

One Astro component per spec §4.x section. Each section is a self-contained block that the `index.astro` page composes in the order defined by the spec (§3 "Section order").

## Files

| File | Spec section |
|---|---|
| `Hero.astro` | §4.1 |
| `Problem.astro` | §4.2 |
| `Approach.astro` | §4.3 |
| `Framework.astro` | §4.4 |
| `BuiltFor.astro` | §4.5 |
| `Services.astro` | §4.6 |
| `Process.astro` | §4.7 |
| `Outcomes.astro` | §4.8 |
| `Formation.astro` | §4.9 |
| `Team.astro` | §4.10 |
| `Faq.astro` | §4.11 |
| `FinalCta.astro` | §4.12 |
| `Footer.astro` | §4.13 |

## Rules

- **Naming:** PascalCase, `.astro` extension.
- **Content:** every section consumes its slice of `siteContent` from `src/content/site.ts`. **No hardcoded copy.**
- **IDs:** the top-level wrapper gets a stable `id` matching the anchor-nav targets in `siteContent.meta.anchorNav` (e.g. `#approche`, `#services`, `#processus`, `#formation`, `#faq`).
- **Language:** comments and JSDoc in English; anything rendered to the user is pulled from the Quebec-French content layer.
- **TODO handling:** when a content field is a `TODO` sentinel, the section renders a visible dev-only `<Placeholder reason="…" />`. Production build fails CI if a non-whitelisted field is still a `TODO`.
- **Two-CTA pattern:** every major section repeats the primary audit CTA + a secondary action near the top, per spec §5 and Merydian §5.
- **Accessibility:** each section needs an `aria-label` or a visible heading that matches. No `div` soup.
