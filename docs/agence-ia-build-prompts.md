# Agence IA Website — Build Prompts

Sequential prompts for the full Claude Code build, designed for the GSD multi-agent / subagent orchestration pattern. Each phase prompt is self-contained so subagents can execute without parent context.

---

## How to use this file

1. **Open a fresh Claude Code session** at the repo root.
2. **Send Phase 0 first.** This sets up the orchestrator pattern and primes the parent session.
3. **For each subsequent phase:** copy the phase prompt below, paste it into the parent session. The parent will spawn a subagent, the subagent executes, returns a summary.
4. **Review the summary. If approved, send the next phase.** If not, send corrections and re-run the same phase.
5. **Run `/context` between phases.** If parent context exceeds 50%, run `/clear` and resend Phase 0 before continuing — the orchestrator pattern reloads cleanly.
6. **Never auto-accept multi-phase plans.** Each phase has a stop condition for a reason.

---

## Default decisions baked into these prompts (override if needed)

| Decision | Value | Override by |
|----------|-------|-------------|
| SpecKit init for scaffold | Spec-exempt (bootstrap) | Add SpecKit init step to Phase 1 if needed |
| Form handling | Calendly inline embed, lazy-loaded | Edit Phase 6 prompt to swap to Formspree or mailto |
| Analytics | Plausible (hosted) | Edit Phase 6 prompt to swap to Umami |
| Domain | Default `<user>.github.io/Website` | Add custom domain step to Phase 6 if domain registered |

---

## Phase 0 — Orchestration setup

**Send this first to a fresh Claude Code session.** It primes the parent as orchestrator and reads the plan + reference docs into context. Parent will then wait for Phase 1.

```
You are orchestrating the build of the Agence IA marketing website.

The build plan lives at: ~/.claude/plans/you-are-joining-a-valiant-stroustrup.md
The spec lives at: docs/agence-ia-site-reference.md
The structural reference lives at: docs/merydian-site-reference.md

If the spec and the structural reference conflict, the spec wins. Always.

## Your role

You are the orchestrator. You do NOT execute build phases yourself. For each phase:
1. Spawn a subagent via the Task tool with the exact prompt I provide
2. Wait for the subagent to return its summary
3. Present the summary to me unedited
4. STOP and wait for my explicit "approved, next phase" signal before spawning the next phase

Never proceed between phases without my explicit approval. Never combine phases. Never skip the stop conditions defined in each phase prompt.

## Phases to execute (in order)

1. Scaffold — folder structure, configs, CLAUDE.md routing, content layer skeleton
2. Design pass — palette + typography directions on Hero + Problem
3. Section build batch 1 — Hero, Problem, Approach, Framework
4. Section build batch 2 — BuiltFor, Services, Process, Outcomes
5. Section build batch 3 — Formation, Team, FAQ, FinalCta, Footer
6. Legal + polish + deploy prep

## Quality bar applied to every phase (enforce on every subagent)

- Quebec French for all user-facing copy. No AI buzzwords ("transformation IA", "révolution", "boost", "synergies", "écosystème")
- Anti-hype, operator-focused tone per spec §6
- Restrained palette, NO gradients (per spec §6)
- Lighthouse target: 95+ on Performance, Accessibility, Best Practices, SEO
- Every section component reads from src/content/site.ts. No hardcoded copy in components.
- Typed placeholders (TODO sentinels) for any content I haven't supplied yet — never invent

## What to do right now

1. Read the build plan file
2. Read docs/agence-ia-site-reference.md
3. Read docs/merydian-site-reference.md
4. Confirm in one short paragraph that you've understood the orchestration role and the project context
5. Then STOP and wait for me to send the Phase 1 prompt

Do not start Phase 1 on your own.
```

---

## Phase 1 — Scaffold

**Stop condition:** `npm run build` passes on empty placeholders, full folder tree exists, all routing files in place.

