import * as React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { navLinks } from '@/data/content'
import { cn } from '@/lib/utils'

export function Nav() {
  const [open, setOpen] = React.useState(false)

  return (
    <header
      data-component="src/components/Nav.tsx"
      className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8"
      >
        <Link
          to="/"
          className="flex items-center gap-2.5 rounded-md outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          <span
            aria-hidden="true"
            className="flex size-8 items-center justify-center rounded-md bg-primary font-code text-xs font-semibold text-primary-foreground"
          >
            NH
          </span>
          <span className="font-display text-base font-bold tracking-tight text-foreground sm:text-lg">
            Design by Nasir
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                end={link.href === '/'}
                className={({ isActive }) =>
                  cn(
                    'rounded-md px-3 py-2 text-sm font-medium transition-colors outline-none hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50',
                    isActive ? 'text-foreground' : 'text-muted-foreground',
                  )
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:inline-flex">
            <Link to="/contact">Start a project</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {open ? (
        <div
          id="mobile-menu"
          className="animate-in fade-in-0 slide-in-from-top-2 border-t border-border duration-200 motion-reduce:animate-none md:hidden"
        >
          <ul className="flex flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  end={link.href === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'block rounded-md px-3 py-2 text-sm font-medium transition-colors outline-none hover:bg-accent hover:text-accent-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50',
                      isActive ? 'text-foreground' : 'text-muted-foreground',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild className="w-full">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Start a project
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  )
}
