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
    <header className="fixed top-0 sm:top-3 inset-x-0 z-50 px-2 sm:px-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto rounded-2xl glass-panel px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between gap-3 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.08)] border border-slate-200/80">
        {/* Brand */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          <Link to="/" className="flex items-center gap-2.5 group" aria-label="AN POS — الرئيسية">
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="شعار AN POS" 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-contain shadow-sm shrink-0 transition-transform group-hover:scale-105" 
              />
              <span className="absolute -top-1 -end-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white ring-1 ring-emerald-500/30" />
            </div>
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md font-bold tracking-tight text-on-surface group-hover:text-secondary transition-colors">
                AN POS
              </span>
              <span className="text-[10px] text-on-surface-variant font-medium -mt-1 hidden sm:block">
                نظام نقاط البيع الحديث
              </span>
            </div>
          </Link>
          <Link
            to="/app"
            title="معلومات وإصدارات البرنامج (/app)"
            className="hidden lg:inline-flex items-center gap-1.5 font-label-keycap text-label-keycap px-2.5 py-1 rounded-full bg-slate-100 hover:bg-slate-200/80 text-slate-700 transition-colors border border-slate-200/60"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>النسخة {SITE.version}</span>
            <span className="text-secondary font-bold">DZ</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-1 bg-slate-100/70 p-1.5 rounded-xl border border-slate-200/50" aria-label="التنقل الرئيسي">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `font-body-md text-sm px-3.5 py-1.5 transition-all rounded-lg ${
                  isActive
                    ? 'bg-white text-secondary font-bold shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50 font-medium'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/downloads"
            className="btn-shimmer font-body-md text-sm px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-secondary hover:bg-blue-700 text-white font-bold transition-all flex items-center gap-2 shadow-[0_2px_10px_rgba(37,99,235,0.25)] hover:shadow-[0_4px_16px_rgba(37,99,235,0.35)] active:translate-y-0.5 whitespace-nowrap shrink-0"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            <span className="hidden sm:inline">تحميل مجاني (7 أيام)</span>
            <span className="sm:hidden text-xs font-bold">تحميل مجاني</span>
            <span className="hidden sm:inline-block font-mono text-[10px] bg-white/20 px-1.5 py-0.5 rounded font-semibold">
              F12
            </span>
          </Link>

          <Link
            to="/client"
            aria-label="بوابة العميل"
            title="بوابة العميل"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center text-slate-700 hover:text-secondary transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">person</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="p-2 text-slate-700 xl:hidden rounded-xl hover:bg-slate-100 transition-colors"
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
          className="mt-2 max-w-7xl mx-auto rounded-2xl glass-panel p-4 xl:hidden shadow-xl border border-slate-200/80 animate-in fade-in slide-in-from-top-2 duration-200"
          aria-label="قائمة الجوال"
        >
          <div className="flex flex-col gap-1.5">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-secondary text-white shadow-sm'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="pt-2 mt-1 border-t border-slate-200/80 flex items-center justify-between">
              <NavLink
                to="/app"
                onClick={() => setOpen(false)}
                className="text-xs font-semibold text-secondary hover:underline flex items-center gap-1.5 py-1 px-2"
              >
                <span>📦 معلومات وإصدارات البرنامج</span>
                <span className="font-mono bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded text-[10px]">
                  {SITE.version}
                </span>
              </NavLink>
              <Link
                to="/downloads"
                onClick={() => setOpen(false)}
                className="text-xs font-bold text-white bg-secondary px-3 py-1.5 rounded-lg flex items-center gap-1"
              >
                <span>حمّل الآن</span>
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