```
PHASE 1 — SCAFFOLD

Spawn a subagent via the Task tool with the following prompt. Wait for its summary, then present it to me unedited.

---

You are scaffolding the Agence IA marketing website. Read these three files first:
- ~/.claude/plans/you-are-joining-a-valiant-stroustrup.md (build plan)
- docs/agence-ia-site-reference.md (spec — authoritative)
- docs/merydian-site-reference.md (structural reference)

## Stack (locked, do not propose alternatives)

- Astro 4.x with TypeScript strict mode
- Tailwind CSS via @astrojs/tailwind
- React via @astrojs/react (for Framer Motion islands only)
- framer-motion
- GitHub Pages deployment via GitHub Actions

## Scope of this phase

Execute these 15 steps in order:

1. Initialize Astro project at the repo root with TypeScript strict mode
2. Add Tailwind integration via @astrojs/tailwind
3. Add React integration via @astrojs/react
4. Install framer-motion
5. Create the folder structure exactly as specified in the build plan §"Repo layout": docs/, specs/, src/pages/, src/layouts/, src/components/sections/, src/components/ui/, src/components/islands/, src/content/, src/styles/, public/brand/, public/images/
6. Create empty placeholder section component files (one per spec §4.x): Hero.astro, Problem.astro, Approach.astro, Framework.astro, BuiltFor.astro, Services.astro, Process.astro, Outcomes.astro, Formation.astro, Team.astro, Faq.astro, FinalCta.astro, Footer.astro. Each is a stub with a comment referencing its spec section number
7. Create src/content/types.ts with full TypeScript types for the content shape covering: Hero, Problem (with Stat[]), Approach (with Principle[]), Framework (with Verb[]), BuiltFor (with Segment[]), Services (with Tier[] and Retainer[]), Process (with Step[]), Outcomes (with Outcome[]), Formation, Team (with Founder[]), Faq (with Question[]), FinalCta. Use strict types — no `any`
8. Create src/content/site.ts with the typed siteContent object. Populate every field that exists in the spec verbatim. For unresolved content, use TODO sentinels for: Five Verbs (§4.4), Problem stats (§4.2), Tommy's last name + bio, Fabrice's last name + bio, audit booking URL, Discord URL, analytics site ID
9. Create src/styles/tokens.css with empty CSS custom property declarations as placeholders (--color-bg, --color-fg, --color-accent, --color-muted, --font-display, --font-body, --space-1 through --space-12, --radius-sm/md/lg, type scale). Comment that values land here after the design pass
10. Create the GitHub Actions deploy workflow at .github/workflows/deploy.yml for GitHub Pages static deployment from the main branch
11. Create root CLAUDE.md with: project purpose (1 paragraph), file map (where every important file lives), brand voice summary (3-4 sentences in English), language rules (Quebec French for user-facing, English for code), do/don't list (no AI buzzwords, no gradients, no hardcoded copy in components, never invent placeholder content), pointers to the two reference docs, and the spec-wins tiebreaker rule
12. Create root README.md with quick-start commands: npm install, npm run dev, npm run build, npm run preview, deploy notes
13. Create root CONTENT_TODO.md as a checklist mapping every TODO sentinel in site.ts to its content key path and the spec section it fulfills
14. Create per-folder README.md in: docs/, specs/, src/, src/components/sections/, src/components/ui/, src/components/islands/, src/content/. Each explains what lives in the folder and any folder-specific rules (component naming, language, asset format)
15. Initialize git, make the first commit with message "scaffold: initial project structure"

## Constraints

- Do NOT write any actual section copy beyond stubs — copy lives in src/content/site.ts
- Do NOT pick colors, fonts, or visual styling — that's the design pass
- Do NOT install Calendly, analytics, or any third-party widgets yet
- TypeScript strict mode: every type explicit, no `any`
- File naming: kebab-case for files, PascalCase for components

## Stop condition

After completing all 15 steps, run `npm run build` to verify the project compiles cleanly. If it fails, fix the failure before reporting. Then return a summary listing:
- Folder tree (use `tree -L 3 -I node_modules` or PowerShell equivalent on Windows)
- Confirmation that `npm run build` passes
- Any decisions you made that weren't explicit in the plan
- Anything unclear that needs my attention before Phase 2

Do not start Phase 2.
```

---

## Phase 2 — Design pass

**Stop condition:** Two design directions visible at `localhost:4321/design-pass`, both token files written, awaiting your A/B pick.

