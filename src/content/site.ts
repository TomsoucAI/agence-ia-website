/**
 * Agence IA — typed content layer.
 *
 * Authoritative source: docs/agence-ia-site-reference.md (the spec).
 * Structural reference: docs/merydian-site-reference.md.
 * If the spec and the structural reference conflict, the spec wins.
 *
 * Rules:
 *   1. Every user-facing string in the site lives here — never in components.
 *   2. Every field is typed (see ./types.ts) — no `any`.
 *   3. Unresolved content uses the TODO sentinel. It renders as a visible
 *      placeholder in dev and fails CI on production build for any field
 *      not explicitly whitelisted.
 *   4. All user-facing copy is in Quebec French. Keys/ids are English.
 *   5. Do not invent content. If the spec doesn't supply it, TODO it.
 */

import type { SiteContent } from './types';
import { TODO } from './types';

export { TODO } from './types';

export const siteContent: SiteContent = {
  // -------------------------------------------------------------------------
  // Site-level meta
  // -------------------------------------------------------------------------
  meta: {
    brandName: 'Agence IA',
    // TODO — final domain TBD per spec §1. Update astro.config.mjs `site` once set.
    domain: TODO,
    // TODO — Calendly or form endpoint. Per spec §9, Calendly embed or form-to-email
    // is sufficient at launch. Open item in build plan (#2).
    bookingUrl: TODO,
    // TODO — Plausible or Umami site identifier. Open item in build plan (#3).
    analyticsSiteId: TODO,
    anchorNav: [
      { label: 'Approche', href: '#approche' },
      { label: 'Services', href: '#services' },
      { label: 'Processus', href: '#processus' },
      { label: 'Formation', href: '#formation' },
      { label: 'FAQ', href: '#faq' },
    ],
    primaryCta: {
      label: 'Réserver un audit',
      href: '#reserver',
      variant: 'primary',
    },
    // SEO <title>. Derived from hero eyebrow + positioning. ~52 chars.
    title: 'Agence IA — Agents IA déployés au Québec, en français',
    // Meta description — ~155 chars, Quebec French, derived from the hero subhead
    // and the four-principles positioning. Front-loaded with the audit offer.
    description:
      "Agence IA québécoise. Systèmes IA locaux, observables et résilients. Premier pas : un audit d'une semaine à 500–1 500 $. Livraison en français.",
    // OG image path — asset does not yet exist (Phase 6 follow-up).
    ogImage: '/og-image.png',
    // TODO — Plausible site domain (e.g. "agence-ia.ca"). When set, the Plausible
    // script tag renders in BaseLayout. Until then, the script is NOT injected.
    plausibleDomain: TODO,
    // TODO — Calendly inline-embed URL (e.g. "https://calendly.com/agence-ia/audit").
    // When set, the #reserver section renders the embed. When TODO, it renders a
    // Placeholder with a fallback message.
    calendlyUrl: TODO,
  },

  // -------------------------------------------------------------------------
  // §4.1 Hero
  // -------------------------------------------------------------------------
  hero: {
    eyebrow: 'Agence IA québécoise',
    headline:
      'Agents IA déployés au Québec. Sur votre infrastructure. Dans vos outils. Dans votre langue.',
    // Subhead intentionally short — positions the practice and anchors on the audit
    // so first-time visitors don't see a $5K+ price as the entry point (spec §4.1).
    subhead:
      "Une agence francophone qui livre des systèmes IA locaux, observables, et résilients. Premier pas : un audit d'une semaine à 500–1 500 $.",
    ctas: {
      primary: {
        label: 'Réserver un audit',
        href: '#reserver',
        variant: 'primary',
      },
      secondary: {
        label: 'Voir nos services',
        href: '#services',
        variant: 'secondary',
      },
    },
  },

  // -------------------------------------------------------------------------
  // §4.2 Problem
  // -------------------------------------------------------------------------
  problem: {
    eyebrow: 'Le problème',
    headline: 'L’IA promise. L’IA livrée. Deux choses différentes.',
    cards: [
      {
        title: 'Projets qui ne livrent jamais',
        body:
          'La plupart des « transformations IA » stagnent au pilote. On reste à la démo, jamais en production.',
      },
      {
        title: 'Données qui sortent du Québec',
        body:
          "Les systèmes cloud-first routent les données sensibles vers une infrastructure américaine. L'AMF, la Loi 25 et les secteurs régulés ne tolèrent pas ça.",
      },
      {
        title: 'Outils anglophones, équipes francophones',
        body:
          'La plupart des consultants construisent en anglais, puis traduisent. La voix et l’ajustement culturel se perdent.',
      },
      {
        title: 'Systèmes fragiles',
        body:
          "Des wrappers autour d'un appel à l’API d’OpenAI qui cassent dès que le modèle casse, hallucine, ou atteint sa limite.",
      },
    ],
    // TODO — §4.2 stats to be supplied by Tom (% de PME québécoises sans IA,
    // coût moyen d'un workflow manuel par semaine, etc.). Build plan open item
    // for CONTENT_TODO checklist. Do not invent numbers.
    stats: TODO,
    // Contextual secondary CTA — surfaces the Approach section from Problem.
    ctas: {
      primary: {
        label: 'Réserver un audit',
        href: '#reserver',
        variant: 'primary',
      },
      secondary: {
        label: 'Voir notre approche',
        href: '#approche',
        variant: 'secondary',
      },
    },
  },

  // -------------------------------------------------------------------------
  // §4.3 Approach — the four non-negotiables
  // -------------------------------------------------------------------------
  approach: {
    eyebrow: 'Approche',
    headline: 'Quatre principes. Aucun compromis.',
    principles: [
      {
        key: 'permission-aware',
        title: 'Permission-aware',
        body:
          "Chaque agent a des accès lecture seule ou lecture/écriture par intégration. Toute écriture exige une approbation jusqu'à ce que la confiance par outil soit gagnée.",
      },
      {
        key: 'locally-hostable',
        title: 'Locally hostable',
        body:
          'La pile complète tourne sur le matériel client sans appel cloud lorsque les données sont sensibles. LLM local par défaut pour les secteurs régulés.',
      },
      {
        key: 'resilient-without-llms',
        title: 'Resilient without LLMs',
        body:
          "Les workflows critiques dégradent vers une logique déterministe si le modèle est indisponible ou se trompe. Nous ne sommes pas un wrapper d'API.",
      },
      {
        key: 'observable',
        title: 'Observable',
        body:
          'Chaque action sur des données réelles est journalisée. Sans exception.',
      },
    ],
    // Contextual secondary CTA — surfaces the Framework section from Approach.
    ctas: {
      primary: {
        label: 'Réserver un audit',
        href: '#reserver',
        variant: 'primary',
      },
      secondary: {
        label: 'Voir notre framework',
        href: '#framework',
        variant: 'secondary',
      },
    },
  },

  // -------------------------------------------------------------------------
  // §4.4 Framework — the five verbs
  // -------------------------------------------------------------------------
  framework: {
    eyebrow: 'Framework',
    headline:
      'Notre framework : cinq verbes pour orchestrer n’importe quel système IA.',
    // TODO — the five verbs must be supplied by Tom before build. Do NOT invent
    // them. Each verb needs: verb name, short plain-French explanation, concrete
    // example of where it shows up in a real client system. Spec §4.4.
    verbs: TODO,
    // Contextual secondary CTA — from Framework, the next commercial beat is Services.
    ctas: {
      primary: {
        label: 'Réserver un audit',
        href: '#reserver',
        variant: 'primary',
      },
      secondary: {
        label: 'Voir nos services',
        href: '#services',
        variant: 'secondary',
      },
    },
  },

  // -------------------------------------------------------------------------
  // §4.5 Built For — ICP segmentation
  // -------------------------------------------------------------------------
  builtFor: {
    eyebrow: 'Pour qui',
    headline: 'Pour qui on construit.',
    segments: [
      {
        id: 'smb',
        title: 'PME québécoises',
        status: 'active',
        statusLabel: 'Segment A — actif',
        description:
          "Opérateurs de petites entreprises avec des tâches administratives répétitives, des suivis manqués, et un désir de « zéro changement dans leur routine ». Sceptiques face au hype.",
        tools: ['Monday', 'Pipedrive', 'Gmail'],
      },
      {
        id: 'financial-advisors',
        title: 'Conseillers financiers indépendants',
        status: 'paused',
        statusLabel: 'Segment B — vertical en pause',
        description:
          "Pratiques solo sous contraintes AMF / Sun Life. Comparent le coût d'une réceptionniste à 50 000 $/an à un agent IA 24/7 en mode « draft-and-approve ». Reprise active après le stage d'été 2026.",
      },
    ],
    // Contextual secondary CTA — from BuiltFor, the next beat is Services.
    ctas: {
      primary: {
        label: 'Réserver un audit',
        href: '#reserver',
        variant: 'primary',
      },
      secondary: {
        label: 'Voir nos services',
        href: '#services',
        variant: 'secondary',
      },
    },
  },

  // -------------------------------------------------------------------------
  // §4.6 Services — tiers + retainers
  // -------------------------------------------------------------------------
  services: {
    eyebrow: 'Services',
    headline:
      'Trois niveaux. Bandes de prix fixes. Aucun « contactez-nous » caché.',
    tiers: [
      {
        id: 'tier-1',
        name: 'Audit & Quick Wins',
        priceLabel: '500 $ – 1 500 $',
        durationLabel: '1 semaine',
        offers: [
          {
            title: "Audit de tâches répétitives + plan d'automatisation",
            description:
              'Atelier 2–3 h, rapport 3 pages, 3 candidats priorisés avec ROI + effort.',
          },
          {
            title: 'Kit de prompts + templates',
            description:
              '5–10 prompts production-grade pour une fonction définie.',
          },
        ],
      },
      {
        id: 'tier-2',
        name: 'Implémentations ciblées',
        priceLabel: '3 000 $ – 5 000 $',
        durationLabel: '2–3 semaines',
        offers: [
          {
            title: 'Triage email/DM + draft-and-approve',
            description:
              'Classifier local + digest matinal avec réponses pré-rédigées.',
          },
          {
            title: 'Pipeline de génération de contenu',
            description:
              'Générateur voice-aware entraîné sur la voix historique du client.',
          },
          {
            title: 'Chatbot de qualification de leads',
            description:
              'Formulaire/DM → qualification structurée → entrée CRM.',
          },
        ],
      },
      {
        id: 'tier-3',
        name: 'Systèmes end-to-end',
        priceLabel: '5 000 $ – 10 000 $',
        durationLabel: '4–6 semaines',
        offers: [
          {
            title: 'Assistant administratif PME',
            description:
              'Pipeline cinq verbes complet, ~20 h/semaine remplacées, déploiement local + formation + 2 semaines hypercare.',
          },
          {
            title: 'Pré-remplissage documentaire + flagging de conformité',
            description:
              'Pré-remplit champs récurrents, flag des champs nécessitant révision humaine, audit log inclus.',
          },
          {
            title: 'Automatisation de planification avec moteur de politiques',
            description:
              "Entrée → policy check → confirmation draft, gradue vers auto-book après 30 jours de confiance.",
          },
        ],
      },
    ],
    retainerIntro:
      "Proposés uniquement après 30 jours d'utilisation en production.",
    retainers: [
      {
        id: 'retainer-lite',
        name: 'Lite',
        priceLabel: '500 $/mois',
        description: 'Monitoring + tuning mensuel, 1 h/mois.',
      },
      {
        id: 'retainer-standard',
        name: 'Standard',
        priceLabel: '1 000 $/mois',
        description:
          "+ une nouvelle feature par trimestre + appel d'optimisation mensuel, 3 h/mois.",
      },
      {
        id: 'retainer-premium',
        name: 'Premium',
        priceLabel: '2 000 $/mois',
        description:
          '+ on-call + deux nouvelles features par trimestre, 6 h/mois.',
      },
    ],
    notSellingTitle: 'Ce qu’on ne vend pas',
    notSelling: [
      'Custom LLM fine-tuning',
      'Multi-tenant SaaS',
      'Full-company RAG',
      'Voice agents',
      "Automatisation financière à conformité lourde (jusqu'à Q3 2026)",
    ],
    entryPointLabel: "Point d'entrée",
    // Contextual secondary CTA — from Services, the next beat is Process.
    ctas: {
      primary: {
        label: 'Réserver un audit',
        href: '#reserver',
        variant: 'primary',
      },
      secondary: {
        label: 'Voir le processus',
        href: '#processus',
        variant: 'secondary',
      },
    },
  },

  // -------------------------------------------------------------------------
  // §4.7 Process
  // -------------------------------------------------------------------------
  process: {
    eyebrow: 'Processus',
    headline:
      'Trois étapes. Aucun engagement long terme tant qu’on n’a pas livré.',
    steps: [
      {
        number: 1,
        title: 'Audit Tier 1',
        meta: '1 semaine · 500 $ – 1 500 $',
        body:
          "On cartographie vos workflows. On identifie 3 candidats d'automatisation prioritaires avec ROI + effort. Vous repartez avec un plan, qu'on aille plus loin ou non.",
      },
      {
        number: 2,
        title: 'Implémentation Tier 2 ou 3',
        meta: '2–6 semaines · 3 000 $ – 10 000 $',
        body:
          'On livre une automatisation concrète en production. Local ou cloud selon la sensibilité de vos données. Formation de votre équipe incluse.',
      },
      {
        number: 3,
        title: 'Rétention',
        meta: "à partir de 500 $/mois, gated sur 30 jours d'usage réel",
        body:
          "On ne vous propose un retainer qu'après 30 jours d'utilisation en production. Si le système ne tient pas la route, on ne facture pas la suite.",
      },
    ],
    gateLabel: "Après 30 jours d'usage",
    // Contextual secondary CTA — from Process, the next beat is Outcomes.
    ctas: {
      primary: {
        label: 'Réserver un audit',
        href: '#reserver',
        variant: 'primary',
      },
      secondary: {
        label: 'Voir les résultats',
        href: '#outcomes',
        variant: 'secondary',
      },
    },
  },

  // -------------------------------------------------------------------------
  // §4.8 Outcomes
  // -------------------------------------------------------------------------
  outcomes: {
    eyebrow: 'Résultats',
    headline: 'Ce que nos systèmes font, concrètement.',
    items: [
      {
        title: '~20 heures/semaine récupérées',
        description:
          'Sur les tâches admin répétitives (Tier 3 SMB admin assistant).',
      },
      {
        title: 'Réponses en français, dans votre voix',
        description: 'Pas de traduction Google. Le système apprend votre ton.',
      },
      {
        title: 'Données qui restent au Québec',
        description: 'Pile locale par défaut pour les secteurs régulés.',
      },
      {
        title: 'Zéro hallucination en production',
        description: 'Fallback déterministe quand le modèle se trompe.',
      },
    ],
    // Contextual secondary CTA — Outcomes returns the reader to the audit anchor.
    ctas: {
      primary: {
        label: 'Réserver un audit',
        href: '#reserver',
        variant: 'primary',
      },
      secondary: {
        label: 'Voir nos services',
        href: '#services',
        variant: 'secondary',
      },
    },
  },

  // -------------------------------------------------------------------------
  // §4.9 Formation / Discord
  // -------------------------------------------------------------------------
  formation: {
    eyebrow: 'Formation',
    headline: 'Pas prêt pour un audit ? Rejoins la communauté.',
    body:
      'Une porte d’entrée différente, vers le même bâtiment. La Formation IA est un canal B2C — indépendant de nos mandats B2B.',
    offerings: [
      'Tier Discord gratuit — accès aux discussions, ressources de base',
      'Cohortes payantes — formation hebdomadaire en groupe, contenu enregistré',
      'Animée par Tommy (contenu/communauté), Fabrice (curriculum), Tom (sessions IA)',
    ],
    cta: {
      label: 'Rejoindre le Discord',
      // TODO — Discord invite URL pending. Do not link to a placeholder.
      href: '#formation',
      variant: 'secondary',
    },
    // TODO — Discord URL pending. Update once Tom provides the permanent invite.
    discordUrl: TODO,
  },

  // -------------------------------------------------------------------------
  // §4.10 Team
  // -------------------------------------------------------------------------
  team: {
    eyebrow: 'Équipe',
    headline: 'Trois fondateurs. Trois rôles distincts.',
    founders: [
      {
        id: 'tom',
        firstName: 'Tom',
        lastName: 'Soucy',
        role: 'Produit, framework, livraison technique.',
        bio:
          'Étudiant en informatique et gestion (Université Laval), stagiaire au Lab-Usine sur un système RAG industriel.',
        photoPath: null,
        linkedinUrl: null,
      },
      {
        id: 'tommy',
        firstName: 'Tommy',
        // TODO — Tommy last name pending.
        lastName: TODO,
        role: 'B2C, contenu, communauté, marque.',
        // TODO — Tommy bio pending.
        bio: TODO,
        photoPath: null,
        linkedinUrl: null,
      },
      {
        id: 'fabrice',
        firstName: 'Fabrice',
        // TODO — Fabrice last name pending.
        lastName: TODO,
        role: 'B2B, ventes, réseau de clients web, curriculum de formation.',
        // TODO — Fabrice bio pending.
        bio: TODO,
        photoPath: null,
        linkedinUrl: null,
      },
    ],
  },

  // -------------------------------------------------------------------------
  // §4.11 FAQ — objection-led
  // -------------------------------------------------------------------------
  faq: {
    eyebrow: 'FAQ',
    headline: 'Tout ce que vous devez savoir avant de commencer.',
    questions: [
      {
        id: 'q1-chatgpt',
        question: 'Pourquoi pas juste utiliser ChatGPT directement ?',
        answer:
          "ChatGPT est un outil de conversation. Agence IA construit des systèmes qui agissent sur vos données avec des permissions, des fallbacks, et des journaux.",
      },
      {
        id: 'q2-donnees',
        question: 'Comment je sais que mes données restent privées ?',
        answer:
          "Pile locale par défaut pour les données sensibles. Aucun appel cloud sans validation explicite. Audit log de chaque action.",
      },
      {
        id: 'q3-delais',
        question: 'Combien de temps avant que ça fonctionne ?',
        answer:
          'Tier 1 audit en 1 semaine. Premier système en production en 2–6 semaines selon le tier.',
      },
      {
        id: 'q4-erreurs',
        question: 'Et si l’IA se trompe ?',
        answer:
          "Tous les workflows critiques dégradent vers une logique déterministe. Vous n'êtes jamais dépendant de la fiabilité d'un modèle.",
      },
      {
        id: 'q5-audit-paye',
        question:
          'Pourquoi un audit payant à 500 $ – 1 500 $ avant l’implémentation ?',
        answer:
          "Parce qu'on ne vend pas ce qu'on ne peut pas livrer. L'audit prouve le fit, dérisque le scope, et vous donne un plan que vous pouvez exécuter avec ou sans nous.",
      },
      {
        id: 'q6-secteurs',
        question: 'Vous travaillez avec quels secteurs ?',
        answer:
          "PME générales du Québec aujourd'hui. Conseillers financiers indépendants à partir de l'automne 2026 (vertical en pause active jusqu'au stage d'été).",
      },
      {
        id: 'q7-retainer',
        question: 'C’est quoi un retainer et c’est obligatoire ?',
        answer:
          "Non. On ne propose un retainer qu'après 30 jours d'usage réel en production. Si vous n'en voulez pas, vous gardez le système, la doc, et vous opérez de façon autonome.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // §4.12 Final CTA
  // -------------------------------------------------------------------------
  finalCta: {
    headline:
      'L’audit prend une semaine et coûte moins qu’un mois de SaaS qu’on n’utilise pas.',
    subhead:
      'Faible risque, livrable concret, aucune obligation de poursuivre.',
    cta: {
      label: 'Réserver un audit',
      href: '#reserver',
      variant: 'primary',
    },
  },

  // -------------------------------------------------------------------------
  // §4.13 Footer
  // -------------------------------------------------------------------------
  footer: {
    brandName: 'Agence IA',
    anchorNav: [
      { label: 'Approche', href: '#approche' },
      { label: 'Services', href: '#services' },
      { label: 'Processus', href: '#processus' },
      { label: 'Formation', href: '#formation' },
      { label: 'Équipe', href: '#team' },
      { label: 'FAQ', href: '#faq' },
    ],
    legal: [
      { label: 'Contact', href: '#reserver' },
      { label: 'Mentions légales', href: '/mentions-legales' },
      {
        label: 'Politique de confidentialité',
        href: '/politique-confidentialite',
      },
    ],
    // TODO — Discord URL pending (shared with formation.discordUrl).
    discordUrl: TODO,
    linkedinUrls: [],
    contactEmail: null,
  },
};
