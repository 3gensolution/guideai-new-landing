import type { Metadata } from 'next'
import { Roboto, Roboto_Mono, Space_Grotesk } from 'next/font/google'
import { ScrollFx } from '@/components/marketing/scroll-fx'
import { CookieConsent } from '@/components/cookie-consent'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-roboto',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
})

// Sharp, bold geometric sans for headlines (Everstage-style display voice)
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.3guideai.com'),
  title: {
    default: '3Guide (3GuideAI) - AI-First Product Adoption Platform',
    template: '%s | 3Guide',
  },
  description: 'Build in-app guides in minutes, keep them current automatically. AI-powered onboarding, friction analytics, and browser Copilot for B2B SaaS.',
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
    description: 'Build in-app guides in minutes, keep them current automatically. AI-powered onboarding, friction analytics, and browser Copilot for B2B SaaS.',
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
    description: 'Build in-app guides in minutes, keep them current automatically. AI-powered onboarding, friction analytics, and browser Copilot for B2B SaaS.',
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
    <html
      lang="en"
      className={`${roboto.variable} ${robotoMono.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-sans antialiased">
        <ScrollFx />
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
