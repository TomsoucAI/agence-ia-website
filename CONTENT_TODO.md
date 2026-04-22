# Content TODO

Live checklist of unresolved content values. Every item corresponds to a `TODO` sentinel in `src/content/site.ts`. Check an item off only after the sentinel has been replaced with a real value (and the `TODO` comment removed).

Rule: do not invent content. If it isn't in the spec, it stays as a `TODO` sentinel until Tom supplies it.

---

## Site-level meta

- [ ] **Final domain** — `siteContent.meta.domain` (also update `site` in `astro.config.mjs`)
  - Spec: §1 "Domain: TBD"
- [ ] **Audit booking URL** (Calendly or form endpoint) — `siteContent.meta.bookingUrl`
  - Spec: §9 "Calendly embed or simple form-to-email is sufficient at launch"
  - Build plan open item #2
- [ ] **Analytics site ID** (Plausible or Umami) — `siteContent.meta.analyticsSiteId`
  - Spec: §9 "Plausible or Umami (privacy-respecting)"
  - Build plan open item #3

## §4.2 Problem — stats

- [ ] **Problem section stat blocks** — `siteContent.problem.stats`
  - Spec: §4.2 "Use stat blocks and possibly a horizontal scroll/marquee with concrete numbers (% of Quebec SMBs not using AI, average cost of a manual workflow per week, etc.) — fill in once Tom validates the data points"
  - Spec §8: "Stat numbers in the Problem section (4.2) need to be sourced or replaced with anecdote-based framing"
  - **Placeholder UI implemented** (Phase 3): the Problem marquee renders four dashed-amber "À compléter — …" pills via `Marquee.tsx`. When `problem.stats` resolves to a `Stat[]`, real values render automatically with no refactor. Still pending: the actual stat values.

## §4.4 Framework — the five verbs

- [ ] **Five verbs** — `siteContent.framework.verbs`
  - Spec: §4.4 "Verbs to be supplied by Tom before build"
  - Each verb needs: verb name, short plain-French explanation, concrete example of where it shows up in a real client system
  - Spec §8: "The five verbs in section 4.4 need to be supplied"
  - **Placeholder UI implemented** (Phase 3): the Framework section renders a visually-intentional `Placeholder` frame with five numbered slots ("Verbe 1" … "Verbe 5") and the tag "Cinq verbes — contenu propriétaire à compléter". The resolved-state five-card layout is already wired; supplying `framework.verbs` in `site.ts` flips the render with no refactor. Still pending: the verbs themselves.

## §4.9 Formation — Discord

- [ ] **Discord invite URL** — `siteContent.formation.discordUrl` and `siteContent.formation.cta.href`
  - Also propagate to `siteContent.footer.discordUrl`
  - Spec: §4.9

## §4.10 Team — bios

- [ ] **Tommy — last name** — `siteContent.team.founders[1].lastName`
  - Spec: §4.10 "Tommy [nom]"
- [ ] **Tommy — bio** — `siteContent.team.founders[1].bio`
  - Spec: §4.10 "Bios for Tommy and Fabrice to be supplied"
- [ ] **Fabrice — last name** — `siteContent.team.founders[2].lastName`
  - Spec: §4.10 "Fabrice [nom]"
- [ ] **Fabrice — bio** — `siteContent.team.founders[2].bio`
  - Spec: §4.10 "Bios for Tommy and Fabrice to be supplied"

## §4.13 Footer

- [ ] **Footer Discord URL** — `siteContent.footer.discordUrl` (shared with formation)
  - Spec: §4.13

---

## Also pending but not TODO sentinels (tracked separately)

These are not `TODO` symbols in `site.ts` but still need to be resolved before launch. They are listed here so they don't slip between the cracks.

- Founder photos — `public/images/team/*` (Tom, Tommy, Fabrice)
- LinkedIn URLs for each founder (optional but recommended per spec §4.10)
- OG image — `public/images/og-default.*`
- Logo files — `public/brand/*`
- Legal copy for `src/pages/mentions-legales.astro` and `src/pages/politique-confidentialite.astro`
- Design tokens — `src/styles/tokens.css` (populated after the design pass)
- Palette + typography choice (2 directions proposed during design pass; Tom picks one)
