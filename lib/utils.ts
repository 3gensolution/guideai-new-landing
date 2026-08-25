import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

/**
 * The brand type scale (`text-display`, `text-section`, …) lives in the
 * `@theme` block in globals.css. tailwind-merge can't know those are
 * font-size utilities, so by default it classifies them as text-*colors*
 * and drops them whenever a real color like `text-slate-900` follows in
 * the same `cn()` call. Registering them here keeps both.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        { text: ['display', 'title', 'section', 'sub', 'lead'] },
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
