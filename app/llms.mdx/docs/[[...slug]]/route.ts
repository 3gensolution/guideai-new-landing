import { notFound } from 'next/navigation'
import { docsLlms, source } from '@/lib/source'
import { getPageMarkdownUrl } from '@/lib/docs-shared'

export const revalidate = false

/** Plain-Markdown copy of each docs page, e.g. /docs/quickstart.md */
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug?: string[] }> },
) {
  const { slug } = await params
  const page = source.getPage(slug?.slice(0, -1))
  if (!page) notFound()

  return new Response(await docsLlms.page(page), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    slug: getPageMarkdownUrl(page).segments,
  }))
}
