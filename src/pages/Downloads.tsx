import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DOWNLOAD_PORTABLE_URL, DOWNLOAD_SETUP_URL, WA_ACTIVATE, WA_NUMBER_1 } from '../lib/site'


interface FaqItem {
  q: string
  a: string
}

const faqs: FaqItem[] = [
  {
    q: 'هل التجربة المجانية مقيدة بعدد مبيعات محدد أو فواتير معينة؟',
    a: 'لا، التجربة المجانية لمدة 7 أيام تمنحك وصولاً كاملاً بدون أي قيود: يمكنك إدخال عدد لا نهائي من السلع، تجربة طباعة الفواتير، إعداد المستخدمين، وتجربة كافة الميزات المحاسبية للتأكد من ملاءمة النظام لنشاطك التجاري بنسبة 100%.',
  },
  {
    q: 'ماذا يحدث للبيانات والمخزون بعد انتهاء الـ 7 أيام المجانية؟',
    a: 'بياناتك ومخزونك ومبيعاتك تظل محفوظة بأمان تام على حاسوبك. عند قيامك بتفعيل الترخيص الدائم (15,000 دج)، يتم فتح البرنامج مباشرة بنفس بياناتك السابقة دون الحاجة لإعادة إدخال أي منتج أو تهيئة مجدداً.',
  },
  {
    q: 'هل يحتاج البرنامج إلى اتصال دائم بالإنترنت ليعمل؟',
    a: 'إطلاقاً. تم تصميم AN POS ليعمل بنسبة 100% بدون إنترنت (Offline) على محطة الكاشير. لن يتوقف عمل متجرك إطلاقاً عند انقطاع شبكة الإنترنت. الإنترنت مطلوب فقط عند الرغبة في مزامنة المبيعات مع تطبيق الهاتف عن بعد.',
  },
  {
    q: 'كيف يمكنني دفع مبلغ التفعيل بعد التجربة؟',
    a: 'الدفع محلي وسهل جداً ومتاح للجميع: يمكنك التحويل الفوري عبر تطبيق بريدي موب (BaridiMob)، أو عبر حوالة الحساب البريدي الجاري (CCP)، وبمجرد إرسال وصل التحويل عبر واتساب يتم إرسال مفتاح التفعيل الدائم خلال دقائق.',
  },
]

