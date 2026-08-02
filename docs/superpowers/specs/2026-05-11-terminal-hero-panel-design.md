# Terminal Hero Panel — Design Spec
_Date: 2026-05-11_

## Summary

Replace the Spline 3D keycap keyboard (`AnimatedBackground`) with a frameless `npx create-bruce-vo` terminal panel in the hero section's right half. The replacement is pure React + Framer Motion — no WebGL, no heavy assets, no external 3D runtime.

---

## What Gets Removed

| Item | File | Action |
|---|---|---|
| Spline 3D keyboard scene | `src/components/animated-background.tsx` | Delete entire file |
| `<AnimatedBackground />` usage | `src/app/page.tsx` | Remove import + JSX |
| Stale keyboard hint text | `src/components/sections/skills.tsx` (line ~162) | Remove the `"also try the 3D keyboard above"` `<ScrollReveal>` block |

**Preloader note:** The preloader (`src/components/preloader/index.tsx`) has a 2.5s auto-complete GSAP tween. `bypassLoading()` was only called by Spline's `onLoad` as an optimization. Removing it is safe — loading completes on its own timer.

---

## What Gets Added

### `TerminalHero` component (inside `hero.tsx`)

A frameless terminal text panel. No card, no border, no window chrome — raw monospace text floating in the hero's right half.

**Placement:** Inside the existing hero `<section>`, a new right panel sibling to the left content div:
```jsx
// hero.tsx layout shape:
<section id="hero" className="relative w-full h-screen overflow-hidden">
  <div className="relative z-10 h-full flex items-center">
    {/* existing left content — unchanged */}
    <div className="... w-full md:w-1/2 ...">...</div>

    {/* new right panel — desktop only */}
    <div className="hidden md:flex w-1/2 h-full items-center justify-center px-16">
      <TerminalHero />
    </div>
  </div>
  ...
</section>
```

### Animation Sequence

Lines appear sequentially using Framer Motion `staggerChildren`. Total runtime ~4s from when the preloader clears (`isLoading === false`).

| Step | Content | Animation | Timing |
|---|---|---|---|
| 1 | `❯ npx create-bruce-vo` | Character-by-character typewriter | ~80ms/char |
| 2 | `  ▸ installing skills...` | Fade-in | 300ms after step 1 |
| 3 | `  ✔ next.js 14 · react 18 · typescript` | Slide-up + fade-in | Staggered +150ms |
| 4 | `  ✔ node.js · express · postgresql` | Slide-up + fade-in | Staggered +150ms |
| 5 | `  ✔ docker · aws · linux` | Slide-up + fade-in | Staggered +150ms |
| 6 | `  ▸ configuring personality...` | Fade-in | 400ms after step 5 |
| 7 | `  ★ seeking internship · open to work` | Slide-up + fade-in | 200ms after step 6 |
| 8 | `  ready in 0.02s` | Fade-in, green color | 300ms after step 7 |
| 9 | `❯ _` | Blinking cursor (CSS animation), stays | Immediately after step 8 |

Plays once on mount. Cursor blinks indefinitely. No loop.

### Color tokens (Mechanic Noir)
- Prompt `❯` : `text-[var(--brand)]` (amber-orange)
- Command text: `text-foreground`
- Dim lines (`▸ ...`): `text-muted-foreground/30`
- Checkmarks `✔`: `text-green-400`
- Star `★`: `text-yellow-400`
- `ready in 0.02s`: `text-green-400`
- All text: `font-mono` (JetBrains Mono)

---

## Files Changed

| File | Change |
|---|---|
| `src/components/animated-background.tsx` | **Delete** |
| `src/app/page.tsx` | Remove `AnimatedBackground` import + `<div className="top-0 z-0 fixed ..."><AnimatedBackground /></div>` |
| `src/components/sections/hero.tsx` | Add `TerminalHero` component + right panel div in hero layout |
| `src/components/sections/skills.tsx` | Remove stale "also try the 3D keyboard above" block (~lines 159–167) |

---

## Out of Scope

- No changes to skills chip grid (already redesigned in prior session)
- No changes to preloader timing
- No mobile version of terminal panel (hidden on `< md`)
- No keyboard interaction / hover-to-reveal skill descriptions (that lives in the skills section chips)
