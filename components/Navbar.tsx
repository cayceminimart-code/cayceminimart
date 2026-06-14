"use client";

import { useScroll, useMotionValueEvent } from "framer-motion";
import { Navigation, Phone } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import type { Store } from "./types";

const LINKS = [
  { href: "#offers", label: "Offers" },
  { href: "#experience", label: "Why Us" },
  { href: "#deals", label: "Deals" },
  { href: "#hours", label: "Hours" },
];

export function Navbar({ store }: { store: Store }) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => {
    const next = v > 24;
    setScrolled((prev) => (prev === next ? prev : next));
  });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-coal/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className={`container-px flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-14" : "h-16"
        }`}
        aria-label="Primary"
      >
        <a
          href="#home"
          className="group flex items-center gap-2.5"
          aria-label={`${store.name} home`}
        >
          <Logo className="h-9 w-9 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3" />
          <span className="font-display text-[15px] font-semibold tracking-tight text-white">
            Cayce <span className="text-gold">Mini Mart</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={store.phoneHref}
            className="hidden items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:border-gold/50 hover:text-gold sm:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call
          </a>
          <a
            href={store.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cherry-500 to-cherry-600 px-4 py-2 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
          >
            <Navigation className="h-4 w-4" aria-hidden="true" />
            Directions
          </a>
        </div>
      </nav>
    </header>
  );
}
