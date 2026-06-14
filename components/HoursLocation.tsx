"use client";

import { Check, Copy, MapPin, Navigation, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import type { HourRow, Store } from "./types";

export function HoursLocation({
  store,
  hours,
}: {
  store: Store;
  hours: HourRow[];
}) {
  const [copied, setCopied] = useState(false);
  // -1 until mounted, so server and first client render match (no hydration gap).
  const [todayIdx, setTodayIdx] = useState(-1);
  const [openNow, setOpenNow] = useState<boolean | null>(null);

  useEffect(() => {
    const now = new Date();
    // hours[] is ordered Mon..Sun; JS getDay() is 0=Sun..6=Sat.
    const idx = (now.getDay() + 6) % 7;
    setTodayIdx(idx);
    const h = now.getHours() + now.getMinutes() / 60;
    const row = hours[idx];
    setOpenNow(row ? h >= row.open && h < row.close : null);
  }, [hours]);

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(store.addressFull);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable, silently ignore */
    }
  }

  return (
    <section id="hours" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Hours & Location"
          title={
            <>
              Come see us in{" "}
              <span className="text-gold-gradient-animated">Cayce</span>
            </>
          }
          description="Right on Charleston Highway. Easy to reach, easy to park, and always close by."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {/* Map + address */}
          <Reveal className="lg:col-span-3">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-coal-card">
              <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
                <iframe
                  title={`Map to ${store.name}`}
                  src={store.mapsEmbedUrl}
                  className="absolute inset-0 h-full w-full"
                  style={{ border: 0, filter: "grayscale(0.3) contrast(1.05)" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-white">{store.addressLine1}</p>
                    <p className="text-sm text-white/55">{store.addressLine2}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={copyAddress}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-white/15 px-4 text-sm font-medium text-white/80 transition-colors hover:border-gold/40 hover:text-gold"
                  aria-label="Copy store address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" aria-hidden="true" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" aria-hidden="true" /> Copy address
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href={store.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-pulse inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cherry-500 to-cherry-600 text-base font-semibold text-white transition-transform active:scale-[0.98] sm:hover:scale-[1.02]"
              >
                <Navigation className="h-5 w-5" aria-hidden="true" /> Get Directions
              </a>
              <a
                href={store.phoneHref}
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-gold/40 bg-white/[0.03] text-base font-semibold text-gold-300 transition-colors active:scale-[0.98] sm:hover:bg-white/[0.06]"
              >
                <Phone className="h-5 w-5" aria-hidden="true" /> {store.phoneDisplay}
              </a>
            </div>
          </Reveal>

          {/* Hours table */}
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="glass h-full rounded-2xl p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-white">
                  Store Hours
                </h3>
                {openNow !== null && (
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                      openNow
                        ? "bg-emerald-500/15 text-emerald-300"
                        : "bg-white/10 text-white/60"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        openNow ? "bg-emerald-400 animate-pulseGlow" : "bg-white/40"
                      }`}
                    />
                    {openNow ? "Open now" : "Closed"}
                  </span>
                )}
              </div>
              <ul className="divide-y divide-white/[0.06]">
                {hours.map((row, i) => (
                  <li
                    key={row.day}
                    className={`flex items-center justify-between py-3 text-sm ${
                      i === todayIdx ? "text-white" : "text-white/65"
                    }`}
                  >
                    <span
                      className={`font-medium ${
                        i === todayIdx ? "text-gold" : ""
                      }`}
                    >
                      {row.day}
                      {i === todayIdx && (
                        <span className="ml-2 text-[10px] uppercase tracking-wide text-gold/70">
                          Today
                        </span>
                      )}
                    </span>
                    <span className="tabular-nums">{row.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
