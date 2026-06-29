import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'In-App Guides',
  description:
    'Create AI-powered in-app guides in minutes. Auto-healing product tours, interactive walkthroughs, and smart onboarding flows that stay up-to-date automatically.',
  openGraph: {
    title: 'In-App Guides | GuideAI',
    description:
      'Create AI-powered in-app guides in minutes. Auto-healing product tours and interactive walkthroughs.',
    url: 'https://3guideai.com/guides',
  },
  alternates: {
    canonical: 'https://3guideai.com/guides',
  },
}

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
