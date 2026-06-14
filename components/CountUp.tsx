"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

/**
 * Counts up from 0 to `to` when scrolled into view. Snaps straight to the
 * final value when reduced motion is preferred.
 */
export function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 1.6,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, to, duration, reduce]);

  return (
    <span ref={ref}>
      {prefix}
      {Math.round(value)}
      {suffix}
    </span>
  );
}
