import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import FloatingWhatsApp from './FloatingWhatsApp'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex min-h-dvh flex-col">
      <a href="#main-content" className="skip-link">
        تجاوز إلى المحتوى الرئيسي
      </a>
      <Header />
      <main id="main-content" className="min-h-[calc(100vh-80px)] w-full flex-1 pt-20 bg-surface">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

