import * as React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'

import { Separator } from '@/components/ui/separator'
import { navLinks, site } from '@/data/content'

const TIME_FORMAT = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Asia/Karachi',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
})

function useKarachiTime(): string {
  const [time, setTime] = React.useState<string>(() => TIME_FORMAT.format(new Date()))

  React.useEffect(() => {
    const id = window.setInterval(() => setTime(TIME_FORMAT.format(new Date())), 30_000)
    return () => window.clearInterval(id)
  }, [])

  return time
}

export function SiteFooter() {
  const time = useKarachiTime()
  const year = new Date().getFullYear()

  return (
    <footer
      data-component="src/components/SiteFooter.tsx"
      className="border-t border-border bg-muted/40"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-4">
            <p
              aria-hidden="true"
              className="font-wordmark text-5xl text-foreground/15 sm:text-6xl"
            >
              {site.monogram}
            </p>
            <p className="max-w-sm text-sm text-pretty text-muted-foreground">
              {site.positioning}
            </p>
            <a
              href={'mailto:' + site.email}
              className="w-fit rounded-md font-code text-xs tracking-wider text-primary uppercase outline-none hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              {site.email}
            </a>
          </div>

          <nav aria-label="Pages" className="flex flex-col gap-3">
            <p className="font-code text-xs tracking-wider text-muted-foreground uppercase">
              Pages
            </p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="rounded-md text-sm text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/terms"
                  className="rounded-md text-sm text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex flex-col gap-3">
            <p className="font-code text-xs tracking-wider text-muted-foreground uppercase">
              Studio
            </p>
            <p className="text-sm text-muted-foreground">{site.location}</p>
            <p className="font-code text-sm text-foreground">
              {time} <span className="text-muted-foreground">PKT</span>
            </p>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-md text-sm font-medium text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              Back to top
              <ArrowUp className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {year} Design by Nasir. All rights reserved.
          </p>
          <p className="font-code text-xs tracking-wider text-muted-foreground uppercase">
            Karachi - Worldwide
          </p>
        </div>
      </div>
    </footer>
  )
}
