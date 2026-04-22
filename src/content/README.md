# src/content/

Typed content layer. **Single source of truth for every user-facing string on the site.**

## Files

- `types.ts` — TypeScript types for the full content shape. Strict. No `any`.
- `site.ts` — the typed `siteContent` object. Every section on the site consumes its slice from here.

## Rules

- **Every user-facing string lives in `site.ts`.** Components never hardcode copy — not even a single word.
- **User-facing copy is Quebec French.** Keys and ids remain English so code reads uniformly.
- **Unresolved content uses the `TODO` sentinel** re-exported from `site.ts`. Every new `TODO` must also be added to the root `CONTENT_TODO.md` checklist with a spec reference.
- **Do not invent content.** If the spec doesn't supply it, it's a `TODO`.
- **Type changes land in `types.ts` first**, then `site.ts` is updated to satisfy the new shape. Don't loosen types to fit data — reshape the data.
- **Readonly everywhere.** Every array is `ReadonlyArray`; every field is `readonly`. Content should not mutate at runtime.
