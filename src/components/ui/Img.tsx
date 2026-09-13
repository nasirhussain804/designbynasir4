import { useState } from 'react'
import type { ImgHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

/**
 * Image wrapper with a runtime safety net: if the source fails to load (or is
 * empty) the slot degrades to a neutral surface rather than a broken icon.
 */
export function Img({
  src,
  alt = '',
  className,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    return <div role="img" aria-label={alt} className={cn('bg-muted', className)} />
  }

  return (
    <img
      {...props}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      src={src as string}
      onError={() => setFailed(true)}
    />
  )
}
