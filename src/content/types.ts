/**
 * Content types for the Agence IA marketing site.
 *
 * Authoritative source: docs/agence-ia-site-reference.md (the spec).
 * Every section on the site consumes one of these types from src/content/site.ts.
 * Components never hardcode copy.
 *
 * Strict mode: no `any`. Unresolved content uses the `ContentTodo` sentinel type
 * re-exported from `./site.ts`, declared in this file to keep the shape explicit.
 *
 * Rule: if a field is nullable, use `| null`. If a field is optional (may be
 * omitted entirely), mark it with `?`. Prefer explicit over implicit.
 */

// ---------------------------------------------------------------------------
// TODO sentinel — a unique symbol so TypeScript can distinguish "unresolved"
// from "empty string" or "empty array". Treat it at render time as a placeholder.
// ---------------------------------------------------------------------------
export const TODO: unique symbol = Symbol('content-todo');
export type ContentTodo = typeof TODO;

/** Helper: a resolved value of T, or the TODO sentinel while content is pending. */
export type Resolvable<T> = T | ContentTodo;

// ---------------------------------------------------------------------------
// Shared primitives
// ---------------------------------------------------------------------------

export interface Cta {
  readonly label: string;
  readonly href: string;
  readonly variant: 'primary' | 'secondary';
}

export interface CtaPair {
  readonly primary: Cta;
  readonly secondary: Cta;
}

export interface Eyebrow {
  readonly text: string;
}

// ---------------------------------------------------------------------------
// §4.1 Hero
// ---------------------------------------------------------------------------

export interface Hero {
  readonly eyebrow: string;
  readonly headline: string;
  readonly subhead: string;
  readonly ctas: CtaPair;
}

// ---------------------------------------------------------------------------
// §4.2 Problem
// ---------------------------------------------------------------------------

export interface Stat {
  readonly value: string;
  readonly label: string;
  readonly source: string | null;
}

export interface ProblemCard {
  readonly title: string;
  readonly body: string;
}

export interface Problem {
  readonly eyebrow: string;
  readonly headline: string;
  readonly cards: ReadonlyArray<ProblemCard>;
  readonly stats: Resolvable<ReadonlyArray<Stat>>;
  readonly ctas: CtaPair;
}

// ---------------------------------------------------------------------------
// §4.3 Approach — the four non-negotiables
// ---------------------------------------------------------------------------

export type PrincipleKey =
  | 'permission-aware'
  | 'locally-hostable'
  | 'resilient-without-llms'
  | 'observable';

export interface Principle {
  readonly key: PrincipleKey;
  readonly title: string;
  readonly body: string;
}

export interface Approach {
  readonly eyebrow: string;
  readonly headline: string;
  readonly principles: ReadonlyArray<Principle>;
  readonly ctas: CtaPair;
}

// ---------------------------------------------------------------------------
// §4.4 Framework — the five-verb orchestrator
// ---------------------------------------------------------------------------

export interface Verb {
  readonly verb: string;
  readonly description: string;
  readonly example: string;
}

export interface Framework {
  readonly eyebrow: string;
  readonly headline: string;
  readonly verbs: Resolvable<ReadonlyArray<Verb>>;
  readonly ctas: CtaPair;
}

// ---------------------------------------------------------------------------
// §4.5 Built For — ICP segmentation
// ---------------------------------------------------------------------------

export type SegmentStatus = 'active' | 'paused';

export interface Segment {
  readonly id: 'smb' | 'financial-advisors';
  readonly title: string;
  readonly status: SegmentStatus;
  readonly statusLabel: string;
  readonly description: string;
  readonly tools?: ReadonlyArray<string>;
}

export interface BuiltFor {
  readonly eyebrow: string;
  readonly headline: string;
  readonly segments: ReadonlyArray<Segment>;
  readonly ctas: CtaPair;
}

// ---------------------------------------------------------------------------
// §4.6 Services — tiers + retainers
// ---------------------------------------------------------------------------

export interface TierOffer {
  readonly title: string;
  readonly description: string;
}

export interface Tier {
  readonly id: 'tier-1' | 'tier-2' | 'tier-3';
  readonly name: string;
  readonly priceLabel: string;
  readonly durationLabel: string;
  readonly offers: ReadonlyArray<TierOffer>;
}

export interface Retainer {
  readonly id: 'retainer-lite' | 'retainer-standard' | 'retainer-premium';
  readonly name: string;
  readonly priceLabel: string;
  readonly description: string;
}

export interface Services {
  readonly eyebrow: string;
  readonly headline: string;
  readonly tiers: ReadonlyArray<Tier>;
  readonly retainerIntro: string;
  readonly retainers: ReadonlyArray<Retainer>;
  readonly notSellingTitle: string;
  readonly notSelling: ReadonlyArray<string>;
  readonly ctas: CtaPair;
  /** Entry-point badge label shown on Tier 1 (e.g. "Point d'entrée"). */
  readonly entryPointLabel: string;
}

