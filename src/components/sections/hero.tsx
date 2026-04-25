"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState, useEffect, useMemo } from "react";
import { Button } from "../ui/button";
import { Mail, Sparkles } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";

const HeroSection = () => {
  const { isLoading } = usePreloader();
  const [typedText, setTypedText] = useState("");
  const roles = useMemo(
    () => [
      "Full Stack Developer",
      "Software Engineer",
      "Frontend Developer",
      "Backend Developer",
    ],
    []
  );
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (isLoading) return;

    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setTypedText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setTypedText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, isLoading, roles]);

  return (
    <section id="hero" className={cn("relative w-full h-screen overflow-hidden")}>
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 h-full flex items-center">
        <div
          className={cn(
            "flex flex-col justify-center items-center md:items-start",
            "px-6 sm:px-10 md:pl-16 lg:pl-24 xl:pl-32",
            "w-full md:w-1/2",
            // Subtle amber left-border — structural anchor on desktop
            "md:border-l-2 border-[var(--brand)]/20"
          )}
        >
          {!isLoading && (
            <div className="flex flex-col gap-3 w-full">
              {/* Status badge */}
              <BlurIn delay={0.5}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[var(--brand)]/40 bg-[var(--brand)]/10">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand)] opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--brand)]" />
                  </span>
                  <span className="text-xs font-mono font-semibold text-[var(--brand)] uppercase tracking-widest">
                    Seeking Internship
                  </span>
                </div>
              </BlurIn>

              {/* Name — tight with badge (same semantic unit) */}
              <BlurIn delay={0.8}>
                <Tooltip delayDuration={300}>
                  <TooltipTrigger asChild>
                    <h1
                      className={cn(
                        "font-black text-left text-foreground cursor-default",
                        "leading-none tracking-tight"
                      )}
                      style={{ fontSize: "clamp(3.5rem, 13vw, 10rem)" }}
                    >
                      {config.author}
                    </h1>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="dark:bg-white dark:text-black font-mono text-xs">
                    <Sparkles className="inline w-3 h-3 mr-1" />
                    theres something waiting for you in devtools
                  </TooltipContent>
                </Tooltip>
              </BlurIn>

              {/* Role — typing animation */}
              <BlurIn delay={1.1}>
                <div className="h-10 md:h-12 flex items-center">
                  <p className="font-mono text-xl md:text-2xl text-foreground/70 cursor-default">
                    A {typedText}
                    <span className="animate-pulse text-[var(--brand)]">|</span>
                  </p>
                </div>
              </BlurIn>

              {/* Tagline — generous top margin separates it from the name block */}
              <BlurIn delay={1.4}>
                <p className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed mt-3">
                  Building web apps that scale — and learning new tricks along
                  the way
                </p>
              </BlurIn>

              {/* CTAs — extra top margin signals "action zone" */}
              <div className="flex flex-wrap gap-3 items-center mt-6">
                <BoxReveal delay={1.7} width="fit-content">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={"#contact"}>
                        <Button
                          size="lg"
                          className="font-mono font-bold px-7 py-5 rounded-sm tracking-wide"
                        >
                          <Mail size={16} className="mr-2" />
                          Let&apos;s Connect
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="font-mono text-xs">
                      Let&apos;s build something amazing
                    </TooltipContent>
                  </Tooltip>
                </BoxReveal>

                <BoxReveal delay={1.9} width="fit-content">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={config.social.github} target="_blank" aria-label="GitHub profile">
                        <Button
                          variant="outline"
                          size="lg"
                          className="group border border-border hover:border-[var(--brand)]/60 hover:bg-[var(--brand)]/5 transition-colors duration-200 p-4 rounded-sm"
                        >
                          <SiGithub
                            size={20}
                            className="group-hover:text-[var(--brand)] transition-colors duration-200"
                          />
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="font-mono text-xs">
                      GitHub
                    </TooltipContent>
                  </Tooltip>
                </BoxReveal>

                <BoxReveal delay={2.1} width="fit-content">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={config.social.linkedin} target="_blank" aria-label="LinkedIn profile">
                        <Button
                          variant="outline"
                          size="lg"
                          className="group border border-border hover:border-[var(--brand)]/60 hover:bg-[var(--brand)]/5 transition-colors duration-200 p-4 rounded-sm"
                        >
                          <SiLinkedin
                            size={20}
                            className="group-hover:text-[var(--brand)] transition-colors duration-200"
                          />
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="font-mono text-xs">
                      LinkedIn
                    </TooltipContent>
                  </Tooltip>
                </BoxReveal>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-10 left-[50%] translate-x-[-50%] z-20">
        <ScrollDownIcon />
      </div>
    </section>
  );
};

export default HeroSection;
