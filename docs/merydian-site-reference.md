# Merydian.ai — Website Structure & Build Reference

## Purpose of this document

This is a reverse-engineered reference of the current `merydian.ai` website, intended to give Claude Code full context on what exists today before a redesign plan is created. It describes **what the site is, how it's structured, and what it communicates** — not what it should become. Use this as input material; design decisions come in a later phase.

---

## 1. Site overview

- **Domain:** `merydian.ai`
- **Type:** Single-page marketing site (SPA)
- **Stack indicators:** Next.js (image URLs follow `/_next/image?url=...&w=...&q=...` pattern, indicating Next.js Image Optimization)
- **Asset hosting:** Local `/brand/` and `/templates/merydian/` paths — likely a templated Next.js starter that has been customized
- **Navigation model:** Anchor-link navigation. All "pages" in the top nav are scroll targets on the homepage, not separate routes
- **Language:** English only
- **Live subpages:** Only Contact, Terms of Service, and Privacy Policy appear in the footer as actual routes (not validated as accessible)

---

## 2. Business context (what the site sells)

Merydian is a **deployment consultancy** that installs and secures **OpenClaw** — an open-source agentic AI assistant — for small-to-mid businesses as enterprise infrastructure. The product being sold is **services** (architecture, deployment, security hardening, training), not software. OpenClaw itself is free and open source; Merydian's pitch is that deploying it safely is the hard part.

**Threat-model wedge:** OpenClaw's public skill registry (ClawHub) has had documented malicious skills — data exfiltration, credential theft, prompt injection, supply-chain attacks. Cisco, Microsoft, CrowdStrike, and CyberArk have all published warnings. Merydian positions itself as the trusted hands.

**Business model:** One-time deployment fee, no subscription, three pricing tiers.

---

## 3. Information architecture

### Top navigation (anchor links)
1. Security
2. Process
3. Pricing
4. FAQ
5. Book Discovery Call (CTA button)

### Footer navigation
- Brand mark + section repeat: Security, Process, Pricing, Team, FAQ, Book a Call
- Legal/utility: Contact, Terms of Service, Privacy Policy

### Section order (top to bottom)
1. Hero
2. The Problem
3. Built For (audience segmentation)
4. How It Works (process)
5. Outcomes
6. Pricing
7. Team
8. FAQ
9. Final CTA
10. Footer

---

## 4. Section-by-section breakdown

### 4.1 Hero
- **Eyebrow:** "Enterprise AI Infrastructure"
- **Headline:** "Secure AI Infrastructure. Deployed in Your Environment. Owned by You."
- **Subhead:** Positions OpenClaw as enterprise-grade containerized AI ops, claims 10–20 hours/week saved per team without data exposure
- **CTAs:** Two — "Book Discovery Call" (primary), "Learn More" (secondary)

### 4.2 The Problem ("Powerful to deploy. Dangerous to deploy wrong.")
Threat-model section. Establishes the security wedge. Visual elements:
- Stat block: **"341 malicious skills on ClawHub"** with attribution to Microsoft/CrowdStrike/CyberArk
- Three threat categories with counts:
  - **Data Extraction** — Credential theft (47 incidents)
  - **Code Injection** — Remote execution (128 cases)
  - **Supply Chain** — Compromised dependencies (166 packages)
- Repeating numeric badges: "Compromised packages 166 / Malicious dependencies 89 / Vulnerable imports 42" (rendered four times, likely a marquee or scrolling element in the live site)
- Closing pitch: "OpenClaw is the most powerful AI agent on the planet. 247,000+ GitHub stars. 900+ contributors... Almost none of them can deploy it safely."

### 4.3 Built For ("Built for operators. Not hobbyists.")
Four audience cards:
1. **Online Businesses** — teams losing 10–20 hrs/week to AI-automatable tasks
2. **Service Businesses** — agencies, consultancies, manual workflow overload
3. **Teams of 4–50+** — multi-department deployment
4. **Security-Conscious Organizations** — local containerized deployment

### 4.4 How It Works ("Three steps. Fully deployed AI operations.")
Numbered three-step process:

**Step 1 — Discovery Call & Scope**
- Maps departments, workflows, pain points
- Confirms tier, locks price, sets timeline
- Visual: "Project Scope" timeline showing Week 1 → Day 1 → Day 3 → Day 5 (Locked)

**Step 2 — Architecture & Deployment**
- Designs AI ops layer (agent configs, security policies, dashboard)
- Deploys with Docker containerization and security hardening

**Step 3 — Handoff & Training**
- Documentation, walkthrough, 14–60 days of post-deployment support
- Visual: A repeating mock chat conversation showing an AI assistant answering "How do I add a new team member?" — the conversation is rendered four times (likely the same scrolling/animated element pattern used in the Problem section)
- Closing tagline: "Ask your AI assistant"

### 4.5 Outcomes ("Real outcomes from secure AI operations.")
Three benefit cards:
1. **10 Hours Saved Per Week** — per team, per department
2. **24/7 Autonomous Operations** — agents work overnight
3. **50+ Integrations** — messaging, email, calendars, CRMs

### 4.6 Pricing ("One-time deployment. No subscriptions.")
Three-tier pricing table:

| Tier | Name | Price | Use Case |
|------|------|-------|----------|
| 1 | Single Department | $4,000 – $7,000 | One department needing immediate automation |
| 2 | Multi-Department | $10,000 – $15,000 | Multiple teams with cross-department orchestration |
| 3 | Fully Local (On-Site) | $20,000 – $30,000 | Zero cloud dependency, optional air-gap |