// ---------------------------------------------------------------------------
// §4.7 Process — audit-first engagement arc
// ---------------------------------------------------------------------------

export interface Step {
  readonly number: 1 | 2 | 3;
  readonly title: string;
  readonly meta: string;
  readonly body: string;
}

export interface Process {
  readonly eyebrow: string;
  readonly headline: string;
  readonly steps: ReadonlyArray<Step>;
  readonly ctas: CtaPair;
  /** Precondition label shown on Step 3 (e.g. "Après 30 jours d'usage"). */
  readonly gateLabel: string;
}

// ---------------------------------------------------------------------------
// §4.8 Outcomes — benchmark-framed
// ---------------------------------------------------------------------------

export interface Outcome {
  readonly title: string;
  readonly description: string;
}

export interface Outcomes {
  readonly eyebrow: string;
  readonly headline: string;
  readonly items: ReadonlyArray<Outcome>;
  readonly ctas: CtaPair;
}

// ---------------------------------------------------------------------------
// §4.9 Formation / Discord — secondary B2C entry
// ---------------------------------------------------------------------------

export interface Formation {
  readonly eyebrow: string;
  readonly headline: string;
  readonly body: string;
  readonly offerings: ReadonlyArray<string>;
  readonly cta: Cta;
  readonly discordUrl: Resolvable<string>;
}

// ---------------------------------------------------------------------------
// §4.10 Team — three founders
// ---------------------------------------------------------------------------

export interface Founder {
  readonly id: 'tom' | 'tommy' | 'fabrice';
  readonly firstName: string;
  readonly lastName: Resolvable<string>;
  readonly role: string;
  readonly bio: Resolvable<string>;
  readonly photoPath: string | null;
  readonly linkedinUrl: string | null;
}

export interface Team {
  readonly eyebrow: string;
  readonly headline: string;
  readonly founders: ReadonlyArray<Founder>;
}

// ---------------------------------------------------------------------------
// §4.11 FAQ — objection-led
// ---------------------------------------------------------------------------

export interface Question {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

export interface Faq {
  readonly eyebrow: string;
  readonly headline: string;
  readonly questions: ReadonlyArray<Question>;
}

// ---------------------------------------------------------------------------
// §4.12 Final CTA
// ---------------------------------------------------------------------------

export interface FinalCta {
  readonly headline: string;
  readonly subhead: string;
  readonly cta: Cta;
}

// ---------------------------------------------------------------------------
// §4.13 Footer + navigation
// ---------------------------------------------------------------------------

export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export interface FooterContent {
  readonly brandName: string;
  readonly anchorNav: ReadonlyArray<NavLink>;
  readonly legal: ReadonlyArray<NavLink>;
  readonly discordUrl: Resolvable<string>;
  readonly linkedinUrls: ReadonlyArray<NavLink>;
  readonly contactEmail: string | null;
}

// ---------------------------------------------------------------------------
// Global site-level values (anchor nav, booking URL, analytics)
// ---------------------------------------------------------------------------

export interface SiteMeta {
  readonly brandName: string;
  readonly domain: Resolvable<string>;
  readonly bookingUrl: Resolvable<string>;
  readonly analyticsSiteId: Resolvable<string>;
  readonly anchorNav: ReadonlyArray<NavLink>;
  readonly primaryCta: Cta;
  /** SEO <title> — Quebec French, ~60 chars. */
  readonly title: string;
  /** Meta description — Quebec French, ~155 chars. */
  readonly description: string;
  /** OG image path, served from /public. */
  readonly ogImage: string;
  /** Plausible analytics site domain. When set to a non-TODO value, the script tag renders. */
  readonly plausibleDomain: Resolvable<string>;
  /** Calendly booking URL for the #reserver section. When TODO, the section falls back to a Placeholder. */
  readonly calendlyUrl: Resolvable<string>;
}

// ---------------------------------------------------------------------------
// Root content shape
// ---------------------------------------------------------------------------

export interface SiteContent {
  readonly meta: SiteMeta;
  readonly hero: Hero;
  readonly problem: Problem;
  readonly approach: Approach;
  readonly framework: Framework;
  readonly builtFor: BuiltFor;
  readonly services: Services;
  readonly process: Process;
  readonly outcomes: Outcomes;
  readonly formation: Formation;
  readonly team: Team;
  readonly faq: Faq;
  readonly finalCta: FinalCta;
  readonly footer: FooterContent;
}

// ---------------------------------------------------------------------------
// Type guard — check whether a Resolvable value is still a TODO sentinel.
// Components use this at render time to decide whether to show a placeholder.
// ---------------------------------------------------------------------------

export function isTodo<T>(value: Resolvable<T>): value is ContentTodo {
  return typeof value === 'symbol' && value === TODO;
}
