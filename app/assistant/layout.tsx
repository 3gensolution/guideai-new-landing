import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Assistant',
  description:
    'An AI assistant that does the task for your users, right inside your product. Fewer support tickets, faster results, and insight into what customers want.',
  openGraph: {
    title: 'AI Assistant | 3Guide',
    description:
      'Users ask. It gets done.',
    url: 'https://www.3guideai.com/assistant',
  },
  alternates: {
    canonical: 'https://www.3guideai.com/assistant',
  },
}

export default function AssistantLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
