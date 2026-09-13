import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDownRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { site } from '@/data/content'
import { gsap } from '@/lib/scroll'

// fig-anchor: clipped-display-wordmark
// fig-entrance: loud-reveal - nav, then line one, then line two, then the
// orange period, then the eyebrow, badge and scroll cue, over ~1s.
export function HeroWordmark() {
  const root = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })
      tl.from('[data-hero-mask-line]', {
        yPercent: 112,
        duration: 0.75,
        stagger: 0.15,
      })
        .from(
          '[data-hero-period]',
          { scale: 0, opacity: 0, duration: 0.35, ease: 'back.out(2.2)' },
          '-=0.18',
        )
        .from(
          '[data-hero-fade]',
          { y: 12, autoAlpha: 0, duration: 0.5, stagger: 0.1 },
          '-=0.25',
        )
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={root}
      data-component="src/components/HeroWordmark.tsx"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden border-b border-border bg-background"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-4 w-px bg-border sm:left-6 lg:left-8"
      />

      <div className="mx-auto max-w-6xl px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24 lg:px-8 lg:pt-28 lg:pb-32">
        <p
          data-hero-fade
          className="font-code text-xs tracking-[0.18em] text-muted-foreground uppercase"
        >
          {site.eyebrow}
        </p>

        <h1
          id="hero-heading"
          aria-label="Design by Nasir"
          className="mt-6 font-wordmark text-foreground uppercase sm:mt-8"
        >
          <span className="block overflow-hidden pb-[0.06em]">
            <span
              data-hero-mask-line
              className="block text-[clamp(3rem,15vw,9.5rem)] leading-[0.95]"
            >
              Design
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.06em]">
            <span
              data-hero-mask-line
              className="flex items-baseline gap-[0.04em] text-[clamp(3rem,15vw,9.5rem)] leading-[0.95]"
            >
              by Nasir
              <span data-hero-period className="text-primary">
                .
              </span>
            </span>
          </span>
        </h1>

        <div className="mt-10 grid gap-8 sm:mt-14 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
          <p
            data-hero-fade
            className="max-w-xl text-lg text-pretty text-muted-foreground sm:text-2xl"
          >
            {site.positioning}
          </p>

          <div data-hero-fade className="flex flex-col items-start gap-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3.5 py-1.5 font-code text-xs tracking-wider text-primary-foreground uppercase">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-primary-foreground"
              />
              {site.availability}
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link to="/contact">Start a project</Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link to="/#work">
                  See selected work
                  <ArrowDownRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
