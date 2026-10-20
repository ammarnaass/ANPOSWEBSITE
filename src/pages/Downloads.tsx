import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowLeft,
  BadgeCheck,
  Banknote,
  Check,
  ChevronDown,
  Clock,
  Cpu,
  Download,
  FileArchive,
  HardDrive,
  Headphones,
  KeyRound,
  ListChecks,
  Monitor,
  MonitorSmartphone,
  Phone,
  Printer,
  Rocket,
  ScanBarcode,
  Scale,
  ShieldCheck,
  Smartphone,
  Sparkles,
  WifiOff,
} from 'lucide-react'
import {
  SITE,
  DOWNLOAD_PORTABLE_URL,
  DOWNLOAD_SETUP_URL,
  DOWNLOAD_ANDROID_APK_URL,
  DOWNLOAD_GOOGLE_PLAY_URL,
  WA_ACTIVATE,
  WA_NUMBER_1,
} from '../lib/site'

interface FaqItem {
  q: string
  a: string
}

const faqs: FaqItem[] = [
  {
    q: 'هل التجربة المجانية مقيدة بعدد مبيعات أو فواتير معينة؟',
    a: 'لا. تجربة 7 أيام تمنحك وصولاً كاملاً دون أي قيود: عدد غير محدود من الأصناف، طباعة الفواتير، إعداد المستخدمين، وكل الميزات المحاسبية للتأكد من ملاءمة النظام لنشاطك.',
  },
  {
    q: 'ماذا يحدث لبياناتي بعد انتهاء الـ 7 أيام؟',
    a: 'بياناتك ومخزونك ومبيعاتك تبقى محفوظة على حاسوبك. عند تفعيل الترخيص الدائم (15,000 دج) يفتح البرنامج بنفس بياناتك مباشرة دون إعادة إدخال أي منتج.',
  },
  {
    q: 'هل يحتاج البرنامج إلى اتصال دائم بالإنترنت؟',
    a: 'لا. يعمل AN POS بنسبة 100% بدون إنترنت على محطة الكاشير، ولا يتوقف عند انقطاع الشبكة. الإنترنت مطلوب فقط لمزامنة المبيعات مع تطبيق الهاتف.',
  },
  {
    q: 'كيف أدفع مبلغ التفعيل بعد التجربة؟',
    a: 'الدفع محلي وبسيط: تحويل عبر بريدي موب أو الحساب البريدي الجاري (CCP)، ثم إرسال وصل التحويل عبر واتساب ليصلك مفتاح التفعيل الدائم خلال دقائق.',
  },
]

const metaChips = [
  { icon: BadgeCheck, label: `الإصدار ${SITE.version}` },
  { icon: MonitorSmartphone, label: 'Windows و Android' },
  { icon: HardDrive, label: `حجم ${SITE.downloads.desktopSize}` },
  { icon: WifiOff, label: '100% أوفلاين' },
]

const trustPoints = [
  { icon: ShieldCheck, title: 'تحميل رسمي وآمن', desc: 'مباشرة من الموقع الرسمي، بدون وسطاء.' },
  { icon: WifiOff, title: 'يعمل بدون إنترنت', desc: 'الكاشير يستمر في البيع حتى عند انقطاع الشبكة.' },
  { icon: Clock, title: 'تثبيت في دقيقة', desc: 'معالج تثبيت بسيط يهيئ كل شيء تلقائياً.' },
  { icon: Headphones, title: 'دعم عبر 58 ولاية', desc: 'مساعدة مجانية في التثبيت وربط الطابعات.' },
]

interface PlatformCardProps {
  icon: LucideIcon
  badge?: string
  title: string
  description: string
  specs: { label: string; value: string }[]
  primaryHref: string
  primaryLabel: string
  primaryMeta: string
  secondary: { href: string; label: string; icon: LucideIcon }[]
  note: string
  featured?: boolean
}

