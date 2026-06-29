import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Documentation',
  description:
    'GuideAI documentation — learn how to set up in-app guides, Browser Copilot, friction analytics, and integrate GuideAI into your B2B SaaS product.',
  openGraph: {
    title: 'Documentation | GuideAI',
    description:
      'Learn how to set up in-app guides, Browser Copilot, friction analytics, and integrate GuideAI into your product.',
    url: 'https://3guideai.com/docs',
  },
  alternates: {
    canonical: 'https://3guideai.com/docs',
  },
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
