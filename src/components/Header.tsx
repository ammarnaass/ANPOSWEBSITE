import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { SITE } from '../lib/site'


export interface NavLinkItem {
  to: string
  label: string
}

export const links: NavLinkItem[] = [
  { to: '/', label: 'الرئيسية' },
  { to: '/features', label: 'المميزات' },
  { to: '/downloads', label: 'التحميل' },
  { to: '/pricing', label: 'التسعير والتفعيل' },
  { to: '/support', label: 'الدعم والأسئلة' },
  { to: '/contact', label: 'تواصل معنا' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-2 sm:gap-space-md">
        {/* Brand */}
        <div className="flex items-center gap-2 sm:gap-space-md">
          <Link to="/" className="flex items-center gap-space-sm" aria-label="AN POS — الرئيسية">
            <img src="/logo.png" alt="شعار AN POS" className="w-10 h-10 rounded-xl object-contain shadow-sm shrink-0" />
            <span className="font-headline-md text-headline-md tracking-tight text-on-surface">AN POS</span>
          </Link>
          <span className="hidden sm:inline-flex font-label-keycap text-label-keycap px-space-sm py-space-xs rounded bg-surface-container text-on-primary-fixed-variant">
            النسخة {SITE.version}
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-space-sm" aria-label="التنقل الرئيسي">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `font-body-md text-body-md px-space-sm py-space-xs transition-colors rounded-lg ${
                  isActive
                    ? 'bg-surface-container text-on-surface font-bold'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-space-md">
          <Link
            to="/downloads"
            className="font-body-md text-body-md px-3 py-2 sm:px-space-lg sm:py-space-sm rounded-xl bg-secondary text-on-secondary hover:bg-secondary-container transition-all flex items-center gap-1.5 sm:gap-space-xs shadow-[0_2px_4px_rgba(14,26,47,0.08)] whitespace-nowrap shrink-0"
          >
            <span className="hidden sm:inline">تحميل مجاني (تجربة 7 أيام)</span>
            <span className="sm:hidden text-xs font-bold">تحميل مجاني</span>
            <span className="hidden sm:inline-block font-label-keycap text-label-keycap bg-surface-container-lowest/20 px-space-xs py-0.5 rounded">
              F12
            </span>
          </Link>

          <Link
            to="/client"
            aria-label="بوابة العميل"
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:opacity-90 transition-opacity"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="p-2 text-on-surface xl:hidden rounded-lg hover:bg-surface-container"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-outline-variant/30 bg-surface px-6 py-4 xl:hidden shadow-lg animate-in fade-in"
          aria-label="قائمة الجوال"
        >
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2.5 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-surface-container text-on-surface font-bold'
                      : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
