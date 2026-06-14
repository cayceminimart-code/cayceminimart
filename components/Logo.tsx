/**
 * Custom Cayce Mini Mart logo mark: a rich red badge (echoing the store's red
 * awning) with a gold monogram "C" and a premium sparkle. Pure SVG, scalable,
 * and tiny. Used in the nav, footer, and favicon.
 */
export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Cayce Mini Mart logo"
    >
      <defs>
        <linearGradient id="cmm-badge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#d6262f" />
          <stop offset="1" stopColor="#8c1419" />
        </linearGradient>
        <linearGradient id="cmm-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f7e0ad" />
          <stop offset="0.5" stopColor="#e6b566" />
          <stop offset="1" stopColor="#c9982f" />
        </linearGradient>
        <radialGradient id="cmm-shine" cx="0.3" cy="0.22" r="0.85">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x="2" y="2" width="44" height="44" rx="13" fill="url(#cmm-badge)" />
      <rect x="2" y="2" width="44" height="44" rx="13" fill="url(#cmm-shine)" />
      <rect
        x="2.75"
        y="2.75"
        width="42.5"
        height="42.5"
        rx="12.2"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.18"
        strokeWidth="0.9"
      />

      {/* Monogram C */}
      <path
        d="M31.4 30.7 A10 10 0 1 1 31.4 17.3"
        fill="none"
        stroke="url(#cmm-gold)"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Sparkle */}
      <path
        d="M34.5 9.1 L35.6 11.4 L37.9 12.5 L35.6 13.6 L34.5 15.9 L33.4 13.6 L31.1 12.5 L33.4 11.4 Z"
        fill="url(#cmm-gold)"
      />
    </svg>
  );
}
