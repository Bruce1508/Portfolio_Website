import React from "react";
import { Cpu } from "lucide-react";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiFastapi,
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiJest,
  SiGithubactions,
  SiGooglegemini,
  SiPlaywright,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export type TechBadge = { label: string; icon: React.ReactNode };

export type Project = {
  /** Stable id. Doubles as the screenshot directory name. */
  slug: string;
  /** Stable display order for project listings. */
  num: string;
  category: string;
  title: string;
  description: string;
  summary: string;
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
    summary:
      "An AI analyst that explains why a metric moved — with the SQL and evidence to back it up.",
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
    live: "https://rootlens-demo.vercel.app",
    liveLabel: "Live demo (read-only)",
    github: "https://github.com/Bruce1508/RootLens",
    featured: true,
  },
  {
    slug: "bb-cli",
    num: "02",
    category: "Developer Tool · CLI",
    title: "bb-cli",
    summary:
      "Your Blackboard coursework, one terminal away. Built for local, private access.",
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
    summary:
      "A French learning system that learns from your mistakes, then asks you to correct its own.",
    description:
      'A French learner-modeling system aimed at the TCF Canada exam — a data layer rather than a chatbot. Submissions are parsed into tagged error events that are written once and never edited; the learner profile is a pure recomputation over that event log, not a mutable row. A "Reverse Tutor" inverts the usual loop, asking the learner to correct errors the model produced on purpose.',
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
    slug: "skipclasspro",
    num: "04",
    category: "Mobile / Student tools",
    title: "SkipClassPro",
    summary:
      "A React Native application with synchronized deadlines and automated reminders for students.",
    description:
      "As a Full-Stack Application Developer from May to December 2025, I refactored the Android application with real-time deadline synchronization and push reminders, reducing missed submissions by 90% across 50+ users. Form validation and Jest unit and integration tests improved data consistency by 75%. GitHub Actions build, test, and release pipelines with coverage gates cut post-release defects by 50%.",
    tech: [
      { label: "React Native", icon: <SiReact /> },
      { label: "Jest", icon: <SiJest /> },
      { label: "GitHub Actions", icon: <SiGithubactions /> },
    ],
    images: [],
    featured: false,
  },
  {
    slug: "cshub",
    num: "05",
    category: "Web / Developer education",
    title: "CSHub",
    summary:
      "Repository health dashboards and interactive programming exercises for a developer community.",
    description:
      "As a Frontend Web Developer since May 2025, I built a JavaScript, Node.js, and SQL Server application to analyze code quality across 40+ repositories. Interactive components provided real-time syntax feedback for 50+ users learning programming concepts. Jest integration tests and documented test patterns supported reliability within Webpack and npm workflows.",
    tech: [
      { label: "JavaScript", icon: <SiJavascript /> },
      { label: "Node.js", icon: <SiNodedotjs /> },
      { label: "SQL Server", icon: <Cpu /> },
      { label: "Jest", icon: <SiJest /> },
    ],
    images: [],
    featured: false,
  },
];

export default projects;
