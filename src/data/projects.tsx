import React from "react";
import { config } from "@/data/config";
import { Cpu } from "lucide-react";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiFastapi,
  SiFramer,
  SiGooglegemini,
  SiPlaywright,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiSqlite,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
} from "react-icons/si";

export type TechBadge = { label: string; icon: React.ReactNode };

export type Project = {
  /** Stable id. Doubles as the screenshot directory name. */
  slug: string;
  /** Display order, shown as a large numeral on the card. */
  num: string;
  category: string;
  title: string;
  description: string;
  tech: TechBadge[];
  /** Paths under /assets/projects-screenshots/<slug>/. Empty until captured. */
  images: string[];
  live?: string;
  /** Overrides the default "Live site" link label. */
  liveLabel?: string;
  github?: string;
  wip?: boolean;
  /** Renders on the homepage section as well as /projects. */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "rootlens",
    num: "01",
    category: "AI Agent · Data Systems",
    title: "RootLens",
    description:
      "A local-first AI analyst that answers why a business metric moved, not just that it moved. The engine is a bounded script rather than a free-form agent loop: fixed analytics calls feed one LLM decomposition, and the model earns an open-ended move only when a hypothesis stays inconclusive — its single ad hoc query parsed with sqlglot and run under a read-only Postgres role. Every claim cites an evidence id that opens the exact SQL and rows behind it, and a report carrying an unverifiable citation is rejected before it ships.",
    tech: [
      { label: "FastAPI", icon: <SiFastapi /> },
      { label: "Python", icon: <SiPython /> },
      { label: "PostgreSQL", icon: <SiPostgresql /> },
      { label: "Next.js", icon: <RiNextjsFill /> },
      { label: "Ollama", icon: <Cpu /> },
    ],
    images: [
      "/assets/projects-screenshots/rootlens/dashboard.png",
      "/assets/projects-screenshots/rootlens/investigation.png",
      "/assets/projects-screenshots/rootlens/evidence.png",
    ],
    github: "https://github.com/Bruce1508/RootLens",
    featured: true,
  },
  {
    slug: "bb-cli",
    num: "02",
    category: "Developer Tool · CLI",
    title: "bb-cli",
    description:
      "A terminal client for Blackboard LMS, published on PyPI. Playwright drives a headless browser through an LMS that exposes no public API, caching deadlines, grades, and announcements into a local SQLite database — which you then query in plain English. Inference runs locally through Ollama, so coursework never leaves the machine, and credentials live in the OS keyring rather than a config file.",
    tech: [
      { label: "Python", icon: <SiPython /> },
      { label: "Playwright", icon: <SiPlaywright /> },
      { label: "SQLite", icon: <SiSqlite /> },
      { label: "Ollama", icon: <Cpu /> },
    ],
    images: [],
    live: "https://pypi.org/project/blackboard-cli/",
    liveLabel: "View on PyPI",
    github: "https://github.com/Bruce1508/bb-cli",
    featured: true,
  },
  {
    slug: "linguistic-twin",
    num: "03",
    category: "Systems Design · AI",
    title: "Linguistic Twin",
    description:
      "A French learner-modeling system aimed at the TCF Canada exam — a data layer rather than a chatbot. Submissions are parsed into tagged error events that are written once and never edited; the learner profile is a pure recomputation over that event log, not a mutable row. A \"Reverse Tutor\" inverts the usual loop, asking the learner to correct errors the model produced on purpose.",
    tech: [
      { label: "Next.js", icon: <RiNextjsFill /> },
      { label: "TypeScript", icon: <SiTypescript /> },
      { label: "PostgreSQL", icon: <SiPostgresql /> },
      { label: "Prisma", icon: <SiPrisma /> },
      { label: "Gemini", icon: <SiGooglegemini /> },
    ],
    images: [],
    github: "https://github.com/Bruce1508/Twin",
    wip: true,
    featured: true,
  },
  {
    slug: "portfolio",
    num: "04",
    category: "Full-Stack · Interactive",
    title: "Portfolio Website",
    description:
      "An interactive developer portfolio featuring a 3D mechanical keyboard built with Spline, section transitions powered by GSAP ScrollTrigger, and a contact form backed by the Resend API.",
    tech: [
      { label: "Next.js", icon: <RiNextjsFill /> },
      { label: "TypeScript", icon: <SiTypescript /> },
      { label: "Tailwind", icon: <SiTailwindcss /> },
      { label: "Spline", icon: <SiThreedotjs /> },
      { label: "Framer Motion", icon: <SiFramer /> },
    ],
    images: [],
    live: config.site,
    github: config.social.github,
    featured: true,
  },
];

export default projects;
