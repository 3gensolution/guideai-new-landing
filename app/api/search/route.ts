import { source } from '@/lib/source'
import { createFromSource } from 'fumadocs-core/search/server'

/** Powers the docs search box (Ctrl/⌘ K). */
export const { GET } = createFromSource(source)
