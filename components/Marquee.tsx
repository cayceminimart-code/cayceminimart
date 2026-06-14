"use client";

/**
 * Infinite scrolling ticker of the things the store offers. Pure CSS transform
 * loop (two identical rows, translate -50%). Pauses on hover; freezes under
 * reduced motion. Decorative, so it's hidden from assistive tech.
 */
export function Marquee({ items }: { items: string[] }) {
  const Row = () => (
    <div className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="whitespace-nowrap px-6 font-display text-sm font-semibold uppercase tracking-[0.18em] text-white/65">
            {item}
          </span>
          <span className="h-1.5 w-1.5 rotate-45 rounded-[1px] bg-gradient-to-br from-gold to-cherry-500" />
        </span>
      ))}
    </div>
  );

  return (
    <div
      className="marquee relative border-y border-white/[0.06] bg-coal-soft/40 py-3.5"
      aria-hidden="true"
    >
      <div className="marquee-track">
        <Row />
        <Row />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-coal to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-coal to-transparent" />
    </div>
  );
}
