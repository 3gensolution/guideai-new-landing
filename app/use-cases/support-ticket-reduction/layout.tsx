import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support Ticket Reduction',
  description:
    'Deflect repetitive how-do-I questions with AI answers, in-context walkthroughs, and a copilot that completes tasks — before they ever become tickets.',
  openGraph: {
    title: 'Support Ticket Reduction | 3Guide',
    description:
      'Deflect repetitive support questions with AI answers and in-context walkthroughs.',
    url: 'https://3guideai.com/use-cases/support-ticket-reduction',
  },
  alternates: {
    canonical: 'https://3guideai.com/use-cases/support-ticket-reduction',
  },
}

export default function SupportTicketReductionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
