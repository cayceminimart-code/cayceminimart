"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Fuel, MapPin, Navigation, Phone, Sparkles } from "lucide-react";
import { useRef } from "react";
import { AuroraBackground } from "./AuroraBackground";
import { usePerformanceMode } from "./usePerformanceMode";
import type { GasPrices, Store } from "./types";

export function Hero({
  store,
  prices,
}: {
  store: Store;
  prices: GasPrices;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { lowPower } = usePerformanceMode();
  const parallaxOn = !reduce && !lowPower;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Background drifts faster than content for depth.
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="grain relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* Animated backdrop */}
      <motion.div
        className="absolute inset-0 z-0"
        style={parallaxOn ? { y: bgY } : undefined}
      >
        <AuroraBackground />
      </motion.div>

      {/* Content column — vertically centered, CTAs anchored toward the bottom */}
      <motion.div
        className="container-px relative z-10 flex flex-1 flex-col pb-6 pt-20 sm:pb-12 sm:pt-28"
        style={parallaxOn ? { y: contentY, opacity: fade } : undefined}
      >
        <div className="flex flex-1 flex-col justify-center">
          <motion.span
            className="eyebrow mb-4 sm:mb-5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Cayce, South Carolina
          </motion.span>

          <motion.h1
            className="font-display text-[clamp(2.6rem,11vw,6rem)] font-bold leading-[0.98] tracking-tight"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-white">Cayce</span>
            <span className="shimmer-text block">Mini Mart</span>
          </motion.h1>

          <motion.p
            className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/70 sm:mt-5 sm:text-lg"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            {store.tagline}
          </motion.p>

          {/* Floating glass price card */}
          <motion.div
            className="animate-floaty mt-5 w-full max-w-sm sm:mt-7"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glass-strong rounded-2xl p-4 shadow-glow sm:p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-gold-300">
                  <Fuel className="h-4 w-4" aria-hidden="true" />
                  Today&apos;s Fuel
                </span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-white/40">
                  {prices.updatedLabel}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/[0.04] p-3">
                  <p className="text-[11px] uppercase tracking-wide text-white/50">
                    Regular · Cash
                  </p>
                  <p className="font-display text-2xl font-bold text-white">
                    {prices.regularCash}
                  </p>
                </div>
                <div className="rounded-xl bg-white/[0.04] p-3">
                  <p className="text-[11px] uppercase tracking-wide text-white/50">
                    Diesel · Cash
                  </p>
                  <p className="font-display text-2xl font-bold text-white">
                    {prices.dieselCash}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-[11px] leading-snug text-white/40">
                {prices.note}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Primary CTAs — full width & thumb-reachable on mobile */}
        <motion.div
          className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:max-w-md sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href={store.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sheen relative flex min-h-[52px] flex-1 items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cherry-500 to-cherry-600 px-6 text-base font-semibold text-white shadow-glow transition-transform active:scale-[0.98] sm:hover:scale-[1.02]"
          >
            <Navigation className="h-5 w-5" aria-hidden="true" />
            Get Directions
          </a>
          <a
            href={store.phoneHref}
            className="flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded-full border border-gold/40 bg-white/[0.03] px-6 text-base font-semibold text-gold-300 backdrop-blur transition-colors active:scale-[0.98] sm:hover:border-gold sm:hover:bg-white/[0.06]"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call Us
          </a>
        </motion.div>

        <p className="mt-3 flex items-center gap-1.5 text-xs text-white/40">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {store.addressFull}
        </p>
      </motion.div>

      {/* Scroll hint */}
      <div className="pointer-events-none absolute inset-x-0 bottom-2 z-10 hidden justify-center sm:flex">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
          Scroll
        </span>
      </div>
    </section>
  );
}
