import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Clock,
  CreditCard,
  Landmark,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Zap,
} from 'lucide-react'
import { SITE } from '../lib/site'

const quickLinks = [
  { to: '/', label: 'الرئيسية' },
  { to: '/features', label: 'المميزات' },
  { to: '/downloads', label: 'تحميل البرنامج' },
  { to: '/pricing', label: 'التسعير والترخيص' },
  { to: '/support', label: 'مركز المساعدة' },
  { to: '/contact', label: 'تواصل معنا' },
]

const payments = [
  { icon: CreditCard, title: 'بريدي موب', desc: 'BaridiMob' },
  { icon: Landmark, title: 'الحساب البريدي', desc: 'CCP' },
  { icon: Zap, title: 'تفعيل فوري', desc: 'عبر واتساب' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-slate-950 text-slate-300">
      <div
        className="pointer-events-none absolute -top-32 start-1/4 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="شعار AN POS" className="h-10 w-10 rounded-xl object-contain" />
              <span className="flex flex-col leading-tight">
                <span className="text-lg font-extrabold text-white">AN POS</span>
                <span className="font-mono text-[11px] text-slate-400">{SITE.version}</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              نظام نقاط بيع ومحاسبة متكامل للمتاجر الجزائرية: سريع، يعمل بدون إنترنت، ومتوافق مع الطابعات الحرارية.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-[11px] text-slate-300">
              <ShieldCheck className="h-4 w-4 text-emerald-400" aria-hidden="true" />
              مطابق للمعايير التجارية والجبائية الجزائرية
            </div>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-sm font-bold text-white">روابط سريعة</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="inline-flex min-h-10 items-center gap-1.5 py-1 text-slate-400 transition-colors hover:text-white"
                  >
                    <ArrowLeft className="h-3.5 w-3.5 text-blue-500" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/app"
                  className="inline-flex min-h-10 items-center gap-2 text-xs font-semibold text-blue-400 transition-colors hover:text-blue-300"
                >
                  إصدارات التحديث
                  <span className="rounded border border-blue-500/30 bg-blue-500/10 px-1.5 py-0.5 font-mono text-[10px]">
                    {SITE.version}
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Payment */}
          <div>
            <h2 className="text-sm font-bold text-white">طرق الدفع</h2>
            <p className="mt-4 text-xs leading-5 text-slate-400">
              تفعيل لمرة واحدة مدى الحياة، دون اشتراكات شهرية.
            </p>
            <ul className="mt-4 space-y-2">
              {payments.map((item) => (
                <li
                  key={item.title}
                  className="flex items-center gap-2.5 rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2"
                >
                  <item.icon className="h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
                  <span className="text-xs font-semibold text-slate-200">{item.title}</span>
                  <span className="ms-auto font-mono text-[10px] text-slate-500">{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-sm font-bold text-white">الدعم والمبيعات</h2>
            <div className="mt-4 rounded-xl border border-emerald-900/60 bg-emerald-950/30 p-3">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                واتساب مباشر
              </div>
              <div className="mt-1.5 flex items-center gap-2 text-xs" dir="ltr">
                <a href={SITE.wa1} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center font-mono font-bold text-emerald-300 hover:text-white">
                  {SITE.phone1}
                </a>
                <span className="text-emerald-800">/</span>
                <a href={SITE.wa2} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center font-mono font-bold text-emerald-300 hover:text-white">
                  {SITE.phone2}
                </a>
              </div>
            </div>

            <ul className="mt-3 space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 shrink-0 text-blue-500" aria-hidden="true" />
                {SITE.hours}
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-500" aria-hidden="true" />
                {SITE.location}
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex min-h-10 items-center gap-2 hover:text-white" dir="ltr">
                  <Mail className="h-3.5 w-3.5 shrink-0 text-blue-500" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { href: SITE.social.facebook, label: 'فيسبوك' },
                { href: SITE.social.instagram, label: 'إنستغرام' },
                { href: SITE.social.youtube, label: 'يوتيوب' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-9 items-center rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-[11px] text-slate-300 transition-colors hover:border-slate-700 hover:text-white"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-slate-800 pt-6 text-[11px] text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} AN POS الجزائر. جميع الحقوق محفوظة.</p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
            جميع الأنظمة تعمل — تغطية 58 ولاية
          </p>
        </div>
      </div>
    </footer>
  )
}
