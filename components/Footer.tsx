"use client";

import { ExternalLink, Instagram, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import type { Store } from "./types";

export function Footer({ store }: { store: Store }) {
  const [year, setYear] = useState(2026);
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-coal-soft pb-[calc(env(safe-area-inset-bottom)+5.5rem)] pt-16 md:pb-12">
      {/* Animated accent line */}
      <div className="absolute inset-x-0 top-0 h-px overflow-hidden">
        <div className="h-full w-1/2 animate-shimmer bg-gradient-to-r from-transparent via-gold to-transparent" />
      </div>

      <div className="container-px">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo className="h-10 w-10" />
              <span className="font-display text-lg font-semibold text-white">
                Cayce <span className="text-gold">Mini Mart</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
              {store.tagline}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <FooterLink
              href={store.directionsUrl}
              icon={<MapPin className="h-4 w-4" aria-hidden="true" />}
              label={store.addressFull}
              external
            />
            <FooterLink
              href={store.phoneHref}
              icon={<Phone className="h-4 w-4" aria-hidden="true" />}
              label={store.phoneDisplay}
            />
            <FooterLink
              href={store.instagramUrl}
              icon={<Instagram className="h-4 w-4" aria-hidden="true" />}
              label={store.instagramHandle}
              external
            />
            <FooterLink
              href={store.googleBusinessUrl}
              icon={<ExternalLink className="h-4 w-4" aria-hidden="true" />}
              label="Google Business Profile"
              external
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/[0.06] pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {store.name}. All rights reserved.
          </p>
          <p>{store.addressFull}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  icon,
  label,
  external,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="group inline-flex items-center gap-2.5 text-sm text-white/60 transition-colors hover:text-gold"
    >
      <span className="text-gold/70 transition-colors group-hover:text-gold">
        {icon}
      </span>
      <span className="truncate">{label}</span>
    </a>
  );
}
