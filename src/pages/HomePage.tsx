import { AboutPreview } from '@/components/AboutPreview'
import { CapabilitiesBand } from '@/components/CapabilitiesBand'
import { ContactCta } from '@/components/ContactCta'
import { HeroWordmark } from '@/components/HeroWordmark'
import { SelectedWork } from '@/components/SelectedWork'
import { ServicesPreview } from '@/components/ServicesPreview'

export default function HomePage() {
  return (
    <>
      <HeroWordmark />
      <SelectedWork />
      <ServicesPreview />
      <CapabilitiesBand />
      <AboutPreview />
      <ContactCta />
    </>
  )
}
