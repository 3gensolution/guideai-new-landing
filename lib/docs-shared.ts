import { createGetUrl } from 'fumadocs-core/source'

export const docsRoute = '/docs'
export const docsContentRoute = '/llms.mdx/docs'

/** The GuideAI Chrome extension listing. */
export const EXTENSION_URL =
  'https://chromewebstore.google.com/detail/imncmklkgnbcjhkfjomfndacleajolaj'

const getContentUrl = createGetUrl(docsContentRoute)

/** Where the plain-Markdown copy of a docs page is served (for AI tools). */
export function getPageMarkdownUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'content.md']
  return { segments, url: getContentUrl(segments, page.locale) }
}
