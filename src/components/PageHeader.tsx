import type { ReactNode } from 'react'

import { Reveal } from '@/components/sections'

interface PageHeaderProps {
  eyebrow: string
  title: string
  intro?: string
  children?: ReactNode
}

/** Shared opening block for every interior page - keeps type rhythm identical. */
export function PageHeader({ eyebrow, title, intro, children }: PageHeaderProps) {
  return (
    <section
      data-component="src/components/PageHeader.tsx"
      aria-labelledby="page-heading"
      className="border-b border-border bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-12 sm:px-6 sm:pt-20 sm:pb-16 lg:px-8">
        <Reveal className="flex flex-col gap-5">
          <p className="font-code text-xs tracking-[0.18em] text-primary uppercase">
            {eyebrow}
          </p>
          <h1
            id="page-heading"
            className="font-wordmark max-w-4xl text-[clamp(2rem,6vw,3.75rem)] text-balance text-foreground uppercase"
          >
            {title}
          </h1>
          {intro ? (
            <p className="max-w-2xl text-lg text-pretty text-muted-foreground">{intro}</p>
          ) : null}
          {children}
        </Reveal>
      </div>
    </section>
  )
}
