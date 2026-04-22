# src/components/ui/

Reusable primitives. Small, typed, composable. Used by `sections/` and by `islands/`.

## Examples of what belongs here

- `Card.astro` — the standard card wrapper (audience, principle, outcome, etc.)
- `Eyebrow.astro` — section label above each headline
- `StatBlock.astro` — concrete-number stat (value + label + optional source)
- `CtaPair.astro` — primary + secondary CTA pair repeated through the page
- `Placeholder.astro` — dev-only visible marker that renders when a content field is still a `TODO` sentinel
- `Button.astro` — the one button component; never style buttons inline

## Rules

- **Naming:** PascalCase, `.astro` extension. Props interfaces are named `Props`.
- **No content inside primitives.** Every string comes through props.
- **No global state.** Primitives are pure inputs → markup.
- **Strict types.** `any` is banned; use `unknown` + a narrow if you must.
- **Styling:** Tailwind utility classes; non-trivial variants go through `class:list` with a typed `variant` prop.
- **No React here.** Primitives are `.astro`. Anything that needs hooks moves to `islands/`.
