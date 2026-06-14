import type { LucideIcon } from "lucide-react";

export type Store = {
  name: string;
  tagline: string;
  phoneDisplay: string;
  phoneHref: string;
  addressLine1: string;
  addressLine2: string;
  addressFull: string;
  directionsUrl: string;
  mapsEmbedUrl: string;
  instagramUrl: string;
  instagramHandle: string;
  googleBusinessUrl: string;
};

export type GasPrices = {
  regularCash: string;
  dieselCash: string;
  note: string;
  updatedLabel: string;
};

export type Stat = {
  /** Numeric value to count up to. Omit for a text-only stat. */
  value?: number;
  prefix?: string;
  suffix?: string;
  /** Used instead of a number, e.g. "On-Site". */
  staticText?: string;
  label: string;
  /** Small lucide icon shown above the stat. */
  icon?: LucideIcon;
};

export type Offer = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export type Deal = {
  badge: string;
  title: string;
  desc: string;
  price: string;
};

export type HourRow = {
  day: string;
  hours: string;
  /** 24h decimal open time, used for the live "Open now" badge (6.5 = 6:30 AM). */
  open: number;
  /** 24h decimal close time (22 = 10 PM, 23 = 11 PM). */
  close: number;
};
