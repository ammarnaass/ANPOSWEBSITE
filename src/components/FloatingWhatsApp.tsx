import { useState } from 'react'
import { SITE, WA_LINK_1, WA_LINK_2 } from '../lib/site'

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 start-6 z-40">
      {/* Expanded popup */}
      {isOpen && (
        <div className="mb-3 w-80 rounded-2xl bg-surface-container-lowest p-4 shadow-[0_8px_30px_rgba(0,0,0,0.15)] border border-surface-container animate-fade-in text-on-surface">
          <div className="flex items-center justify-between pb-3 border-b border-surface-container-low">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">support_agent</span>
              </div>
              <div className="flex flex-col">
                <span className="font-title-lg text-title-lg text-on-surface leading-tight font-bold">محادثة واتساب فورية</span>
                <span className="font-label-sm text-label-sm text-on-tertiary-container font-semibold">فريق الدعم متصل الآن</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-on-surface-variant hover:text-on-surface p-1 rounded-lg"
              aria-label="إغلاق"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          <p className="font-label-sm text-label-sm text-on-surface-variant mt-2 mb-3 leading-relaxed">
            {SITE.waDescription}
          </p>

          <div className="flex flex-col gap-2">
            <a
              href={WA_LINK_1}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors group"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-on-tertiary-container text-[20px]">chat</span>
                <div className="flex flex-col">
                  <span className="font-body-md text-body-md font-bold text-on-surface">واتساب (1)</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant" dir="ltr">{SITE.phone1}</span>
                </div>
              </div>
              <span className="font-label-keycap text-label-keycap px-2 py-0.5 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed group-hover:scale-105 transition-transform">
                فتح المحادثة
              </span>
            </a>

            <a
              href={WA_LINK_2}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors group"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-on-tertiary-container text-[20px]">chat</span>
                <div className="flex flex-col">
                  <span className="font-body-md text-body-md font-bold text-on-surface">واتساب (2)</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant" dir="ltr">{SITE.phone2}</span>
                </div>
              </div>
              <span className="font-label-keycap text-label-keycap px-2 py-0.5 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed group-hover:scale-105 transition-transform">
                فتح المحادثة
              </span>
            </a>
          </div>
        </div>
      )}

      {/* Main Pill trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-space-sm bg-tertiary-container text-on-tertiary-container px-space-lg py-space-md rounded-full shadow-[0_4px_16px_rgba(0,33,20,0.2)] hover:scale-105 transition-all cursor-pointer"
        aria-label="محادثة واتساب فورية"
      >
        <span className="material-symbols-outlined text-on-tertiary-container text-[24px]">chat</span>
        <span className="font-body-md text-body-md font-semibold text-on-tertiary-container">
          محادثة واتساب فورية
        </span>
        <span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed animate-pulse" />
      </button>
    </div>
  )
}
