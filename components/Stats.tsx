"use client";

import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";
import type { Stat } from "./types";

export function Stats({ stats }: { stats: Stat[] }) {
  return (
    <section className="relative border-y border-white/[0.06] bg-coal-soft/60">
      <div className="container-px py-10 sm:py-14">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
