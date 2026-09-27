import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Analytics — Find and Fix Where Users Struggle',
  description:
    'See exactly where customers get stuck in your product, get a suggested fix for each problem, and find out whether it worked.',
  openGraph: {
    title: 'Analytics — Find and Fix Where Users Struggle | 3Guide',
    description:
      'See where customers give up. Fix it, and prove it worked.',
    url: 'https://www.3guideai.com/analytics',
  },
  alternates: {
    canonical: 'https://www.3guideai.com/analytics',
  },
}

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
