import { NextRequest, NextResponse } from 'next/server'
import { isMarkdownPreferred, rewritePath } from 'fumadocs-core/negotiation'
import { docsContentRoute, docsRoute } from '@/lib/docs-shared'

/* Serve the Markdown copy of a docs page for `/docs/x.md`, or when an AI
   client asks for `Accept: text/markdown`. Only runs on /docs. */
const { rewrite: rewriteDocs } = rewritePath(
  `${docsRoute}{/*path}`,
  `${docsContentRoute}{/*path}/content.md`,
)
const { rewrite: rewriteSuffix } = rewritePath(
  `${docsRoute}{/*path}.md`,
  `${docsContentRoute}{/*path}/content.md`,
)

export default function proxy(request: NextRequest) {
  const suffix = rewriteSuffix(request.nextUrl.pathname)
  if (suffix) return NextResponse.rewrite(new URL(suffix, request.nextUrl))

  if (isMarkdownPreferred(request)) {
    const result = rewriteDocs(request.nextUrl.pathname)
    if (result) {
      return NextResponse.rewrite(new URL(result, request.nextUrl), {
        headers: { Vary: 'Accept' },
      })
    }
  }

  return NextResponse.next()
}

export const config = { matcher: ['/docs', '/docs/:path*'] }
