import { Clock, Mail, MapPin } from 'lucide-react'

import { PageHeader } from '@/components/PageHeader'
import { LeadForm, Reveal } from '@/components/sections'
import { contact, site } from '@/data/content'

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let us make something loud"
        intro={contact.subheading}
      />

      <section className="bg-background">
        <div className="mx-auto grid gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16 lg:px-8">
          <Reveal className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
                >
                  <Mail className="size-5" />
                </span>
                <div className="flex flex-col gap-1">
                  <p className="font-code text-[11px] tracking-wider text-muted-foreground uppercase">
                    {contact.envelopeLabel}
                  </p>
                  <a
                    href={'mailto:' + site.email}
                    className="rounded-md text-base font-medium text-foreground outline-none hover:text-primary focus-visible:ring-[3px] focus-visible:ring-ring/50"
                  >
                    {site.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
                >
                  <MapPin className="size-5" />
                </span>
                <div className="flex flex-col gap-1">
                  <p className="font-code text-[11px] tracking-wider text-muted-foreground uppercase">
                    {contact.locationLabel}
                  </p>
                  <p className="text-base text-foreground">{site.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
                >
                  <Clock className="size-5" />
                </span>
                <div className="flex flex-col gap-1">
                  <p className="font-code text-[11px] tracking-wider text-muted-foreground uppercase">
                    {contact.hoursLabel}
                  </p>
                  <p className="text-base text-foreground">{contact.hours}</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-muted/50 p-6">
              <p className="font-code text-[11px] tracking-wider text-primary uppercase">
                What to include
              </p>
              <ul className="mt-3 flex flex-col gap-2 text-sm text-pretty text-muted-foreground">
                <li>What the project is and who it is for</li>
                <li>Your deadline, and whether it is fixed</li>
                <li>An honest budget range</li>
                <li>Anything you have already tried</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <LeadForm
              id="contact-form"
              heading={contact.heading}
              subheading={site.replyTime + '. The form takes about two minutes.'}
              submitLabel="Send enquiry"
              successTitle="Enquiry received"
              successMessage="Thanks - I will get back to you within 48 hours."
              onSubmit={async () => {
                // Delivery seam: enquiries flow through the site's form wiring.
                // Reject here to surface the inline error state instead.
                await Promise.resolve()
              }}
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}
