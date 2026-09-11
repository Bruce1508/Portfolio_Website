# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (Next.js on port 3000)
npm run build    # Production build
npm run lint     # ESLint check
npm start        # Start production server
```

No test suite is configured.

## Environment Variables

Required in `.env.local`:
- `RESEND_API_KEY` — used by `/api/send` to send contact form emails via Resend
- `UMAMI_DOMAIN` and `UMAMI_SITE_ID` — analytics script (optional, injected in `<head>`)

## Architecture

Next.js 14 App Router portfolio, fully static except for the contact form API route.

### Routing

| Route | Purpose |
|---|---|
| `/` | Single-page portfolio (Hero → Skills → Projects → Contact sections) |
| `/about` | About page |
| `/blog` | Blog page |
| `/projects` | Projects listing page |
| `/api/send` | POST endpoint — validates with Zod, sends email via Resend |

### Content Layer (`src/data/`)

All portfolio content is centralized here — edit these files to update what displays on the site:

- `config.ts` — site metadata, author info, social links, email, deployed URL
- `constants.ts` — `SKILLS` record (keyed by `SkillNames` enum) and `themeDisclaimers` strings
- `projects.tsx` — **the single source of truth for projects.** Both the homepage
  section (`components/sections/projects.tsx`, which renders `projects.filter(p => p.featured)`)
  and the `/projects` route read from it. Adding a project means editing this file only.
  Screenshots go in `public/assets/projects-screenshots/<slug>/`; leaving `images: []`
  is supported and simply hides the carousel on `/projects`.

### Component Organization

- `src/components/sections/` — the four main homepage sections (Hero, Skills, Projects, Contact)
- `src/components/ui/` — shadcn/ui base components plus custom animated variants (ElasticCursor, 3d-pin, etc.)
- `src/components/` — layout-level wrappers: `Preloader`, `SmoothScroll` (Lenis), `AnimatedBackground`, `EasterEggs`, header, footer
- `src/hooks/` — custom hooks: mouse position, media query, viewport, devtools detection, throttle
- `src/lib/` — `utils.ts` (re-exports `cn()` and `sleep()`), Lenis smooth-scroll wrapper

### Styling

Tailwind CSS with CSS custom properties for theming (dark mode via `next-themes`). The `cn()` helper from `@/lib/utils` merges `clsx` + `tailwind-merge` — use it everywhere for conditional classes.

### Animation Stack

Three animation libraries coexist:
- **Framer Motion** — component-level enter/exit animations
- **GSAP** (`@gsap/react`) — timeline-based animations
- **Lenis** — smooth scroll, wrapped in `<SmoothScroll>` which wraps the entire page

### Disabled Features

Socket.IO realtime cursors are fully commented out in `layout.tsx` and `contexts/socketio.tsx`. The backend server was removed; don't re-enable without adding a server.

### Path Alias

`@/` maps to `src/` (configured in `tsconfig.json`).
