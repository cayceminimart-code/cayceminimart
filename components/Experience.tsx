"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Clock3, Sparkles, Sprout, Users } from "lucide-react";
import { useRef } from "react";
import { asset } from "./asset";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { usePerformanceMode } from "./usePerformanceMode";

const PERKS = [
  { icon: Sparkles, title: "Spotless & bright", desc: "Clean aisles, fresh lighting, and a store that's a pleasure to shop." },
  { icon: Clock3, title: "In & out fast", desc: "Quick service so you're back on the road in seconds, not minutes." },
  { icon: Sprout, title: "Always stocked", desc: "Shelves and coolers kept full of the brands you actually want." },
  { icon: Users, title: "Friendly faces", desc: "Local, welcoming staff who remember the regulars by name." },
];

export function Experience({ images }: { images: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { lowPower } = usePerformanceMode();
  const parallaxOn = !reduce && !lowPower;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yA = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const yB = useTransform(scrollYProgress, [0, 1], [-30, 50]);

  return (
    <section id="experience" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div>
            <SectionHeading
              eyebrow="The Experience"
              title={
                <>
                  A gas stop that
                  <br className="hidden sm:block" /> feels{" "}
                  <span className="text-gold-gradient-animated">premium.</span>
                </>
              }
              description="We sweat the details most stores skip, from the lighting to the layout to the little extras, so a quick fill-up or snack run feels effortless and genuinely good."
            />

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {PERKS.map((p, i) => {
                const Icon = p.icon;
                return (
                  <Reveal key={p.title} delay={i * 0.08}>
                    <div className="flex gap-3.5">
                      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-gold">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="font-display text-base font-semibold text-white">
                          {p.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-white/55">
                          {p.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Image collage with subtle parallax */}
          <Reveal delay={0.1}>
            <div ref={ref} className="relative grid grid-cols-2 gap-4">
              <motion.div
                className="space-y-4"
                style={parallaxOn ? { y: yA } : undefined}
              >
                <CollageImage src={images[0]} alt="Inside Cayce Mini Mart" ratio="aspect-[3/4]" />
                <CollageImage src={images[1]} alt="Fresh coffee station" ratio="aspect-square" />
              </motion.div>
              <motion.div
                className="space-y-4 pt-8"
                style={parallaxOn ? { y: yB } : undefined}
              >
                <CollageImage src={images[2]} alt="Snacks and drinks aisle" ratio="aspect-square" />
                <CollageImage src={images[3]} alt="Fuel pumps at night" ratio="aspect-[3/4]" />
              </motion.div>

              {/* Soft glow behind the collage */}
              <div
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] opacity-60 blur-2xl"
                style={{
                  background:
                    "radial-gradient(60% 60% at 50% 40%, rgba(184,29,36,0.25), transparent 70%)",
                }}
                aria-hidden="true"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CollageImage({
  src,
  alt,
  ratio,
}: {
  src: string;
  alt: string;
  ratio: string;
}) {
  return (
    <div
      className={`relative ${ratio} overflow-hidden rounded-2xl border border-white/10 bg-coal-card`}
    >
      <Image
        src={asset(src)}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 45vw, 280px"
        className="object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-coal/50 to-transparent" />
    </div>
  );
}
