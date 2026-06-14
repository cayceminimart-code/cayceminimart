import type { Metadata, Viewport } from "next";
import "@fontsource-variable/sora";
import "@fontsource-variable/inter";
import "./globals.css";

// While testing on GitHub Pages, these point at the Pages URL so shared-link
// previews (image + title) resolve correctly. When you move to your own domain
// or Vercel, set SITE_ORIGIN to that domain and SITE_PATH to "/".
const SITE_ORIGIN = "https://cayceminimart-code.github.io";
const SITE_PATH = "/cayceminimart/";
const SITE_URL = SITE_ORIGIN + SITE_PATH;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: "Cayce Mini Mart | Premium Convenience Store & Gas in Cayce, SC",
  description:
    "Premium fuel, fresh snacks, hot coffee, lottery, ATM and everyday essentials at 2335 Charleston Hwy, Cayce, SC. Open 7 days a week. Call (803) 661-9855.",
  keywords: [
    "Cayce Mini Mart",
    "convenience store Cayce SC",
    "gas station Cayce",
    "Charleston Hwy gas",
    "diesel Cayce SC",
    "lottery ATM Cayce",
  ],
  applicationName: "Cayce Mini Mart",
  authors: [{ name: "Cayce Mini Mart" }],
  alternates: { canonical: SITE_PATH },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Cayce Mini Mart",
    title: "Cayce Mini Mart | Premium Convenience Store & Gas in Cayce, SC",
    description:
      "Premium fuel, fresh snacks & everyday essentials in Cayce, SC. Open 7 days a week at 2335 Charleston Hwy.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cayce Mini Mart | Premium Convenience Store & Gas in Cayce, SC",
    description:
      "Premium fuel, fresh snacks & everyday essentials in Cayce, SC. Open 7 days a week.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
