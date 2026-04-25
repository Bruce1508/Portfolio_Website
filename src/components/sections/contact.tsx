"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { config } from "@/data/config";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

const EASE_OUT_QUART: [number, number, number, number] = [0.25, 1, 0.5, 1];

const STEPS = [
  { num: "01", label: "You send a message" },
  { num: "02", label: "I read it — usually within a day" },
  { num: "03", label: "We get on a call or connect async" },
];

const SOCIALS = [
  { label: "GitHub", href: config.social.github, icon: SiGithub },
  { label: "LinkedIn", href: config.social.linkedin, icon: SiLinkedin },
  { label: "Instagram", href: config.social.instagram, icon: SiInstagram },
];

const ContactSection = () => {
  const stepsRef = useRef(null);
  const stepsInView = useInView(stepsRef, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="min-h-screen max-w-7xl mx-auto px-4 md:px-8 pt-20">
      {/* Section identifier */}
      <p className="text-xs font-mono text-[var(--brand)] uppercase tracking-widest mb-4">
        03 ── contact
      </p>

      <Link href={"#contact"}>
        <h2
          className={cn("text-foreground font-black tracking-tight pb-2")}
          style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
        >
          LET&apos;S WORK <br />
          <span className="text-[var(--brand)]">TOGETHER</span>
        </h2>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 md:mt-20 pb-24">
        {/* Left — contact form */}
        <Card className="bg-card border border-border rounded-sm shadow-none">
          <CardHeader className="space-y-1.5 pb-4">
            <CardTitle className="text-xl font-mono font-bold text-foreground tracking-tight">
              Send a message
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Or reach me at{" "}
              <a
                target="_blank"
                href={`mailto:${config.email}`}
                className="text-[var(--brand)] hover:underline font-mono"
              >
                {config.email.replace(/@/g, "(at)")}
              </a>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        {/* Right — what to expect + socials */}
        <div className="flex flex-col gap-6 md:pl-8">
          {/* Process steps */}
          <div>
            <p className="text-xs font-mono text-[var(--brand)] uppercase tracking-widest mb-6">
              What happens next
            </p>
            <ol ref={stepsRef} className="flex flex-col gap-5">
              {STEPS.map((step, i) => (
                <motion.li
                  key={step.num}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={stepsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: EASE_OUT_QUART }}
                >
                  <span className="font-mono text-sm font-bold text-[var(--brand)] shrink-0 w-6 pt-0.5">
                    {step.num}
                  </span>
                  <div className="flex-1">
                    <div className="h-px w-full bg-border mb-3" />
                    <p className="text-sm text-foreground leading-relaxed">
                      {step.label}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* Divider */}
          <div className="h-px bg-border" />

          {/* Socials */}
          <div>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
              Also find me on
            </p>
            <div className="flex gap-3">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  className="group flex items-center gap-2 px-4 py-2.5 border border-border hover:border-[var(--brand)]/60 hover:bg-[var(--brand)]/5 transition-colors duration-200"
                >
                  <Icon
                    size={16}
                    className="text-muted-foreground group-hover:text-[var(--brand)] transition-colors duration-200"
                  />
                  <span className="text-xs font-mono text-muted-foreground group-hover:text-[var(--brand)] transition-colors duration-200">
                    {label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Availability note */}
          <div className="border border-border p-4 mt-auto">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand)] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--brand)]" />
              </span>
              <p className="text-xs font-mono font-semibold text-[var(--brand)] uppercase tracking-widest">
                Available for internships
              </p>
            </div>
            <p className="text-xs text-muted-foreground font-mono leading-relaxed pl-4">
              Open to full-stack, frontend, or backend roles. Remote or on-site.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
