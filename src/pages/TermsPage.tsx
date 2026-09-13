import { Link } from 'react-router-dom'

import { PageHeader } from '@/components/PageHeader'
import { Reveal } from '@/components/sections'
import { termsIntro, termsSections, termsUpdated } from '@/data/content'

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Service" intro={termsIntro}>
        <p className="font-code text-xs tracking-wider text-muted-foreground uppercase">
          Last updated {termsUpdated}
        </p>
      </PageHeader>

      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="flex flex-col gap-12">
            {termsSections.map((section, index) => (
              <Reveal key={section.heading} delay={index * 0.02}>
                <article className="flex flex-col gap-4">
                  <h2 className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 28)}
                      className="text-sm leading-relaxed text-pretty text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets ? (
                    <ul className="flex flex-col gap-2 pl-5">
                      {section.bullets.map((item) => (
                        <li
                          key={item}
                          className="list-disc text-sm leading-relaxed text-pretty text-muted-foreground"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 rounded-xl border border-border bg-muted/50 p-6">
            <p className="text-sm text-pretty text-muted-foreground">
              Questions about these terms?{' '}
              <Link
                to="/contact"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Get in touch
              </Link>{' '}
              or email hello@designbynasir.com.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
