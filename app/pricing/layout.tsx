import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'GuideAI pricing plans for teams of all sizes. Start free with up to 1,000 monthly active users. Scale with Pro and Enterprise plans.',
  openGraph: {
    title: 'Pricing | GuideAI',
    description:
      'GuideAI pricing plans for teams of all sizes. Start free with up to 1,000 monthly active users.',
    url: 'https://3guideai.com/pricing',
  },
  alternates: {
    canonical: 'https://3guideai.com/pricing',
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
