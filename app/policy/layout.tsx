import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    '3Guide privacy policy. Learn how we collect, use, and protect your data.',
  openGraph: {
    title: 'Privacy Policy | 3Guide',
    description: '3Guide privacy policy. Learn how we collect, use, and protect your data.',
    url: 'https://3guideai.com/policy',
  },
  alternates: {
    canonical: 'https://3guideai.com/policy',
  },
}

export default function PolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
