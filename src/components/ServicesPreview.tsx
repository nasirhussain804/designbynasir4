import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

import { Reveal } from '@/components/sections'
import { services, servicesIntro } from '@/data/content'

export function ServicesPreview() {
  return (
    <section
      id="services"
      data-component="src/components/ServicesPreview.tsx"
      aria-labelledby="services-preview-heading"
      className="border-y border-border bg-muted/40"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <Reveal className="flex flex-col gap-3">
          <p className="font-code text-xs tracking-[0.18em] text-primary uppercase">
            {servicesIntro.heading}
          </p>
          <h2
            id="services-preview-heading"
            className="max-w-2xl font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl"
          >
            {servicesIntro.subheading}
          </h2>
        </Reveal>

        <ul className="mt-12 flex flex-col border-t border-border">
          {services.map((service, index) => (
            <Reveal key={service.index} delay={index * 0.05}>
              <li className="border-b border-border">
                <Link
                  to="/services"
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-md py-6 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 sm:gap-8 sm:py-7"
                >
                  <span className="font-code text-xs tracking-wider text-muted-foreground">
                    {service.index}
                  </span>
                  <span className="flex min-w-0 flex-col gap-1">
                    <span className="font-display text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                      {service.title}
                    </span>
                    <span className="max-w-xl text-sm text-pretty text-muted-foreground">
                      {service.summary}
                    </span>
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="hidden font-code text-xs tracking-wider text-muted-foreground sm:inline">
                      {service.range}
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-5 text-muted-foreground transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary motion-reduce:transition-none"
                    />
                  </span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-10">
          <Link
            to="/services"
            className="font-code text-xs tracking-wider text-primary uppercase underline-offset-4 hover:underline"
          >
            See full scopes and pricing &rarr;
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
