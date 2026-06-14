"use client";

import { motion } from "framer-motion";
import { Gift, Instagram, Sparkles, Tag } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import type { Deal, Store } from "./types";

export function Deals({ deals, store }: { deals: Deal[]; store: Store }) {
  const hasDeals = deals.length > 0;

  return (
    <section
      id="deals"
      className="relative scroll-mt-20 overflow-hidden py-20 sm:py-28"
    >
      {/* Section tint */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(80% 50% at 50% 0%, rgba(184,29,36,0.10), transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div className="container-px">
        <SectionHeading
          align="center"
          eyebrow="Weekly Deals"
          title={
            hasDeals ? (
              <>
                This week&apos;s{" "}
                <span className="text-gold-gradient-animated">favorites</span>
              </>
            ) : (
              <>
                Something good is{" "}
                <span className="text-gold-gradient-animated">brewing</span>
              </>
            )
          }
          description={
            hasDeals
              ? "Fresh savings every week. Swing by and grab them while they last."
              : "We're putting together this week's lineup of savings. Follow along on Instagram and you'll be the first to know the moment they drop."
          }
        />

        {hasDeals ? (
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {deals.map((deal, i) => (
              <Reveal key={deal.title} delay={(i % 4) * 0.07} as="article">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="hover-ring group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-coal-card/70 p-5 transition-colors hover:border-transparent"
                >
                  <div
                    className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(360px circle at 50% 0%, rgba(230,181,102,0.14), transparent 70%)",
                    }}
                  />
                  <div className="relative flex flex-1 flex-col">
                    <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-cherry-400/30 bg-cherry/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-cherry-400">
                      <Tag className="h-3 w-3" aria-hidden="true" />
                      {deal.badge}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-white">
                      {deal.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">
                      {deal.desc}
                    </p>
                    <p className="mt-4 font-display text-2xl font-bold text-gold-gradient">
                      {deal.price}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mt-12">
            <div className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-coal-card/60 p-10 text-center sm:p-14">
              {/* soft glow */}
              <div
                className="pointer-events-none absolute inset-0 opacity-70"
                style={{
                  background:
                    "radial-gradient(60% 60% at 50% 0%, rgba(230,181,102,0.16), transparent 70%)",
                }}
                aria-hidden="true"
              />
              <div className="relative">
                <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/20 bg-gradient-to-br from-cherry-500/20 to-gold/10 text-gold shadow-glow">
                  <Gift className="bob h-8 w-8" aria-hidden="true" />
                </span>
                <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
                  <Sparkles className="h-3.5 w-3.5 animate-pulseGlow" aria-hidden="true" />
                  Coming soon
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-white sm:text-3xl">
                  Fresh deals are on the way
                </h3>
                <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-white/55">
                  Check back soon, or follow us on Instagram so you never miss a
                  weekly special.
                </p>
              </div>
            </div>
          </Reveal>
        )}

        {/* Instagram CTA */}
        <Reveal delay={0.1} className="mt-12">
          <div className="glass mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-2xl p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="font-display text-lg font-semibold text-white">
                Follow {store.instagramHandle} for weekly deals
              </p>
              <p className="mt-1 text-sm text-white/55">
                New drops, fresh prices, and lottery winners, first on Instagram.
              </p>
            </div>
            <a
              href={store.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#cf2630] via-[#b81d24] to-[#8a1418] px-6 text-sm font-semibold text-white shadow-glow transition-transform active:scale-[0.98] sm:hover:scale-[1.03]"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
              Follow on Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
