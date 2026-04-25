import Link from "next/link";
import React from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full h-screen md:h-[150dvh]">
      <div className="top-[70px] sticky mb-96 pt-10">
        {/* Amber rule above heading — anchors the sticky block visually */}
        <div className="w-16 h-px bg-[var(--brand)] mx-auto mb-6" />
        <Link href={"#skills"}>
          <BoxReveal width="100%">
            <h2
              className={cn(
                "text-4xl text-center text-foreground md:text-7xl font-black tracking-tight"
              )}
            >
              SKILLS
            </h2>
          </BoxReveal>
        </Link>
        <p className="mx-auto mt-5 max-w-3xl text-center font-mono text-xs text-muted-foreground tracking-widest uppercase">
          hover a key · or press one on your keyboard
        </p>
      </div>
    </section>
  );
};

export default SkillsSection;
