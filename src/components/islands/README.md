# src/components/islands/

React islands. One island per file. Hydrated with `client:visible` or `client:load` from the Astro section that uses them. Zero JS ships to pages that don't use one.

## Planned islands

- `Marquee.tsx` — repeating stat strips in the Problem section. Prefer pure CSS; fall back to Framer Motion if variable scroll speed is needed.
- `ScrollReveal.tsx` — fade-in stat blocks and cards on viewport entry (Framer Motion `useInView`).
- `FaqAccordion.tsx` — expand/collapse animation (Framer Motion `AnimatePresence`).

## Rules

- **Naming:** PascalCase, `.tsx` extension.
- **File count:** one island per file.
- **Hydration directive:** chosen at the call site in the `.astro` section, not inside the island itself. Default to `client:visible` unless the island needs to work above the fold.
- **Strict types.** All props typed; no implicit `any`.
- **No layout or copy inside islands.** They receive data via props from the section that owns them.
- **Motion budget:** prefer CSS; pull in Framer Motion only when state transitions or entrance animations are non-trivial.
- **Accessibility:** respect `prefers-reduced-motion`; accordions need ARIA state; focus management is not optional.
