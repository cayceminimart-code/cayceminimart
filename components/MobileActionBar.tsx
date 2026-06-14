"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Navigation, Phone } from "lucide-react";
import { useState } from "react";
import type { Store } from "./types";

/**
 * Persistent bottom action bar — mobile only (hidden on desktop). Fades in
 * once the hero has scrolled mostly out of view so it never overlaps the
 * hero's own CTAs, keeping Directions + Call always one tap away.
 */
export function MobileActionBar({ store }: { store: Store }) {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => {
    const threshold =
      typeof window !== "undefined" ? window.innerHeight * 0.7 : 500;
    const next = v > threshold;
    setShow((prev) => (prev === next ? prev : next));
  });

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-x-0 bottom-0 z-50 md:hidden"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="border-t border-white/10 bg-coal/90 px-4 pb-[max(0.6rem,env(safe-area-inset-bottom))] pt-2.5 backdrop-blur-xl">
            <div className="flex gap-3">
              <a
                href={store.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cherry-500 to-cherry-600 text-base font-semibold text-white shadow-glow active:scale-[0.98]"
              >
                <Navigation className="h-5 w-5" aria-hidden="true" />
                Directions
              </a>
              <a
                href={store.phoneHref}
                className="flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full border border-gold/40 bg-white/[0.04] text-base font-semibold text-gold-300 active:scale-[0.98]"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
