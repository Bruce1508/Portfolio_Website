"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { config } from "@/data/config";
import { ScrollReveal } from "../reveal-animations";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import projects, { type Project, type TechBadge } from "@/data/projects";

const FEATURED = projects.filter((p) => p.featured);

const TechPill = ({ label, icon }: TechBadge) => (
  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-border text-xs font-mono text-muted-foreground">
    <span className="text-[var(--brand)] text-sm">{icon}</span>
    {label}
  </span>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <article
    className={cn(
      "relative border border-border bg-card p-8 md:p-10 flex flex-col gap-6 group",
      "transition-colors duration-300 hover:border-[var(--brand)]/40",
      project.wip && "opacity-75"
    )}
  >
    {/* Amber top border — thicker on hover */}
    <div className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--brand)]/30 group-hover:bg-[var(--brand)] transition-colors duration-300" />

    {/* Header row */}
    <div className="flex items-start justify-between gap-4">
      <div>
        <span className="font-mono text-xs text-[var(--brand)] uppercase tracking-widest">
          {project.category}
        </span>
        <h3
          className="font-black text-foreground tracking-tight mt-1 leading-none"
          style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
        >
          {project.title}
        </h3>
      </div>
      <span className="font-mono text-4xl font-bold text-[var(--brand)]/20 shrink-0 select-none leading-none mt-1">
        {project.num}
      </span>
    </div>

    {/* Description */}
    <p className="text-sm text-muted-foreground leading-relaxed">
      {project.description}
    </p>

    {/* Tech stack */}
    <div className="flex flex-wrap gap-2">
      {project.tech.map((t) => (
        <TechPill key={t.label} {...t} />
      ))}
    </div>

    {/* Links */}
    <div className="flex gap-3 mt-auto pt-2 border-t border-border">
      {project.live && !project.wip && (
        <Link
          href={project.live}
          target="_blank"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--brand)] hover:underline"
        >
          {project.liveLabel ?? "Live site"}
          <ArrowUpRight size={13} />
        </Link>
      )}
      {project.github && (
        <Link
          href={project.github}
          target="_blank"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-[var(--brand)] transition-colors"
        >
          <SiGithub size={13} />
          GitHub
        </Link>
      )}
      {project.wip && (
        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground/60">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand)] opacity-40" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--brand)]/60" />
          </span>
          In progress
        </span>
      )}
    </div>
  </article>
);

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto min-h-[100vh] flex flex-col justify-center px-4 md:px-8 py-24"
    >
      {/* Section identifier */}
      <p className="text-xs font-mono text-[var(--brand)] uppercase tracking-widest mb-4">
        02 ── projects
      </p>

      <Link href={"#projects"}>
        <h2
          className={cn("text-foreground font-black tracking-tight mb-12")}
          style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
        >
          Projects
        </h2>
      </Link>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {FEATURED.map((project, i) => (
          <ScrollReveal key={project.num} delay={i * 0.1}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>

      {/* GitHub CTA */}
      <ScrollReveal delay={0.2}>
        <div className="mt-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <Link
            href={config.social.github}
            target="_blank"
            className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-[var(--brand)] transition-colors duration-200"
          >
            <SiGithub size={14} />
            Browse all on GitHub
            <ArrowUpRight size={13} />
          </Link>
          <div className="h-px flex-1 bg-border" />
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ProjectsSection;
