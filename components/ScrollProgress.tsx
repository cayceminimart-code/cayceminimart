"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Slim gradient progress bar pinned to the very top of the page. Transform-only
 * (scaleX), so it's cheap and smooth.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-cherry-500 via-gold to-cherry-500"
    />
  );
}
