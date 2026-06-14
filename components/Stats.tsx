"use client";

import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";
import type { Stat } from "./types";

export function Stats({ stats }: { stats: Stat[] }) {
  return (
    <section className="relative border-b border-white/[0.06] bg-coal-soft/60">
      <div className="container-px py-10 sm:py-14">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="group text-center transition-transform duration-300 hover:-translate-y-1">
                  {Icon && (
                    <span className="mx-auto mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-gold transition-all duration-300 group-hover:scale-110 group-hover:border-gold/30">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  )}
                  <div className="font-display text-4xl font-bold tracking-tight text-gold-gradient sm:text-5xl">
                    {typeof s.value === "number" ? (
                      <CountUp to={s.value} prefix={s.prefix} suffix={s.suffix} />
                    ) : (
                      <span>{s.staticText}</span>
                    )}
                  </div>
                  <p className="mx-auto mt-2 max-w-[10rem] text-xs leading-snug text-white/55 sm:text-sm">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
