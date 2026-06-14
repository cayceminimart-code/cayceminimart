"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import type { Offer } from "./types";

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
              <span className="text-gold-gradient">right.</span>
            </>
          }
          description="A convenience store that actually feels good to walk into — well-stocked, spotless, and quick. Here's a taste of what's inside."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer, i) => {
            const Icon = offer.icon;
            return (
              <Reveal key={offer.title} delay={(i % 3) * 0.08} as="article">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-coal-card/60 p-6 transition-colors duration-300 hover:border-gold/30"
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(420px circle at 30% 0%, rgba(184,29,36,0.18), transparent 70%)",
                    }}
                  />
                  <div className="relative">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent text-gold transition-transform duration-300 group-hover:scale-110 group-hover:text-gold-300">
                      <Icon className="h-6 w-6" aria-hidden="true" />
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
