import { Link } from 'react-router-dom'
import {
  Check,
  ChartLine,
  Download,
  MessageCircle,
  Monitor,
  PackageSearch,
  Printer,
  ReceiptText,
  Scale,
  ScanBarcode,
  ShieldCheck,
  Smartphone,
  Touchpad,
  WifiOff,
  Zap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHead from '../components/SectionHead'
import { SITE, WA_ACTIVATE } from '../lib/site'

interface Feature {
  icon: LucideIcon
  tag: string
  title: string
  desc: string
  footer: string
  footerValue: string
}

const features: Feature[] = [
  {
    icon: Zap,
    tag: 'F1 / F12',
    title: 'نقطة بيع فائقة السرعة',
    desc: 'واجهة فورية بالباركود أو شاشة اللمس، مع مفضلة سريعة وتعليق الفواتير لخدمة زبون آخر دون فقدان السلة.',
    footer: 'اختصارات لوحة المفاتيح',
    footerValue: 'أسرع 3 مرات',
  },
  {
    icon: PackageSearch,
    tag: 'تنبيه ذكي',
    title: 'مخزون محدّث لحظياً',
    desc: 'جرد حي لكل المخازن، إشعار تلقائي عند بلوغ حد الأمان، وبطاقات تكلفة توضح هامش الربح الصافي.',
    footer: 'استيراد المنتجات',
    footerValue: 'Excel / CSV',
  },
  {
    icon: ReceiptText,
    tag: 'معايير DZ',
    title: 'فوترة متوافقة جبائياً',
    desc: 'المعرفات القانونية NIF و NIS و RC، نسب الرسم على القيمة المضافة 9% و 19%، ورمز QR للتحقق.',
    footer: 'صيغ الطباعة',
    footerValue: 'A4 · A5 · 80mm',
  },
  {
    icon: Printer,
    tag: 'ESC/POS',
    title: 'طابعات حرارية ودرج نقود',
    desc: 'توافق مع طابعات 58mm و 80mm عبر USB أو الشبكة أو Bluetooth، مع فتح الدرج تلقائياً عند الدفع.',
    footer: 'الطباعة',
    footerValue: 'فورية RAW',
  },
  {
    icon: ChartLine,
    tag: 'Z & X',
    title: 'تقارير الأرباح وإغلاق الصندوق',
    desc: 'كشف العجز والزيادة بالدينار، صافي الأرباح الحقيقية بعد التكاليف، وترتيب الأصناف الأكثر ربحية.',
    footer: 'إغلاق الوردية',
    footerValue: 'بنقرة واحدة',
  },
  {
    icon: WifiOff,
    tag: 'AES-256',
    title: 'عمل بدون إنترنت ونسخ مشفّر',
    desc: 'النظام يعمل محلياً بنسبة 100%، مع نسخ احتياطي تلقائي مشفّر يحمي بيانات الزبائن والمعاملات.',
    footer: 'أمان البيانات',
    footerValue: 'تشفير محلي',
  },
]

const comparison = [
  {
    label: 'سرعة البيع بالباركود',
    hint: 'إصدار التذاكر وتفريغ السلع',
    desktop: 'فائقة عبر قارئ USB وشاشات اللمس',
    mobile: 'مسح عبر كاميرا الهاتف وقوائم اللمس',
  },
  {
    label: 'الطابعات ودرج النقود',
    hint: 'طباعة الإيصالات',
    desktop: 'USB / LAN مع فتح درج النقود',
    mobile: 'طابعات Bluetooth محمولة',
  },
  {
    label: 'إدارة المخزون والجرد',
    hint: 'تسوية الكميات',
    desktop: 'تحكم مركزي وتعديل كميات ضخمة',
    mobile: 'جرد ميداني ومسح على الرفوف',
  },
  {
    label: 'متابعة المبيعات',
    hint: 'التقارير وتصفية الصندوق',
    desktop: 'تقارير Z و X مفصلة',
    mobile: 'إشعارات لحظية ومتابعة عن بعد',
  },
  {
    label: 'العمل بدون إنترنت',
    hint: 'الاعتمادية',
    desktop: 'يعمل محلياً 100%',
    mobile: 'أوفلاين مع مزامنة عند توفر الشبكة',
  },
]

const hardware = [
  {
    icon: Touchpad,
    title: 'شاشات اللمس',
    desc: 'محطات POS المدمجة والشاشات الصناعية والعرض المزدوج.',
    meta: 'Windows / Android',
  },
  {
    icon: ScanBarcode,
    title: 'قوارئ الباركود',
    desc: 'قوارئ ليزر يدوية وثابتة، وقراءة رموز QR ثنائية الأبعاد.',
    meta: 'USB / Wireless',
  },
  {
    icon: Printer,
    title: 'طابعات الإيصالات',
    desc: 'Epson و Xprinter و Bixolon و Sunmi وأي طابعة ESC/POS.',
    meta: '58mm / 80mm',
  },
  {
    icon: Scale,
    title: 'موازين وأدراج',
    desc: 'قراءة الوزن مباشرة وفتح درج الكاشير آلياً مع الفاتورة.',
    meta: 'RS232 / RJ11',
  },
]

export default function Features() {
  return (
    <div className="flex w-full flex-col">
      <PageHero
        eyebrow={`مميزات ${SITE.name} — الإصدار ${SITE.version}`}
        title={
          <>
            كل ما يحتاجه متجرك <span className="gradient-text">في نظام واحد</span>
          </>
        }
        description="من الكاشير إلى المخزون والفواتير: أدوات عملية اختُبرت في مئات المحلات الجزائرية، بدون تعقيد تقني ولا توقف عند انقطاع الإنترنت."
        actions={[
          { label: 'جرّب مجاناً 7 أيام', to: '/downloads', icon: Download, variant: 'primary' },
          { label: 'تحدث مع مستشار', href: WA_ACTIVATE, icon: MessageCircle, variant: 'ghost' },
        ]}
        meta={
          <div className="mx-auto grid max-w-2xl grid-cols-3 divide-x divide-x-reverse divide-slate-200 border-t border-slate-200/80 pt-5">
            {[
              { value: '< 0.3 ثا', label: 'إضافة منتج للفاتورة' },
              { value: '100%', label: 'عمل بدون إنترنت' },
              { value: '0 دج', label: 'رسوم شهرية' },
            ].map((stat) => (
              <div key={stat.label} className="px-2 text-center">
                <p className="font-mono text-base font-black text-slate-900 sm:text-xl">{stat.value}</p>
                <p className="mt-0.5 text-[11px] text-slate-500 sm:text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        }
      />

      {/* Feature grid */}
      <section className="bg-white py-14 sm:py-20" aria-labelledby="features-title">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHead
            kicker="الأدوات الأساسية"
            title="مصمّمة ليوم عمل حقيقي في المحل"
            description="كل ميزة تحل مشكلة يومية تواجه الكاشير أو المدير — لا ميزات إضافية بلا فائدة."
          />

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-[0_12px_30px_-16px_rgba(15,23,42,0.25)]"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-secondary">
                    <feature.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="rounded-lg bg-slate-100 px-2 py-0.5 font-mono text-[10px] font-bold text-slate-600">
                    {feature.tag}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">{feature.title}</h3>
                <p className="mt-1.5 flex-1 text-sm leading-6 text-slate-600">{feature.desc}</p>
                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-[11px]">
                  <span className="text-slate-500">{feature.footer}</span>
                  <span className="font-bold text-secondary">{feature.footerValue}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Desktop vs mobile */}
      <section className="bg-surface-container-low py-14 sm:py-20" aria-labelledby="compare-title">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHead
            kicker="مرونة المنصات"
            title="سطح المكتب أم الهاتف؟"
            description="النظام نفسه على الجهازين: الكاشير يبيع على الحاسوب، وأنت تتابع وتجرد من هاتفك."
          />

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm">
                <caption className="sr-only">مقارنة مميزات نسخة سطح المكتب ونسخة الهاتف</caption>
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-start">
                    <th scope="col" className="p-4 text-start text-xs font-bold text-slate-500">
                      الميزة
                    </th>
                    <th scope="col" className="p-4 text-start text-sm font-bold text-slate-900">
                      <span className="flex items-center gap-2">
                        <Monitor className="h-4 w-4 text-secondary" aria-hidden="true" />
                        سطح المكتب
                      </span>
                    </th>
                    <th scope="col" className="p-4 text-start text-sm font-bold text-slate-900">
                      <span className="flex items-center gap-2">
                        <Smartphone className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                        الهاتف
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparison.map((row) => (
                    <tr key={row.label} className="align-top">
                      <th scope="row" className="p-4 text-start">
                        <span className="block text-[13px] font-bold text-slate-900">{row.label}</span>
                        <span className="mt-0.5 block text-[11px] font-normal text-slate-500">{row.hint}</span>
                      </th>
                      <td className="p-4 text-[13px] text-slate-700">
                        <span className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                          {row.desktop}
                        </span>
                      </td>
                      <td className="p-4 text-[13px] text-slate-700">
                        <span className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                          {row.mobile}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware */}
      <section className="bg-white py-14 sm:py-20" aria-labelledby="hardware-title">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHead
              kicker="العتاد المتوافق"
              title="يعمل مع أجهزة الكاشير التي لديك"
              description="دعم قياسي لبروتوكول ESC/POS وأجهزة الإدخال الشائعة في السوق الجزائرية."
            />
            <span className="inline-flex w-fit items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-800">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              توافق 100%
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {hardware.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-secondary shadow-sm ring-1 ring-slate-200">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-3.5 text-sm font-bold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-xs leading-5 text-slate-600">{item.desc}</p>
                <p className="mt-3 font-mono text-[10px] font-semibold text-slate-500">{item.meta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface py-6 sm:py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-primary-container px-6 py-10 text-white sm:px-10">
            <div
              className="pointer-events-none absolute -top-20 end-0 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-xl font-extrabold leading-8 sm:text-2xl">
                  جرّب كل هذه المميزات في متجرك لمدة 7 أيام
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  تحميل سريع، تجربة كاملة الصلاحيات، وبدون بطاقة بنكية. بياناتك تبقى على جهازك.
                </p>
              </div>
              <div className="flex w-full flex-col gap-2 sm:flex-row lg:w-auto">
                <Link
                  to="/downloads"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-900 transition-colors hover:bg-slate-100"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  تحميل مجاني
                </Link>
                <a
                  href={WA_ACTIVATE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-sm font-bold text-emerald-950 transition-colors hover:bg-emerald-300"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  تفعيل دائم ({SITE.price})
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
