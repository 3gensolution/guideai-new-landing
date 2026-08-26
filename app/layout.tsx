import type { Metadata } from 'next'
import { Figtree, Geist, Geist_Mono } from 'next/font/google'
import { CookieConsent } from '@/components/cookie-consent'
import { GuideAiSdk } from '@/components/guideai-sdk'
import { ScrollFx } from '@/components/marketing/scroll-fx'
import './globals.css'

/* Display voice — a bold geometric sans. Headlines run at 800 so they
   read as confident and structural, not delicate. */
const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  display: 'swap',
})

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.3guideai.com'),
  title: {
    default: '3Guide (3GuideAI) - AI-First Product Adoption Platform',
    template: '%s | 3Guide',
  },
  description: 'One line of code puts an AI helper inside your product. It shows people how, answers their questions, and completes the task for them — fewer tickets, faster onboarding, and data on where users get stuck.',
  generator: '3gensolution team',
  applicationName: '3Guide',
  keywords: [
    '3Guide',
    '3GuideAI',
    '3guideai',
    'GuideAI',
    'Guide AI',
    'product adoption',
    'in-app guides',
    'user onboarding',
    'AI onboarding',
    'friction analytics',
    'browser copilot',
    'B2B SaaS onboarding',
    'product tours',
    'user engagement',
    'digital adoption platform',
    'interactive walkthroughs',
  ],
  authors: [{ name: '3Guide', url: 'https://www.3guideai.com' }],
  creator: '3Guide',
  publisher: '3Guide',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.3guideai.com',
    siteName: '3Guide',
    title: '3Guide - AI-First Product Adoption Platform',
    description: 'One line of code puts an AI helper inside your product. It shows people how, answers their questions, and completes the task for them — fewer tickets, faster onboarding, and data on where users get stuck.',
    images: [
      {
        url: '/apple-icon.png',
        width: 1200,
        height: 630,
        alt: '3Guide - AI-First Product Adoption Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3Guide - AI-First Product Adoption Platform',
    description: 'One line of code puts an AI helper inside your product. It shows people how, answers their questions, and completes the task for them — fewer tickets, faster onboarding, and data on where users get stuck.',
    images: ['/apple-icon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.3guideai.com',
  },
  icons: {
    icon: [
      {
        url: '/logo.jpeg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo.jpeg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logo.jpeg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/logo.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <ScrollFx />
        {children}
        {/* Analytics mounts only after opt-in consent (NDPA 2023 §§25-26). */}
        <CookieConsent />
        {/* next/script places these itself — no wrapper element needed. */}
        <GuideAiSdk />
      </body>
    </html>
  )
}
