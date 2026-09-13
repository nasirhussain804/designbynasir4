import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'

import { PageHeader } from '@/components/PageHeader'
import { Reveal } from '@/components/sections'
import { Button } from '@/components/ui/button'
import { services, servicesIntro } from '@/data/content'

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="Services" title="What I make" intro={servicesIntro.subheading} />

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="flex flex-col gap-14">
            {services.map((service, index) => (
              <Reveal key={service.index} delay={index * 0.04}>
                <article className="grid gap-8 border-t border-border pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-16">
                  <div className="flex flex-col gap-4">
                    <span className="font-code text-xs tracking-wider text-primary">
                      {service.index}
                    </span>
                    <h2 className="font-display text-2xl font-bold tracking-tight text-balance text-foreground sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="text-base text-pretty text-muted-foreground">
                      {service.summary}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                      <span className="font-code text-sm text-foreground">
                        {service.range}
                      </span>
                      <span className="font-code text-xs tracking-wider text-muted-foreground uppercase">
                        {service.timeline}
                      </span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-border bg-card p-6">
                    <p className="font-code text-[11px] tracking-wider text-primary uppercase">
                      What you get
                    </p>
                    <ul className="mt-4 flex flex-col gap-3">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Check
                            aria-hidden="true"
                            className="mt-0.5 size-4 shrink-0 text-primary"
                          />
                          <span className="text-sm text-pretty text-card-foreground">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-primary">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex max-w-xl flex-col gap-2">
            <p className="font-code text-xs tracking-wider text-primary-foreground/70 uppercase">
              Not sure which fits?
            </p>
            <p className="font-display text-2xl font-bold tracking-tight text-balance text-primary-foreground sm:text-3xl">
              Send me the brief. I will tell you honestly what you need.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="border border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <Link to="/contact">Start a project</Link>
          </Button>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid gap-8 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
          <Reveal className="flex flex-col gap-3">
            <p className="font-code text-[11px] tracking-wider text-primary uppercase">
              Payment
            </p>
            <p className="text-sm text-pretty text-muted-foreground">
              Projects are split 50% to begin and 50% on delivery. Quotes are valid for 30
              days.
            </p>
          </Reveal>
          <Reveal delay={0.06} className="flex flex-col gap-3">
            <p className="font-code text-[11px] tracking-wider text-primary uppercase">
              Revisions
            </p>
            <p className="text-sm text-pretty text-muted-foreground">
              Each project includes the revision rounds listed in its proposal. More are
              billed hourly, quoted first.
            </p>
          </Reveal>
          <Reveal delay={0.12} className="flex flex-col gap-3">
            <p className="font-code text-[11px] tracking-wider text-primary uppercase">
              Handover
            </p>
            <p className="text-sm text-pretty text-muted-foreground">
              You get final files organised and named, plus a short guide so the work stays
              consistent.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
