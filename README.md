# Cayce Mini Mart — Website

A fast, premium single-page marketing site for **Cayce Mini Mart**
(2335 Charleston Hwy, Cayce, SC 29033 · (803) 661-9855).

Built with **Next.js (App Router) + TypeScript + Tailwind CSS** and animated with
**Framer Motion**. Dark, high-end aesthetic with a rich red accent and warm gold
highlights. Mobile-first, accessible, and tuned for Lighthouse mobile 90+.

---

## ✏️ Edit your store info (no coding required)

Everything a non-coder needs to change lives in **one place**: the clearly
labeled block at the top of [`app/page.tsx`](app/page.tsx).

Open that file and you'll find sections for:

1. **Store details** — name, phone, address, Google Maps + Instagram links
2. **Gas prices** — the Regular / Diesel cash prices shown in the hero card
3. **Stats bar** — the animated counters
4. **What we offer** — the feature cards
5. **Experience images** — the photo collage paths
6. **Weekly deals** — the deal cards
7. **Store hours** — the hours table (plus the numeric "Open now" hours)

Change the text between the `"quotes"`, keep the commas, save, and you're done.

### Updating gas prices

In `app/page.tsx`, edit `GAS_PRICES`:

```ts
const GAS_PRICES = {
  regularCash: "$3.64",
  dieselCash: "$4.79",
  note: "Cash prices shown. Card prices may differ.",
  updatedLabel: "Updated weekly",
};
```

### Adding your own store photos

1. Drop your images into the **`/public`** folder (e.g. `storefront.jpg`,
   `coffee.jpg`). JPG, PNG, or WebP all work and are auto-optimized.
2. In `app/page.tsx`, update the `EXPERIENCE_IMAGES` list to point at them:

```ts
const EXPERIENCE_IMAGES = [
  "/storefront.jpg",
  "/coffee.jpg",
  "/snacks.jpg",
  "/pumps.jpg",
];
```

The site ships with stylish `.svg` placeholders so it looks great out of the box.

### Updating links

Replace the **placeholder** Instagram and Google Business links in `STORE`
(`instagramUrl`, `instagramHandle`, `googleBusinessUrl`) with your real profiles.

---

## 🧑‍💻 Run it locally

You need [Node.js](https://nodejs.org) 18.18+ (Node 20+ recommended).

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the dev server
```

Open **http://localhost:3000** in your browser. Edits to files reload instantly.

To preview a production build locally:

```bash
npm run build
npm start
```

---

## 🧪 Test it live on GitHub Pages (free, for previewing)

This repo includes an automated GitHub Pages deploy so you can share a live test
link before moving to Vercel.

1. Push the code to GitHub (the `main` branch).
2. The included workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml))
   builds a static export and publishes it automatically. It tries to enable
   Pages for you. If the first run reports Pages isn't enabled, go to
   **Settings → Pages → Build and deployment → Source: GitHub Actions**, then
   re-run the workflow from the **Actions** tab.
3. Your test site will be live at:

   **https://cayceminimart-code.github.io/cayceminimart/**

Every push to `main` redeploys automatically (takes ~1–2 minutes).

> **Note:** GitHub Pages serves from a sub-folder (`/cayceminimart`), so the
> build uses a `basePath`. This is handled automatically by the `GITHUB_PAGES`
> environment variable in [`next.config.mjs`](next.config.mjs) and only applies
> to the Pages build — **moving to Vercel needs no code changes.** If you rename
> the GitHub repo, update `REPO` in `next.config.mjs`.

---

## 🚀 Deploy to Vercel

This site is optimized for Vercel and deploys with zero configuration.

**Option A — from the dashboard (easiest):**

1. Push this folder to a GitHub/GitLab/Bitbucket repo.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Vercel auto-detects Next.js. Click **Deploy**. Done.

**Option B — from the command line:**

```bash
npm i -g vercel     # one-time
vercel              # preview deploy
vercel --prod       # production deploy
```

After deploying, update `SITE_URL` in [`app/layout.tsx`](app/layout.tsx) to your
real domain so social-share previews (Open Graph) use the correct address.

---

## 🎨 What's inside

- **Hero** — full-viewport animated aurora background, shimmering store name,
  parallax, floating glass gas-price card, and two big CTAs that fit on a phone
  screen without scrolling.
- **Sticky mobile action bar** — persistent **Directions** + **Call** buttons on
  phones (hidden on desktop), fading in after the hero.
- **Stats** — animated number counters.
- **What We Offer / Weekly Deals** — glassmorphism cards with hover glow.
- **Experience** — parallax image collage.
- **Hours & Location** — embedded Google Map, copy-address button, tap-to-call,
  and a live "Open now / Closed" badge.

### Performance & accessibility

- Mobile-first; no horizontal scroll down to 320px.
- All animation is transform/opacity only (GPU-friendly) and **respects
  `prefers-reduced-motion`**.
- The heaviest effects (animated aurora, parallax) automatically **switch off on
  low-power / data-saver devices**.
- Fonts are self-hosted (Sora + Inter via Fontsource) — no external font requests.
- Images below the fold are lazy-loaded via `next/image`.
- Semantic HTML, alt text, and ARIA labels throughout.

---

## 🛠 Tech

| | |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | lucide-react |
| Fonts | Sora + Inter (Fontsource, self-hosted) |
| Hosting | Vercel |

## 📄 License

Content and branding belong to Cayce Mini Mart. Code is provided for the
store's use.
