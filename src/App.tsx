// fig-compose: manual - this is a multi-page React Router site with five
// routes; the single-page section manifest does not model a routed application.
import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'

import { Nav } from '@/components/Nav'
import { SiteFooter } from '@/components/SiteFooter'
import { Toaster } from '@/components/ui/sonner'
import AboutPage from '@/pages/AboutPage'
import ContactPage from '@/pages/ContactPage'
import HomePage from '@/pages/HomePage'
import ServicesPage from '@/pages/ServicesPage'
import TermsPage from '@/pages/TermsPage'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-background">
        <Nav />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
      <Toaster />
    </BrowserRouter>
  )
}
