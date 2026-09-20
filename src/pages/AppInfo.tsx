import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Package,
  Monitor,
  HardDrive,
  Smartphone,
  Download,
  Copy,
  Check,
  ExternalLink,
  Layers,
  Calendar,
  CheckCircle2,
  Cpu,
  Printer,
  Barcode,
} from 'lucide-react'
import Icon from '../components/ui/Icon'
import {
  DESKTOP_VERSION,
  DESKTOP_FILE_SIZE,
  DESKTOP_OS_FULL,
  DESKTOP_SETUP_FILENAME,
  DESKTOP_PORTABLE_FILENAME,
  MOBILE_VERSION,
  MOBILE_FILE_SIZE,
  MOBILE_OS,
  MOBILE_APK_FILENAME,
  DOWNLOAD_SETUP_URL,
  DOWNLOAD_PORTABLE_URL,
  DOWNLOAD_ANDROID_APK_URL,
  DOWNLOAD_GOOGLE_PLAY_URL,
  MAIN_DISTRIBUTION_CENTER,
  REGION_COVERAGE,
  PRICE_DZD,
  TRIAL_DAYS,
  WA_LINK_1,
  WA_LINK_2,
  SUPPORT_EMAIL,
} from '../lib/site'

export default function AppInfo() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'all' | 'desktop' | 'portable' | 'mobile'>('all')

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedKey(key)
      setTimeout(() => setCopiedKey(null), 2500)
    })
  }



  const builds = [
    {
      id: 'desktop-setup',
      type: 'desktop' as const,
      title: 'نسخة التثبيت الكاملة (Setup Installer)',
      filename: DESKTOP_SETUP_FILENAME,
      version: DESKTOP_VERSION,
      size: DESKTOP_FILE_SIZE,
      os: DESKTOP_OS_FULL,
      icon: Monitor,
      badge: 'الموصى بها للمحلات',
      badgeColor: 'bg-secondary/15 text-secondary border-secondary/30',
      description:
        'ملف التثبيت الرسمي لنظام Windows. يقوم بتهيئة بيئة العمل، إنشاء اختصار لسطح المكتب، وتثبيت المحرك الداخلي لقواعد البيانات للعمل الفوري بدون إنترنت.',
      highlights: [
        'تثبيت صامت وسريع خلال أقل من دقيقة',
        'إنشاء اختصار مباشر على سطح المكتب وقائمة Start',
        'قاعدة بيانات محلية سريعة SQLite / Postgres مدمجة',
        'دعم الطابعات الحرارية USB و Ethernet و COM',
        'تجربة مجانية كاملة 7 أيام تبدأ تلقائياً',
      ],
      url: DOWNLOAD_SETUP_URL,
    },
    {
      id: 'desktop-portable',
      type: 'portable' as const,
      title: 'النسخة المحمولة (Portable Edition)',
      filename: DESKTOP_PORTABLE_FILENAME,
      version: DESKTOP_VERSION,
      size: DESKTOP_FILE_SIZE,
      os: 'Windows 11 / 10 / 8.1 / 7 (32 & 64-bit)',
      icon: HardDrive,
      badge: 'بدون تثبيت (تشغيل فوري)',
      badgeColor: 'bg-tertiary-container/40 text-on-tertiary-container border-outline/30',
      description:
        'نسخة مستقلة تعمل مباشرة بضغطة واحدة دون الحاجة لصلاحيات مدير النظام (Admin) أو خطوات تنصيب. يمكن تشغيلها مباشرة من فلاش ديسك (USB Flash Drive).',
      highlights: [
        'تشغيل فوري بنقرة واحدة دون تنصيب',
        'حفظ البيانات في نفس مجلد البرنامج لنقلها بسهولة',
        'مثالية لتجربة النظام السريعة أو أجهزة الطوارئ',
        'عمل متواصل 100% أوفلاين بلا قيود',
        'تجربة مجانية شاملة 7 أيام لجميع الخصائص',
      ],
      url: DOWNLOAD_PORTABLE_URL,
    },
    {
      id: 'mobile-apk',
      type: 'mobile' as const,
      title: 'تطبيق الهاتف الذكي (Android Companion)',
      filename: MOBILE_APK_FILENAME,
      version: MOBILE_VERSION,
      size: MOBILE_FILE_SIZE,
      os: MOBILE_OS,
      icon: Smartphone,
      badge: 'تطبيق الهاتف المساعد',
      badgeColor: 'bg-primary/10 text-primary border-primary/20',
      description:
        'تطبيق مخصص لهواتف وأجهزة أندرويد اللوحية. يتيح لصاحب المحل جرد المنتجات بواسطة كاميرا الهاتف، متابعة المبيعات اللحظية، وإصدار الفواتير المتنقلة.',
      highlights: [
        'جرد ومسح الباركود مباشرة بواسطة كاميرا الهاتف',
        'متابعة أرباح ومبيعات المحل عن بعد عبر الإنترنت',
        'إرسال فواتير WhatsApp و PDF للزبائن فورياً',
        'خفيف وسريع الحجم (28 ميغابايت فقط)',
        'متوافق مع طابعات البلوتوث المحمولة 58mm / 80mm',
      ],
      url: DOWNLOAD_ANDROID_APK_URL,
      secondaryUrl: DOWNLOAD_GOOGLE_PLAY_URL,
      secondaryLabel: 'صفحة Google Play',
    },
  ]

  const changelog = [
    {
      version: 'v2.4.2 (الحالي)',
      date: 'سبتمبر 2026',
      status: 'إصدار مستقر - Production Stable',
      notes: [
        'اعتماد مركز الدعم والتوزيع الرئيسي في وادي سوف مع التغطية الشاملة لـ 58 ولاية جزائرية.',
        'تسريع زمن قراءة وطباعة الباركود إلى 0.1 ثانية بدقة فائقة.',
        'تخصيص لوحة /app البرمجية لإدارة ومراجعة بيانات النسخ المباشرة ونسخ الإعدادات.',
        'تحسين التجاوب والتوافق التام مع مقاسات الهواتف والشاشات اللمسية والتابلت.',
        'تحديث محرك الطباعة الحرارية ليدعم طابعات الشبكة IP والطابعات المدمجة.',
      ],
    },
    {
      version: 'v2.4.0',
      date: 'أوت 2026',
      status: 'تحديث رئيسي',
      notes: [
        'إطلاق تطبيق الهاتف المحمول المساعد لنظام أندرويد (AN POS Mobile APK).',
        'إضافة مزامنة المبيعات اللحظية بين الحاسوب والهاتف عبر خوادم مشفرة.',
        'توسيع إدارة الأصناف لتشمل تاريخ الصلاحية وسندات الصرف والقبض.',
      ],
    },
    {
      version: 'v2.3.0',
      date: 'مايو 2026',
      status: 'تحديث أمني واستقرار',
      notes: [
        'إضافة نظام النسخ الاحتياطي التلقائي المشفر على أقراص خارجية أو سحابياً.',
        'دعم قفل شاشة الكاشير السريع بنظام PIN كود للموظفين وتعدد الورديات.',
        'تصدير كشوف الحسابات الجبائية والمخزون لصيغتي Excel و PDF بنقرة واحدة.',
      ],
    },
  ]

  const filteredBuilds =
    activeTab === 'all'
      ? builds
      : builds.filter((b) => b.type === activeTab)

  return (
    <div className="flex flex-col w-full min-h-screen bg-surface">
      {/* 1. Header Banner & Context */}
      <div className="w-full bg-surface-container-high py-space-sm px-4 sm:px-6 lg:px-12 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-space-sm text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
            <span className="font-bold text-on-surface">
              مركز البيانات البرمجية المباشرة • Route: <code className="text-secondary bg-surface-container px-1.5 py-0.5 rounded font-mono">/app</code>
            </span>
          </div>
          <div className="flex items-center gap-space-sm text-on-surface-variant font-medium">
            <Icon name="location_on" size={16} className="text-secondary" />
            <span>{MAIN_DISTRIBUTION_CENTER} • تغطية 58 ولاية</span>
          </div>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="relative w-full py-12 lg:py-16 px-4 sm:px-6 lg:px-12 overflow-hidden bg-gradient-to-b from-surface-container-low/60 via-surface to-surface">
        <div className="max-w-7xl mx-auto flex flex-col items-start gap-space-md">
          {/* Tag / Badge */}
          <div className="inline-flex items-center gap-2 px-space-md py-1.5 rounded-full bg-surface-container border border-outline-variant/40 shadow-sm">
            <Package className="w-4 h-4 text-secondary" />
            <span className="font-bold text-xs sm:text-sm text-on-surface">
              📦 معلومات وإصدارات برنامج AN POS
            </span>
            <span className="bg-secondary/20 text-secondary text-[11px] font-bold px-2 py-0.5 rounded-full">
              {DESKTOP_VERSION}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-bold text-2xl sm:text-4xl lg:text-5xl text-on-surface tracking-tight leading-snug">
            دليل الإصدارات الفنية، روابط التحميل <br className="hidden sm:inline" />
            <span className="text-secondary">وإعدادات النظام المركزية</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-on-surface-variant max-w-3xl leading-relaxed">
            هذه الصفحة هي المرجع التقني الشامل لمسؤولي النظام والمطور والمستخدمين للاطلاع على كافة النسخ المتاحة (التثبيت، المحمولة، وتطبيق أندرويد)، أرقام الإصدارات، أحجام الملفات، وروابط التحميل المباشرة.
          </p>

          {/* Live Quick Spec Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-4xl pt-2">
            <div className="p-3 sm:p-4 rounded-xl bg-surface-container border border-outline-variant/30 flex flex-col">
              <span className="text-[11px] text-on-surface-variant font-medium">إصدار الحاسوب الحالي</span>
              <span className="text-base sm:text-lg font-bold text-on-surface mt-0.5 font-mono">{DESKTOP_VERSION}</span>
              <span className="text-[10px] text-secondary mt-0.5">Windows Installer & Portable</span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-surface-container border border-outline-variant/30 flex flex-col">
              <span className="text-[11px] text-on-surface-variant font-medium">حجم ملف الحاسوب</span>
              <span className="text-base sm:text-lg font-bold text-secondary mt-0.5 font-mono">{DESKTOP_FILE_SIZE}</span>
              <span className="text-[10px] text-on-surface-variant mt-0.5">MediaFire Direct</span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-surface-container border border-outline-variant/30 flex flex-col">
              <span className="text-[11px] text-on-surface-variant font-medium">إصدار تطبيق الهاتف</span>
              <span className="text-base sm:text-lg font-bold text-on-surface mt-0.5 font-mono">{MOBILE_VERSION}</span>
              <span className="text-[10px] text-primary mt-0.5">Android APK ({MOBILE_FILE_SIZE})</span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-surface-container border border-outline-variant/30 flex flex-col">
              <span className="text-[11px] text-on-surface-variant font-medium">التجربة والترخيص</span>
              <span className="text-base sm:text-lg font-bold text-on-surface mt-0.5">{TRIAL_DAYS} أيام مجانية</span>
              <span className="text-[10px] text-on-surface-variant mt-0.5">تفعيل دائم: {PRICE_DZD}</span>
            </div>
          </div>
        </div>
      </section>



      {/* 4. Detailed Builds & Releases Cards */}
      <section className="w-full px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {/* Section Header & Filter Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-outline-variant/30 pb-4">
            <div>
              <h2 className="text-xl sm:text-3xl font-bold text-on-surface">
                جميع الحزم والنسخ الجاهزة للتحميل
              </h2>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
                اختر النسخة الملائمة لنشاطك التجاري، جميع النسخ تأتي مع 7 أيام تجربة مجانية كاملة.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 bg-surface-container p-1 rounded-xl shrink-0 overflow-x-auto">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  activeTab === 'all'
                    ? 'bg-secondary text-on-secondary shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                الكل ({builds.length})
              </button>
              <button
                onClick={() => setActiveTab('desktop')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  activeTab === 'desktop'
                    ? 'bg-secondary text-on-secondary shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                نسخة التثبيت
              </button>
              <button
                onClick={() => setActiveTab('portable')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  activeTab === 'portable'
                    ? 'bg-secondary text-on-secondary shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                المحمولة (USB)
              </button>
              <button
                onClick={() => setActiveTab('mobile')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  activeTab === 'mobile'
                    ? 'bg-secondary text-on-secondary shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                الأندرويد (APK)
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {filteredBuilds.map((build) => {
              const BuildIcon = build.icon
              return (
                <div
                  key={build.id}
                  className="flex flex-col rounded-2xl bg-surface-container border border-outline-variant/40 hover:border-secondary/50 transition-all p-6 shadow-sm justify-between gap-6 relative group"
                >
                  {/* Top metadata */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-secondary">
                        <BuildIcon className="w-6 h-6" />
                      </div>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${build.badgeColor}`}>
                        {build.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-on-surface">{build.title}</h3>
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <span className="font-mono text-xs bg-surface-container-lowest px-2 py-0.5 rounded font-bold text-secondary">
                          {build.version}
                        </span>
                        <span className="text-xs text-on-surface-variant">• الحجم: {build.size}</span>
                        <span className="text-xs text-on-surface-variant">• {build.os}</span>
                      </div>
                    </div>

                    {/* Filename box */}
                    <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/30 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="material-symbols-outlined text-secondary text-[18px] shrink-0">draft</span>
                        <span className="text-xs font-mono text-on-surface truncate" title={build.filename}>
                          {build.filename}
                        </span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(build.filename, `file-${build.id}`)}
                        className="p-1.5 rounded-lg hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors shrink-0"
                        title="نسخ اسم الملف"
                      >
                        {copiedKey === `file-${build.id}` ? (
                          <Check className="w-3.5 h-3.5 text-secondary" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      {build.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2 pt-2 border-t border-outline-variant/30">
                      {build.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-on-surface">
                          <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions & Links */}
                  <div className="flex flex-col gap-2 pt-4 border-t border-outline-variant/30">
                    <a
                      href={build.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-secondary hover:bg-secondary-container text-on-secondary font-bold text-sm transition-all shadow-sm active:scale-95"
                    >
                      <Download className="w-4 h-4" />
                      <span>تحميل مباشر ({build.size})</span>
                    </a>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => copyToClipboard(build.url, `url-${build.id}`)}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-surface-container-lowest hover:bg-surface-container-high text-on-surface text-xs font-medium transition-colors border border-outline-variant/30"
                      >
                        {copiedKey === `url-${build.id}` ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-secondary" />
                            <span>تم نسخ الرابط!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>نسخ رابط التحميل</span>
                          </>
                        )}
                      </button>

                      {build.secondaryUrl && (
                        <a
                          href={build.secondaryUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1 py-2 px-3 rounded-xl bg-surface-container-lowest hover:bg-surface-container-high text-on-surface text-xs font-medium transition-colors border border-outline-variant/30"
                        >
                          <span>{build.secondaryLabel}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. Full Technical Specifications Table */}
      <section className="w-full px-4 sm:px-6 lg:px-12 py-12 bg-surface-container-lowest border-y border-outline-variant/30">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div>
            <span className="text-xs font-bold text-secondary uppercase tracking-wider">مصفوفة المقارنة الفنية</span>
            <h2 className="text-xl sm:text-3xl font-bold text-on-surface mt-1">
              مقارنة تفصيلية بين نسخ وحزم AN POS
            </h2>
          </div>

          <div className="w-full overflow-x-auto rounded-2xl border border-outline-variant/40">
            <table className="w-full text-right text-xs sm:text-sm">
              <thead className="bg-surface-container text-on-surface font-bold border-b border-outline-variant/40">
                <tr>
                  <th className="p-4">المعيار الفني</th>
                  <th className="p-4">نسخة التثبيت الكاملة (Setup)</th>
                  <th className="p-4">النسخة المحمولة (Portable)</th>
                  <th className="p-4">تطبيق أندرويد (Mobile APK)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20 bg-surface">
                <tr>
                  <td className="p-4 font-bold text-on-surface">نوع الملف</td>
                  <td className="p-4 font-mono text-secondary">Windows Installer (.exe)</td>
                  <td className="p-4 font-mono text-secondary">Standalone Executable (.exe)</td>
                  <td className="p-4 font-mono text-primary">Android Package (.apk)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-on-surface">الحجم التقريبي</td>
                  <td className="p-4 font-mono">{DESKTOP_FILE_SIZE}</td>
                  <td className="p-4 font-mono">{DESKTOP_FILE_SIZE}</td>
                  <td className="p-4 font-mono">{MOBILE_FILE_SIZE}</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-on-surface">أنظمة التشغيل</td>
                  <td className="p-4">Windows 11 / 10 / 8.1 (64-bit)</td>
                  <td className="p-4">Windows 11 / 10 / 8.1 (32 & 64-bit)</td>
                  <td className="p-4">Android 8.0 فما فوق</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-on-surface">طريقة العمل بدون إنترنت</td>
                  <td className="p-4 text-emerald-500 font-bold">100% أوفلاين (قاعدة بيانات محلية)</td>
                  <td className="p-4 text-emerald-500 font-bold">100% أوفلاين (قاعدة بيانات مدمجة)</td>
                  <td className="p-4 text-amber-500 font-medium">مزامنة سحابية + كاش محلي</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-on-surface">دعم الطابعات الحرارية</td>
                  <td className="p-4">USB, Network Ethernet, Bluetooth, COM</td>
                  <td className="p-4">USB, Network Ethernet, Bluetooth, COM</td>
                  <td className="p-4">طابعات البلوتوث المحمولة والشبكية</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-on-surface">الترخيص والتجربة</td>
                  <td className="p-4">7 أيام تجربة مجانية (15,000 دج تفعيل دائم)</td>
                  <td className="p-4">7 أيام تجربة مجانية (15,000 دج تفعيل دائم)</td>
                  <td className="p-4">مضمن مع ترخيص البرنامج الرئيسي</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. System Requirements & Hardware Support */}
      <section className="w-full px-4 sm:px-6 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div>
            <span className="text-xs font-bold text-secondary uppercase tracking-wider">متطلبات التشغيل والتوافق</span>
            <h2 className="text-xl sm:text-3xl font-bold text-on-surface mt-1">
              العتاد والأجهزة المدعومة
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/30 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-on-surface">المعالج والذاكرة</h3>
              <ul className="text-xs text-on-surface-variant space-y-1.5 leading-relaxed">
                <li>• معالج: Intel Core 2 Duo أو i3 أو ما يعادله</li>
                <li>• الذاكرة العشوائية (RAM): 2GB كحد أدنى (4GB موصى به)</li>
                <li>• التخزين: 200MB مساحة حرة (قرص SSD لأداء فائق)</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/30 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary">
                <Printer className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-on-surface">الطابعات المدعومة</h3>
              <ul className="text-xs text-on-surface-variant space-y-1.5 leading-relaxed">
                <li>• طابعات التذاكر الحرارية: 80mm و 58mm (ESC/POS)</li>
                <li>• الماركات: Epson, Xprinter, Bixolon, Rongta, Zywell</li>
                <li>• طابعات فواتير A4 و A5 القياسية (Laser & Inkjet)</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/30 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary">
                <Barcode className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-on-surface">قوارئ الباركود والموازين</h3>
              <ul className="text-xs text-on-surface-variant space-y-1.5 leading-relaxed">
                <li>• قوارئ الباركود الليزرية والضوئية (1D Barcode)</li>
                <li>• قوارئ رمز الاستجابة السريع (2D QR Code)</li>
                <li>• الموازين الإلكترونية الباركودية وموازين الوزن اللحظي</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/30 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-on-surface">أدراج الكاشير والشاشات</h3>
              <ul className="text-xs text-on-surface-variant space-y-1.5 leading-relaxed">
                <li>• فتح درج النقود الإلكتروني تلقائياً عبر منفذ RJ11</li>
                <li>• شاشات اللمس (POS Touch Screens) والشاشات العادية</li>
                <li>• شاشات الزبون الإضافية (Customer Displays / VFD)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Changelog & Version History */}
      <section className="w-full px-4 sm:px-6 lg:px-12 py-12 bg-surface-container-lowest border-t border-outline-variant/30">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-secondary uppercase tracking-wider">سجل التحديثات البرمجية</span>
              <h2 className="text-xl sm:text-3xl font-bold text-on-surface mt-1">
                تاريخ الإصدارات والتحسينات
              </h2>
            </div>
            <span className="text-xs text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-xl font-mono">
              Current Branch: release/v2.4
            </span>
          </div>

          <div className="space-y-4">
            {changelog.map((entry, index) => (
              <div
                key={index}
                className="p-5 sm:p-6 rounded-2xl bg-surface-container border border-outline-variant/40 flex flex-col gap-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-base text-on-surface font-mono">{entry.version}</span>
                    <span className="text-xs bg-secondary/15 text-secondary font-bold px-2 py-0.5 rounded">
                      {entry.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-on-surface-variant">
                    <Calendar className="w-3.5 h-3.5 text-secondary" />
                    <span>{entry.date}</span>
                  </div>
                </div>

                <ul className="space-y-1.5 pt-2 border-t border-outline-variant/20">
                  {entry.notes.map((note, noteIndex) => (
                    <li key={noteIndex} className="text-xs sm:text-sm text-on-surface-variant flex items-start gap-2">
                      <span className="text-secondary font-bold mt-0.5">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Help & Direct Support Footer Callout */}
      <section className="w-full px-4 sm:px-6 lg:px-12 py-12 bg-surface">
        <div className="max-w-7xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-surface-container-high to-surface-container border border-outline-variant/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2 text-center md:text-right">
            <h3 className="text-lg sm:text-2xl font-bold text-on-surface">
              هل تحتاج مساعدة في التثبيت أو التفعيل؟
            </h3>
            <p className="text-xs sm:text-sm text-on-surface-variant max-w-xl">
              فريق الدعم الفني جاهز لمساعدتك عن بعد عبر AnyDesk أو الهاتف وواتساب لحل أي استفسار وتثبيت الطابعات الحرارية فورياً.
            </p>
            <span className="text-xs font-semibold text-secondary">
              {REGION_COVERAGE}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={WA_LINK_1}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-secondary hover:bg-secondary-container text-on-secondary font-bold text-sm transition-all shadow-md active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>واتساب 1 (سريع)</span>
            </a>
            <a
              href={WA_LINK_2}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-surface-container-highest hover:bg-surface-container-high text-on-surface font-bold text-sm transition-all border border-outline-variant/40"
            >
              <span className="material-symbols-outlined text-[20px] text-secondary">support_agent</span>
              <span>واتساب 2 (دعم)</span>
            </a>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-bold text-sm transition-colors border border-outline-variant/40"
            >
              <span className="material-symbols-outlined text-[18px]">mail</span>
              <span>البريد</span>
            </a>
            <Link
              to="/downloads"
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-bold text-sm transition-colors border border-outline-variant/40"
            >
              <Download className="w-4 h-4 text-secondary" />
              <span>صفحة التحميل</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
