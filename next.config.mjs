/**
 * This config supports TWO deploy targets from the same code:
 *
 *  • Vercel (default)        → full Next.js, optimized images. Just deploy.
 *  • GitHub Pages (testing)  → static export to /out, served from a sub-path.
 *                              Enabled by setting the env var GITHUB_PAGES=true
 *                              (the included GitHub Actions workflow does this).
 *
 * GitHub Pages serves this project at:
 *   https://cayceminimart-code.github.io/cayceminimart/
 * so it needs a basePath. If you rename the GitHub repo, update REPO below.
 */
const REPO = "cayceminimart";
const isGithubPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Lint is run separately; don't let it fail production builds.
  eslint: { ignoreDuringBuilds: true },

  ...(isGithubPages
    ? {
        // --- GitHub Pages (static hosting, no image server) ---
        output: "export",
        basePath: `/${REPO}`,
        trailingSlash: true,
        images: { unoptimized: true },
        // Exposed to the client so next/image (unoptimized) sources can be
        // prefixed with the sub-path. Empty on Vercel, so paths stay at root.
        env: { NEXT_PUBLIC_BASE_PATH: `/${REPO}` },
      }
    : {
        // --- Vercel / local dev (full Next.js image optimization) ---
        images: {
          formats: ["image/avif", "image/webp"],
          // Lets next/image render the bundled first-party placeholder SVGs.
          // Real JPG/PNG/WebP photos are optimized normally.
          dangerouslyAllowSVG: true,
          contentDispositionType: "attachment",
          contentSecurityPolicy:
            "default-src 'self'; script-src 'none'; sandbox;",
        },
      }),
};

export default nextConfig;
