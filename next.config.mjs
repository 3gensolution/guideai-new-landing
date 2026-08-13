/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== "production"

// Content Security Policy. `next/font` self-hosts fonts at build time, so no
// external font hosts are needed at runtime. Vercel Analytics loads its script
// from va.vercel-scripts.com and beacons to *.vercel-insights.com.
// React needs 'unsafe-eval' in DEV only (HMR / debugging); it is never added
// to the production policy.
const csp = [
  "default-src 'self'",
  // Next.js injects small inline bootstrap scripts; Vercel Analytics is remote.
  `script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval' " : ""}https://va.vercel-scripts.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://res.cloudinary.com https://cdn.3guideai.com",
  "font-src 'self' data:",
  // APIs the marketing site calls + analytics beacons.
  "connect-src 'self' https://api.3guideai.com https://cdn.3guideai.com https://*.vercel-insights.com https://va.vercel-scripts.com",
  // Embedded interactive demo.
  "frame-src 'self' https://demo.3guideai.com https://www.youtube.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join("; ")

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
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
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig
