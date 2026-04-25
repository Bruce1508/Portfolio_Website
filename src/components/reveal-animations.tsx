"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef } from "react";

const EASE_OUT_QUART: [number, number, number, number] = [0.25, 1, 0.5, 1];

interface BlurInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
}
export const BlurIn = ({
  children,
  className,
  variant,
  delay = 0,
  duration = 0.7,
}: BlurInProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(8px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration, delay, ease: EASE_OUT_QUART }}
      variants={combinedVariants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

interface BoxRevealProps {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  boxColor?: string;
  duration?: number;
  delay?: number;
  once?: boolean;
}
export const BoxReveal = ({
  children,
  width = "fit-content",
  boxColor,
  duration = 0.5,
  delay,
  once = true,
}: BoxRevealProps) => {
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      mainControls.start("visible");
    } else {
      slideControls.start("hidden");
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay, ease: EASE_OUT_QUART }}
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration, ease: EASE_OUT_QUART, delay }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
          background: boxColor ?? "#ffffff00",
        }}
      />
    </div>
  );
};

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  yOffset?: number;
}
export const ScrollReveal = ({
  children,
  delay = 0,
  className,
  yOffset = 20,
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{ duration: 0.5, delay, ease: EASE_OUT_QUART }}
    >
      {children}
    </motion.div>
  );
};
