import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Friction Analytics',
  description:
    'Identify and eliminate user friction with GuideAI Friction Analytics. Track user behavior, detect drop-offs, and optimize your product experience with AI-driven insights.',
  openGraph: {
    title: 'Friction Analytics | GuideAI',
    description:
      'Identify and eliminate user friction. Track behavior, detect drop-offs, and optimize your product experience.',
    url: 'https://3guideai.com/analytics',
  },
  alternates: {
    canonical: 'https://3guideai.com/analytics',
  },
}

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
