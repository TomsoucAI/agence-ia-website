# Content TODO

Live checklist of unresolved content values. Every item corresponds to a `TODO` sentinel in `src/content/site.ts`. Check an item off only after the sentinel has been replaced with a real value (and the matching `// TODO —` comment removed from `site.ts`).

Rule: do not invent content. If it isn't in the spec, it stays as a `TODO` sentinel until Tom supplies it.

Last refresh: Phase 6 (polish + deploy prep). Every `TODO` sentinel currently in `site.ts` is represented below.

---

## Site-level meta — `siteContent.meta`

- [ ] **Final domain** — `siteContent.meta.domain` (file: `src/content/site.ts:30`)
  - Spec: §1 "Domain: TBD"
  - Also update `site` in `astro.config.mjs` once set so canonical + OG URLs resolve to absolute.

- [ ] **Audit booking URL** (Calendly or form endpoint) — `siteContent.meta.bookingUrl` (file: `src/content/site.ts:33`)
  - Spec: §9 "Calendly embed or simple form-to-email is sufficient at launch"
  - When set, `FinalCta.astro` automatically routes its primary button to this URL. Prefer `calendlyUrl` below if you want the in-page embed flow.

- [ ] **Analytics site ID** (legacy slot, kept for compat) — `siteContent.meta.analyticsSiteId` (file: `src/content/site.ts:35`)
  - Spec: §9 "Plausible or Umami (privacy-respecting)"
  - Superseded at render by `plausibleDomain` (see below). Remove once Plausible is live and confirmed.

- [ ] **Plausible domain** — `siteContent.meta.plausibleDomain` (file: `src/content/site.ts:58`)
  - Spec: §9 privacy-respecting analytics.
  - When set to e.g. `"agence-ia.ca"`, `BaseLayout.astro` renders the Plausible `<script defer data-domain=... />` tag. Until then the script is NOT injected.

- [ ] **Calendly URL** (inline embed for #reserver) — `siteContent.meta.calendlyUrl` (file: `src/content/site.ts:62`)
  - Spec: §9 "Calendly embed or simple form-to-email is sufficient at launch"
  - When set to e.g. `"https://calendly.com/agence-ia/audit"`, the `#reserver` section mounts the Calendly inline widget (lazy-loaded on intent). Until then, `#reserver` renders a Placeholder pointing users to contact options.

## §4.2 Problem — stats

- [ ] **Problem section stat blocks** — `siteContent.problem.stats` (file: `src/content/site.ts:121`)
  - Spec: §4.2 "Use stat blocks and possibly a horizontal scroll/marquee with concrete numbers (% of Quebec SMBs not using AI, average cost of a manual workflow per week, etc.) — fill in once Tom validates the data points"
  - Spec §8: "Stat numbers in the Problem section (4.2) need to be sourced or replaced with anecdote-based framing"
  - UI fallback in place: the Problem marquee renders four dashed-amber "À compléter — …" pills via `Marquee.tsx`. When this resolves to a `Stat[]`, real values render automatically.

## §4.4 Framework — the five verbs

- [ ] **Five verbs** — `siteContent.framework.verbs` (file: `src/content/site.ts:194`)
  - Spec: §4.4 "Verbs to be supplied by Tom before build"
  - Each verb needs: `verb` name, `description` (short plain-French), `example` (concrete client-system usage).
  - Spec §8: "The five verbs in section 4.4 need to be supplied"
  - UI fallback in place: the Framework section renders a `Placeholder` frame with five numbered slots. Supplying `framework.verbs` flips to the resolved five-card layout with no refactor.

## §4.9 Formation — Discord

- [ ] **Discord invite URL (formation)** — `siteContent.formation.discordUrl` (file: `src/content/site.ts:477`)
  - Spec: §4.9
  - Also update `siteContent.formation.cta.href` (currently points to `#formation` anchor as a safe fallback).

## §4.10 Team — bios

- [ ] **Tommy — last name** — `siteContent.team.founders[1].lastName` (file: `src/content/site.ts:501`)
  - Spec: §4.10 "Tommy [nom]"
- [ ] **Tommy — bio** — `siteContent.team.founders[1].bio` (file: `src/content/site.ts:504`)
  - Spec: §4.10 "Bios for Tommy and Fabrice to be supplied"
- [ ] **Fabrice — last name** — `siteContent.team.founders[2].lastName` (file: `src/content/site.ts:512`)
  - Spec: §4.10 "Fabrice [nom]"
- [ ] **Fabrice — bio** — `siteContent.team.founders[2].bio` (file: `src/content/site.ts:515`)
  - Spec: §4.10 "Bios for Tommy and Fabrice to be supplied"

## §4.13 Footer — shared Discord

- [ ] **Footer Discord URL** — `siteContent.footer.discordUrl` (file: `src/content/site.ts:612`)
  - Spec: §4.13
  - Should mirror `formation.discordUrl` — keep the two in sync when resolving.

---

## Also pending but NOT `TODO` sentinels (tracked separately)

These values live in the codebase as `null`, empty arrays, or missing assets. They don't raise type errors but still need resolution before launch.

- **Contact email** — `siteContent.footer.contactEmail` (currently `null`). When set, footer Contact link becomes a `mailto:`, both legal pages substitute it into their "Coordonnées" / "Personne responsable" sections, and the Reserver fallback message cites it directly.
- **LinkedIn URLs for each founder** — `siteContent.team.founders[i].linkedinUrl` (all `null` today). Optional but recommended per spec §4.10.
- **Founder photos** — `public/images/team/{tom,tommy,fabrice}.*`. Each `founders[i].photoPath` is `null`; AvatarTile falls back to a monogram tile until a path is set.
- **OG image asset** — `public/og-image.png` (referenced by `siteContent.meta.ogImage`; the meta tag already points at the path so only the asset file is missing).
- **`site` + `base` in `astro.config.mjs`** — currently set to the GitHub Pages default (`site: 'https://tomsoucy1.github.io'`, `base: '/Website'`) so the initial deploy resolves canonical + OG URLs. When the real domain is wired up, swap `site` to `https://agence-ia.ca` (or the final domain) and **remove `base`** (custom domain serves from root, not a subpath).
