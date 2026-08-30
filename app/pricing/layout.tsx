import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    '3Guide pricing plans for teams of all sizes. Get started on a free plan, then scale with Pro, Business and Enterprise.',
  openGraph: {
    title: 'Pricing | 3Guide',
    description:
      '3Guide pricing plans for teams of all sizes. Get started on a free plan and scale when you are ready.',
    url: 'https://www.3guideai.com/pricing',
  },
  alternates: {
    canonical: 'https://www.3guideai.com/pricing',
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