```
PHASE 2 — DESIGN PASS

Spawn a subagent via the Task tool with the following prompt. Wait for its summary, then present it to me unedited.

---

You are running the design pass for the Agence IA website. The scaffold from Phase 1 is complete. Read:
- docs/agence-ia-site-reference.md (read §6 Tone & §5 Visual patterns carefully)
- docs/merydian-site-reference.md (visual quality reference)
- src/content/site.ts (locked content)
- src/content/types.ts

## Your job

Use the ui-ux-pro-max skill to propose exactly TWO palette + typography directions for this website.

## Hard constraints (non-negotiable)

- Dominant color family: BLUE — specifically deep navy or sophisticated slate-blue. NOT bright, NOT cyan, NOT electric, NOT royal blue
- NO gradients (per spec §6)
- Restrained, enterprise-serious. Must read credibly to both Quebec SMB operators AND independent financial advisors
- One single accent color paired with the blue. The two directions vary on the accent
- Typography: one display/heading face + one body face. Both must support French diacritics fully (é, è, ê, à, ç, î, ô, û, etc.)
- No AI-cliché visual treatments: no glowing orbs, no neural-network motifs, no purple-to-blue gradients, no "futuristic" treatments

## The two directions

- **Direction A — warm contrast.** Pair the deep blue with a warm accent (amber, terracotta, warm coral, or warm off-white)
- **Direction B — cool monochrome.** Pair the deep blue with a brighter blue accent or a cool neutral (steel grey, ice blue, or pure off-white)

Both must feel restrained. Neither should feel "consumer SaaS."

## Deliverable

Build static mockups of TWO sections in BOTH directions:
1. Hero (§4.1)
2. Problem (§4.2) — including the stat block treatment

That's 4 mockups total: Hero-A, Hero-B, Problem-A, Problem-B. Use the locked content from src/content/site.ts. For TODO sentinel content (e.g. Problem stats), render clearly-marked placeholder text like "À compléter — stat #1" — do NOT invent stats.

Implement mockups as actual Astro components in a temporary src/components/sections/_design-pass/ subfolder. Create a temporary src/pages/design-pass.astro that renders all 4 mockups stacked with clear "DIRECTION A" / "DIRECTION B" headers between them.

## Token files

Create two token files alongside the existing scaffold:
- src/styles/tokens-direction-a.css
- src/styles/tokens-direction-b.css

Each contains the FULL set of CSS custom properties (color palette: --color-bg, --color-fg, --color-accent, --color-accent-soft, --color-muted, --color-border; type scale: --font-display, --font-body, --text-xs through --text-6xl; spacing scale; radii: --radius-sm, --radius-md, --radius-lg). After I pick a direction, the chosen file gets renamed to tokens.css.

## Stop condition

Return a summary with:
- Visual rationale for each direction (one paragraph each, explaining how it serves the spec's anti-hype enterprise-serious bar)
- Exact color hex values and font choices for each direction
- The path to view the design-pass preview (http://localhost:4321/design-pass)
- A reminder that I need to pick A or B before Phase 3 can proceed

Do NOT delete the temporary _design-pass/ folder or design-pass.astro. I will tell you to clean up in Phase 6.
```

---

## Phase 3 — Section build batch 1 (Hero, Problem, Approach, Framework)

**Before sending:** confirm to the orchestrator which direction (A or B) you picked. The orchestrator should ask if you haven't.

**Stop condition:** four sections built and rendering, primitives extracted, build passes.

