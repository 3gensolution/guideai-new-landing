import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://3guideai.com'),
  title: {
    default: 'GuideAI - AI-First Product Adoption Platform',
    template: '%s | GuideAI',
  },
  description: 'Build in-app guides in minutes, keep them current automatically. AI-powered onboarding, friction analytics, and browser Copilot for B2B SaaS.',
  generator: '3gensolution team',
  applicationName: 'GuideAI',
  keywords: [
    'GuideAI',
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
  authors: [{ name: 'GuideAI', url: 'https://3guideai.com' }],
  creator: 'GuideAI',
  publisher: 'GuideAI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://3guideai.com',
    siteName: 'GuideAI',
    title: 'GuideAI - AI-First Product Adoption Platform',
    description: 'Build in-app guides in minutes, keep them current automatically. AI-powered onboarding, friction analytics, and browser Copilot for B2B SaaS.',
    images: [
      {
        url: '/apple-icon.png',
        width: 1200,
        height: 630,
        alt: 'GuideAI - AI-First Product Adoption Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GuideAI - AI-First Product Adoption Platform',
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
    canonical: 'https://3guideai.com',
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
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
