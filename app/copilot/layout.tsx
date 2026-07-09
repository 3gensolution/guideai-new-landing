import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Browser Copilot',
  description:
    '3Guide Browser Copilot — an AI-powered Chrome extension with RAG-powered Q&A. Instant answers, contextual help, and guided support right in your product.',
  openGraph: {
    title: 'Browser Copilot | 3Guide',
    description:
      'AI-powered Chrome extension with RAG-powered Q&A. Instant answers and contextual help right in your product.',
    url: 'https://3guideai.com/copilot',
  },
  alternates: {
    canonical: 'https://3guideai.com/copilot',
  },
}

export default function CopilotLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