```
PHASE 3 — SECTION BUILD BATCH 1

Confirm I've told you which design direction (A or B) I picked. If I haven't, ask before proceeding.

Once direction is locked, spawn a subagent with the following prompt:

---

You are building the first batch of section components for the Agence IA website. Read:
- docs/agence-ia-site-reference.md (focus on §4.1, §4.2, §4.3, §4.4)
- src/content/site.ts (content source — consume from here, never hardcode)
- src/content/types.ts
- src/styles/tokens.css (the chosen design direction is now active)
- src/components/sections/_design-pass/Hero.astro and Problem.astro (reference implementations from Phase 2 — match their visual quality)

## Scope

Build production-quality versions of:
1. src/components/sections/Hero.astro (§4.1)
2. src/components/sections/Problem.astro (§4.2)
3. src/components/sections/Approach.astro (§4.3 — the four non-negotiables)
4. src/components/sections/Framework.astro (§4.4 — the five verbs, with TODO placeholder rendering)

## Hard requirements

- Every string consumed from src/content/site.ts via typed imports. Zero hardcoded copy
- Quebec French throughout. Every string must read natively French, not translated
- Reusable primitives (Card, Eyebrow, StatBlock, CtaPair, SectionHeader) live in src/components/ui/ — extract them as you build, do not duplicate JSX between sections
- Two-CTA pattern (primary "Réserver un audit" + secondary contextual CTA) repeated near top of each major section per Merydian reference
- The Marquee in Problem section is a Framer Motion React island at src/components/islands/Marquee.tsx, hydrated via client:visible
- ScrollReveal for stat blocks and cards: another React island at src/components/islands/ScrollReveal.tsx using useInView from Framer Motion, hydrated client:visible
- Framework section (§4.4): renders TODO sentinel for the five verbs as a clearly-marked, visually-intentional placeholder block ("Cinq verbes — contenu propriétaire à compléter") — NOT broken-looking, NOT empty
- Fully responsive at 375 / 768 / 1280 / 1920
- Accessibility: semantic HTML, proper heading hierarchy (one h1 site-wide on Hero, h2 per section), aria-labels on interactive elements, visible focus states, sufficient color contrast (WCAG AA minimum)
- Zero hardcoded colors. Everything via CSS custom properties from tokens.css

## Stop condition

After all four sections are built:
1. Run `npm run build` — must pass
2. Run `npm run dev` and verify each section renders without console errors
3. Update CONTENT_TODO.md: mark off any TODO sentinels that now have rendering implementations (the placeholder for the five verbs is implemented; the verb content itself is still pending)
4. Return a summary listing: components created, primitives extracted into ui/, islands created, decisions made not explicit in spec, concerns about the next batch

Do not start batch 2.
```

---

## Phase 4 — Section build batch 2 (BuiltFor, Services, Process, Outcomes)

**Stop condition:** four more sections built, build passes, visual smoke check at all breakpoints.

```
PHASE 4 — SECTION BUILD BATCH 2

Spawn a subagent via the Task tool with the following prompt:

---

Continue from Phase 3. Same context, same standards. Read spec §4.5 through §4.8 and src/content/site.ts.

## Scope

1. src/components/sections/BuiltFor.astro (§4.5 — two ICP cards, FA segment marked "vertical en pause")
2. src/components/sections/Services.astro (§4.6 — three pricing tiers + retainers + "ce qu'on ne vend pas" block)
3. src/components/sections/Process.astro (§4.7 — three-step engagement arc with timeline visualization)
4. src/components/sections/Outcomes.astro (§4.8 — outcome cards)

## Section-specific requirements

**Services section is the most important commercial section on the site.** Tier cards must lead the eye to Tier 1 (audit, $500–$1,500) as the entry point. Tier 3 must NOT feel like the headline. Price bands shown clearly. The "Ce qu'on ne vend pas" block at the bottom of the section is small text but visually intentional — it's a trust signal, not an afterthought. Retainer tiers clearly gated with "Offerts après 30 jours d'usage en production" copy.

**Process section needs a timeline visualization for Step 1.** Match the Merydian "Project Scope" pattern referenced in build plan §"Repo layout". Pure CSS if possible, Framer Motion island only if motion is required.

**BuiltFor: explicitly mark the FA segment** with a small badge or text label reading "Vertical en pause — reprise après stage été 2026." Honesty here is a trust signal, not a weakness — make the label readable, not hidden.

**Outcomes section uses concrete benchmark framing**, not testimonials (per CONTENT_TODO — no case studies at launch). Frame outcomes as quantified deliverables ("~20 heures/semaine récupérées"), not as customer quotes.

## Same hard requirements as Phase 3

Content from src/content/site.ts only. Quebec French. Reusable primitives extracted into src/components/ui/. Responsive 375/768/1280/1920. Zero hardcoded colors. Lighthouse 95+ target maintained.

## Stop condition

`npm run build` passes. `npm run dev` renders all 8 sections so far without errors. Visual smoke check at all 4 breakpoints. Summary returned.

Do not start batch 3.
```

