import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Download, Menu, UserRound, X } from 'lucide-react'
import { SITE } from '../lib/site'

export interface NavLinkItem {
  to: string
  label: string
}

export const links: NavLinkItem[] = [
  { to: '/', label: 'الرئيسية' },
  { to: '/features', label: 'المميزات' },
  { to: '/downloads', label: 'التحميل' },
  { to: '/pricing', label: 'التسعير' },
  { to: '/support', label: 'الدعم' },
  { to: '/contact', label: 'تواصل معنا' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-2 pt-2 sm:px-6 sm:pt-3">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 rounded-2xl border border-slate-200/80 bg-white/85 px-3 shadow-[0_4px_24px_-8px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:h-18 sm:px-5">
        {/* Brand */}
        <Link to="/" className="group flex shrink-0 items-center gap-2.5" aria-label="AN POS — الرئيسية">
          <span className="relative">
            <img
              src="/logo.png"
              alt="شعار AN POS"
              className="h-9 w-9 rounded-xl object-contain shadow-sm transition-transform group-hover:scale-105 sm:h-10 sm:w-10"
            />
            <span className="absolute -end-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-extrabold text-slate-900">AN POS</span>
            <span className="hidden text-[10px] font-medium text-slate-500 sm:block">نظام نقاط البيع</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-0.5 rounded-xl border border-slate-200/60 bg-slate-100/70 p-1 xl:flex"
          aria-label="التنقل الرئيسي"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `rounded-lg px-3.5 py-1.5 text-sm transition-colors ${
                  isActive
                    ? 'bg-white font-bold text-secondary shadow-sm'
                    : 'font-medium text-slate-600 hover:text-slate-900'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Link
            to="/downloads"
            className="btn-shimmer inline-flex min-h-10 items-center gap-2 rounded-xl bg-secondary px-3 py-2 text-sm font-bold text-white shadow-[0_2px_10px_rgba(37,99,235,0.25)] transition-all hover:bg-blue-700 active:translate-y-px sm:px-4"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">تحميل مجاني</span>
            <span className="sm:hidden">تحميل</span>
          </Link>

          <Link
            to="/client"
            aria-label="بوابة العميل"
            title="بوابة العميل"
            className="hidden h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-50 hover:text-secondary sm:flex"
          >
            <UserRound className="h-4.5 w-4.5" aria-hidden="true" />
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-700 transition-colors hover:bg-slate-100 xl:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav
          id="mobile-nav"
          className="mx-auto mt-2 max-w-6xl rounded-2xl border border-slate-200/80 bg-white/95 p-3 shadow-xl backdrop-blur-xl xl:hidden"
          aria-label="قائمة الجوال"
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-2.5 text-sm transition-colors ${
                    isActive
                      ? 'bg-blue-50 font-bold text-secondary'
                      : 'font-semibold text-slate-700 hover:bg-slate-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="mt-2 flex items-center justify-between border-t border-slate-100 pt-3">
            <Link
              to="/client"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-xs font-semibold text-slate-600 hover:text-secondary"
            >
              <UserRound className="h-3.5 w-3.5" aria-hidden="true" />
              بوابة العميل
            </Link>
            <Link
              to="/app"
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-1.5 font-mono text-[11px] font-semibold text-slate-500 hover:text-secondary"
            >
              {SITE.version}
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
