import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support Desk',
  description:
    'An AI-first support inbox: the assistant deflects repetitive questions, and your team handles the rest with assignment, automation rules, and full context.',
  openGraph: {
    title: 'Support Desk | 3Guide',
    description:
      'An AI-first support inbox: AI deflects repetitive questions, humans handle the rest.',
    url: 'https://3guideai.com/support-desk',
  },
  alternates: {
    canonical: 'https://3guideai.com/support-desk',
  },
}

export default function SupportDeskLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