---

## Phase 5 — Section build batch 3 (Formation, Team, FAQ, FinalCta, Footer)

**Stop condition:** complete site visible end-to-end, Lighthouse 95+ on all four metrics.

```
PHASE 5 — SECTION BUILD BATCH 3

Spawn a subagent via the Task tool with the following prompt:

---

Final section batch. Read spec §4.9 through §4.13 and src/content/site.ts.

## Scope

1. src/components/sections/Formation.astro (§4.9 — B2C secondary on-ramp, VISUALLY DIFFERENTIATED from B2B sections)
2. src/components/sections/Team.astro (§4.10 — three founder cards with bios; Tommy and Fabrice bios as TODO sentinels rendered as clear placeholders)
3. src/components/sections/Faq.astro (§4.11 — accordion, objection-led)
4. src/components/sections/FinalCta.astro (§4.12)
5. src/components/sections/Footer.astro (§4.13)

## Critical: Formation section visual differentiation

Per spec §7 ("Key structural divergences from Merydian"), Formation MUST visually differentiate from the B2B sections so it doesn't dilute the B2B funnel. Choose ONE approach:
- Different background color (subtle shift to a darker or differently-toned band using existing tokens)
- Different section width or layout (e.g., centered narrow vs full-width cards used elsewhere)
- A clear visual divider above the section

Pick one and document the choice in a code comment. Formation must NOT look like a fourth pricing tier or a co-equal product. It is a secondary on-ramp into the B2C funnel.

## FAQ section

Implement as a React island at src/components/islands/FaqAccordion.tsx using Framer Motion's AnimatePresence for expand/collapse. Hydrate client:visible. All seven questions from spec §4.11 implemented from src/content/site.ts. Single question expanded at a time (accordion behavior, not multi-expand).

## Footer

Anchor nav repeat, brand mark, legal links (Mentions légales, Politique de confidentialité, Contact), Discord link (TODO sentinel for URL), founders' LinkedIn (TODO sentinels for URLs). Copyright line in French.

## Final composition step

After all five sections built, compose them all into src/pages/index.astro in spec §3 order:
Hero → Problem → Approach → Framework → BuiltFor → Services → Process → Outcomes → Formation → Team → Faq → FinalCta → Footer

The site should now be visually complete end-to-end.

## Stop condition

- `npm run build` passes
- `npm run preview` succeeds, then run Lighthouse audit. Report scores for Performance, Accessibility, Best Practices, SEO. Target 95+ on all four. If any is below 90, identify the cause and fix before reporting
- Visual review at 375/768/1280/1920 — no broken layouts, no overflowing text
- Anchor nav links scroll to correct sections
- Two-CTA pattern present near top of each major section
- Formation section visually differentiated as required
- Summary returned with Lighthouse scores and any issues flagged

Do not start Phase 6.
```

---

## Phase 6 — Legal + polish + deploy prep

**Stop condition:** Lighthouse 95+ confirmed, legal pages live, GitHub Actions deploy workflow validated, CONTENT_TODO.md current.

