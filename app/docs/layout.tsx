import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Image from 'next/image'
import { DocsLayout } from 'fumadocs-ui/layouts/docs'
import { RootProvider } from 'fumadocs-ui/provider/next'
import { source } from '@/lib/source'
import { DASHBOARD_URL } from '@/lib/site'
import './docs.css'

export const metadata: Metadata = {
  title: {
    default: 'Documentation',
    template: '%s | 3Guide Docs',
  },
  description:
    'Set up 3Guide step by step: install the SDK, scan your app, build guides, connect the AI Assistant, create Guide Pro demos and track analytics.',
  alternates: { canonical: 'https://www.3guideai.com/docs' },
}

/** Sidebar tree comes from content/docs: add a file, get a nav entry. */
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <RootProvider theme={{ defaultTheme: 'light' }}>
      <DocsLayout
        tree={source.getPageTree()}
        nav={{
          title: (
            <span className="flex items-center gap-2 font-semibold">
              <Image src="/logo.jpeg" alt="" width={24} height={24} className="rounded-md" />
              3Guide Docs
            </span>
          ),
          url: '/docs',
        }}
        links={[
          { text: 'Website', url: '/' },
          { text: 'Dashboard', url: DASHBOARD_URL, external: true },
        ]}
      >
        {children}
      </DocsLayout>
    </RootProvider>
  )
}
