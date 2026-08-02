# Real projects on the portfolio — one source of truth

**Date:** 2026-08-02
**Status:** implemented

## Problem

The site had **three** disconnected project lists:

| Location | Consumed by | Contents |
|---|---|---|
| `src/data/projects.tsx` | nobody (`grep "data/projects"` → 0 hits) | 3 "Coming Soon" placeholders |
| `src/components/sections/projects.tsx` | homepage | hardcoded array: `Portfolio Website`, plus a `More Projects` placeholder |
| `src/app/projects/page.tsx` | `/projects` route | 4 projects belonging to the original template author |

Two concrete defects followed from this:

1. `/projects` publicly displayed **Coding Ducks, Ghost Chat, Coupon Luxury, and JNTUA
   Results Analyser** — none of them Bruce's work — and every one of their images was
   broken, because the referenced directories (`projects-screenshots/codingducks/` etc.)
   do not exist in this repo.
2. `src/data/projects.tsx` was ~734 lines of dead code, yet `CLAUDE.md` described it as
   the content layer. Following the documentation led to editing a file that renders
   nowhere.

The actual request — publish `bb-cli` and `Linguistic Twin` — could not be satisfied by
a single edit while this held.

## Decision

Collapse all three into one source: `src/data/projects.tsx`, rewritten as a pure data
module. The homepage and `/projects` both import it.

```ts
export type Project = {
  slug: string;        // stable id; also the screenshot directory name
  num: string;         // "01" — display order
  category: string;
  title: string;
  description: string;
  tech: TechBadge[];
  images: string[];    // empty is valid — carousel is skipped
  live?: string;
  liveLabel?: string;  // defaults to "Live site"
  github?: string;
  wip?: boolean;
  featured?: boolean;  // homepage renders projects.filter(p => p.featured)
};
```

Two fields exist to solve specific problems:

- **`liveLabel`** — `bb-cli` is a CLI with no website. Its "live" destination is the
  PyPI page, and a button reading "Visit Website" would misdescribe it. The label is
  overridden to "View on PyPI"; every other project keeps the default.
- **`images: []`** — screenshots were deliberately deferred. `/projects` skips the
  Splide carousel entirely when the array is empty rather than rendering a blank
  200px box. The homepage never used images at all, so it is unaffected.

## Entries

| # | Project | live | github | wip |
|---|---|---|---|---|
| 01 | bb-cli | PyPI (`View on PyPI`) | yes | no |
| 02 | Linguistic Twin | — | yes | yes |
| 03 | Portfolio Website | `config.site` | yes | no |

Positioning, chosen so the two projects read as different kinds of evidence:

- **bb-cli** is presented as a *shipped product* — on PyPI, CI green, credentials in the
  OS keyring, inference local via Ollama so coursework never leaves the machine.
- **Linguistic Twin** is presented as *systems design* — immutable error events, a
  profile that is a pure recomputation rather than a mutable row, a fixed 52-tag
  taxonomy instead of free-form LLM labels. Explicitly not framed as a chatbot.

Removed: the `More Projects` placeholder, the 3 "Coming Soon" entries, and all 4
template-author projects.

## Out of scope

- **Screenshots.** Deferred at the user's request. When captured, they go in
  `public/assets/projects-screenshots/<slug>/` and the `images` array is filled in;
  no other file changes.
- **Restyling `/projects`.** It still uses the original template's zinc palette and
  Splide carousel, which does not match the Mechanic Noir homepage. Unifying the two
  is separate work.

## Privacy note

When screenshots are eventually taken, they must use **synthetic data**. `~/.bb/bb.db`
holds real Blackboard grades and deadlines, and Twin holds real French submissions;
publishing either to `public/` would put personal academic data on an indexed page
permanently.

## Verification

`npm run lint` — clean. `npm run build` — compiled successfully, 10/10 static pages.
