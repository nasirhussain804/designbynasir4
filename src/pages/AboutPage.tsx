import { Link } from 'react-router-dom'

import { AboutPreview } from '@/components/AboutPreview'
import { PageHeader } from '@/components/PageHeader'
import { Reveal } from '@/components/sections'
import { Button } from '@/components/ui/button'
import { aboutIntro, aboutStory, processSteps, stats, tools } from '@/data/content'

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title="Nasir Hussain" intro={aboutIntro} />

      <section className="bg-background">
        <div className="mx-auto grid gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-20 lg:px-8">
          <Reveal className="flex flex-col gap-6">
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              How I got here
            </h2>
            {aboutStory.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="text-base leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-8">
            <dl className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-wordmark text-4xl text-primary sm:text-5xl">
                    {stat.value}
                  </dd>
                  <p className="font-code text-[11px] tracking-wider text-muted-foreground uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>

            <div className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6">
              <p className="font-code text-[11px] tracking-wider text-primary uppercase">
                Tools of the trade
              </p>
              {tools.map((group) => (
                <div key={group.label} className="flex flex-col gap-1.5">
                  <p className="text-sm font-semibold text-card-foreground">
                    {group.label}
                  </p>
                  <p className="font-code text-xs leading-relaxed text-muted-foreground">
                    {group.items.join(' / ')}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <Reveal className="flex flex-col gap-3">
            <p className="font-code text-xs tracking-[0.18em] text-primary uppercase">
              Working together
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
              Four steps, no surprises
            </h2>
          </Reveal>

          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.index} delay={index * 0.06}>
                <li className="flex flex-col gap-3 border-t border-border pt-5">
                  <span className="font-wordmark text-3xl text-primary/40">
                    {step.index}
                  </span>
                  <p className="font-display text-lg font-semibold text-foreground">
                    {step.title}
                  </p>
                  <p className="text-sm text-pretty text-muted-foreground">
                    {step.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <AboutPreview />

      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-4 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="text-lg text-pretty text-foreground">
            Want to work together? Tell me about the project.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link to="/contact">Start a project</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/services">See services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
