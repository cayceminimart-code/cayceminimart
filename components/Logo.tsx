/**
 * Cayce Mini Mart logo mark: a striped storefront awning over a red coffee mug
 * with a gold fuel-drop rising from it (fuel + cafe in one). Vector recreation
 * of the store's logo, so it stays crisp and tiny at any size. Used in the nav,
 * footer, and favicon.
 */
export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Cayce Mini Mart logo"
    >
      <defs>
        <linearGradient id="lg-cup" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d6262f" />
          <stop offset="1" stopColor="#991519" />
        </linearGradient>
        <linearGradient id="lg-drop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffe28c" />
          <stop offset="0.55" stopColor="#f4ad3e" />
          <stop offset="1" stopColor="#e67a1e" />
        </linearGradient>
        <radialGradient id="lg-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#f4ad3e" stopOpacity="0.55" />
          <stop offset="1" stopColor="#f4ad3e" stopOpacity="0" />
        </radialGradient>
        <clipPath id="lg-awn">
          <path d="M8 16 Q32 8 56 16 L56 20 q-4 5 -8 0 q-4 5 -8 0 q-4 5 -8 0 q-4 5 -8 0 q-4 5 -8 0 q-4 5 -8 0 L8 16 Z" />
        </clipPath>
      </defs>

      {/* Awning: red base, gold stripes, solid red top band */}
      <g clipPath="url(#lg-awn)">
        <rect x="6" y="7" width="52" height="22" fill="#c01f29" />
        <rect x="18.25" y="7" width="5.5" height="22" fill="#f2c14e" />
        <rect x="29.25" y="7" width="5.5" height="22" fill="#f2c14e" />
        <rect x="40.25" y="7" width="5.5" height="22" fill="#f2c14e" />
        <rect x="6" y="7" width="52" height="5.5" fill="#c01f29" />
      </g>

      {/* Mug handle */}
      <path
        d="M43 33 C51 33 51 45.5 43 45.5"
        fill="none"
        stroke="#b81d24"
        strokeWidth="3.8"
        strokeLinecap="round"
      />

      {/* Mug body */}
      <path
        d="M22 29 L42 29 Q43.4 29 43.1 30.8 L41.2 48 Q40.6 52 36.3 52 L27.7 52 Q23.4 52 22.8 48 L20.9 30.8 Q20.6 29 22 29 Z"
        fill="url(#lg-cup)"
      />
      {/* Mug rim */}
      <ellipse cx="32" cy="29.4" rx="10.7" ry="2.5" fill="#8f151b" />

      {/* Gold fuel-drop with soft glow */}
      <ellipse cx="32" cy="38" rx="9" ry="11" fill="url(#lg-glow)" />
      <path
        d="M32 27 C37 33.5 38.7 38 35.2 41.8 C33.4 43.8 30.6 43.8 28.8 41.8 C25.3 38 27 33.5 32 27 Z"
        fill="url(#lg-drop)"
      />
      <ellipse cx="29.9" cy="36" rx="1.4" ry="2.4" fill="#ffffff" fillOpacity="0.45" />
    </svg>
  );
}
