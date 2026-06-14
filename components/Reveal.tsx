"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds. */
  delay?: number;
  /** Vertical travel distance in px. */
  y?: number;
  as?: "div" | "section" | "li" | "article" | "span";
};

/**
 * Fade-and-rise on scroll into view. Transform/opacity only (GPU-friendly).
 * Collapses to a plain fade with no movement when reduced motion is requested.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0.2 : 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
    >
      {children}
    </MotionTag>
  );
}
