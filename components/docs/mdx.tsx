import defaultMdxComponents from 'fumadocs-ui/mdx'
import { Step, Steps } from 'fumadocs-ui/components/steps'
import { Tab, Tabs } from 'fumadocs-ui/components/tabs'
import { ImageZoom } from 'fumadocs-ui/components/image-zoom'
import type { MDXComponents } from 'mdx/types'
import { Screenshot } from './screenshot'

/** Components available inside every .mdx file without importing them. */
export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    img: (props) => <ImageZoom {...(props as any)} />,
    Step,
    Steps,
    Tab,
    Tabs,
    Screenshot,
    ...components,
  } satisfies MDXComponents
}

export const useMDXComponents = getMDXComponents

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>
}
