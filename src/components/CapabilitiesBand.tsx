import { capabilities } from '@/data/content'

/**
 * The single full-strength brand band: an infinite marquee of capabilities
 * in dark ink type on the sodium-orange surface.
 */
export function CapabilitiesBand() {
  const track = [...capabilities, ...capabilities]

  return (
    <section
      data-component="src/components/CapabilitiesBand.tsx"
      aria-label="Capabilities"
      className="overflow-hidden bg-primary py-6 sm:py-8"
    >
      <div className="flex w-max animate-band">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1 ? 'true' : undefined}
            className="flex shrink-0 items-center"
          >
            {track.map((capability, index) => (
              <li
                key={copy + '-' + capability + '-' + index}
                className="flex items-center whitespace-nowrap"
              >
                <span className="font-wordmark px-6 text-2xl text-primary-foreground uppercase sm:px-9 sm:text-4xl">
                  {capability}
                </span>
                <span
                  aria-hidden="true"
                  className="font-display text-2xl text-primary-foreground/60 sm:text-3xl"
                >
                  &#10035;
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}
