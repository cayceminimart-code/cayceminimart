/**
 * Prefixes a public asset path with the deploy base path.
 *
 * On GitHub Pages the site is served from a sub-path (e.g. /cayceminimart),
 * and next/image with `unoptimized` does not auto-prepend basePath. On Vercel
 * NEXT_PUBLIC_BASE_PATH is empty, so paths stay at the root. Absolute URLs
 * (http/https) are returned untouched.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${BASE_PATH}${path}`;
}
