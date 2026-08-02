# Terminal Hero Panel Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Spline 3D keyboard (`AnimatedBackground`) with a frameless `npx create-bruce-vo` terminal panel in the hero's right half.

**Architecture:** Delete `animated-background.tsx` entirely, remove its usage from `page.tsx`, then add a `TerminalHero` component directly inside `hero.tsx` — no new files. The terminal uses a `useEffect` typewriter for line 1 and Framer Motion `motion.div` with explicit delays for subsequent lines.

**Tech Stack:** React (useState, useEffect), Framer Motion (motion.div), Tailwind CSS, existing `usePreloader` hook.

---

## File Map

| File | Action |
|---|---|
| `src/components/animated-background.tsx` | **Delete** |
| `src/app/page.tsx` | Remove `AnimatedBackground` import + fixed wrapper div |
| `src/components/sections/hero.tsx` | Add `TerminalHero` component + right panel div |
| `src/components/sections/skills.tsx` | Remove stale "also try the 3D keyboard above" block |
| `.gitignore` | Add `.superpowers/` entry |

---

## Task 1: Remove AnimatedBackground

**Files:**
- Delete: `src/components/animated-background.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1.1: Delete `animated-background.tsx`**

  ```bash
  rm src/components/animated-background.tsx
  ```

- [ ] **Step 1.2: Update `page.tsx`**

  Replace the entire file content with:

  ```tsx
  "use client";

  import React from "react";
  import SmoothScroll from "@/components/smooth-scroll";
  import { cn } from "@/lib/utils";
  import SkillsSection from "@/components/sections/skills";
  import ProjectsSection from "@/components/sections/projects";
  import ContactSection from "@/components/sections/contact";
  import HeroSection from "@/components/sections/hero";

  function MainPage() {
    return (
      <>
        <SmoothScroll>
          <main className={cn("bg-slate-100 dark:bg-transparent")}>
            <HeroSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </main>
        </SmoothScroll>
      </>
    );
  }

  export default MainPage;
  ```

- [ ] **Step 1.3: Verify build is clean**

  ```bash
  npm run build 2>&1 | tail -20
  ```

  Expected: `✓ Compiled successfully` with no errors referencing `animated-background` or `AnimatedBackground`.

- [ ] **Step 1.4: Commit**

  ```bash
  git add src/app/page.tsx
  git rm src/components/animated-background.tsx
  git commit -m "feat: remove Spline 3D keyboard (AnimatedBackground)"
  ```

---

## Task 2: Add `TerminalHero` to `hero.tsx`

**Files:**
- Modify: `src/components/sections/hero.tsx`

- [ ] **Step 2.1: Add Framer Motion import and terminal constants**

  In `hero.tsx`, add `motion` to the existing React import line and add the terminal data below the existing imports:

  Add to the imports block at the top of the file:
  ```tsx
  import { motion } from "framer-motion";
  ```

  Then, directly below all imports (before `const HeroSection`), add:

  ```tsx
  const COMMAND = "npx create-bruce-vo";

  const LINES: { id: string; content: string; colorClass: string; delay: number }[] = [
    { id: "l1", content: "  ▸ installing skills...",               colorClass: "text-muted-foreground/30", delay: 0 },
    { id: "l2", content: "  ✔ next.js 14 · react 18 · typescript", colorClass: "text-green-400",          delay: 0.15 },
    { id: "l3", content: "  ✔ node.js · express · postgresql",     colorClass: "text-green-400",          delay: 0.30 },
    { id: "l4", content: "  ✔ docker · aws · linux",               colorClass: "text-green-400",          delay: 0.45 },
    { id: "l5", content: "  ▸ configuring personality...",          colorClass: "text-muted-foreground/30", delay: 0.85 },
    { id: "l6", content: "  ★ seeking internship · open to work",  colorClass: "text-yellow-400",         delay: 1.05 },
    { id: "l7", content: "  ready in 0.02s",                       colorClass: "text-green-400",          delay: 1.35 },
  ];
  ```

- [ ] **Step 2.2: Add `TerminalHero` component**

  Directly above `const HeroSection`, add:

  ```tsx
  const TerminalHero = () => {
    const { isLoading } = usePreloader();
    const [typed, setTyped] = useState("");
    const [cmdDone, setCmdDone] = useState(false);

    useEffect(() => {
      if (isLoading) return;
      let i = 0;
      const id = setInterval(() => {
        i++;
        setTyped(COMMAND.slice(0, i));
        if (i >= COMMAND.length) {
          clearInterval(id);
          setTimeout(() => setCmdDone(true), 300);
        }
      }, 80);
      return () => clearInterval(id);
    }, [isLoading]);

    return (
      <div className="font-mono text-sm leading-relaxed select-none" aria-hidden>
        {/* Command line with typewriter cursor */}
        <div className="flex items-center gap-2">
          <span className="text-[var(--brand)]">❯</span>
          <span className="text-foreground">{typed}</span>
          {!cmdDone && (
            <motion.span
              animate={{ opacity: [1, 1, 0, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
              className="inline-block w-[7px] h-[14px] bg-[var(--brand)]"
            />
          )}
        </div>

        {/* Subsequent lines — each with its own delay */}
        {cmdDone && (
          <>
            {LINES.map((line) => (
              <motion.div
                key={line.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: line.delay, duration: 0.18, ease: "easeOut" }}
                className={line.colorClass}
              >
                {line.content}
              </motion.div>
            ))}

            {/* Idle blinking cursor */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.18 }}
              className="flex items-center gap-2"
            >
              <span className="text-[var(--brand)]">❯</span>
              <motion.span
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
                className="inline-block w-[7px] h-[14px] bg-[var(--brand)]"
              />
            </motion.div>
          </>
        )}
      </div>
    );
  };
  ```

- [ ] **Step 2.3: Update hero layout to include right panel**

  In `HeroSection`'s JSX, locate:
  ```tsx
  <div className="relative z-10 h-full flex items-center">
    <div
      className={cn(
        "flex flex-col justify-center items-center md:items-start",
        "px-6 sm:px-10 md:pl-16 lg:pl-24 xl:pl-32",
        "w-full md:w-1/2",
        "md:border-l-2 border-[var(--brand)]/20"
      )}
    >
  ```

  The right-panel div is added as a sibling **after the closing `</div>` of the left content div** and **before the closing `</div>` of `relative z-10 h-full flex items-center`**:

  ```tsx
  <div className="relative z-10 h-full flex items-center">
    {/* left content — unchanged */}
    <div
      className={cn(
        "flex flex-col justify-center items-center md:items-start",
        "px-6 sm:px-10 md:pl-16 lg:pl-24 xl:pl-32",
        "w-full md:w-1/2",
        "md:border-l-2 border-[var(--brand)]/20"
      )}
    >
      {!isLoading && (
        <div className="flex flex-col gap-3 w-full">
          {/* ... all existing content unchanged ... */}
        </div>
      )}
    </div>

    {/* right panel — desktop only */}
    <div className="hidden md:flex w-1/2 h-full items-center justify-center px-16">
      <TerminalHero />
    </div>
  </div>
  ```

- [ ] **Step 2.4: Start dev server and verify visually**

  ```bash
  npm run dev
  ```

  Open `http://localhost:3000`. Check:
  - On desktop (≥ 768px): right half of hero shows the terminal typing out `npx create-bruce-vo`, then lines appear in sequence, ending with a blinking amber cursor
  - On mobile (< 768px): terminal is hidden — left content fills full width, no layout shift
  - Terminal text uses JetBrains Mono, amber prompt, green checkmarks, yellow star, muted dim lines
  - After preloader clears, typewriter starts automatically

- [ ] **Step 2.5: Commit**

  ```bash
  git add src/components/sections/hero.tsx
  git commit -m "feat: add TerminalHero panel to hero right half"
  ```

---

## Task 3: Clean up `skills.tsx`

**Files:**
- Modify: `src/components/sections/skills.tsx`

- [ ] **Step 3.1: Remove stale keyboard hint**

  In `skills.tsx`, locate and delete this entire block (~lines 159–168):

  ```tsx
  {/* Keyboard interaction hint */}
  <ScrollReveal delay={0.4}>
    <div className="mt-16 flex items-center gap-4">
      <div className="h-px flex-1 bg-border" />
      <p className="text-xs font-mono text-muted-foreground/40 uppercase tracking-widest">
        also try the 3D keyboard above
      </p>
      <div className="h-px flex-1 bg-border" />
    </div>
  </ScrollReveal>
  ```

- [ ] **Step 3.2: Verify build**

  ```bash
  npm run build 2>&1 | tail -10
  ```

  Expected: `✓ Compiled successfully`

- [ ] **Step 3.3: Commit**

  ```bash
  git add src/components/sections/skills.tsx
  git commit -m "chore: remove stale 3D keyboard hint from skills section"
  ```

---

## Task 4: Update `.gitignore`

- [ ] **Step 4.1: Add `.superpowers/` to `.gitignore`**

  Append to `.gitignore`:

  ```
  # brainstorming session artifacts
  .superpowers/
  ```

- [ ] **Step 4.2: Commit**

  ```bash
  git add .gitignore
  git commit -m "chore: ignore .superpowers brainstorm artifacts"
  ```

---

## Verification Checklist

After all tasks:

- [ ] `npm run build` exits 0 with no TypeScript errors
- [ ] `npm run lint` exits 0
- [ ] Hero desktop: terminal visible in right half, animation plays on load
- [ ] Hero mobile: terminal hidden, layout unchanged
- [ ] Skills section: no "3D keyboard" hint visible
- [ ] No Spline/WebGL network requests in browser DevTools Network tab
