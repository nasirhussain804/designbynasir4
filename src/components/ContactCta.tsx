import { Link } from 'react-router-dom'

import { Reveal } from '@/components/sections'
import { site } from '@/data/content'

export function ContactCta() {
  return (
    <section
      data-component="src/components/ContactCta.tsx"
      aria-labelledby="contact-cta-heading"
      className="border-t border-border bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Reveal className="flex flex-col gap-6">
          <p className="font-code text-xs tracking-[0.18em] text-primary uppercase">
            Next project
          </p>
          <h2 id="contact-cta-heading" className="max-w-4xl">
            <Link
              to="/contact"
              className="group font-wordmark block text-[clamp(2rem,7vw,5rem)] leading-[1.02] text-balance text-foreground outline-none transition-colors hover:text-primary focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              Got a project that needs to be loud?
            </Link>
          </h2>
          <p className="font-code text-xs tracking-wider text-muted-foreground uppercase">
            {site.replyTime} &middot; {site.email}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
