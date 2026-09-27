import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guidance — In-App Guides & Walkthroughs',
  description:
    'Step-by-step walkthroughs, tips and announcements inside your product, so new users reach their first win faster and send fewer support tickets.',
  openGraph: {
    title: 'Guidance — In-App Guides & Walkthroughs | 3Guide',
    description:
      'Show users how, right inside your product.',
    url: 'https://www.3guideai.com/guides',
  },
  alternates: {
    canonical: 'https://www.3guideai.com/guides',
  },
}

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
