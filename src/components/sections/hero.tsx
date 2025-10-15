import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState, useEffect, useMemo } from "react";
import { Button } from "../ui/button";
import { File, Github, Linkedin, Mail, Sparkles, Code2, Rocket, Coffee } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin, SiReact, SiNextdotjs, SiNodedotjs, SiTypescript, SiTailwindcss, SiDocker } from "react-icons/si";
import { config } from "@/data/config";

const HeroSection = () => {
  const { isLoading } = usePreloader();
  const [typedText, setTypedText] = useState("");
  const roles = useMemo(() => [
    "Full Stack Developer",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer"
  ], []);
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation effect
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

  // Floating tech badges data
  const techStack = [
    { icon: <SiReact className="w-5 h-5" />, name: "React", delay: "0s" },
    { icon: <SiNextdotjs className="w-5 h-5" />, name: "Next.js", delay: "0.5s" },
    { icon: <SiNodedotjs className="w-5 h-5" />, name: "Node.js", delay: "1s" },
    { icon: <SiTypescript className="w-5 h-5" />, name: "TypeScript", delay: "1.5s" },
    { icon: <SiTailwindcss className="w-5 h-5" />, name: "Tailwind", delay: "2s" },
    { icon: <SiDocker className="w-5 h-5" />, name: "Docker", delay: "2.5s" },
  ];

  // Quick stats
  const stats = [
    { icon: <Code2 className="w-5 h-5" />, label: "Projects Built", value: "10+" },
    { icon: <Coffee className="w-5 h-5" />, label: "Cups of Coffee", value: "∞" },
  ];

  return (
    <section id="hero" className={cn("relative w-full h-screen overflow-hidden")}>
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
             style={{ animationDuration: "4s" }} />
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
             style={{ animationDuration: "6s" }} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
             style={{ animationDuration: "5s" }} />
      </div>

      <div className="grid md:grid-cols-2 relative z-10">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-center items-center md:items-start",
            "px-6 sm:px-8 md:p-24 lg:p-40 xl:p-48"
          )}
        >
          {!isLoading && (
            <>
              <div className="space-y-5 w-full mt-8">
                {/* Internship Badge */}
                <BlurIn delay={0.5}>
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 border-2 border-emerald-400/40 backdrop-blur-sm ml-3 shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-300">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400">
                      Seeking Internship Opportunities
                    </span>
                  </div>
                </BlurIn>

                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "md:self-start font-thin text-md text-slate-500 dark:text-zinc-400 ml-3",
                      "cursor-default font-display sm:text-xl md:text-xl"
                    )}
                  >
                    Hi, I am
                  </p>
                </BlurIn>

                <BlurIn delay={1}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <h1
                        className={cn(
                          "font-black text-6xl ml-1 text-left relative group",
                          "cursor-default font-display sm:text-7xl md:text-9xl",
                          "bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500",
                          "animate-gradient-x drop-shadow-2xl",
                          "hover:scale-105 transition-transform duration-300"
                        )}
                        style={{
                          backgroundSize: "200% auto",
                        }}
                      >
                        {config.author}
                        {/* Glow effect on hover */}
                        <span className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-300 -z-10" />
                      </h1>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="dark:bg-white dark:text-black"
                    >
                      <Sparkles className="inline w-4 h-4 mr-1" />
                      theres something waiting for you in devtools
                    </TooltipContent>
                  </Tooltip>
                </BlurIn>

                {/* Typing Animation Subtitle */}
                <BlurIn delay={1.2}>
                  <div className="ml-3 h-12 md:h-14 flex items-center">
                    <p
                      className={cn(
                        "font-semibold text-xl text-slate-700 dark:text-zinc-200",
                        "cursor-default font-display sm:text-2xl md:text-3xl"
                      )}
                    >
                      A {typedText}
                      <span className="animate-pulse text-purple-500">|</span>
                    </p>
                  </div>
                </BlurIn>

                {/* Bio/Tagline */}
                <BlurIn delay={1.4}>
                  <p className="ml-3 mt-2 text-base md:text-lg text-slate-600 dark:text-zinc-400 max-w-xl leading-relaxed">
                    Building web apps that scale — and learning new tricks along the way
                  </p>
                </BlurIn>

                {/* Quick Stats */}
                <BlurIn delay={1.6}>
                  <div className="flex flex-wrap gap-3 ml-3 mt-8">
                    {stats.map((stat, index) => (
                      <div
                        key={stat.label}
                        className="group flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-gradient-to-br from-slate-50/80 to-slate-100/80 dark:from-slate-800/40 dark:to-slate-900/40 border border-slate-200/60 dark:border-slate-700/40 backdrop-blur-md hover:scale-105 hover:border-purple-400/50 dark:hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
                        style={{
                          animation: `fadeInUp 0.6s ease-out ${1.6 + index * 0.1}s backwards`,
                        }}
                      >
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                          <span className="text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300 inline-block">
                            {stat.icon}
                          </span>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 dark:text-zinc-500 font-semibold uppercase tracking-wide">
                            {stat.label}
                          </p>
                          <p className="text-xl font-black text-slate-800 dark:text-zinc-100">
                            {stat.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </BlurIn>

                {/* Tech Stack Badges */}
                <BlurIn delay={1.8}>
                  <div className="ml-3 mt-8">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-1 w-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
                      <p className="text-sm font-bold text-slate-700 dark:text-zinc-300 uppercase tracking-wider">
                        Tech Stack
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      {techStack.map((tech, index) => (
                        <div
                          key={tech.name}
                          className="group relative px-4 py-2.5 rounded-xl bg-gradient-to-br from-slate-100/90 to-slate-200/90 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-300/60 dark:border-slate-700/50 hover:border-purple-400/60 dark:hover:border-purple-500/60 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20 cursor-default"
                          style={{
                            animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                            animationDelay: tech.delay,
                          }}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="text-slate-700 dark:text-slate-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors group-hover:scale-110 transition-transform duration-200">
                              {tech.icon}
                            </span>
                            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                              {tech.name}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </BlurIn>
              </div>

              {/* Action Buttons */}
              <div className="mt-12 md:ml-3 flex flex-col gap-4 w-full md:w-auto">
                <div className="flex flex-wrap gap-4 items-center">
                  <BoxReveal delay={2} width="fit-content">
                    <Tooltip delayDuration={300}>
                      <TooltipTrigger asChild>
                        <Link href={"#contact"}>
                          <Button
                            size="lg"
                            className="group bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 border-0 text-white font-bold shadow-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-200 px-8 py-6 text-base rounded-xl"
                          >
                            <Mail size={20} className="mr-2 group-hover:rotate-12 transition-transform duration-200" />
                            <span>Let&apos;s Connect</span>
                          </Button>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side="bottom" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 font-semibold">
                        <p>Let&apos;s build something amazing! ✨</p>
                      </TooltipContent>
                    </Tooltip>
                  </BoxReveal>

                  {/* Resume Button - Uncomment when ready */}
                  {/* <BoxReveal delay={2.1} width="auto">
                    <Link href={"YOUR_RESUME_LINK"} target="_blank">
                      <Button
                        variant="outline"
                        size="lg"
                        className="group border-2 border-slate-300 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-950/20 transition-all duration-300 px-6 py-6 rounded-xl"
                      >
                        <File size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                        <span className="font-semibold">Resume</span>
                      </Button>
                    </Link>
                  </BoxReveal> */}

                  <BoxReveal delay={2.2} width="fit-content">
                    <Tooltip delayDuration={300}>
                      <TooltipTrigger asChild>
                        <Link href={config.social.github} target="_blank">
                          <Button
                            variant="outline"
                            size="lg"
                            className="group border-2 border-slate-300 dark:border-slate-700 hover:border-slate-800 dark:hover:border-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all duration-300 hover:scale-110 p-4 rounded-xl shadow-md hover:shadow-xl"
                          >
                            <SiGithub size={22} className="group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                          </Button>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side="bottom" className="font-semibold">
                        <p>GitHub Profile</p>
                      </TooltipContent>
                    </Tooltip>
                  </BoxReveal>

                  <BoxReveal delay={2.4} width="fit-content">
                    <Tooltip delayDuration={300}>
                      <TooltipTrigger asChild>
                        <Link href={config.social.linkedin} target="_blank">
                          <Button
                            variant="outline"
                            size="lg"
                            className="group border-2 border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-300 hover:scale-110 p-4 rounded-xl shadow-md hover:shadow-xl hover:shadow-blue-500/20"
                          >
                            <SiLinkedin size={22} className="group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 text-blue-600 dark:text-blue-400" />
                          </Button>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side="bottom" className="font-semibold">
                        <p>LinkedIn Profile</p>
                      </TooltipContent>
                    </Tooltip>
                  </BoxReveal>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Right side - keeping the 3D keyboard space */}
        <div className="grid col-span-1 relative">
          {/* Optional: Add some decorative elements here */}
        </div>
      </div>

      <div className="absolute bottom-10 left-[50%] translate-x-[-50%] z-20">
        <ScrollDownIcon />
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