```
PHASE 6 — LEGAL + POLISH + DEPLOY PREP

Spawn a subagent via the Task tool with the following prompt:

---

Final phase before deployment. Read what you need for context.

## Scope

1. Create src/pages/mentions-legales.astro — Quebec-compliant mentions légales page in French. Include: business identity (Agence IA), contact email (TODO sentinel), governing law (Quebec/Canada), responsible publisher
2. Create src/pages/politique-confidentialite.astro — privacy policy in French. Must reference Loi 25 compliance. Must explain that the site uses Plausible analytics (privacy-respecting, no cookies, EU-hosted, no personal data collected). Include sections: data collected, purpose, retention, user rights under Loi 25, contact for data requests
3. Add meta + Open Graph + Twitter Card tags to BaseLayout.astro: title (FR), description (FR, ~155 chars), og:image (path /og-image.png — TODO sentinel for actual asset), canonical URL, lang="fr-CA"
4. Add Plausible analytics script to BaseLayout.astro. Use TODO sentinel for the actual data-domain attribute. Script tag with defer attribute, served from plausible.io, no cookies
5. Add Calendly inline embed for the audit booking flow. The "Réserver un audit" CTAs across the site link to a /reserver section anchor on the homepage that contains the Calendly embed. Use TODO sentinel for the Calendly URL. **Lazy-load the Calendly script** — load only when the user scrolls the booking section into view OR clicks a primary CTA (whichever happens first). This protects the Lighthouse Performance score
6. Clean up the temporary src/components/sections/_design-pass/ folder and src/pages/design-pass.astro from Phase 2
7. Verify CONTENT_TODO.md is current. Every remaining TODO sentinel in the codebase listed there with file path and spec section reference
8. Verify the GitHub Actions workflow at .github/workflows/deploy.yml deploys correctly to GitHub Pages on push to main. Do a dry-run check of the workflow YAML syntax

## Final quality pass

Read every user-facing string across the entire site and verify:
- Quebec French throughout, native-feeling, not translated
- Zero AI buzzwords ("transformation IA", "révolution", "boost", "synergies", "écosystème", "next-gen", "disruption")
- Concrete verbs only: livrer, automatiser, journaliser, déployer, auditer, intégrer
- Every CTA routes to the audit booking, not top-tier pricing
- Tier 1 (audit) is the visual entry point in the Services section
- Formation section visually differentiated from B2B sections
- FA segment marked "vertical en pause"
- "Ce qu'on ne vend pas" block present and readable

## Lighthouse final pass

Run `npm run build && npm run preview`, then full Lighthouse audit. All four scores MUST be 95+. If any is below, diagnose and fix. Common culprits:
- Unoptimized images (use Astro's built-in <Image>)
- Render-blocking scripts (Calendly should be lazy)
- Missing meta tags or alt attributes
- Color contrast failures on the chosen palette

## Stop condition

Return:
- Confirmation all four Lighthouse scores ≥ 95 (paste the actual numbers)
- The current CONTENT_TODO.md contents — these are the items I need to fill before truly going live
- Deploy instructions: confirm whether push-to-main auto-deploys via GitHub Actions, or what manual step is needed
- The default GitHub Pages URL the site will be reachable at after first deploy
- Any final concerns

Do not deploy to a custom domain. Default GitHub Pages URL is the first deployment target.
```

---

## After Phase 6 — what you still need to do manually

These are the items that no Claude Code subagent can do for you. Work through them on your own time:

- Provide the five verbs of your orchestrator framework — fill into `src/content/site.ts` at `framework.verbs`
- Write Tommy and Fabrice's last names + bios — fill into `src/content/site.ts` at `team.tommy` and `team.fabrice`
- Source or replace the Problem section stats — `problem.stats`
- Sign up for Plausible, get the site ID, replace the TODO in `BaseLayout.astro`
- Set up the Calendly event, get the URL, replace the TODO
- Create the Discord invite link, replace the TODO in `Formation.astro` and `Footer.astro`
- Create the OG image (1200x630, branded), drop into `public/og-image.png`
- When ready: register domain (e.g. `agence-ia.ca`), configure GitHub Pages custom domain, swap default URL

Once `CONTENT_TODO.md` is empty, you're truly launch-ready.

---

## Recovery: if a phase goes wrong

- **Subagent hallucinates content** → reject the summary, send a corrective re-prompt with explicit "do not invent X, use TODO sentinel instead"
- **Lighthouse score drops below 95** → re-spawn subagent for that phase with explicit instructions to diagnose and fix the failing metric
- **Parent context exceeds 50%** → run `/clear`, resend Phase 0 (orchestrator setup), continue from the next un-executed phase
- **Subagent goes off-scope** → reject, re-prompt with "stay strictly within Phase X scope as defined"
- **You need to redo a phase** → just resend the phase prompt. Subagent will overwrite. No git rollback needed if you committed at the end of each phase (recommended)