**Tier 1 includes:** multiple OpenClaw instances per department, department-specific agent configs, Docker + security hardening, management dashboard, full documentation + walkthrough, **14-day post-deployment support**

**Tier 2 includes:** everything in Tier 1 scaled across departments, cross-department orchestration, employee assignment dashboard, role-based permissions, **30-day post-deployment support**

**Tier 3 includes:** everything in Tier 2, on-site installation on customer hardware (Mac Minis / Mac Studios), network-level security configuration, in-person team training, **60-day post-deployment support**

### 4.7 Team
Three founder cards with photos (avif format, served via Next.js image optimization):
- **Brody Glanville** — Chief Executive Officer
- **Bennett Spooner** — Chief Operations Officer
- **Jesse Rurka** — Chief Technology Officer

No bios, no LinkedIn links visible, no background or credibility text.

### 4.8 FAQ ("Everything you need to know before deploying.")
Five questions, all preempting common objections:
1. "OpenClaw is free. Why pay $4,000–$30,000?" — answer frames the pricing as architecture/security/operational readiness, not software
2. "I can hire a freelancer on Upwork for $150." — contrasts cheap installs with documentation, support, hardening
3. "We already use ChatGPT / Copilot." — positions OpenClaw as autonomous executor vs. conversational tools
4. "What happens after the support period ends?" — emphasizes ownership and self-sufficiency, mentions optional retainer add-on
5. "How do I know this is actually secure?" — lists Docker, firewall rules, exec allowlists, skill vetting, mentions Tier 3 air-gap

### 4.9 Final CTA
- **Headline:** "Your team is spending 10–20 hours a week on work an AI agent should handle."
- **Subhead:** Urgency framing — "Every week you wait is another week of manual workflows…"
- **CTA:** "Book Discovery Call"

### 4.10 Footer
- Brand: MERYDIAN
- Repeats anchor nav: Security, Process, Pricing, Team, FAQ, Book a Call
- Legal: Contact, Terms of Service, Privacy Policy

---

## 5. Visual & UX patterns observed

- **Repeating animated content blocks** in at least two sections (Problem and Process) — same content rendered 3–4 times in the static HTML, a strong signal that the live site uses horizontal scroll marquees or carousel animations for visual interest
- **Conversational mock UIs** as illustration — the FAQ-bot chat in the Process section shows what the deployed agent would feel like for end users
- **Heavy use of stat blocks** — concrete numbers (341, 47, 128, 166, 247,000+, 900+) anchor every section
- **Two-CTA pattern** repeated through the page: Primary "Book Discovery Call" + secondary "Learn More" — appears at the top of nearly every major section, not just hero/footer
- **Card-based layouts** for audience segmentation, outcomes, pricing, and team — consistent visual rhythm
- **Section eyebrows** — every section starts with a small label (Security / Built For / How It Works / Outcomes / Pricing / Team / FAQ) above the headline

---

## 6. Tone & messaging strategy

- **Anti-hype, operator-focused.** Recurring framing: "Built for operators. Not hobbyists." — explicitly positions away from the AI-influencer audience
- **Security-first vocabulary** throughout: "containerized," "hardened," "air-gapped," "exec allowlists," "skill vetting"
- **Ownership language.** "Owned by You," "data stays internal," "you own the infrastructure" — emphasizes control as the value prop, not capability
- **Concrete over abstract.** Time savings (10–20 hrs/week), specific dollar ranges, exact support windows (14/30/60 days), specific hardware (Mac Mini / Mac Studio). Avoids vague claims
- **Objection-led FAQ.** Every FAQ entry is a sales objection, not a feature question — suggests the site is calibrated against real buyer conversations

---

## 7. Content & credibility gaps (observational)

These are absent from the current site. Listed here as factual observations, not redesign recommendations:

- No case studies or named customers
- No customer logos
- No testimonials or quotes
- No team bios, LinkedIn links, or credentials
- No content marketing surface (no blog, no resources, no guides)
- No deployment timeline visualization beyond the abstract Step 1 timeline
- No security certifications named (SOC 2, ISO, etc.) despite security being the core pitch
- No comparison table vs. alternatives (freelancer / DIY / SaaS competitors)
- No demo, screenshots, or video of the deployed dashboard
- No FAQ entry on data residency, jurisdiction, or compliance frameworks (HIPAA / GDPR / SOC 2)
- Contact / Terms / Privacy footer links exist but were not validated as live pages

---

## 8. Technical observations

- **Framework:** Next.js (confirmed by `/_next/image` optimization paths)
- **Image format:** AVIF for team photos, WEBP for brand mark — modern formats, optimized
- **Likely architecture:** Templated SPA with section components, no CMS evident in markup
- **No visible analytics, chat widget, or third-party scripts** in the rendered output (may be loaded client-side and not captured by static fetch)

---

## 9. One-line summary for downstream agents

> Merydian is a single-page Next.js marketing site selling secure deployment services for the open-source OpenClaw AI agent, structured as a linear scroll narrative (Problem → Audience → Process → Outcomes → Pricing → Team → FAQ → CTA), with a security-first, operator-focused, anti-hype tone, three pricing tiers from $4K–$30K, and notable absence of social proof or content marketing surfaces.
