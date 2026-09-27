import { ImageZoom } from 'fumadocs-ui/components/image-zoom'

/**
 * A captioned product screenshot. `narrow` is for tall, phone-width captures
 * such as the extension popup, which look lost stretched to full width.
 */
export function Screenshot({
  src,
  alt,
  caption,
  width = 1280,
  height = 800,
  narrow = false,
}: {
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
  narrow?: boolean
}) {
  return (
    <figure className={narrow ? 'mx-auto my-6 max-w-xs' : 'my-6'}>
      <ImageZoom
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="!my-0 rounded-xl border border-fd-border"
      />
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-fd-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
