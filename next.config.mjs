/** @type {import('next').NextConfig} */

/**
 * Security headers. NDPA 2023 §39 requires appropriate technical measures to
 * protect personal data — the contact form and pricing calls carry personal
 * data, so the transport and embedding surface is locked down here.
 *
 * The allowlists below are derived from the origins the site actually uses:
 * the demo iframe (demo.), the contact/pricing APIs (api.), the asset CDN,
 * and Vercel Analytics (only ever loaded after opt-in consent).
 */
const csp = [
  "default-src 'self'",
  // Next.js requires inline/eval for its runtime and hydration payloads.
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "img-src 'self' data: blob: https://cdn.3guideai.com https://res.cloudinary.com https://drive.google.com",
  // dashboard.: live subscription-plan pricing. api-bdc.net: client-side
  // reverse-geocode that picks the display currency (no PII sent).
  "connect-src 'self' https://api.3guideai.com https://cdn.3guideai.com https://dashboard.3guideai.com https://api-bdc.net https://va.vercel-scripts.com https://vitals.vercel-insights.com",
  "frame-src 'self' https://demo.3guideai.com https://www.youtube.com https://drive.google.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join('; ')

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
]

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: ".",
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
}

export default nextConfig