export default function Downloads() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="flex flex-col w-full">
      {/* 1. Top Notification Pill Bar */}
      <div className="w-full bg-surface-container-high py-space-sm px-6 lg:px-12 text-center">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-space-sm">
          <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-surface-container-lowest text-secondary font-label-keycap text-label-keycap uppercase tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
            تحديث مستقر
          </span>
          <p className="font-body-md text-body-md text-on-surface">
            تم إطلاق تحديث <span className="font-bold text-secondary">AN POS v2.4</span> مع دعم كامل للفوترة الإلكترونية والطابعات الحرارية الشبكية.
          </p>
          <Link
            to="/features"
            className="font-label-sm text-label-sm text-secondary hover:underline flex items-center gap-0.5"
          >
            سجل التغييرات
            <span className="material-symbols-outlined text-[16px]">arrow_left</span>
          </Link>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface via-surface-container-low to-surface py-space-xl lg:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-space-md">
            {/* Semantic Badge */}
            <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container text-on-surface-variant shadow-sm">
              <span className="material-symbols-outlined text-secondary text-[18px]">verified_user</span>
              <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                تحميل فوري وآمن • الإصدار 2.4 المستقر (DZ Build)
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-headline-lg text-headline-lg lg:text-[44px] lg:leading-[54px] font-bold text-on-surface">
              حمّل تطبيق <span className="text-secondary">AN POS</span> وابدأ إدارة متجرك اليوم
            </h1>

            {/* Subtitle */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              نزّل النسخة المناسبة لجهازك خلال ثوانٍ. عند التثبيت، تبدأ تجربتك المجانية الكاملة لمدة 7 أيام تلقائياً لجميع المميزات وبدون أي دفع مسبق أو إدخال بطاقة بنكية.
            </p>

            {/* Trust Callout Card */}
            <div className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center gap-space-md">
              <div className="w-12 h-12 rounded-xl bg-tertiary-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-tertiary-fixed text-[26px]">lock_open</span>
              </div>
              <div className="flex flex-col">
                <span className="font-title-lg text-title-lg text-on-surface font-bold">
                  التحميل = تفعيل تجربة مجانية شاملة 7 أيام مباشرة
                </span>
                <span className="font-body-md text-body-md text-on-surface-variant">
                  صلاحيات غير محدودة لإدارة المخزون، الكاشير، الفواتير، والطباعة دون أي التزام مالي مسبق.
                </span>
              </div>
            </div>

            {/* Quick Stats Chips */}
            <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
              <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-on-tertiary-container text-[18px]">check_circle</span>
                <span>تثبيت بدون إنترنت (Offline Setup)</span>
              </div>
              <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-on-tertiary-container text-[18px]">check_circle</span>
                <span>فحص نظيف 100% (خالٍ من الفيروسات)</span>
              </div>
              <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-on-tertiary-container text-[18px]">check_circle</span>
                <span>دعم أجهزة الكاشير المحلية في الجزائر</span>
              </div>
            </div>
          </div>

          {/* Hero Visual / Real POS Terminal Screenshot Preview */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="w-full max-w-lg bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden relative">
              {/* Terminal Header Mock */}
              <div className="bg-primary-container px-space-md py-space-xs flex items-center justify-between" dir="ltr">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-error" />
                  <span className="w-3 h-3 rounded-full bg-surface-variant" />
                  <span className="w-3 h-3 rounded-full bg-tertiary-fixed" />
                </div>
                <span className="font-label-keycap text-label-keycap text-surface-container" dir="rtl">
                  AN POS v2.4 • محطة المبيعات النشطة
                </span>
                <div className="flex items-center gap-1 text-tertiary-fixed font-label-keycap text-label-keycap" dir="rtl">
                  <span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse" />
                  <span>جاهز للعمل</span>
                </div>
              </div>

              {/* Terminal Mock Content */}
              <div className="p-space-md bg-surface-container-low space-y-space-sm">
                <div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-secondary">barcode_scanner</span>
                    <div>
                      <div className="font-body-md text-body-md font-semibold text-on-surface">قارئ الباركود متصل</div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">مزامنة سريعة: USB / Bluetooth</div>
                    </div>
                  </div>
                  <span className="font-label-keycap text-label-keycap px-space-xs py-0.5 rounded bg-surface-container text-on-primary-fixed-variant">
                    100% OFFLINE
                  </span>
                </div>

                {/* Mini Cart Mock */}
                <div className="bg-surface-container-lowest rounded-lg p-space-sm shadow-sm space-y-2">
                  <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pb-1 border-b border-surface-container">
                    <span>الصنف المحمل</span>
                    <span>الكمية</span>
                    <span>المجموع (دج)</span>
                  </div>
                  <div className="flex items-center justify-between font-body-md text-body-md text-on-surface font-semibold">
                    <span className="truncate max-w-[150px]">زيت إيليو 5 لتر</span>
                    <span className="bg-surface-container px-2 py-0.5 rounded">x 2</span>
                    <span className="text-secondary font-bold">1,250.00</span>
                  </div>
                  <div className="flex items-center justify-between font-body-md text-body-md text-on-surface font-semibold">
                    <span className="truncate max-w-[150px]">حليب كانديا 1 لتر</span>
                    <span className="bg-surface-container px-2 py-0.5 rounded">x 6</span>
                    <span className="text-secondary font-bold">960.00</span>
                  </div>
                </div>

                {/* Grand Total Bar */}
                <div className="bg-primary-container text-on-primary rounded-lg p-space-md flex items-center justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm text-surface-variant block">المجموع الإجمالي</span>
                    <span className="font-display-total text-[28px] leading-tight text-tertiary-fixed font-bold">
                      2,210.00 دج
                    </span>
                  </div>
                  <div className="flex items-center gap-space-xs bg-tertiary-container px-space-sm py-space-xs rounded text-on-tertiary-container font-label-keycap text-label-keycap">
                    <span className="material-symbols-outlined text-[16px]">print</span>
                    <span>طبع تلقائي F12</span>
                  </div>
                </div>
              </div>

              {/* Terminal Bottom Status */}
              <div className="bg-surface-container-highest px-space-md py-space-xs flex items-center justify-between font-label-keycap text-label-keycap text-on-primary-fixed-variant">
                <span>الترخيص: نسخة تجريبية كاملة (باقي 7 أيام)</span>
                <span className="text-secondary font-bold">بدون قيود على المبيعات</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Download Cards Section */}
      <section className="w-full py-space-xl px-6 lg:px-12 bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center gap-space-xs max-w-3xl mx-auto">
            <span className="font-label-keycap text-label-keycap uppercase tracking-widest text-secondary font-bold">
              اختر منصة التشغيل المناسبة لنشاطك التجاري
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              روابط التحميل المباشرة والتثبيت الفوري
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              تم تجميع الحزم بأحدث بيئات التشغيل لتضمن أعلى سرعة استجابة على أجهزة الحواسب وشاشات اللمس والهواتف الذكية.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl items-stretch">
            {/* CARD 1: Desktop POS (Windows / Mac) Recommended */}
            <div className="relative bg-surface-container-lowest rounded-xl p-space-lg lg:p-space-xl flex flex-col justify-between shadow-md transition-all hover:shadow-xl">
              {/* Recommended Badge Ribbon */}
              <div className="absolute -top-3.5 start-6 bg-secondary text-on-secondary px-space-md py-0.5 rounded-full font-label-keycap text-label-keycap font-bold shadow-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">star</span>
                <span>النسخة الموصى بها لنقاط البيع الثابتة والمحلات</span>
              </div>

              <div className="flex flex-col gap-space-md">
                {/* Header of card */}
                <div className="flex items-start justify-between gap-space-sm pt-space-xs">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-secondary text-[32px]">desktop_windows</span>
                    </div>
                    <div>
                      <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                        نسخة سطح المكتب (Desktop POS)
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        لأجهزة الكمبيوتر العادية، اللمس (All-in-One)، ومحطات الكاشير
                      </p>
                    </div>
                  </div>
                  <span className="font-label-keycap text-label-keycap px-space-sm py-1 rounded-lg bg-surface-container text-on-surface font-bold">
                    v2.4.2
                  </span>
                </div>

                {/* Specs Matrix */}
                <div className="grid grid-cols-3 gap-space-xs p-space-sm bg-surface-container-low rounded-lg text-center">
                  <div>
                    <span className="font-label-keycap text-label-keycap text-on-surface-variant block">النظام</span>
                    <span className="font-body-md text-body-md text-on-surface font-bold">Windows 10/11</span>
                  </div>
                  <div>
                    <span className="font-label-keycap text-label-keycap text-on-surface-variant block">حجم الملف</span>
                    <span className="font-body-md text-body-md text-on-surface font-bold">~85 MB</span>
                  </div>
                  <div>
                    <span className="font-label-keycap text-label-keycap text-on-surface-variant block">الإنترنت</span>
                    <span className="font-body-md text-body-md text-on-tertiary-container font-bold">100% أوفلاين</span>
                  </div>
                </div>

                {/* Features Checklist */}
                <div className="space-y-space-xs">
                  <div className="flex items-center gap-space-xs text-on-surface font-body-md text-body-md">
                    <span className="material-symbols-outlined text-on-tertiary-container text-[20px] shrink-0">check</span>
                    <span>متوافق تام مع شاشات اللمس POS وقوارئ الباركود التلقائية (USB / Wireless)</span>
                  </div>
                  <div className="flex items-center gap-space-xs text-on-surface font-body-md text-body-md">
                    <span className="material-symbols-outlined text-on-tertiary-container text-[20px] shrink-0">check</span>
                    <span>ربط فوري ومباشر مع جميع طابعات التذاكر الحرارية 80mm و 58mm ودرج النقود</span>
                  </div>
                  <div className="flex items-center gap-space-xs text-on-surface font-body-md text-body-md">
                    <span className="material-symbols-outlined text-on-tertiary-container text-[20px] shrink-0">check</span>
                    <span>قاعدة بيانات SQLite محلية مشفرة وسريعة جداً حتى مع أكثر من 100,000 منتج</span>
                  </div>
                  <div className="flex items-center gap-space-xs text-on-surface font-body-md text-body-md">
                    <span className="material-symbols-outlined text-on-tertiary-container text-[20px] shrink-0">check</span>
                    <span>اختصارات لوحة المفاتيح الذكية للكاشير (F1 بحث، F5 تخفيض، F12 دفع فوري)</span>
                  </div>
                </div>
              </div>

              {/* Actions & Download Area */}
              <div className="mt-space-lg pt-space-md flex flex-col gap-space-sm">
                <a
                  className="group w-full py-space-md px-space-lg rounded-xl bg-secondary text-on-secondary hover:bg-secondary-container transition-all flex items-center justify-between shadow-md"
                  href={DOWNLOAD_SETUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-[28px] group-hover:-translate-y-0.5 transition-transform">
                      download
                    </span>
                    <div className="text-right">
                      <div className="font-title-lg text-title-lg font-bold leading-tight">
                        تحميل مباشر: AN POS Setup 0.0.0.exe
                      </div>
                      <div className="font-label-sm text-label-sm text-on-secondary/80">
                        Windows 11 / 10 / 8.1 (64-bit) • مثبت رسمي مباشر
                      </div>
                    </div>
                  </div>
                  <span className="font-label-keycap text-label-keycap bg-surface-container-lowest/20 px-space-sm py-1 rounded">
                    F12
                  </span>
                </a>

                {/* Secondary Alternative Links */}
                <div className="flex flex-wrap items-center justify-between gap-space-xs px-1 text-on-surface-variant font-label-sm text-label-sm">
                  <a
                    className="hover:text-secondary flex items-center gap-1 transition-colors font-semibold"
                    href={DOWNLOAD_PORTABLE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined text-[16px]">folder_zip</span>
                    <span>تحميل النسخة المحمولة (AN POS 0.0.0.exe بدون تثبيت)</span>
                  </a>
                  <a
                    className="hover:text-secondary flex items-center gap-1 transition-colors"
                    href={DOWNLOAD_SETUP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    <span>رابط بديل مباشر</span>
                  </a>
                </div>

                {/* Free Trial Note */}
                <div className="p-space-xs bg-surface-container-low rounded text-center font-label-sm text-label-sm text-on-surface">
                  ⭐ يشمل تلقائياً <span className="font-bold text-secondary">7 أيام تجربة مجانية كاملة</span> بمجرد إتمام التثبيت دون أي شروط.
                </div>
              </div>
            </div>

            {/* CARD 2: Mobile & Tablet (Android / iOS) */}
            <div className="relative bg-surface-container-lowest rounded-xl p-space-lg lg:p-space-xl flex flex-col justify-between shadow-md transition-all hover:shadow-xl">
              {/* Device Mobility Badge */}
              <div className="absolute -top-3.5 start-6 bg-surface-container-highest text-on-primary-fixed-variant px-space-md py-0.5 rounded-full font-label-keycap text-label-keycap font-bold shadow-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">phone_android</span>
                <span>للجرد الميداني والمراقبة اللحظية والموزعين</span>
              </div>

              <div className="flex flex-col gap-space-md">
                {/* Header of card */}
                <div className="flex items-start justify-between gap-space-sm pt-space-xs">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-secondary text-[32px]">smartphone</span>
                    </div>
                    <div>
                      <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                        تطبيق الهاتف والتابلت (Mobile POS)
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        للمبيعات المتنقلة، مدراء المتاجر، وقوائم الجرد اليدوي
                      </p>
                    </div>
                  </div>
                  <span className="font-label-keycap text-label-keycap px-space-sm py-1 rounded-lg bg-surface-container text-on-surface font-bold">
                    v2.4.0
                  </span>
                </div>

                {/* Specs Matrix */}
                <div className="grid grid-cols-3 gap-space-xs p-space-sm bg-surface-container-low rounded-lg text-center">
                  <div>
                    <span className="font-label-keycap text-label-keycap text-on-surface-variant block">النظام</span>
                    <span className="font-body-md text-body-md text-on-surface font-bold">Android &amp; iOS</span>
                  </div>
                  <div>
                    <span className="font-label-keycap text-label-keycap text-on-surface-variant block">حجم الملف</span>
                    <span className="font-body-md text-body-md text-on-surface font-bold">~28 MB</span>
                  </div>
                  <div>
                    <span className="font-label-keycap text-label-keycap text-on-surface-variant block">المزامنة</span>
                    <span className="font-body-md text-body-md text-secondary font-bold">سحابية / محليّة</span>
                  </div>
                </div>

                {/* Features Checklist */}
                <div className="space-y-space-xs">
                  <div className="flex items-center gap-space-xs text-on-surface font-body-md text-body-md">
                    <span className="material-symbols-outlined text-on-tertiary-container text-[20px] shrink-0">check</span>
                    <span>مسح الباركود مباشرة عبر كاميرا الهاتف الذكي بسرعة فائقة ودقة عالية</span>
                  </div>
                  <div className="flex items-center gap-space-xs text-on-surface font-body-md text-body-md">
                    <span className="material-symbols-outlined text-on-tertiary-container text-[20px] shrink-0">check</span>
                    <span>طباعة الفواتير المحمولة عبر طابعات Bluetooth وبلوتوث التوزيع الميداني</span>
                  </div>
                  <div className="flex items-center gap-space-xs text-on-surface font-body-md text-body-md">
                    <span className="material-symbols-outlined text-on-tertiary-container text-[20px] shrink-0">check</span>
                    <span>متابعة مبيعات الكاشير والأرباح اللحظية وأنت خارج المحل عبر هاتفك</span>
                  </div>
                  <div className="flex items-center gap-space-xs text-on-surface font-body-md text-body-md">
                    <span className="material-symbols-outlined text-on-tertiary-container text-[20px] shrink-0">check</span>
                    <span>جرد المخزون في الرفوف وتعديل الأسعار وإرسالها فوراً للحاسوب الرئيسي</span>
                  </div>
                </div>
              </div>

              {/* Actions & Download Area */}
              <div className="mt-space-lg pt-space-md flex flex-col gap-space-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs">
                  {/* Android APK Button */}
                  <a
                    className="group py-space-md px-space-md rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high transition-all flex items-center gap-space-xs shadow-sm"
                    href="/downloads/AN-POS-Mobile.apk"
                    download
                  >
                    <span className="material-symbols-outlined text-secondary text-[24px]">android</span>
                    <div className="text-right truncate">
                      <div className="font-title-lg text-[15px] font-bold leading-tight">تحميل APK المباشر</div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">Android 8.0+ • 28MB</div>
                    </div>
                  </a>

                  {/* Google Play / App Store Pill */}
                  <a
                    className="group py-space-md px-space-md rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container transition-all flex items-center gap-space-xs shadow-sm"
                    href="https://play.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined text-secondary text-[24px]">storefront</span>
                    <div className="text-right truncate">
                      <div className="font-title-lg text-[15px] font-bold leading-tight">Google Play / Store</div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">متوفر للتحميل المباشر</div>
                    </div>
                  </a>
                </div>

                {/* Mobile Quick QR Scanner Box */}
                <div className="p-space-xs bg-surface-container-low rounded flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm px-space-sm">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[18px] text-secondary">qr_code_scanner</span>
                    <span>امسح رمز الاستجابة السريعة (QR) بكاميرا هاتفك للتحميل المباشر الآن</span>
                  </div>
                  <span className="font-bold text-on-surface">DZ-SCAN</span>
                </div>

                {/* Free Trial Note */}
                <div className="p-space-xs bg-surface-container-low rounded text-center font-label-sm text-label-sm text-on-surface">
                  📱 متزامن مع نسخة الحاسوب وتجربة مجانية كاملة وموحدة لجميع الأجهزة.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Post-Installation 3-Step Guide */}
      <section className="w-full py-space-xl px-6 lg:px-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          <div className="flex flex-col items-center text-center gap-space-xs max-w-2xl mx-auto">
            <span className="font-label-keycap text-label-keycap uppercase tracking-widest text-secondary font-bold">
              بساطة وسرعة فائقة
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              3 خطوات عملية لبدء البيع في متجرك
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              لا تحتاج إلى مهندس إعلام آلي ولا إعدادات معقدة. صُمم النظام ليعمل في أقل من 3 دقائق.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            {/* Step 1 */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm relative">
              <div className="w-12 h-12 rounded-xl bg-secondary text-on-secondary flex items-center justify-center font-headline-md text-headline-md font-bold">
                1
              </div>
              <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                التثبيت السريع (أقل من دقيقة)
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                افتح الملف المحمل (<code className="bg-surface-container px-1 rounded text-secondary font-mono text-label-sm">AN POS Setup 0.0.0.exe</code>) واضغط التالي. المعالج يقوم بتهيئة قواعد البيانات والتعاريف تلقائياً.
              </p>
              <div className="mt-auto pt-space-xs flex items-center gap-1 font-label-sm text-label-sm text-secondary font-semibold">
                <span className="material-symbols-outlined text-[16px]">timer</span>
                <span>مدة التنصيب: 45 ثانية فقط</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm relative">
              <div className="w-12 h-12 rounded-xl bg-secondary text-on-secondary flex items-center justify-center font-headline-md text-headline-md font-bold">
                2
              </div>
              <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                بدء التجربة المجانية 7 أيام تلقائياً
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                بمجرد فتح التطبيق، يتم تشغيل فترة التجربة كاملة الصلاحيات فوراً دون طلب بطاقة دفع، أو اشتراك، أو رقم هاتف. كافة المميزات مفتوحة للاختبار.
              </p>
              <div className="mt-auto pt-space-xs flex items-center gap-1 font-label-sm text-label-sm text-on-tertiary-container font-semibold">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                <span>بدون التزام مالي نهائياً</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm relative">
              <div className="w-12 h-12 rounded-xl bg-secondary text-on-secondary flex items-center justify-center font-headline-md text-headline-md font-bold">
                3
              </div>
              <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                إضافة منتجاتك وبدء أول بيع
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                استورد منتجاتك من ملف Excel أو امسح الباركود، اختبر طباعة التذكرة على طابعتك الحرارية، وابدأ تسجيل أولى عمليات البيع وأنت مطمئن.
              </p>
              <div className="mt-auto pt-space-xs flex items-center gap-1 font-label-sm text-label-sm text-secondary font-semibold">
                <span className="material-symbols-outlined text-[16px]">point_of_sale</span>
                <span>جاهز للكاشير فوراً</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Transition & Permanent License Card (15,000 DZD) */}
      <section className="w-full py-space-xl px-6 lg:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary-container text-on-primary rounded-xl p-space-lg lg:p-space-xl shadow-xl flex flex-col lg:flex-row items-center justify-between gap-space-xl">
            <div className="flex flex-col gap-space-sm max-w-2xl text-right">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded bg-surface-container-lowest/10 text-tertiary-fixed font-label-keycap text-label-keycap self-start">
                <span className="material-symbols-outlined text-[16px]">all_inclusive</span>
                <span>ترخيص ملكية دائم - دفعة واحدة مدى الحياة</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg font-bold text-on-primary">
                هل انتهت فترة التجربة الـ 7 أيام وتريد الاستمرار؟
              </h3>
              <p className="font-body-md text-body-md text-surface-container leading-relaxed">
                يمكنك تفعيل نسختك الدائمة والانتقال السلس مع الحفاظ على كل بياناتك ومنتجاتك المسجلة بمبلغ{' '}
                <span className="font-bold text-tertiary-fixed text-title-lg">15,000 دج</span> فقط دفعة واحدة، بدون أي اشتراكات شهرية، مع تحديثات ودعم دائم.
              </p>
              <div className="flex flex-wrap items-center gap-space-md pt-space-xs text-surface-container-high font-label-sm text-label-sm">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-tertiary-fixed text-[18px]">verified</span> تفعيل عبر بريدي موب / CCP
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-tertiary-fixed text-[18px]">verified</span> فاتورة رسمية وضمان
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-tertiary-fixed text-[18px]">verified</span> تفعيل فوري بكود الترخيص
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-space-sm shrink-0 w-full sm:w-auto">
              <a
                className="px-space-lg py-space-md rounded-xl bg-tertiary-fixed text-on-tertiary-fixed hover:bg-tertiary-fixed-dim transition-all flex items-center justify-center gap-space-xs font-title-lg text-title-lg font-bold shadow-md"
                href={WA_ACTIVATE}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[24px]">key</span>
                <span>تفعيل نسختك الآن عبر واتساب</span>
              </a>
              <Link
                to="/pricing"
                className="px-space-lg py-space-md rounded-xl bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary transition-all flex items-center justify-center gap-space-xs font-body-md text-body-md font-semibold"
              >
                <span>عرض تفاصيل الأسعار وطرق الدفع</span>
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Hardware & System Specs Section */}
      <section className="w-full py-space-xl px-6 lg:px-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          <div className="flex flex-col items-center text-center gap-space-xs max-w-2xl mx-auto">
            <span className="font-label-keycap text-label-keycap uppercase tracking-widest text-secondary font-bold">
              المواصفات العتادية
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              متطلبات التشغيل والأجهزة المتوافقة
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              يعمل برنامج AN POS بكفاءة عالية حتى على الحواسيب المكتبية الاقتصادية والمتوسطة.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg items-start">
            {/* Specs Table / Card */}
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-md">
              <h3 className="font-title-lg text-title-lg text-on-surface font-bold flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary">memory</span>
                <span>الحد الأدنى والموصى به لجهاز الكمبيوتر</span>
              </h3>
              <div className="space-y-space-xs font-body-md text-body-md">
                <div className="flex items-center justify-between p-space-sm bg-surface-container-low rounded">
                  <span className="text-on-surface-variant">نظام التشغيل المدعوم</span>
                  <span className="font-bold text-on-surface">Windows 7 SP1 / 8.1 / 10 / 11 (32 &amp; 64-bit)</span>
                </div>
                <div className="flex items-center justify-between p-space-sm bg-surface-container rounded">
                  <span className="text-on-surface-variant">الذاكرة الحية (RAM)</span>
                  <span className="font-bold text-on-surface">2 GB (الموصى به 4 GB لسلاسة فائقة)</span>
                </div>
                <div className="flex items-center justify-between p-space-sm bg-surface-container-low rounded">
                  <span className="text-on-surface-variant">المعالج (Processor)</span>
                  <span className="font-bold text-on-surface">Intel Core 2 Duo / i3 / Celeron فما فوق</span>
                </div>
                <div className="flex items-center justify-between p-space-sm bg-surface-container rounded">
                  <span className="text-on-surface-variant">المساحة التخزينية</span>
                  <span className="font-bold text-on-surface">500 MB فقط للتثبيت وقاعدة البيانات</span>
                </div>
                <div className="flex items-center justify-between p-space-sm bg-surface-container-low rounded">
                  <span className="text-on-surface-variant">دقة الشاشة</span>
                  <span className="font-bold text-on-surface">1024x768 فأعلى (شاشات عادية أو لمسية Touch)</span>
                </div>
              </div>
            </div>

            {/* Compatible Peripherals Matrix */}
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-md">
              <h3 className="font-title-lg text-title-lg text-on-surface font-bold flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary">devices_other</span>
                <span>عتاد الكاشير والمحلات المتوافق في الجزائر</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                <div className="p-space-sm bg-surface-container-low rounded-lg space-y-1">
                  <div className="flex items-center gap-space-xs text-secondary font-semibold font-body-md text-body-md">
                    <span className="material-symbols-outlined text-[20px]">receipt_long</span>
                    <span>طابعات التذاكر الحرارية</span>
                  </div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    متوافق 100% مع: Xprinter, Epson, Rongta, Sunmi, Bixolon, HPRT (عبر USB / LAN / Wi-Fi / Bluetooth).
                  </p>
                </div>
                <div className="p-space-sm bg-surface-container-low rounded-lg space-y-1">
                  <div className="flex items-center gap-space-xs text-secondary font-semibold font-body-md text-body-md">
                    <span className="material-symbols-outlined text-[20px]">barcode_scanner</span>
                    <span>قوارئ الباركود (Douchette)</span>
                  </div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    قراءة ليزر وفوتوغرافية 1D و 2D (QR Code) لجميع الأنواع السلكية واللاسلكية بدون أي تعريف إضافي.
                  </p>
                </div>
                <div className="p-space-sm bg-surface-container-low rounded-lg space-y-1">
                  <div className="flex items-center gap-space-xs text-secondary font-semibold font-body-md text-body-md">
                    <span className="material-symbols-outlined text-[20px]">payments</span>
                    <span>أدراج النقود الآلية</span>
                  </div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    فتح آلي لدرج النقود (Tiroir-caisse RJ11 / RJ12) متزامن فوراً مع تسجيل الفاتورة والضغط على زر الدفع.
                  </p>
                </div>
                <div className="p-space-sm bg-surface-container-low rounded-lg space-y-1">
                  <div className="flex items-center gap-space-xs text-secondary font-semibold font-body-md text-body-md">
                    <span className="material-symbols-outlined text-[20px]">scale</span>
                    <span>موازين الباركود الإلكترونية</span>
                  </div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    توافق مع موازين المتاجر ومحلات المواد الغذائية والقصابة (Dibal, Rongta, CAS) وقراءة الوزن مباشرة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Remote Installation Support & Assistance Section */}
      <section className="w-full py-space-xl px-6 lg:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-surface-container via-surface-container-high to-surface-container rounded-xl p-space-lg lg:p-space-xl flex flex-col md:flex-row items-center justify-between gap-space-lg shadow-sm">
            <div className="flex items-start gap-space-md">
              <div className="w-16 h-16 rounded-2xl bg-secondary text-on-secondary flex items-center justify-center shrink-0 shadow-md">
                <span className="material-symbols-outlined text-[36px]">support_agent</span>
              </div>
              <div className="space-y-space-xs">
                <span className="font-label-keycap text-label-keycap px-space-xs py-0.5 rounded bg-surface-container-lowest text-secondary font-bold">
                  خدمة مساعدة مجانية للجميع
                </span>
                <h3 className="font-title-lg text-title-lg lg:text-headline-md font-bold text-on-surface">
                  تواجه مشكلة في التثبيت أو ربط الطابعة؟
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
                  فريقنا التقني متواجد لمساعدتك في التثبيت، ضبط إعدادات الطابعات، ونقل منتجاتك مجاناً عن بعد عبر برنامج <strong>AnyDesk</strong> أو عبر الهاتف طيلة أيام الأسبوع عبر 58 ولاية.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-space-sm shrink-0 w-full md:w-auto">
              <a
                className="w-full sm:w-auto px-space-lg py-space-md rounded-xl bg-primary text-on-primary hover:bg-primary-container transition-all flex items-center justify-center gap-space-xs font-body-md text-body-md font-bold shadow-sm"
                href={WA_ACTIVATE}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>طلب مساعدة في التثبيت (واتساب)</span>
              </a>
              <a
                className="w-full sm:w-auto px-space-lg py-space-md rounded-xl bg-surface-container-lowest text-on-surface hover:bg-surface-bright transition-all flex items-center justify-center gap-space-xs font-body-md text-body-md font-semibold shadow-sm"
                href={`tel:+${WA_NUMBER_1}`}
              >
                <span className="material-symbols-outlined text-[20px]">call</span>
                <span>اتصال هاتفي مباشر</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section Accordion for Download & Activation */}
      <section className="w-full py-space-xl px-6 lg:px-12 bg-surface-container-low mb-space-xl">
        <div className="max-w-4xl mx-auto flex flex-col gap-space-lg">
          <div className="text-center space-y-space-xs">
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              أسئلة شائعة حول التحميل والتجربة المجانية
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              كل ما تود معرفته قبل البدء في استخدام برنامج AN POS
            </p>
          </div>

          <div className="space-y-space-sm">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div key={faq.q} className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between font-title-lg text-title-lg font-bold text-on-surface text-start"
                  >
                    <span>{faq.q}</span>
                    <span
                      className={`material-symbols-outlined text-secondary transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {isOpen && (
                    <p className="mt-space-sm font-body-md text-body-md text-on-surface-variant leading-relaxed animate-in fade-in">
                      {faq.a}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
