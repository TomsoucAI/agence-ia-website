# Agence IA — Website Structure Reference

*(Adapted from the Merydian.ai single-page pattern, tailored to Agence IA's offer)*

---

## Purpose of this document

This document proposes a website structure for **Agence IA** — a Quebec-French dual-channel AI consulting practice. The structure is modeled on the Merydian.ai pattern (see `merydian-site-reference.md`) because that pattern fits the same buyer psychology: skeptical SMB operators evaluating a high-trust services purchase. This doc is meant to be ingested by Claude Code as build context **before** the design plan and the implementation. It describes what the site should contain and how it should be organized, not the final visual design or final copy.

---

## 1. Site overview

- **Domain:** TBD
- **Type:** Single-page marketing site (SPA), linear scroll narrative
- **Recommended stack:** Next.js (App Router) — matches Merydian's pattern, gives strong image optimization, and supports easy future expansion to bilingual routing
- **Primary language:** Quebec French. All headlines, body copy, CTAs, FAQ, and section eyebrows are written in QC French. English toggle is **not** in scope for v1
- **Navigation model:** Anchor-link nav. All nav items are scroll targets on the homepage. Real subpages reserved for legal (Mentions légales, Politique de confidentialité) and possibly a dedicated Formation page if the Discord funnel grows
- **Asset format:** AVIF/WebP for images, Next.js image optimization

---

## 2. Business context (what the site sells)

Agence IA is a **dual-channel AI consulting practice** running out of Quebec:

- **Channel A — Agence IA (B2B, primary):** Audit → implementation → retainer for Quebec SMBs and (post-internship) independent financial advisors. Fixed-band pricing, French-language delivery, locally-hostable systems for sensitive data.
- **Channel B — Formation IA (B2C, secondary):** Discord community + paid coaching cohorts. Acts as a lead-gen funnel into B2B and short-term liquidity. Not a product-end-in-itself, so it lives lower in the page hierarchy.

The site sells **services** (audit, implementation, retainer), not software. The differentiator is *how* systems are built — the four non-negotiables (permission-aware, locally hostable, resilient, observable) — and *who* they are built for (Quebec SMBs in their language).

---

## 3. Information architecture

### Top navigation (anchor links, French labels)
1. Approche *(Our Principles — the four non-negotiables)*
2. Services *(Three-tier catalog)*
3. Processus *(How It Works — audit-first arc)*
4. Formation *(Discord / B2C funnel — secondary)*
5. FAQ
6. **Réserver un audit** *(primary CTA button)*

### Footer navigation
- Brand mark + section repeat
- Legal: Contact, Mentions légales, Politique de confidentialité
- Optional: Discord link, LinkedIn (founders), email

### Section order (top to bottom)
1. Hero
2. The Problem *(wedge — what's broken in the current Quebec AI consulting market)*
3. Our Approach *(the four non-negotiables — the moat)*
4. What We Build *(the five-verb framework)*
5. Built For *(Segment A + Segment B)*
6. Services *(three-tier catalog + retainers)*
7. Process *(audit-first arc)*
8. Outcomes *(concrete results)*
9. Formation / Discord *(B2C secondary entry)*
10. Team *(three founders)*
11. FAQ
12. Final CTA
13. Footer

---

## 4. Section-by-section breakdown

### 4.1 Hero
- **Eyebrow:** "Agence IA québécoise"
- **Headline candidate (FR):** "Agents IA déployés au Québec. Sur votre infrastructure. Dans vos outils. Dans votre langue."
- **Subhead:** Positions the practice as a French-first, locally-hostable AI agency for SMB operators. Calls out the audit-first engagement model so first-time visitors don't see a $5K+ price as the entry point.
- **CTAs:** Two — primary "Réserver un audit" ($500–$1,500, 1 semaine), secondary "Voir nos services"

### 4.2 The Problem — the wedge
*Mirrors the Merydian "Powerful to deploy. Dangerous to deploy wrong." section, but the wedge is different. Merydian's wedge is malicious skills. Agence IA's wedge is the gap between AI hype and what actually ships in Quebec SMBs.*

**Headline candidate (FR):** "L'IA promise. L'IA livrée. Deux choses différentes."

Four problem cards (suggested, to be refined):
1. **Projets qui ne livrent jamais** — most "AI transformations" stall at the pilot. Stat or anecdote anchor needed.
2. **Données qui sortent du Québec** — cloud-first systems route sensitive data through US infrastructure. AMF, Loi 25, and regulated sectors don't tolerate this.
3. **Outils anglophones, équipes francophones** — most consultancies build in English, then translate. Voice and cultural fit are lost.
4. **Systèmes fragiles** — wrappers around an OpenAI API call that break the moment the model breaks, hallucinates, or rate-limits.

**Visual pattern (from Merydian):** Use stat blocks and possibly a horizontal scroll/marquee with concrete numbers (% of Quebec SMBs not using AI, average cost of a manual workflow per week, etc.) — fill in once Tom validates the data points.

### 4.3 Our Approach — the four non-negotiables (the moat)
*This is the Agence IA equivalent of Merydian's security framing, but rooted in Tom's actual operating principles. This is the most important section on the site. It should feel concrete and technical without being jargon-heavy.*

**Headline candidate (FR):** "Quatre principes. Aucun compromis."

Four principle cards:
1. **Permission-aware** — Chaque agent a des accès lecture seule ou lecture/écriture par intégration. Toute écriture exige une approbation jusqu'à ce que la confiance par outil soit gagnée.
2. **Locally hostable** — La pile complète tourne sur le matériel client sans appel cloud lorsque les données sont sensibles. LLM local par défaut pour les secteurs régulés.
3. **Resilient without LLMs** — Les workflows critiques dégradent vers une logique déterministe si le modèle est indisponible ou se trompe. Nous ne sommes pas un wrapper d'API.
4. **Observable** — Chaque action sur des données réelles est journalisée. Sans exception.

### 4.4 What We Build — the five-verb framework
*Placeholder section. The brief references "a proprietary five-verb orchestrator framework" but does not list the verbs. Claude Code: do not invent the verbs. Leave a structured placeholder for Tom to fill in.*

**Headline candidate (FR):** "Notre framework : cinq verbes pour orchestrer n'importe quel système IA."

Suggested layout: Five cards or a horizontal flow diagram, one per verb. Each verb gets a short plain-French explanation, a concrete example of where it shows up in a real client system, and (optionally) a small icon. **Verbs to be supplied by Tom before build.**

### 4.5 Built For — ICP segmentation
*Mirrors Merydian's "Built for operators. Not hobbyists." Two cards instead of four because Tom has two clearly defined ICP segments.*

**Headline candidate (FR):** "Pour qui on construit."

Two audience cards:
1. **PME québécoises (Segment A — actif)** — Opérateurs de petites entreprises avec des tâches administratives répétitives, des suivis manqués, et un désir de "zéro changement dans leur routine". Sceptiques face au hype. Outils typiques : Monday, Pipedrive, Gmail.
2. **Conseillers financiers indépendants (Segment B — vertical en pause)** — Pratiques solo sous contraintes AMF / Sun Life. Comparent le coût d'une réceptionniste à $50k/an à un agent IA 24/7 en mode "draft-and-approve". *Reprise active après le stage d'été 2026.*

### 4.6 Services — the three-tier catalog
*Direct adaptation of Merydian's pricing section, but with three tiers + a retainer structure. Tom's catalog is more granular than Merydian's — multiple offers per tier — so each tier card needs a sub-list of concrete offers.*

**Headline candidate (FR):** "Trois niveaux. Bandes de prix fixes. Aucun « contactez-nous » caché."

| Tier | Name | Price | Duration |
|------|------|-------|----------|
| 1 | Audit & Quick Wins | $500 – $1,500 | 1 semaine |
| 2 | Implémentations ciblées | $3,000 – $5,000 | 2–3 semaines |
| 3 | Systèmes end-to-end | $5,000 – $10,000 | 4–6 semaines |

**Tier 1 includes:**
- Audit de tâches répétitives + plan d'automatisation (atelier 2–3h, rapport 3 pages, 3 candidats priorisés avec ROI + effort)
- Kit de prompts + templates (5–10 prompts production-grade pour une fonction définie)

**Tier 2 includes:**
- Triage email/DM + draft-and-approve (classifier local + digest matinal avec réponses pré-rédigées)
- Pipeline de génération de contenu (générateur voice-aware entraîné sur la voix historique du client)
- Chatbot de qualification de leads (formulaire/DM → qualification structurée → entrée CRM)

**Tier 3 includes:**
- Assistant administratif PME (pipeline cinq verbes complet, ~20h/semaine remplacées, déploiement local + formation + 2 semaines hypercare)
- Pré-remplissage documentaire + flagging de conformité (pré-remplit champs récurrents, flag des champs nécessitant révision humaine, audit log inclus)
- Automatisation de planification avec moteur de politiques (entrée → policy check → confirmation draft, gradue vers auto-book après 30 jours de confiance)

**Retainers (offered only after 30+ days of production use):**
- **Lite — $500/mois** : monitoring + tuning mensuel, 1h/mois
- **Standard — $1,000/mois** : + une nouvelle feature par trimestre + appel d'optimisation mensuel, 3h/mois
- **Premium — $2,000/mois** : + on-call + deux nouvelles features par trimestre, 6h/mois

**What we explicitly don't sell** *(small text block at the bottom of the section, builds trust by setting boundaries):* Custom LLM fine-tuning, multi-tenant SaaS, full-company RAG, voice agents, automatisation financière à conformité lourde (jusqu'à Q3 2026).

### 4.7 Process — the engagement arc
*Mirrors Merydian's three-step "How It Works" but uses Tom's actual audit-first arc. The 30-day usage gate before retainer is a unique trust signal — call it out visually.*

**Headline candidate (FR):** "Trois étapes. Aucun engagement long terme tant qu'on n'a pas livré."

**Step 1 — Audit Tier 1** *(1 semaine, $500–$1,500)*
On cartographie vos workflows. On identifie 3 candidats d'automatisation prioritaires avec ROI + effort. Vous repartez avec un plan, qu'on aille plus loin ou non.

**Step 2 — Implémentation Tier 2 ou 3** *(2–6 semaines, $3,000–$10,000)*
On livre une automatisation concrète en production. Local ou cloud selon la sensibilité de vos données. Formation de votre équipe incluse.

**Step 3 — Rétention** *(à partir de $500/mois, gated sur 30 jours d'usage réel)*
On ne vous propose un retainer qu'**après** 30 jours d'utilisation en production. Si le système ne tient pas la route, on ne facture pas la suite.

**Visual pattern:** Use the same kind of timeline visualization Merydian uses for "Project Scope" — concrete day/week markers per step.

### 4.8 Outcomes — concrete results
*Mirrors Merydian's outcomes section. At launch, Tom won't have logos or named case studies — frame outcomes as benchmarks, not testimonials.*

**Headline candidate (FR):** "Ce que nos systèmes font, concrètement."

Three to four outcome cards (refine with Tom):
1. **~20 heures/semaine récupérées** — sur les tâches admin répétitives (Tier 3 SMB admin assistant)
2. **Réponses en français, dans votre voix** — pas de traduction Google. Le système apprend votre ton.
3. **Données qui restent au Québec** — pile locale par défaut pour les secteurs régulés
4. **Zéro hallucination en production** — fallback déterministe quand le modèle se trompe

### 4.9 Formation / Discord — secondary B2C entry
*This is the structural divergence from Merydian. Position Formation as a clear secondary on-ramp, not a competing product. Visual treatment should feel different from the B2B sections — possibly a single horizontal band with a different background color — so it reads as "different door, same building."*

**Headline candidate (FR):** "Pas prêt pour un audit ? Rejoins la communauté."

Short copy block:
- Free Discord tier — accès aux discussions, ressources de base
- Cohortes payantes — formation hebdomadaire en groupe, contenu enregistré
- Animée par Tommy (contenu/communauté), Fabrice (curriculum), Tom (sessions IA)

**Single CTA:** "Rejoindre le Discord" (separate from the main "Réserver un audit" funnel).

### 4.10 Team — three founders
*Mirrors Merydian's team section but with bios. Merydian had no bios, which was a credibility gap. Tom's team has clear, distinct roles — use them.*

Three founder cards with photos + role + 1–2 sentence bio:
- **Tom Soucy — Produit, framework, livraison technique.** Étudiant en informatique et gestion (Université Laval), stagiaire au Lab-Usine sur un système RAG industriel.
- **Tommy [nom] — B2C, contenu, communauté, marque.**
- **Fabrice [nom] — B2B, ventes, réseau de clients web, curriculum de formation.**

*Bios for Tommy and Fabrice to be supplied. LinkedIn links optional but recommended.*

### 4.11 FAQ — objection handling
*Mirrors Merydian's FAQ structure: every entry is a sales objection, not a feature question.*

**Headline candidate (FR):** "Tout ce que vous devez savoir avant de commencer."

Suggested questions (refine with Tom):
1. **Pourquoi pas juste utiliser ChatGPT directement ?** — Frame ChatGPT as a conversation tool. Agence IA builds *systems* that act on your data with permissions, fallbacks, and logs.
2. **Comment je sais que mes données restent privées ?** — Pile locale par défaut pour les données sensibles. Aucun appel cloud sans validation explicite. Audit log de chaque action.
3. **Combien de temps avant que ça fonctionne ?** — Tier 1 audit en 1 semaine. Premier système en production en 2–6 semaines selon le tier.
4. **Et si l'IA se trompe ?** — Tous les workflows critiques dégradent vers une logique déterministe. Vous n'êtes jamais dépendant de la fiabilité d'un modèle.
5. **Pourquoi un audit payant à $500–$1,500 avant l'implémentation ?** — Parce qu'on ne vend pas ce qu'on ne peut pas livrer. L'audit prouve le fit, dérisque le scope, et vous donne un plan que vous pouvez exécuter avec ou sans nous.
6. **Vous travaillez avec quels secteurs ?** — PME générales du Québec aujourd'hui. Conseillers financiers indépendants à partir de l'automne 2026 (vertical en pause active jusqu'au stage d'été).
7. **C'est quoi un retainer et c'est obligatoire ?** — Non. On ne propose un retainer qu'après 30 jours d'usage réel en production. Si vous n'en voulez pas, vous gardez le système, la doc, et vous opérez de façon autonome.

### 4.12 Final CTA
**Headline candidate (FR):** "L'audit prend une semaine et coûte moins qu'un mois de SaaS qu'on n'utilise pas."

**Subhead:** Re-anchor on the audit-first model. Low risk, concrete deliverable, no obligation to continue.

**CTA:** "Réserver un audit"

### 4.13 Footer
- Brand: AGENCE IA *(or final brand name)*
- Repeat anchor nav
- Legal: Contact, Mentions légales, Politique de confidentialité
- Discord link, LinkedIn (founders)

---

## 5. Visual & UX patterns inherited from Merydian

Keep these patterns from the Merydian build because they fit the same buyer psychology:
- **Repeating animated content blocks** (marquee/scrolling stat strips) for the Problem section
- **Stat blocks anchored by concrete numbers** in every major section
- **Two-CTA pattern** (primary "Réserver un audit" + secondary "Voir nos services" / "En savoir plus") repeated near the top of each major section, not just hero/footer
- **Card-based layouts** for audience segmentation, principles, services, outcomes, team
- **Section eyebrows** — small label above each section headline (Approche / Services / Processus / etc.)
- **Single accent color + restrained palette** — Merydian's design feels enterprise-serious because it doesn't lean on AI-cliché gradients. Match that discipline.

---

## 6. Tone & messaging strategy

Aligns naturally with Merydian's anti-hype tone, with QC-specific layers added:
- **Quebec French throughout.** No translated-English copy. Headlines should *feel* written in French, not converted to it.
- **Anti-hype, operator-focused.** Avoid "transformation IA", "révolution", "boost". Use concrete verbs: livrer, automatiser, journaliser, déployer.
- **Concrete over abstract.** Time savings in hours/week. Prices in dollar bands. Durations in weeks. Specific tools named (Monday, Pipedrive, Gmail, HubSpot, GoHighLevel).
- **Boundary-setting builds trust.** The "Ce qu'on ne vend pas" block in the Services section is a feature, not a weakness. Same logic as the 30-day retainer gate.
- **Objection-led FAQ.** Every FAQ entry preempts a sales objection.

---

## 7. Key structural divergences from the Merydian pattern

These are the parts where the proposed structure deliberately breaks from Merydian:

1. **Dual-channel architecture** — Merydian sells one thing. Agence IA has a clear primary (B2B Agence) and a clear secondary (B2C Formation). The Formation section needs visual differentiation so it doesn't dilute the B2B funnel.
2. **Audit-first entry tier** — Merydian's lowest tier is $4K. Agence IA's lowest is $500. The hero CTA, final CTA, and pricing section must all anchor on the audit as the default entry, not on the high-tier price.
3. **Four principles, not security-only** — Merydian leans hard on security as the wedge. Agence IA has four equally-weighted principles (permission, local, resilient, observable). Don't compress them into one section.
4. **Team bios, not just photos** — Merydian's no-bio team section was a credibility gap. Agence IA should not repeat the gap.
5. **Two ICP segments, not four** — Cleaner segmentation, but one of the two is explicitly paused. Mark the FA segment as "vertical en pause" — honesty here is a trust signal.
6. **Five-verb framework gets its own section** — Merydian has no equivalent. This is Agence IA's proprietary IP and deserves dedicated real estate above the services section.

---

## 8. Content gaps to acknowledge at launch

Same gaps as Merydian — call them out so Claude Code doesn't try to invent content:
- No case studies, named customers, or logos at launch *(empty is fine per Tom's brief, but leave a structured placeholder for future case study cards)*
- No testimonials yet
- The five verbs in section 4.4 need to be supplied
- Bios for Tommy and Fabrice need to be supplied
- Stat numbers in the Problem section (4.2) need to be sourced or replaced with anecdote-based framing
- Final brand name and domain TBD

---

## 9. Technical notes

- **Framework:** Next.js (App Router), matching Merydian
- **Styling:** Tailwind CSS recommended (fast iteration with Claude Code, easy to enforce a restrained palette)
- **Image optimization:** Next.js `<Image>` with AVIF/WebP
- **Form handling:** A form is needed for the audit booking — Calendly embed or simple form-to-email is sufficient at launch. Avoid heavy CRM integration in v1.
- **Analytics:** Plausible or Umami (privacy-respecting, aligns with the "Loi 25 / data sovereignty" positioning). Avoid Google Analytics — would contradict the messaging.
- **i18n:** Not in scope for v1. Structure the codebase so a future EN locale can be added without refactor.

---

## 10. One-line summary for downstream agents

> Agence IA's site is a single-page, French-first, Next.js marketing site selling audit-first AI consulting services to Quebec SMBs, structured as a linear scroll narrative (Problem → Approach → Framework → Audience → Services → Process → Outcomes → Formation → Team → FAQ → CTA), with anti-hype operator-focused tone, three pricing tiers from $500–$10,000 plus retainers gated on 30 days of usage, and a dual-channel architecture where the B2C Discord/Formation funnel sits as a clear secondary on-ramp below the primary B2B agency offer.
