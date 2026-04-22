# specs/

SpecKit-managed specifications. Each subsequent meaningful change to the site lands as a spec here before it lands as code, per the project's spec-driven development rule (see user CLAUDE.md).

## Rules

- Specs are created via the SpecKit CLI (`uvx specify-cli`), not by hand.
- One spec per meaningful change: new feature, refactor, architectural shift. Cosmetic single-file fixes can skip a spec.
- The hierarchy is: spec → plan → tasks → implement → test. In order.
- The initial scaffolding commit is the one explicit spec-exempt bootstrap step. Every subsequent phase (design pass, per-section build, legal pages, analytics, Calendly) is its own spec.

## File layout

SpecKit manages its own folder structure inside this directory. Do not hand-edit files under SpecKit-owned subfolders.
