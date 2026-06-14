"use client";

import { useEffect, useState } from "react";

type PerfState = {
  /** Heaviest effects (animated aurora, parallax) should be disabled. */
  lowPower: boolean;
  /** Coarse pointer / small screen — run lighter motion. */
  mobile: boolean;
  /** Hydration-safe flag: true only after the first client effect runs. */
  ready: boolean;
};

/**
 * Detects whether the device is likely low-powered or data-constrained so we
 * can automatically dial back the most expensive effects. Defaults are tuned
 * so the full experience runs on capable devices and degrades gracefully on
 * weak ones. Runs only on the client (after mount) to avoid SSR mismatches.
 */
export function usePerformanceMode(): PerfState {
  const [state, setState] = useState<PerfState>({
    lowPower: false,
    mobile: false,
    ready: false,
  });

  useEffect(() => {
    const nav = navigator as Navigator & {
      deviceMemory?: number;
      connection?: { saveData?: boolean; effectiveType?: string };
    };

    const cores = nav.hardwareConcurrency ?? 8;
    const mem = nav.deviceMemory ?? 8;
    const saveData = nav.connection?.saveData ?? false;
    const slowNet = /(^|[^0-9])(2g|slow-2g)/.test(
      nav.connection?.effectiveType ?? ""
    );
    const mobile =
      window.matchMedia("(pointer: coarse)").matches &&
      window.matchMedia("(max-width: 768px)").matches;

    const lowPower = saveData || slowNet || cores <= 4 || mem <= 4;

    setState({ lowPower, mobile, ready: true });
  }, []);

  return state;
}
