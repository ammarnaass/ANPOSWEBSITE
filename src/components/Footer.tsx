import { Link } from 'react-router-dom'
import { SITE } from '../lib/site'

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 relative overflow-hidden border-t border-slate-800">
      {/* Background Glow */}
      <div className="absolute top-0 start-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 end-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Live System Status Banner */}
      <div className="border-b border-slate-800/80 bg-slate-950/50 py-3 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-slate-200 font-semibold">حالة النظام وسيرفرات التفعيل:</span>
            <span className="text-emerald-400 font-mono font-medium">نشطة 100% (All Systems Operational)</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>تغطية 58 ولاية جزائرية</span>
            <span>•</span>
            <span>دعم فني متاح الآن</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="شعار AN POS" className="w-10 h-10 rounded-xl object-contain shadow-md" />
              <div>
                <span className="text-lg font-bold text-white block">AN POS الجزائر</span>
                <span className="text-xs text-slate-400 font-mono">الإصدار {SITE.version}</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              المنظومة المحاسبية والبيعية المتكاملة لإدارة المتاجر ونقاط البيع في الجزائر. سرعة قصوى، أمان محلي، ودعم لجميع الطابعات الحرارية والباركود.
            </p>
            <div className="flex items-center gap-2 text-slate-300 text-xs mb-5 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
              <span className="material-symbols-outlined text-[18px] text-emerald-400">verified</span>
              <span>مطابق ومُهيأ للمعايير الجبائية والتجارية الجزائرية</span>
            </div>

            {/* Developer Community / Socials */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-400 block">قنوات ومجتمع المطور:</span>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={SITE.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white text-xs transition-colors border border-slate-700"
                >
                  فيسبوك
                </a>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-pink-600 text-slate-300 hover:text-white text-xs transition-colors border border-slate-700"
                >
                  إنستغرام
                </a>
                <a
                  href={SITE.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white text-xs transition-colors border border-slate-700"
                >
                  يوتيوب
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <div className="text-base font-bold text-white mb-4">روابط سريعة</div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5" to="/">
                  <span className="material-symbols-outlined text-[16px] text-blue-400">arrow_left</span>
                  <span>الرئيسية ونظرة عامة</span>
                </Link>
              </li>
              <li>
                <Link className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5" to="/features">
                  <span className="material-symbols-outlined text-[16px] text-blue-400">arrow_left</span>
                  <span>مميزات نقاط البيع والمخزون</span>
                </Link>
              </li>
              <li>
                <Link className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5" to="/downloads">
                  <span className="material-symbols-outlined text-[16px] text-blue-400">arrow_left</span>
                  <span>تحميل البرنامج (تجربة مجانية)</span>
                </Link>
              </li>
              <li>
                <Link className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5" to="/pricing">
                  <span className="material-symbols-outlined text-[16px] text-blue-400">arrow_left</span>
                  <span>التسعير والترخيص الدائم</span>
                </Link>
              </li>
              <li>
                <Link className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5" to="/support">
                  <span className="material-symbols-outlined text-[16px] text-blue-400">arrow_left</span>
                  <span>مركز المساعدة والأسئلة الشائعة</span>
                </Link>
              </li>
              <li>
                <Link className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5" to="/contact">
                  <span className="material-symbols-outlined text-[16px] text-blue-400">arrow_left</span>
                  <span>تواصل واطلب استشارة العتاد</span>
                </Link>
              </li>
              <li className="pt-2">
                <Link className="text-blue-400 font-semibold hover:underline flex items-center gap-2" to="/app">
                  <span>📦 إصدارات وملفات التحديث</span>
                  <span className="font-mono text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30">
                    {SITE.version}
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Payment Methods */}
          <div>
            <div className="text-base font-bold text-white mb-4">طرق الدفع والتفعيل الفوري</div>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              تفعيل فوري لترخيصك مدى الحياة بدون وسيط وبلا اشتراكات شهرية:
            </p>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">credit_card</span>
                </div>
                <div>
                  <span className="font-semibold text-white block text-xs">تطبيق بريدي موب (BaridiMob)</span>
                  <span className="text-[11px] text-slate-400">تحويل فوري خلال دقيقة</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">account_balance</span>
                </div>
                <div>
                  <span className="font-semibold text-white block text-xs">الحساب البريدي الجاري (CCP)</span>
                  <span className="text-[11px] text-slate-400">حوالة بريدية من أي مكتب بريد</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">bolt</span>
                </div>
                <div>
                  <span className="font-semibold text-white block text-xs">تسليم المفتاح فوراً</span>
                  <span className="text-[11px] text-slate-400">تفعيل فوري عبر الواتساب</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Support Center */}
          <div>
            <div className="text-base font-bold text-white mb-4">مركز الدعم والمبيعات المباشر</div>
            <div className="space-y-3 text-sm">
              {/* WhatsApp Links */}
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/50">
                <div className="flex items-center gap-2 text-emerald-400 font-bold mb-1">
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>واتساب الدعم السريع:</span>
                </div>
                <div className="flex items-center gap-2 text-xs" dir="ltr">
                  <a
                    href={SITE.wa1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-300 hover:text-white font-mono font-bold hover:underline"
                  >
                    {SITE.phone1}
                  </a>
                  <span className="text-emerald-600">/</span>
                  <a
                    href={SITE.wa2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-300 hover:text-white font-mono font-bold hover:underline"
                  >
                    {SITE.phone2}
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-2 text-slate-400 text-xs">
                <span className="material-symbols-outlined text-[18px] text-blue-400">schedule</span>
                <span>{SITE.hours}</span>
              </div>

              {/* Location & Distribution Hub */}
              <div className="flex items-start gap-2 text-slate-400 text-xs">
                <span className="material-symbols-outlined text-[18px] text-blue-400 shrink-0 mt-0.5">location_on</span>
                <span>{SITE.location}</span>
              </div>

              <div className="pt-2">
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5"
                  dir="ltr"
                >
                  <span className="material-symbols-outlined text-[16px]">mail</span>
                  <span>{SITE.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} AN POS الجزائر. جميع الحقوق محفوظة.</p>
          <p className="text-center md:text-start">
            صُمم بأحدث التقنيات البرمجية لتوفير أعلى سرعة واستقرار لمحطات نقاط البيع والتجزئة.
          </p>
        </div>
      </div>
    </footer>
  )
}
