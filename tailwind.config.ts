import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep charcoal / near-black base
        coal: {
          DEFAULT: "#0a0a0c",
          soft: "#101014",
          card: "#131318",
        },
        // Rich red accent (echoes the store's red awning)
        cherry: {
          DEFAULT: "#b81d24",
          600: "#b81d24",
          500: "#cf2630",
          400: "#e0353d",
          glow: "#ff4d57",
        },
        // Warm gold / amber premium highlight
        gold: {
          DEFAULT: "#e6b566",
          400: "#f0c674",
          300: "#f5d79a",
        },
      },
      fontFamily: {
        sans: ['"Inter Variable"', "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Sora Variable"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(230,181,102,0.12), 0 18px 60px -20px rgba(184,29,36,0.45)",
        "glow-gold": "0 0 0 1px rgba(230,181,102,0.18), 0 24px 80px -30px rgba(230,181,102,0.5)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        floaty: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-10px,0)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "0.9" },
        },
        sheen: {
          "0%": { transform: "translateX(-130%) skewX(-12deg)" },
          "100%": { transform: "translateX(230%) skewX(-12deg)" },
        },
      },
      animation: {
        shimmer: "shimmer 6s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 4.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
