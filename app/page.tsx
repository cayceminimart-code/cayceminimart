"use client";

import {
  Banknote,
  Coffee,
  CupSoda,
  Cigarette,
  Fuel,
  ShoppingBasket,
} from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
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
  OpenHours,
  Stat,
  Store,
} from "@/components/types";

/* ════════════════════════════════════════════════════════════════════════
   ✏️  EDITABLE CONTENT — change anything below and save. No coding needed.
   Everything the site shows lives in this one block. Keep the quotes "" and
   commas , exactly as they are.
   ════════════════════════════════════════════════════════════════════════ */

/* ── 1. Store details (name, phone, address, links) ───────────────────── */
const STORE: Store = {
  name: "Cayce Mini Mart",
  tagline:
    "Premium fuel, fresh snacks & everyday essentials — Cayce, SC",
  phoneDisplay: "(803) 719-2451",
  phoneHref: "tel:+18037192451", // keep the +1 and digits only here
  addressLine1: "2335 Charleston Hwy",
  addressLine2: "Cayce, SC 29033",
  addressFull: "2335 Charleston Hwy, Cayce, SC 29033",
  directionsUrl:
    "https://maps.google.com/?q=Cayce+Mini+Mart+2335+Charleston+Hwy+Cayce+SC",
  // Google Maps embed for the map box. Replace with your own embed link if you like.
  mapsEmbedUrl:
    "https://www.google.com/maps?q=2335+Charleston+Hwy,+Cayce,+SC+29033&output=embed",
  // ⬇️ PLACEHOLDER links — replace with your real profiles when ready.
  instagramUrl: "https://instagram.com/cayceminimart",
  instagramHandle: "@cayceminimart",
  googleBusinessUrl:
    "https://www.google.com/maps/search/?api=1&query=Cayce+Mini+Mart+Cayce+SC",
};

/* ── 2. Gas prices (shown in the hero card) ───────────────────────────── */
const GAS_PRICES: GasPrices = {
  regularCash: "$3.64",
  dieselCash: "$4.79",
  note: "Cash prices shown. Card prices may differ. Updated regularly in-store.",
  updatedLabel: "Updated weekly",
};

/* ── 3. Stats bar (animated counters) ─────────────────────────────────── */
//   Use `value` for a counting number (add `suffix`/`prefix` if needed),
//   or `staticText` for a word instead of a number.
const STATS: Stat[] = [
  { value: 7, label: "Days open every week" },
  { value: 20, suffix: "+", label: "Snack & drink brands" },
  { value: 6, label: "Categories in-store" },
  { staticText: "On-Site", label: "Lottery & ATM" },
];

/* ── 4. What we offer (cards) ─────────────────────────────────────────── */
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
    desc: "Play your numbers and grab cash — lottery and ATM right on-site.",
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

/* ── 5. Experience images (subtle parallax collage) ───────────────────── */
//   Drop your own photos in the /public folder and update these paths,
//   e.g. "/storefront.jpg". The bundled .svg files are stylish placeholders.
const EXPERIENCE_IMAGES: string[] = [
  "/img1.svg",
  "/img2.svg",
  "/img3.svg",
  "/img4.svg",
];

/* ── 6. Weekly deals (cards) ──────────────────────────────────────────── */
const DEALS: Deal[] = [
  {
    badge: "Combo",
    title: "2 Energy Drinks",
    desc: "Mix & match top brands and save when you grab a pair.",
    price: "$3.50",
  },
  {
    badge: "Morning",
    title: "Coffee + Pastry",
    desc: "Fresh-brewed coffee with a donut or pastry to start the day.",
    price: "$4.99",
  },
  {
    badge: "Snack Pack",
    title: "20oz Soda + Chips",
    desc: "An ice-cold drink and your favorite chips, bundled.",
    price: "$4.00",
  },
  {
    badge: "Feeling Lucky",
    title: "Lottery Lucky Pack",
    desc: "Ask the cashier about this week's featured lottery picks.",
    price: "In-store",
  },
];

/* ── 7. Store hours ───────────────────────────────────────────────────── */
const HOURS: HourRow[] = [
  { day: "Monday", hours: "7:00 AM – 9:00 PM" },
  { day: "Tuesday", hours: "7:00 AM – 9:00 PM" },
  { day: "Wednesday", hours: "7:00 AM – 9:00 PM" },
  { day: "Thursday", hours: "7:00 AM – 9:00 PM" },
  { day: "Friday", hours: "7:00 AM – 9:00 PM" },
  { day: "Saturday", hours: "7:00 AM – 9:00 PM" },
  { day: "Sunday", hours: "7:00 AM – 9:00 PM" },
];

//   Numeric version of the hours above, used for the live "Open now" badge.
//   24-hour clock: 7 = 7 AM, 21 = 9 PM. Keep these in sync with HOURS.
const OPEN_HOURS: OpenHours = { openHour: 7, closeHour: 21 };

/* ════════════════════════════════════════════════════════════════════════
   END OF EDITABLE CONTENT — you can stop here.
   ════════════════════════════════════════════════════════════════════════ */

export default function Page() {
  return (
    <>
      <Navbar store={STORE} />
      <main>
        <Hero store={STORE} prices={GAS_PRICES} />
        <Stats stats={STATS} />
        <Offers offers={OFFERS} />
        <Experience images={EXPERIENCE_IMAGES} />
        <Deals deals={DEALS} store={STORE} />
        <HoursLocation store={STORE} hours={HOURS} openHours={OPEN_HOURS} />
      </main>
      <Footer store={STORE} />
      <MobileActionBar store={STORE} />
    </>
  );
}
