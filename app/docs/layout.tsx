import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Documentation',
  description:
    '3Guide documentation — learn how to set up in-app guides, Browser Copilot, friction analytics, and integrate 3Guide into your B2B SaaS product.',
  openGraph: {
    title: 'Documentation | 3Guide',
    description:
      'Learn how to set up in-app guides, Browser Copilot, friction analytics, and integrate 3Guide into your product.',
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
