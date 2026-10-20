import { useState } from 'react'
import { MessageCircle, Send, X } from 'lucide-react'
import { SITE, WA_LINK_1, WA_LINK_2 } from '../lib/site'

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 start-4 z-40 sm:bottom-6 sm:start-6">
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] max-w-sm rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl">
          <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3">
            <div>
              <p className="text-sm font-bold text-slate-900">محادثة واتساب</p>
              <p className="mt-0.5 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                فريق الدعم متصل الآن
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100"
              aria-label="إغلاق المحادثة"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <p className="mt-3 text-xs leading-5 text-slate-500">{SITE.waDescription}</p>

          <div className="mt-3 flex flex-col gap-2">
            {[
              { href: WA_LINK_1, phone: SITE.phone1, label: 'واتساب (1)' },
              { href: WA_LINK_2, phone: SITE.phone2, label: 'واتساب (2)' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center justify-between rounded-xl border border-slate-200 px-3 py-2 transition-colors hover:border-emerald-200 hover:bg-emerald-50/60"
              >
                <span className="flex items-center gap-2.5">
                  <MessageCircle className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  <span className="flex flex-col leading-tight">
                    <span className="text-xs font-bold text-slate-900">{item.label}</span>
                    <span className="font-mono text-[11px] text-slate-500" dir="ltr">{item.phone}</span>
                  </span>
                </span>
                <Send className="h-4 w-4 text-slate-400" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 w-12 items-center justify-center gap-2 rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-900/20 transition-transform hover:scale-[1.03] active:scale-100 sm:h-auto sm:w-auto sm:px-4 sm:py-3"
        aria-label="محادثة واتساب فورية"
        aria-expanded={isOpen}
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        <span className="hidden text-xs font-bold sm:inline">واتساب</span>
      </button>
    </div>
  )
}
