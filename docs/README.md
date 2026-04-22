# docs/

Reference material for the site build. **Read-only from the site code** — nothing in `src/` should `import` from here. These files are ingested by humans and by Claude Code as build context; they are not part of the runtime bundle.

## Files

- `agence-ia-site-reference.md` — **The spec.** Authoritative source for sections, content, and tone. Spec wins any tiebreaker against other references.
- `merydian-site-reference.md` — Structural reference only. Merydian is the pattern Agence IA inherits (anchor-nav SPA, stat blocks, two-CTA repetition, card layouts). Do NOT copy copy.
- `agence-ia-build-prompts.md` — Orchestration playbook for subsequent build phases.

## Rules

- **Do not modify** the three files above. They are the upstream contract. If the spec needs to change, route the change through a SpecKit spec, then update `agence-ia-site-reference.md` explicitly as part of that work — not as a side effect.
- **Do not add runtime imports** from this folder into `src/`. Content lives in `src/content/site.ts`.
- New reference docs added here should be suffixed with their scope (e.g. `agence-ia-brand-voice-reference.md`) and noted in this README.
