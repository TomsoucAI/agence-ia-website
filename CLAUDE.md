# Agence IA — Website (routing file)

## Project purpose

Single-page French-first marketing site for **Agence IA**, a Quebec-French dual-channel AI consulting practice. The site sells services (audit → implementation → retainer) to Quebec SMBs and — starting summer 2026 — independent financial advisors, with a secondary B2C Discord/Formation funnel. Every conversion anchors on the $500–$1,500 audit; the four non-negotiables (permission-aware, locally hostable, resilient, observable) are the moat. Structure inherits Merydian.ai's anchor-nav SPA pattern; copy and positioning are entirely Agence IA.

## File map

| Path | What lives there |
|---|---|
| `docs/agence-ia-site-reference.md` | **The spec.** Authoritative source for content, sections, tone. Do NOT modify. |
| `docs/merydian-site-reference.md` | Structural reference (not copy reference). Do NOT modify. |
| `docs/agence-ia-build-prompts.md` | Orchestration playbook for subsequent build phases. Do NOT modify. |
| `specs/` | SpecKit-managed specs for each subsequent phase. |
| `src/content/site.ts` | **Source of truth for every user-facing string** — copy, prices, FAQ, bios, CTAs. Consumed by section components. |
| `src/content/types.ts` | TypeScript types for the content shape. Strict; no `any`. |
| `src/pages/index.astro` | Single-page SPA that composes every section. |
| `src/pages/mentions-legales.astro`, `src/pages/politique-confidentialite.astro` | Legal subpages (to be built). |
| `src/layouts/BaseLayout.astro` | Shared shell (meta, fonts, analytics mount point). |
| `src/components/sections/*.astro` | One Astro component per spec §4.x. Stubs today. |
| `src/components/ui/` | Reusable primitives (Card, Eyebrow, StatBlock, CtaPair). |
| `src/components/islands/` | React islands (Marquee, ScrollReveal, FaqAccordion). Hydrate only where needed. |
| `src/styles/tokens.css` | CSS custom properties — populated after the design pass. |
| `src/styles/globals.css` | Tailwind layers + tokens import. Keep thin. |
| `public/brand/` | Logo files (after brand pass). |
| `public/images/` | Founder photos, OG image. |
| `.github/workflows/deploy.yml` | GitHub Pages deploy. |
| `CONTENT_TODO.md` | Live checklist of unresolved content values; each entry maps to a TODO sentinel in `site.ts`. |

## Brand voice (summary)

Anti-hype, operator-focused, concrete over abstract. The tone must read credibly to skeptical Quebec SMB operators and — eventually — independent financial advisors under AMF constraints. Concrete verbs (livrer, automatiser, journaliser, déployer) over buzzwords. Boundary-setting ("what we don't sell", 30-day retainer gate) builds trust. Every FAQ entry preempts a real sales objection.

## Language rules

- **User-facing copy is Quebec French.** Headlines, body copy, CTAs, FAQ — all written in French, never translated from English. Idioms, punctuation (« », $ CAD), and typography should feel native.
- **Code, comments, commits, specs, this file: English (or bilingual).**
- **Content keys (`siteContent.hero`, `siteContent.problem`) stay in English** so code reads uniformly.

## Do / Don't

**Do**
- Pull every user-facing string from `src/content/site.ts` — never hardcode copy in `.astro` / `.tsx` files.
- Use typed `TODO` sentinels (re-exported from `site.ts`) for content Tom hasn't supplied.
- Keep the audit CTA ($500–$1,500) as the default entry point on every section that has a CTA.
- Visually differentiate the Formation section so it doesn't dilute the B2B funnel.
- Mark the financial-advisor segment as "vertical en pause" explicitly.
- Keep bundle size honest: Astro-default everywhere, React islands only where interaction demands it.

**Don't**
- Don't use AI buzzwords ("transformation IA", "révolution", "boost", "disruption").
- Don't use gradients (spec §6).
- Don't use bright/cyan/electric blues. Deep navy or sophisticated slate-blue only.
- Don't hardcode copy in components — even a single word.
- Don't invent placeholder content. If the spec doesn't supply it, leave it as a `TODO` sentinel and add it to `CONTENT_TODO.md`.
- Don't install Google Analytics — it contradicts the Loi 25 / data-sovereignty positioning.
- Don't modify files in `docs/` — the two reference docs and the prompts playbook are read-only.

## References

- Spec: `docs/agence-ia-site-reference.md`
- Structural reference: `docs/merydian-site-reference.md`
- Build plan: `~/.claude/plans/you-are-joining-a-valiant-stroustrup.md`

## Tiebreaker rule

**If the spec (`agence-ia-site-reference.md`) and the structural reference (`merydian-site-reference.md`) conflict, the spec wins. Always.** The Merydian doc is a pattern reference, not a content or behavior reference.
