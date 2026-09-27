import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guide Pro — Interactive Product Demos',
  description:
    'Turn a quick recording of your product into an interactive demo that captures leads on your website and trains clients and staff.',
  openGraph: {
    title: 'Guide Pro — Interactive Product Demos | 3Guide',
    description:
      'Demos that win customers. Guides that train teams.',
    url: 'https://www.3guideai.com/guide-pro',
  },
  alternates: {
    canonical: 'https://www.3guideai.com/guide-pro',
  },
}

export default function GuideProLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
