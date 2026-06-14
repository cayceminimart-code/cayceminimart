"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import type { Offer } from "./types";

// Per-card accent (cherry / gold family) for a little playful variety.
const ACCENTS = ["#e0353d", "#e6b566", "#f0c674", "#cf2630", "#e6b566", "#e0353d"];

export function Offers({ offers }: { offers: Offer[] }) {
  return (
    <section id="offers" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="What We Offer"
          title={
            <>
              Everything you need,
              <br className="hidden sm:block" /> done{" "}
              <span className="text-gold-gradient-animated">right.</span>
            </>
          }
          description="A convenience store that actually feels good to walk into. Well-stocked, spotless, and quick. Here's a taste of what's inside."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer, i) => {
            const Icon = offer.icon;
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <Reveal key={offer.title} delay={(i % 3) * 0.08} as="article">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  style={{ "--accent": accent } as CSSProperties}
                  className="hover-ring group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-coal-card/60 p-6 transition-colors duration-300 hover:border-transparent"
                >
                  {/* Hover glow tinted to the card's accent */}
                  <div
                    className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(440px circle at 30% 0%, color-mix(in srgb, var(--accent) 22%, transparent), transparent 70%)",
                    }}
                  />
                  <div className="relative">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110">
                      <Icon
                        className="h-6 w-6"
                        style={{ color: "var(--accent)" }}
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {offer.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">
                      {offer.desc}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
