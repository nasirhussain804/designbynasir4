import { motion, useReducedMotion } from 'framer-motion'

import { Img } from '@/components/ui/Img'
import { projects } from '@/data/content'
import { cn } from '@/lib/utils'

export function SelectedWork() {
  const reduced = useReducedMotion()

  return (
    <section
      id="work"
      data-component="src/components/SelectedWork.tsx"
      aria-labelledby="work-heading"
      className="bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-3">
            <p className="font-code text-xs tracking-[0.18em] text-primary uppercase">
              Selected Work
            </p>
            <h2
              id="work-heading"
              className="font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl"
            >
              Six projects, six problems worth solving
            </h2>
          </div>
          <p className="max-w-sm text-sm text-pretty text-muted-foreground">
            Placeholder visuals for now - swap these for your own project shots when the
            portfolio is ready.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: index * 0.06, ease: 'easeOut' }}
              className={cn(
                'group flex flex-col overflow-hidden rounded-xl border border-border bg-card',
                project.wide && 'sm:col-span-2',
              )}
            >
              <div
                className={cn(
                  'relative overflow-hidden',
                  project.wide ? 'aspect-[16/9]' : 'aspect-[4/5]',
                )}
              >
                <Img
                  src={project.image}
                  alt={project.alt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] motion-reduce:transition-none"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
                />
                <span className="absolute top-3 left-3 rounded-md bg-background/85 px-2 py-0.5 font-code text-[11px] tracking-wider text-foreground uppercase backdrop-blur">
                  {project.index}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <p className="font-code text-[11px] tracking-wider text-primary uppercase">
                  {project.category} &middot; {project.year}
                </p>
                <h3 className="font-display text-lg font-semibold tracking-tight text-balance text-card-foreground">
                  {project.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
