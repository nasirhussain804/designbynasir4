import { Link } from 'react-router-dom'

import { Reveal } from '@/components/sections'
import { Img } from '@/components/ui/Img'
import { aboutPreview } from '@/data/content'

export function AboutPreview() {
  return (
    <section
      id="about"
      data-component="src/components/AboutPreview.tsx"
      aria-labelledby="about-preview-heading"
      className="bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal className="flex flex-col gap-3">
            <div className="overflow-hidden rounded-xl border border-border">
              <Img
                src={aboutPreview.image}
                alt={aboutPreview.imageAlt}
                className="aspect-[2/3] w-full object-cover"
              />
            </div>
            <p className="font-code text-[11px] tracking-wider text-muted-foreground uppercase">
              {aboutPreview.caption}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-6">
            <p className="font-code text-xs tracking-[0.18em] text-primary uppercase">
              About the studio
            </p>
            <h2
              id="about-preview-heading"
              className="font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl"
            >
              {aboutPreview.heading}
            </h2>
            <p className="max-w-xl text-lg text-pretty text-muted-foreground">
              {aboutPreview.body}
            </p>
            <Link
              to="/about"
              className="w-fit font-code text-xs tracking-wider text-primary uppercase underline-offset-4 hover:underline"
            >
              Read the full story &rarr;
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
