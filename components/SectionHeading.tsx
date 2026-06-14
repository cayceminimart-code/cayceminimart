import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  const isCenter = align === "center";
  return (
    <Reveal className={isCenter ? "text-center" : ""}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-[15px] leading-relaxed text-white/60 sm:text-base ${
            isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
