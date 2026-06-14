"use client";

import { useReducedMotion } from "framer-motion";
import { usePerformanceMode } from "./usePerformanceMode";

/**
 * Animated aurora/gradient backdrop built from a few blurred radial blobs.
 * Pure transform/opacity CSS animation (no JS per-frame work). Freezes into a
 * static gradient when reduced motion is requested or the device is low-power.
 */
export function AuroraBackground() {
  const reduce = useReducedMotion();
  const { lowPower } = usePerformanceMode();
  const animated = !reduce && !lowPower;

  return (
    <div className="aurora-wrap" aria-hidden="true">
      <div className={`aurora-blob aurora-1 ${animated ? "is-animated" : ""}`} />
      <div className={`aurora-blob aurora-2 ${animated ? "is-animated" : ""}`} />
      <div className={`aurora-blob aurora-3 ${animated ? "is-animated" : ""}`} />
      {/* Vignette so the blobs melt into the charcoal base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, transparent 40%, rgba(10,10,12,0.6) 78%, #0a0a0c 100%)",
        }}
      />
    </div>
  );
}