function PlatformCard({
  icon: Icon,
  badge,
  title,
  description,
  specs,
  primaryHref,
  primaryLabel,
  primaryMeta,
  secondary,
  note,
  featured = false,
}: PlatformCardProps) {
  return (
    <article
      className={`relative flex flex-col rounded-3xl bg-white p-6 sm:p-7 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_32px_-12px_rgba(15,23,42,0.12)] transition-shadow duration-300 hover:shadow-[0_1px_2px_rgba(15,23,42,0.04),0_18px_44px_-14px_rgba(37,99,235,0.25)] ${
        featured ? 'border border-blue-200 ring-1 ring-blue-100' : 'border border-slate-200'
      }`}
    >
      {badge && (
        <span className="absolute -top-3 start-6 inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-[11px] font-bold text-white shadow-sm">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          {badge}
        </span>
      )}

      <div className="flex items-start gap-3">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-secondary">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h3 className="text-lg font-extrabold text-slate-900">{title}</h3>
          <p className="mt-0.5 text-sm leading-6 text-slate-500">{description}</p>
        </div>
      </div>

      <dl className="mt-5 grid grid-cols-1 gap-1.5 rounded-2xl bg-slate-50 p-3 text-center sm:grid-cols-3 sm:gap-2">
        {specs.map((s) => (
          <div key={s.label} className="flex min-w-0 items-center justify-between gap-2 rounded-lg bg-white/60 px-2 py-1 sm:block sm:bg-transparent sm:p-0">
            <dt className="text-[11px] font-medium text-slate-500">{s.label}</dt>
            <dd className="mt-0.5 text-[12px] font-bold text-slate-900 sm:text-[13px]" title={s.value}>
              {s.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-5 flex flex-col gap-2">
        <a
          href={primaryHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shimmer group flex min-h-11 w-full items-center justify-between gap-3 rounded-2xl bg-secondary px-4 py-3 text-white shadow-[0_4px_16px_rgba(37,99,235,0.28)] transition-all hover:bg-blue-700 active:translate-y-px"
        >
          <span className="flex items-center gap-2.5">
            <Download className="h-5 w-5" aria-hidden="true" />
            <span className="text-start leading-tight">
              <span className="block text-sm font-bold sm:text-[15px]">{primaryLabel}</span>
              <span className="mt-0.5 block text-[11px] font-medium text-blue-100">{primaryMeta}</span>
            </span>
          </span>
          <ArrowLeft className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
        </a>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1">
          {secondary.map((link) => (
            <a
              key={link.label + link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 py-1 text-xs font-semibold text-slate-600 transition-colors hover:text-secondary"
            >
              <link.icon className="h-3.5 w-3.5" aria-hidden="true" />
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <p className="mt-4 flex items-start gap-2 rounded-xl bg-emerald-50/70 px-3 py-2 text-xs font-medium leading-5 text-emerald-800">
        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        {note}
      </p>
    </article>
  )
}

export default function Downloads() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="flex w-full flex-col">
      {/* ===================== Hero + download cards ===================== */}
      <section className="relative overflow-hidden border-b border-slate-200/70 bg-gradient-to-b from-slate-50 via-white to-slate-50/60">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-blue-100/50 to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-14">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              تحميل رسمي • الإصدار {SITE.version} مستقر
            </span>

            <h1 className="mt-5 text-3xl font-extrabold leading-[1.25] text-slate-950 sm:text-5xl">
              حمّل <span className="gradient-text">AN POS</span> وابدأ البيع في دقائق
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              نسخة واحدة لنقاط البيع على الحاسوب والهاتف: تثبيت سريع، عمل كامل بدون إنترنت، وتجربة مجانية 7 أيام بكل الميزات دون بطاقة بنكية.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {metaChips.map((chip) => (
                <span
                  key={chip.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold text-slate-600 sm:text-xs"
                >
                  <chip.icon className="h-3.5 w-3.5 text-secondary" aria-hidden="true" />
                  {chip.label}
                </span>
              ))}
            </div>
          </div>

          <div id="download" className="mt-10 grid scroll-mt-28 grid-cols-1 gap-5 sm:mt-12 lg:grid-cols-2 lg:gap-6">
            <PlatformCard
              icon={Monitor}
              badge="الموصى به للمحلات"
              featured
              title="نسخة سطح المكتب"
              description="للكاشير والحواسيب المكتبية وشاشات اللمس."
              specs={[
                { label: 'النظام', value: SITE.downloads.desktopOs },
                { label: 'الحجم', value: SITE.downloads.desktopSize },
                { label: 'الترخيص', value: `${SITE.trialDays} أيام مجاناً` },
              ]}
              primaryHref={DOWNLOAD_SETUP_URL}
              primaryLabel="تحميل نسخة التثبيت"
              primaryMeta={SITE.downloads.setupFileName}
              secondary={[
                { href: DOWNLOAD_PORTABLE_URL, label: 'النسخة المحمولة', icon: FileArchive },
                { href: DOWNLOAD_SETUP_URL, label: 'رابط بديل', icon: ShieldCheck },
              ]}
              note="تثبيت كامل + تجربة 7 أيام تُفعّل تلقائياً عند أول تشغيل."
            />

            <PlatformCard
              icon={Smartphone}
              title="تطبيق الهاتف والتابلت"
              description="للجرد الميداني ومتابعة المبيعات أثناء التنقل."
              specs={[
                { label: 'النظام', value: SITE.downloads.mobileOs },
                { label: 'الحجم', value: SITE.downloads.mobileSize },
                { label: 'المزامنة', value: 'لحظية' },
              ]}
              primaryHref={DOWNLOAD_ANDROID_APK_URL}
              primaryLabel="تحميل APK مباشرة"
              primaryMeta={SITE.downloads.androidApkFileName}
              secondary={[
                { href: DOWNLOAD_GOOGLE_PLAY_URL, label: 'Google Play', icon: Rocket },
              ]}
              note="يتزامن مع نسخة الحاسوب، والتجربة المجانية موحدة على كل الأجهزة."
            />
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {trustPoints.map((point) => (
              <li key={point.title} className="flex items-start gap-2 rounded-2xl border border-slate-200/80 bg-white/70 px-3 py-3">
                <point.icon className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-900">{point.title}</p>
                  <p className="mt-0.5 hidden text-[11px] leading-4 text-slate-500 sm:block">{point.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===================== 3 steps ===================== */}
      <section className="bg-white py-14 sm:py-20" aria-labelledby="steps-title">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-secondary">من التحميل إلى أول فاتورة</span>
            <h2 id="steps-title" className="mt-2 text-2xl font-extrabold text-slate-950 sm:text-3xl">
              3 خطوات فقط لبدء البيع
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              بدون إعدادات معقدة ولا حاجة لمهندس معلوماتية — النظام جاهز للعمل في أقل من 3 دقائق.
            </p>
          </div>

          <ol className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                title: 'نزّل النسخة المناسبة',
                desc: 'اختر Windows للحاسوب أو Android للهاتف، ثم افتح الملف واضغط «التالي».',
                icon: Download,
              },
              {
                title: 'ابدأ التجربة المجانية',
                desc: `تُفعّل تجربة ${SITE.trialDays} أيام كاملة تلقائياً عند أول تشغيل، دون تسجيل أو بطاقة بنكية.`,
                icon: Sparkles,
              },
              {
                title: 'أضف منتجاتك وبِع',
                desc: 'أدخل الأصناف أو استوردها، اربط الطابعة الحرارية، وسجّل أول عملية بيع.',
                icon: Banknote,
              },
            ].map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-secondary shadow-sm ring-1 ring-slate-200">
                    <step.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-2xl font-bold text-slate-300" aria-hidden="true">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">{step.desc}</p>
              </li>
            ))}
          </ol>

          <p className="mt-6 flex items-center gap-2 text-xs text-slate-500">
            <ListChecks className="h-4 w-4 text-emerald-600" aria-hidden="true" />
            ملف التثبيت: <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[11px] text-slate-700">{SITE.downloads.setupFileName}</code>
          </p>
        </div>
      </section>

      {/* ===================== License band ===================== */}
      <section className="bg-surface py-4 sm:py-6">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-primary-container px-6 py-8 text-white shadow-[0_20px_50px_-20px_rgba(15,23,42,0.5)] sm:px-10 sm:py-10">
            <div className="pointer-events-none absolute -top-24 end-0 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" aria-hidden="true" />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold text-emerald-300 ring-1 ring-white/15">
                  <KeyRound className="h-3.5 w-3.5" aria-hidden="true" />
                  بعد انتهاء التجربة
                </span>
                <h2 className="mt-3 text-xl font-extrabold leading-8 sm:text-2xl">
                  ترخيص دائم، دفعة واحدة فقط:{' '}
                  <span className="font-mono text-emerald-300">{SITE.price}</span>
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  لا اشتراكات شهرية ولا رسوم خفية — تحديثات ودعم مستمر، وكل بياناتك تبقى كما هي.
                </p>
                <ul className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-300">
                  {['تفعيل عبر بريدي موب أو CCP', 'فاتورة رسمية', 'تفعيل فوري بكود الترخيص'].map((item) => (
                    <li key={item} className="flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex w-full flex-col gap-2 sm:flex-row lg:w-auto lg:flex-col">
                <a
                  href={WA_ACTIVATE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-bold text-emerald-950 transition-colors hover:bg-emerald-300"
                >
                  <KeyRound className="h-4 w-4" aria-hidden="true" />
                  تفعيل عبر واتساب
                </a>
                <Link
                  to="/pricing"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition-colors hover:bg-white/15"
                >
                  تفاصيل الأسعار
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== Specs ===================== */}
      <section className="bg-surface-container-low py-14 sm:py-20" aria-labelledby="specs-title">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-secondary">المواصفات</span>
            <h2 id="specs-title" className="mt-2 text-2xl font-extrabold text-slate-950 sm:text-3xl">
              يعمل على الأجهزة التي لديك
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              متطلبات خفيفة تناسب حواسيب المحلات الاقتصادية، مع توافق مع أشهر عتاد الكاشير في الجزائر.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <Cpu className="h-4 w-4 text-secondary" aria-hidden="true" />
                الحد الأدنى للتشغيل
              </h3>
              <dl className="mt-4">
                {[
                  { label: 'نظام التشغيل', value: 'Windows 7 SP1 / 8.1 / 10 / 11' },
                  { label: 'الذاكرة (RAM)', value: '2 GB (يُفضّل 4 GB)' },
                  { label: 'المعالج', value: 'Intel Core 2 Duo / i3 فما فوق' },
                  { label: 'المساحة', value: '500 MB' },
                  { label: 'دقة الشاشة', value: '1024×768 فأعلى' },
                ].map((row, i) => (
                  <div
                    key={row.label}
                    className={`flex items-center justify-between gap-3 py-2.5 text-sm ${
                      i !== 0 ? 'border-t border-slate-100' : ''
                    }`}
                  >
                    <dt className="text-slate-500">{row.label}</dt>
                    <dd className="text-end font-semibold text-slate-900">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <Printer className="h-4 w-4 text-secondary" aria-hidden="true" />
                عتاد الكاشير المتوافق
              </h3>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {[
                  { icon: Printer, title: 'طابعات حرارية', desc: '58mm و 80mm عبر USB / LAN / Bluetooth' },
                  { icon: ScanBarcode, title: 'قارئات باركود', desc: 'ليزر 1D و 2D سلكية ولاسلكية' },
                  { icon: Banknote, title: 'أدراج النقود', desc: 'فتح آلي RJ11 / RJ12 مع الفاتورة' },
                  { icon: Scale, title: 'موازين إلكترونية', desc: 'قراءة الوزن مباشرة عند البيع' },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl bg-slate-50 p-3">
                    <div className="flex items-center gap-2 text-[13px] font-bold text-slate-900">
                      <item.icon className="h-4 w-4 text-secondary" aria-hidden="true" />
                      {item.title}
                    </div>
                    <p className="mt-1 text-[11px] leading-5 text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FAQ + support ===================== */}
      <section className="bg-white py-14 sm:py-20" aria-labelledby="faq-title">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 id="faq-title" className="text-2xl font-extrabold text-slate-950 sm:text-3xl">
              أسئلة شائعة
            </h2>
            <p className="mt-2 text-sm text-slate-600">كل ما تحتاج معرفته قبل التحميل والتفعيل.</p>

            <div className="mt-6 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index
                return (
                  <div key={faq.q} className={isOpen ? 'bg-slate-50/70' : 'bg-white'}>
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${index}`}
                        id={`faq-button-${index}`}
                        className="flex min-h-11 w-full items-center justify-between gap-3 px-4 py-4 text-start sm:px-5"
                      >
                        <span className="text-sm font-bold text-slate-900 sm:text-[15px]">{faq.q}</span>
                        <ChevronDown
                          className={`h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    </h3>
                    {isOpen && (
                      <div
                        id={`faq-panel-${index}`}
                        role="region"
                        aria-labelledby={`faq-button-${index}`}
                        className="px-4 pb-4 sm:px-5"
                      >
                        <p className="max-w-2xl text-sm leading-7 text-slate-600">{faq.a}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <aside className="lg:pt-1">
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-blue-50/70 to-white p-6">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-secondary text-white shadow-sm">
                <Headphones className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-bold text-slate-900">مشكلة في التثبيت؟</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                نساعدك مجاناً عن بعد عبر AnyDesk: التثبيت، ضبط الطابعة، ونقل منتجاتك — طيلة أيام الأسبوع.
              </p>
              <p className="mt-2 text-xs text-slate-500">{SITE.hours}</p>

              <div className="mt-4 flex flex-col gap-2">
                <a
                  href={WA_ACTIVATE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-blue-700"
                >
                  <Headphones className="h-4 w-4" aria-hidden="true" />
                  طلب مساعدة عبر واتساب
                </a>
                <a
                  href={`tel:+${WA_NUMBER_1}`}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
                >
                  <Phone className="h-4 w-4 text-secondary" aria-hidden="true" />
                  اتصال مباشر
                </a>
              </div>

              <div className="mt-5 border-t border-slate-200 pt-4">
                <Link
                  to="/app"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 transition-colors hover:text-secondary"
                >
                  <MonitorSmartphone className="h-3.5 w-3.5" aria-hidden="true" />
                  تفاصيل الإصدار وسجل التغييرات
                  <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
