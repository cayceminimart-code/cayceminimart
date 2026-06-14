"use client";

import {
  Banknote,
  Boxes,
  CalendarDays,
  Coffee,
  CupSoda,
  Cigarette,
  Fuel,
  LayoutGrid,
  ShoppingBasket,
  Ticket,
} from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Stats } from "@/components/Stats";
import { Offers } from "@/components/Offers";
import { Experience } from "@/components/Experience";
import { Deals } from "@/components/Deals";
import { HoursLocation } from "@/components/HoursLocation";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import type {
  Deal,
  GasPrices,
  HourRow,
  Offer,
  Stat,
  Store,
} from "@/components/types";

/* ════════════════════════════════════════════════════════════════════════
   EDITABLE CONTENT. Change anything below and save. No coding needed.
   Everything the site shows lives in this one block. Keep the quotes "" and
   commas , exactly as they are.
   ════════════════════════════════════════════════════════════════════════ */

/* ── 1. Store details (name, phone, address, links) ───────────────────── */
const STORE: Store = {
  name: "Cayce Mini Mart",
  tagline:
    "Premium fuel, fresh snacks & everyday essentials in Cayce, SC",
  phoneDisplay: "(803) 661-9855",
  phoneHref: "tel:+18036619855", // keep the +1 and digits only here
  addressLine1: "2335 Charleston Hwy",
  addressLine2: "Cayce, SC 29033",
  addressFull: "2335 Charleston Hwy, Cayce, SC 29033",
  directionsUrl:
    "https://maps.google.com/?q=Cayce+Mini+Mart+2335+Charleston+Hwy+Cayce+SC",
  // Google Maps embed for the map box. Replace with your own embed link if you like.
  mapsEmbedUrl:
    "https://www.google.com/maps?q=2335+Charleston+Hwy,+Cayce,+SC+29033&output=embed",
  instagramUrl: "https://www.instagram.com/cayceminimart/",
  instagramHandle: "@cayceminimart",
  // PLACEHOLDER: replace with your real Google Business profile when ready.
  googleBusinessUrl:
    "https://www.google.com/maps/search/?api=1&query=Cayce+Mini+Mart+Cayce+SC",
};

/* ── 2. Gas prices (shown in the hero card) ───────────────────────────── */
const GAS_PRICES: GasPrices = {
  regularCash: "$3.59",
  dieselCash: "$3.69",
  note: "Updated regularly in-store.",
  updatedLabel: "Updated weekly",
};

/* ── 3. Scrolling ticker words (the band under the hero) ──────────────── */
const MARQUEE_ITEMS: string[] = [
  "Premium Fuel",
  "Diesel",
  "Fresh Coffee",
  "Cold Drinks",
  "Snacks & Candy",
  "Lottery",
  "ATM On-Site",
  "Tobacco",
  "Everyday Groceries",
  "Friendly Service",
];

/* ── 4. Stats bar (animated counters) ─────────────────────────────────── */
//   Use `value` for a counting number (add `suffix`/`prefix` if needed),
//   or `staticText` for a word instead of a number.
const STATS: Stat[] = [
  { value: 7, label: "Days open every week", icon: CalendarDays },
  { value: 20, suffix: "+", label: "Snack & drink brands", icon: Boxes },
  { value: 6, label: "Categories in-store", icon: LayoutGrid },
  { staticText: "On-Site", label: "Lottery & ATM", icon: Ticket },
];

/* ── 5. What we offer (cards) ─────────────────────────────────────────── */
//   `icon` choices: Fuel, CupSoda, Coffee, Banknote, Cigarette, ShoppingBasket
const OFFERS: Offer[] = [
  {
    icon: Fuel,
    title: "Premium Fuel & Diesel",
    desc: "Top-tier gasoline and diesel at fair, clearly-posted prices.",
  },
  {
    icon: CupSoda,
    title: "Snacks & Drinks",
    desc: "Ice-cold sodas, energy drinks, chips and candy from the brands you love.",
  },
  {
    icon: Coffee,
    title: "Fresh Coffee",
    desc: "Hot, fresh-brewed coffee any time of day to keep you moving.",
  },
  {
    icon: Banknote,
    title: "Lottery & ATM",
    desc: "Play your numbers and grab cash. Lottery and ATM right on-site.",
  },
  {
    icon: Cigarette,
    title: "Tobacco",
    desc: "A full selection of tobacco products behind the counter.",
  },
  {
    icon: ShoppingBasket,
    title: "Everyday Groceries",
    desc: "The household essentials and quick grabs you forgot at the store.",
  },
];

/* ── 6. Experience images (subtle parallax collage) ───────────────────── */
//   Drop your own photos in the /public folder and update these paths,
//   e.g. "/storefront.jpg". The bundled .svg files are stylish placeholders.
const EXPERIENCE_IMAGES: string[] = [
  "/img1.svg",
  "/img2.svg",
  "/img3.svg",
  "/img4.svg",
];

/* ── 7. Weekly deals (cards) ──────────────────────────────────────────────
   No deals yet, so the site shows a friendly "Coming soon" message.
   To add deals later, add items to the array below. Each one looks like:
     { badge: "Combo", title: "2 Energy Drinks", desc: "Mix & match top brands.", price: "$3.50" }
   As soon as there is at least one deal, the cards replace the message. */
const DEALS: Deal[] = [
  // Add your weekly deals here. Example (remove the // to turn it on, then edit):
  // { badge: "Combo", title: "2 Energy Drinks", desc: "Mix & match top brands.", price: "$3.50" },
];

/* ── 8. Store hours ───────────────────────────────────────────────────────
   `hours` is the text shown in the table. `open`/`close` are the same times on
   a 24-hour clock (6.5 = 6:30 AM, 22 = 10 PM, 23 = 11 PM) and power the live
   "Open now" badge. Keep the two in sync. */
const HOURS: HourRow[] = [
  { day: "Monday", hours: "6:30 AM to 10:00 PM", open: 6.5, close: 22 },
  { day: "Tuesday", hours: "6:30 AM to 10:00 PM", open: 6.5, close: 22 },
  { day: "Wednesday", hours: "6:30 AM to 10:00 PM", open: 6.5, close: 22 },
  { day: "Thursday", hours: "6:30 AM to 10:00 PM", open: 6.5, close: 22 },
  { day: "Friday", hours: "6:30 AM to 11:00 PM", open: 6.5, close: 23 },
  { day: "Saturday", hours: "7:00 AM to 11:00 PM", open: 7, close: 23 },
  { day: "Sunday", hours: "7:00 AM to 10:00 PM", open: 7, close: 22 },
];

/* ════════════════════════════════════════════════════════════════════════
   END OF EDITABLE CONTENT. You can stop here.
   ════════════════════════════════════════════════════════════════════════ */

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Navbar store={STORE} />
      <main>
        <Hero store={STORE} prices={GAS_PRICES} />
        <Marquee items={MARQUEE_ITEMS} />
        <Stats stats={STATS} />
        <Offers offers={OFFERS} />
        <Experience images={EXPERIENCE_IMAGES} />
        <Deals deals={DEALS} store={STORE} />
        <HoursLocation store={STORE} hours={HOURS} />
      </main>
      <Footer store={STORE} />
      <MobileActionBar store={STORE} />
    </>
  );
}
