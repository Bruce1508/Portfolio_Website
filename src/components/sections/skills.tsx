/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { SKILLS, Skill } from "@/data/constants";
import { ScrollReveal, BoxReveal } from "../reveal-animations";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type CategoryDef = { label: string; keys: string[] };

const CATEGORIES: CategoryDef[] = [
  {
    label: "Frontend",
    keys: ["js", "ts", "html", "css", "react", "nextjs", "tailwind"],
  },
  {
    label: "Backend",
    keys: ["nodejs", "express", "postgres", "mongodb", "firebase", "vue", "wordpress"],
  },
  {
    label: "DevOps & Cloud",
    keys: ["git", "github", "linux", "docker", "aws", "vercel"],
  },
  {
    label: "Tools",
    keys: ["nginx", "npm", "prettier", "vim"],
  },
];

const SkillChip = ({
  skillKey,
  onHover,
  onLeave,
  isActive,
}: {
  skillKey: string;
  onHover: (s: Skill) => void;
  onLeave: () => void;
  isActive: boolean;
}) => {
  const skill = SKILLS[skillKey as keyof typeof SKILLS];
  if (!skill) return null;

  return (
    <button
      className={cn(
        "group inline-flex items-center gap-2.5 px-3.5 py-2",
        "border transition-all duration-200 cursor-default",
        isActive
          ? "border-[var(--brand)] bg-[var(--brand)]/10 text-foreground"
          : "border-border hover:border-[var(--brand)]/50 hover:bg-[var(--brand)]/5 text-muted-foreground hover:text-foreground"
      )}
      onMouseEnter={() => onHover(skill)}
      onMouseLeave={onLeave}
    >
      <img
        src={skill.icon}
        alt={skill.label}
        className={cn(
          "w-4 h-4 object-contain transition-opacity",
          isActive ? "opacity-100" : "opacity-60 group-hover:opacity-100"
        )}
      />
      <span className="text-xs font-mono tracking-wide">{skill.label}</span>
    </button>
  );
};

const SkillsSection = () => {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);

  return (
    <section id="skills" className="w-full min-h-screen py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Section identifier */}
        <p className="text-xs font-mono text-[var(--brand)] uppercase tracking-widest mb-4">
          01 ── skills
        </p>

        {/* Heading */}
        <Link href="#skills">
          <BoxReveal width="fit-content">
            <h2
              className="text-foreground font-black tracking-tight leading-none"
              style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
            >
              SKILLS
            </h2>
          </BoxReveal>
        </Link>

        {/* Live skill readout */}
        <div className="mt-8 mb-12 border-l-2 border-[var(--brand)]/40 pl-4 h-10 flex items-center">
          <AnimatePresence mode="wait">
            {activeSkill ? (
              <motion.p
                key={activeSkill.name}
                className="text-sm font-mono text-foreground/80 leading-relaxed"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                <span className="text-[var(--brand)] font-bold">
                  {activeSkill.label}
                </span>
                {" — "}
                {activeSkill.shortDescription.replace(/\n/g, " ")}
              </motion.p>
            ) : (
              <motion.p
                key="hint"
                className="text-xs font-mono text-muted-foreground/40 uppercase tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                hover a skill to explore
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Category rows */}
        <div className="flex flex-col gap-10">
          {CATEGORIES.map((cat, catIdx) => (
            <ScrollReveal key={cat.label} delay={catIdx * 0.08}>
              <div>
                {/* Category header */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="shrink-0 text-xs font-mono text-[var(--brand)] uppercase tracking-widest">
                    {cat.label}
                  </span>
                  <div className="h-px flex-1 bg-[var(--brand)]/20" />
                </div>

                {/* Chips */}
                <div className="flex flex-wrap gap-2">
                  {cat.keys.map((key) => (
                    <SkillChip
                      key={key}
                      skillKey={key}
                      onHover={setActiveSkill}
                      onLeave={() => setActiveSkill(null)}
                      isActive={activeSkill?.name === key}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>


      </div>
    </section>
  );
};

export default SkillsSection;
