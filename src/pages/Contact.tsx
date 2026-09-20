import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/ui/Icon'
import { SITE, WA_NUMBER_1 } from '../lib/site'

export default function Contact() {
  // Form states
  const [fullName, setFullName] = useState('')
  const [storeName, setStoreName] = useState('')
  const [phone, setPhone] = useState('')
  const [wilaya, setWilaya] = useState('')
  const [subject, setSubject] = useState('purchase')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)

    // Also offer direct WhatsApp fallback
    const subjectLabels: Record<string, string> = {
      purchase: 'شراء رخصة النظام الدائمة (15,000 دج)',
      hardware: 'طلب عتاد كامل (طابعة، قارئ، درج)',
      support: 'مساعدة تقنية وتثبيت على أجهزتي',
      distributor: 'طلب الانضمام كشريك موزع معتمد',
      general: 'استفسار عام وتجربة النسخة التجريبية',
    }

    const waMsg = encodeURIComponent(
      `*رسالة اتصال جديدة - AN POS*\n\n` +
      `👤 الاسم: ${fullName}\n` +
      `🏪 المحل: ${storeName}\n` +
      `📞 الهاتف: ${phone}\n` +
      `📍 الولاية: ${wilaya}\n` +
      `📌 الموضوع: ${subjectLabels[subject] || subject}\n` +
      `📝 الرسالة: ${message || 'لا توجد تفاصيل إضافية'}`
    )

    // Open WhatsApp in new tab for direct reach
    window.open(`https://wa.me/${WA_NUMBER_1}?text=${waMsg}`, '_blank')
  }

  return (
    <div className="flex flex-col w-full">
      {/* Top Hero Header Section */}
      <section className="relative w-full overflow-hidden bg-surface py-16 lg:py-24">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute -top-24 end-12 w-96 h-96 rounded-full bg-secondary-fixed filter blur-3xl"></div>
          <div className="absolute top-1/2 start-8 w-80 h-80 rounded-full bg-surface-container-highest filter blur-2xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-space-sm px-space-md py-1.5 rounded-full bg-surface-container-high text-on-surface shadow-sm mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-on-tertiary-container animate-pulse"></span>
            <span className="font-label-sm text-label-sm font-semibold tracking-wide">فريق تطوير محلي جزائري • شريكك التقني الموثوق</span>
          </div>
          {/* Main Headline */}
          <h1 className="font-headline-lg text-headline-lg lg:text-[44px] lg:leading-[54px] font-bold text-on-surface max-w-4xl tracking-tight mb-6">
            نحن هنا لمساعدتك في بناء وتطوير <span className="text-secondary">تجارة مستقرة وناجحة</span>
          </h1>
          {/* Subtitle */}
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed mb-10">
            فريق AN POS يجمع بين خبرة البرمجة المتقدمة والفهم العميق للتحديات اليومية لأصحاب المحلات والمتاجر في الجزائر. نسعى لتقديم حلول كاشير ومخزون عملية، سريعة، وبأفضل قيمة استثمارية مستدامة.
          </p>
          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-space-md">
            <a
              className="inline-flex items-center gap-space-sm px-space-xl py-3 rounded-xl bg-primary text-on-primary font-body-lg text-body-lg shadow-md hover:bg-primary-container transition-all active:translate-y-0.5"
              href="#inquiry-form"
            >
              <Icon name="send" size={20} />
              <span>راسلنا الآن مباشرة</span>
            </a>
            <a
              className="inline-flex items-center gap-space-sm px-space-xl py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-lg text-body-lg shadow-sm hover:bg-surface-container-low transition-all active:translate-y-0.5"
              href={`https://wa.me/${WA_NUMBER_1}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon name="chat" size={20} className="text-on-tertiary-container" />
              <span>محادثة واتساب سريعة</span>
            </a>
          </div>
        </div>
      </section>

      {/* Statistics & Trust Metrics Ribbon */}
      <section className="w-full bg-surface-container-low py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md lg:gap-space-lg">
            <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-center text-center">
              <span className="font-display-total text-display-total text-secondary mb-1 tracking-tight">+1,200</span>
              <span className="font-title-lg text-title-lg text-on-surface font-semibold mb-1">متجر ونشاط معتمد</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">يعتمدون يومياً على منظومة AN POS</span>
            </div>
            <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-center text-center">
              <span className="font-display-total text-display-total text-on-surface mb-1 tracking-tight">58</span>
              <span className="font-title-lg text-title-lg text-on-surface font-semibold mb-1">ولاية مغطاة بالكامل</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">دعم تقني وتوصيل العتاد لجميع ربوع الوطن</span>
            </div>
            <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-center text-center">
              <span className="font-display-total text-display-total text-on-tertiary-container mb-1 tracking-tight">99.8%</span>
              <span className="font-title-lg text-title-lg text-on-surface font-semibold mb-1">معدل الاستقرار والرضا</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">دون أعطال أثناء ذروة ساعات الدفع والبيع</span>
            </div>
            <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-center text-center">
              <span className="font-display-total text-display-total text-secondary-container mb-1 tracking-tight">&lt; 10 دقائق</span>
              <span className="font-title-lg text-title-lg text-on-surface font-semibold mb-1">سرعة الاستجابة والدعم</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">فريق جاهز للمساعدة الفورية والتفعيل</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Us & Core Story Bento Grid */}
      <section className="w-full py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-space-xl">
          {/* Section Tag */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-keycap text-label-keycap text-secondary uppercase tracking-widest">رؤيتنا وقصتنا</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">لماذا قمنا ببناء نظام AN POS؟</h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              بدأنا من معاينة واقعية في المحلات التجارية: طوابير انتظار، برامج معقدة تتطلب اشتراكات شهرية، وأعطال شائعة عند انقطاع الإنترنت. فكان قرارنا ابتكار منظومة جزائرية خالصة تضمن السرعة والسيادة الكاملة لبياناتك.
            </p>
          </div>

          {/* Story & Visual Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            {/* Story Card */}
            <div className="lg:col-span-7 flex flex-col gap-space-lg p-8 rounded-2xl bg-surface-container-low shadow-sm">
              <div className="flex items-center gap-space-sm">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-on-primary shadow-sm">
                  <Icon name="terminal" size={24} />
                </div>
                <div>
                  <h3 className="font-title-lg text-title-lg text-on-surface font-bold">هندسة برمجية تحترم وقت التاجر الجزائري</h3>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">مبني محلياً في الجزائر بتقنيات C++ و Rust المسرّعة</span>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                واجه العديد من التجار مشاكل تكررت لسنوات: برامج كاشير مستوردة غير مهيأة للدينار الجزائري، برمجيات سحابية بطيئة تتوقف بمجرد تذبذب خط الإنترنت، أو برامج تفرض تجديداً سنوياً مرهقاً. صممنا AN POS ليكون خفيفاً وسريع الاستجابة (أقل من 0.05 ثانية لطباعة الفاتورة)، ويعمل بصفة ذاتية دون الحاجة لأي اتصال بالشبكة مع الحفاظ على التوافق التام مع متطلبات الفوترة والضرائب المعمول بها في الجزائر.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-2">
                <div className="p-space-md rounded-xl bg-surface-container-lowest flex items-center gap-space-sm shadow-sm">
                  <Icon name="wifi_off" size={20} className="text-on-tertiary-container" />
                  <span className="font-body-md text-body-md font-semibold text-on-surface">استقلالية تامة بدون إنترنت</span>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-lowest flex items-center gap-space-sm shadow-sm">
                  <Icon name="speed" size={20} className="text-secondary" />
                  <span className="font-body-md text-body-md font-semibold text-on-surface">إنهاء الفاتورة بأقل من 3 ثوانٍ</span>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-lowest flex items-center gap-space-sm shadow-sm">
                  <Icon name="receipt_long" size={20} className="text-on-tertiary-container" />
                  <span className="font-body-md text-body-md font-semibold text-on-surface">مطابقة جبائية وضريبية جزائرية</span>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-lowest flex items-center gap-space-sm shadow-sm">
                  <Icon name="lock" size={20} className="text-secondary" />
                  <span className="font-body-md text-body-md font-semibold text-on-surface">بيانات مشفرة على قرصك الصلب</span>
                </div>
              </div>
            </div>

            {/* Visual / Image Showcase */}
            <div className="lg:col-span-5 flex flex-col gap-space-md">
              <div className="relative overflow-hidden rounded-2xl bg-surface-container shadow-sm h-72">
                <img
                  className="w-full h-full object-cover"
                  alt="محل تجاري معتمد لنظام AN POS بالجزائر"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuGkY2yr8wWsgf_qoQ4mhvDcY5Pzn_eBKX40lT2R3y8koEj3kYbwaKvgiI4m5m8ntp892BxcL20LxAB8-0vC-W_jQ4ThplqU7IARcz1ORGD36fAhcp54zXIUvNcIpgAz2TSZGKsA_StgzhF0SYTn7cwdLY1t8l78Z5JUVBy-NQvlYDwt9YGFN0KkPmmqkMIODmKwbpod-Noa_GPcIKyI_S-VhZlUEksgkaJQg4u6A"
                />
                <div className="absolute bottom-4 start-4 end-4 p-3 rounded-xl bg-surface-container-lowest/90 backdrop-blur-md shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-space-sm">
                    <Icon name="storefront" size={20} className="text-secondary" />
                    <span className="font-label-sm text-label-sm font-semibold text-on-surface">جاهز لكافة الأنشطة التجارية والمحلات</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed font-label-keycap text-label-keycap">معتمد</span>
                </div>
              </div>

              <div className="p-space-lg rounded-2xl bg-primary-container text-on-primary flex items-center justify-between shadow-sm">
                <div className="flex flex-col">
                  <span className="font-label-keycap text-label-keycap text-tertiary-fixed tracking-wide">الترخيص مدى الحياة</span>
                  <span className="font-headline-md text-headline-md font-bold">{SITE.price} فقط</span>
                  <span className="font-label-sm text-label-sm text-on-primary-container">دفعة واحدة بدون أي اشتراك شهري أو سنوي</span>
                </div>
                <Link
                  className="px-space-md py-2 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md font-bold hover:bg-surface-container transition-all"
                  to="/pricing"
                >
                  تفاصيل السعر
                </Link>
              </div>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md mt-4">
            {/* Value 1 */}
            <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center">
                <Icon name="touch_app" size={22} />
              </div>
              <h4 className="font-title-lg text-title-lg text-on-surface font-bold">البساطة والسرعة الفائقة</h4>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                واجهات مدروسة بعناية لا تحتاج لأي خبرة تقنية مسبقة. يستطيع الكاشير البدء بإصدار الفواتير بدقة بعد تدريب لا يتجاوز 15 دقيقة فقط.
              </p>
            </div>
            {/* Value 2 */}
            <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center">
                <Icon name="security" size={22} />
              </div>
              <h4 className="font-title-lg text-title-lg text-on-surface font-bold">الاعتمادية والأمان الكامل</h4>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                قواعد بيانات مشفرة تحفظ محلياً على جهازك مع نسخ احتياطي تلقائي بنقرة واحدة لحماية أرقام مبيعاتك وحسابات الموردين من الضياع.
              </p>
            </div>
            {/* Value 3 */}
            <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-surface-container-highest text-on-primary-fixed flex items-center justify-center">
                <Icon name="price_check" size={22} />
              </div>
              <h4 className="font-title-lg text-title-lg text-on-surface font-bold">تسعير شفاف وعادل</h4>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                لا اشتراكات مخفية، لا رسوم لكل فاتورة، ولا تكاليف إضافية عند تحديث النظام. تشتري نسختك مدى الحياة وتملك تجارتك بكل أريحية.
              </p>
            </div>
            {/* Value 4 */}
            <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary flex items-center justify-center">
                <Icon name="support_agent" size={22} />
              </div>
              <h4 className="font-title-lg text-title-lg text-on-surface font-bold">المرافقة المستمرة في الميدان</h4>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                فريق الدعم الفني وتقنيونا الميدانيون جاهزون عبر الهاتف، والتحكم عن بعد (AnyDesk)، أو الزيارة المباشرة لحل أي انشغال فوراً.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact Channels Section */}
      <section className="w-full bg-surface-container-low py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-space-xl">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-space-xs">
            <span className="font-label-keycap text-label-keycap text-secondary uppercase tracking-widest">قنوات الاتصال المباشرة</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">نحن دوماً على بُعد رسالة أو مكالمة واحدة</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">اختر القناة الأنسب لك وتواصل معنا الآن لمناقشة احتياجات محلك أو لتفعيل نسختك</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {/* Channel 1: WhatsApp */}
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center">
                    <Icon name="chat" size={22} />
                  </div>
                  <span className="px-2 py-0.5 rounded-lg bg-surface-container-high text-on-tertiary-container font-label-keycap text-label-keycap">محادثة فورية</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface font-bold">محادثة واتساب فورية</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {SITE.waDescription}
                </p>
                <div className="flex flex-col gap-1 mt-2 text-on-surface">
                  <div className="flex items-center justify-between text-body-md">
                    <span className="font-semibold">واتساب (1):</span>
                    <span dir="ltr" className="font-bold">{SITE.phone1}</span>
                  </div>
                  <div className="flex items-center justify-between text-body-md">
                    <span className="font-semibold">واتساب (2):</span>
                    <span dir="ltr" className="font-bold">{SITE.phone2}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <a
                  className="w-full inline-flex items-center justify-between px-3 py-2 rounded-xl bg-primary text-on-primary font-body-md text-body-md hover:bg-primary-container transition-all"
                  href={SITE.wa1}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>واتساب (1)</span>
                  <Icon name="arrow_forward" size={16} />
                </a>
                <a
                  className="w-full inline-flex items-center justify-between px-3 py-2 rounded-xl bg-surface-container-high text-on-surface font-body-md text-body-md hover:bg-surface-container-highest transition-all"
                  href={SITE.wa2}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>واتساب (2)</span>
                  <Icon name="arrow_forward" size={16} />
                </a>
              </div>
            </div>

            {/* Channel 2: Phone */}
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center">
                    <Icon name="call" size={22} />
                  </div>
                  <span className="px-2 py-0.5 rounded-lg bg-surface-container-high text-on-surface-variant font-label-keycap text-label-keycap">08:00 - 20:00</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface font-bold">الاتصال الهاتفي المباشر</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {SITE.phoneUrgentInfo}
                </p>
                <div className="flex flex-col gap-1 mt-2 text-on-surface">
                  <div className="flex items-center justify-between text-body-md">
                    <span className="font-semibold">اتصال (1):</span>
                    <span dir="ltr" className="font-bold">{SITE.phone1}</span>
                  </div>
                  <div className="flex items-center justify-between text-body-md">
                    <span className="font-semibold">اتصال (2):</span>
                    <span dir="ltr" className="font-bold">{SITE.phone2}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <a
                  className="w-full inline-flex items-center justify-between px-3 py-2 rounded-xl bg-surface-container-high text-on-surface font-body-md text-body-md hover:bg-surface-container-highest transition-all"
                  href={SITE.tel1}
                >
                  <span>اتصال (1)</span>
                  <Icon name="phone_in_talk" size={16} />
                </a>
                <a
                  className="w-full inline-flex items-center justify-between px-3 py-2 rounded-xl bg-surface-container-high text-on-surface font-body-md text-body-md hover:bg-surface-container-highest transition-all"
                  href={SITE.tel2}
                >
                  <span>اتصال (2)</span>
                  <Icon name="phone_in_talk" size={16} />
                </a>
              </div>
            </div>

            {/* Channel 3: Email / Ticket */}
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-surface-container text-on-surface flex items-center justify-center">
                    <Icon name="mail" size={22} />
                  </div>
                  <span className="px-2 py-0.5 rounded-lg bg-surface-container-high text-on-surface-variant font-label-keycap text-label-keycap">دعم برمجيات</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface font-bold">{SITE.ticketTitle}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {SITE.ticketDescription}
                </p>
                <div className="flex flex-col gap-1 mt-2">
                  <span className="font-body-md text-body-md font-bold text-on-surface" dir="ltr">{SITE.email}</span>
                </div>
              </div>
              <div className="mt-4">
                <a
                  className="w-full inline-flex items-center justify-center gap-space-sm px-space-md py-2.5 rounded-xl bg-surface-container-high text-on-surface font-body-md text-body-md hover:bg-surface-container-highest transition-all active:translate-y-0.5"
                  href={`mailto:${SITE.email}?subject=${encodeURIComponent('تذكرة مساعدة داخلية - متابعة مشكلة برمجية AN POS')}`}
                >
                  <Icon name="send" size={18} />
                  <span>فتح تذكرة داخلية</span>
                </a>
              </div>
            </div>

            {/* Channel 4: Offices & Distributors */}
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center">
                    <Icon name="location_on" size={22} />
                  </div>
                  <span className="px-2 py-0.5 rounded-lg bg-surface-container-high text-on-surface-variant font-label-keycap text-label-keycap">مكاتب وموزعون</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface font-bold">المقر وشبكة الولايات</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">الجزائر العاصمة (المقر التقني الرئيسي) مع فروع وموزعين معتمدين في وهران، سطيف، قسنطينة وعنابة.</p>
                <div className="flex flex-col gap-1 mt-2">
                  <span className="font-body-md text-body-md font-bold text-on-surface">باب الزوار، الجزائر العاصمة</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">إمكانية التنقل الميداني للمحلات</span>
                </div>
              </div>
              <a
                className="mt-6 w-full inline-flex items-center justify-center gap-space-sm px-space-md py-2.5 rounded-xl bg-surface-container-high text-on-surface font-body-md text-body-md hover:bg-surface-container-highest transition-all active:translate-y-0.5"
                href="#inquiry-form"
              >
                <Icon name="meeting_room" size={18} />
                <span>طلب زيارة تقنية</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Contact Form & Location Section */}
      <section className="w-full py-20 bg-surface" id="inquiry-form">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-space-md p-8 lg:p-10 rounded-2xl bg-surface-container-low shadow-sm">
              <div className="flex flex-col gap-space-xs mb-2">
                <div className="inline-flex items-center gap-space-xs text-secondary font-label-keycap text-label-keycap uppercase">
                  <Icon name="edit_note" size={16} />
                  <span>استمارة الاستفسار والطلب المباشر</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">راسل فريق AN POS المالي والتقني</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">يرجى ملء البيانات بدقة وسيتواصل معك مستشار تقني مختص خلال أقل من 30 دقيقة.</p>
              </div>

              <form className="flex flex-col gap-space-md" id="contactForm" onSubmit={handleContactSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm text-label-sm font-semibold text-on-surface" htmlFor="fullName">الاسم الكامل أو اسم المسؤول *</label>
                    <input
                      className="w-full px-space-md py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:bg-surface-container-highest transition-all"
                      id="fullName"
                      placeholder="مثال: عبد القادر بن علي"
                      required
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm text-label-sm font-semibold text-on-surface" htmlFor="storeName">اسم المحل أو النشاط التجاري *</label>
                    <input
                      className="w-full px-space-md py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:bg-surface-container-highest transition-all"
                      id="storeName"
                      placeholder="مثال: سوبرماركت السلام / صيدلية النور"
                      required
                      type="text"
                      value={storeName}
                      onChange={(e) => setStoreName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm text-label-sm font-semibold text-on-surface" htmlFor="phone">رقم الهاتف (مع واتساب) *</label>
                    <input
                      className="w-full px-space-md py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:bg-surface-container-highest transition-all text-right"
                      dir="ltr"
                      id="phone"
                      placeholder="0550 00 00 00"
                      required
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm text-label-sm font-semibold text-on-surface" htmlFor="wilaya">الولاية *</label>
                    <select
                      className="w-full px-space-md py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:bg-surface-container-highest transition-all"
                      id="wilaya"
                      required
                      value={wilaya}
                      onChange={(e) => setWilaya(e.target.value)}
                    >
                      <option disabled value="">اختر الولاية (58 ولاية)</option>
                      <option value="16 - الجزائر العاصمة">16 - الجزائر العاصمة</option>
                      <option value="31 - وهران">31 - وهران</option>
                      <option value="19 - سطيف">19 - سطيف</option>
                      <option value="25 - قسنطينة">25 - قسنطينة</option>
                      <option value="06 - بجاية">06 - بجاية</option>
                      <option value="09 - البليدة">09 - البليدة</option>
                      <option value="35 - بومرداس">35 - بومرداس</option>
                      <option value="15 - تيزي وزو">15 - تيزي وزو</option>
                      <option value="13 - تلمسان">13 - تلمسان</option>
                      <option value="23 - عنابة">23 - عنابة</option>
                      <option value="27 - مستغانم">27 - مستغانم</option>
                      <option value="14 - تيارت">14 - تيارت</option>
                      <option value="28 - المسيلة">28 - المسيلة</option>
                      <option value="05 - باتنة">05 - باتنة</option>
                      <option value="باقي الولايات (تغطية كاملة 58)">باقي الولايات (تغطية كاملة 58)</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm text-label-sm font-semibold text-on-surface" htmlFor="subject">موضوع الاستفسار *</label>
                  <select
                    className="w-full px-space-md py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:bg-surface-container-highest transition-all"
                    id="subject"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  >
                    <option value="purchase">شراء رخصة النظام الدائمة ({SITE.price})</option>
                    <option value="hardware">طلب عتاد كامل (طابعة كودبار، قارئ، درج نقود)</option>
                    <option value="support">مساعدة تقنية وتثبيت على أجهزتي الحالية</option>
                    <option value="distributor">طلب الانضمام كشريك موزع معتمد في ولايتي</option>
                    <option value="general">استفسار عام وتجربة النسخة التجريبية</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm text-label-sm font-semibold text-on-surface" htmlFor="message">التفاصيل أو طبيعة النشاط</label>
                  <textarea
                    className="w-full px-space-md py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:bg-surface-container-highest transition-all resize-none"
                    id="message"
                    placeholder="اذكر لنا عدد نقاط البيع (الكاشير)، هل لديك عتاد متوفر أم ترغب بعرض متكامل مع الأجهزة؟"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <button
                  className="w-full py-3.5 rounded-xl bg-primary text-on-primary font-body-lg text-body-lg font-bold shadow-md hover:bg-primary-container transition-all flex items-center justify-center gap-space-sm active:translate-y-0.5 mt-2"
                  type="submit"
                >
                  <Icon name="mark_email_read" size={20} />
                  <span>إرسال الرسالة إلى فريق العمل</span>
                </button>

                {submitted && (
                  <div className="p-space-md rounded-xl bg-tertiary-fixed text-on-tertiary-fixed flex items-center gap-space-sm animate-fade-in" id="formSuccess">
                    <Icon name="check_circle" size={24} />
                    <span className="font-body-md text-body-md font-semibold">شكراً لك! تم فتح واتساب لإرسال رسالتك مباشرة، وسيتصل بك فريق AN POS في أقرب وقت.</span>
                  </div>
                )}
              </form>
            </div>

            {/* Support Info & Coverage Map (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-space-lg">
              {/* Support Availability Box */}
              <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
                <h3 className="font-title-lg text-title-lg text-on-surface font-bold">أوقات عمل فريق الدعم والمتابعة</h3>
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between pb-2 border-b border-surface-container-low">
                    <span className="font-body-md text-body-md text-on-surface-variant">السبت إلى الخميس (أوقات الذروة):</span>
                    <span className="font-body-md text-body-md font-bold text-on-surface">08:00 صباحاً – 20:00 مساءً</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-body-md text-body-md text-on-surface-variant">يوم الجمعة (طوارئ الكاشير):</span>
                    <span className="font-body-md text-body-md font-semibold text-on-tertiary-container">واتساب متاح للمحلات الشغالة</span>
                  </div>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container flex items-center gap-space-sm mt-2">
                  <Icon name="verified" size={22} className="text-secondary shrink-0" />
                  <span className="font-label-sm text-label-sm text-on-surface">تفعيل فوري للتراخيص خلال 10 دقائق من إتمام التحويل عبر بريدي موب (BaridiMob) أو CCP.</span>
                </div>
              </div>

              {/* Developer Community Box */}
              <div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-2">
                <span className="font-title-lg text-title-lg text-on-surface font-bold">قنوات ومجتمع المطور</span>
                <p className="font-body-md text-body-md text-on-surface-variant">تابع آخر التحديثات، الشروحات المرئية، والميزات القادمة:</p>
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <a
                    href={SITE.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors"
                  >
                    <span>فيسبوك</span>
                  </a>
                  <a
                    href={SITE.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors"
                  >
                    <span>إنستغرام ({SITE.social.instagramHandle})</span>
                  </a>
                  <a
                    href={SITE.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors"
                  >
                    <span>يوتيوب ({SITE.social.youtubeHandle})</span>
                  </a>
                </div>
              </div>

              {/* Static Map Placeholder for Headquarters */}
              <div className="relative rounded-2xl overflow-hidden shadow-sm flex flex-col bg-surface-container-low">
                <div
                  className="w-full h-56 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAUqJX3JBSmOewEgKze6e1JVXpLwNdG4x8TKmmvqbVGSAvh-_e9RdCn2LJMbCAXrhp4JefO7SCvOYsjG_BclaRb1CAXf1cRG_fOaYAgX7wZOg9pIePrWIZvBDwVNHBNuAzs0pMspwCg3rQP-yVO4y8DssiXCJ2JKbt1Ntz5232tnxj34VB2VOlHuCi3nv2_FVIdTd8UNfsXwkhduQUSkY5PfTLRqrrF74IZiMJFZoE')`,
                  }}
                ></div>
                <div className="p-space-md flex items-center justify-between bg-surface-container-lowest">
                  <div className="flex items-center gap-space-xs">
                    <Icon name="pin_drop" size={20} className="text-secondary" />
                    <span className="font-body-md text-body-md font-bold text-on-surface">مركز الدعم والتوزيع الرئيسي - باب الزوار</span>
                  </div>
                  <span className="font-label-keycap text-label-keycap text-on-surface-variant">الجزائر</span>
                </div>
              </div>

              {/* Quick FAQ Prompt */}
              <div className="p-space-md rounded-2xl bg-surface-container-high text-on-surface flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <Icon name="help_center" size={24} />
                  <div className="flex flex-col">
                    <span className="font-title-lg text-title-lg font-bold">هل لديك سؤال سريع؟</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">اطلع على دليل الأسئلة والأجوبة الشائعة</span>
                  </div>
                </div>
                <Link
                  className="px-space-md py-2 rounded-xl bg-primary text-on-primary font-label-sm text-label-sm font-semibold hover:bg-primary-container transition-all"
                  to="/support"
                >
                  صفحة الأسئلة
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner & Reseller Call to Action Banner */}
      <section className="w-full py-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="relative overflow-hidden rounded-2xl bg-primary-container text-on-primary p-8 lg:p-14 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-space-xl">
            <div className="flex flex-col gap-space-sm max-w-2xl text-start z-10">
              <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-secondary text-on-secondary font-label-keycap text-label-keycap max-w-fit">
                <span>فرصة شراكة واعدة في 58 ولاية</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg font-bold tracking-tight">هل ترغب بأن تصبح موزعاً معتمداً لنظام AN POS؟</h3>
              <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed">
                نوجه دعوتنا إلى مهندسي الإعلام الآلي، تقنيي صيانة الحواسيب، ومحلات بيع عتاد الكاشير في الجزائر للانضمام لشبكة موزعينا المعتمدين. احصل على هامش ربح استثنائي، تراخيص تجريبية حصرية، وتدريب تقني كامل من فريقنا.
              </p>
              <div className="flex flex-wrap gap-space-md pt-2">
                <div className="flex items-center gap-space-xs text-on-primary font-body-md text-body-md">
                  <Icon name="check_circle" size={20} className="text-tertiary-fixed" />
                  <span>أرباح مجزية على كل رخصة</span>
                </div>
                <div className="flex items-center gap-space-xs text-on-primary font-body-md text-body-md">
                  <Icon name="check_circle" size={20} className="text-tertiary-fixed" />
                  <span>مرافقة وإحالة الزبائن في ولايتك</span>
                </div>
                <div className="flex items-center gap-space-xs text-on-primary font-body-md text-body-md">
                  <Icon name="check_circle" size={20} className="text-tertiary-fixed" />
                  <span>دعم فني خاص بالموزعين</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-space-sm w-full lg:w-auto z-10">
              <a
                className="px-space-xl py-3.5 rounded-xl bg-surface-container-lowest text-on-surface font-body-lg text-body-lg font-bold text-center shadow-md hover:bg-surface-container transition-all active:translate-y-0.5"
                href={`https://wa.me/${WA_NUMBER_1}?text=${encodeURIComponent('طلب الانضمام كشريك موزع معتمد لنظام AN POS')}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                تقديم طلب موزع عبر واتساب
              </a>
              <a
                className="px-space-xl py-3.5 rounded-xl bg-surface-container-highest text-on-primary-fixed font-body-lg text-body-lg font-bold text-center hover:bg-surface-container-high transition-all active:translate-y-0.5"
                href="#inquiry-form"
              >
                ملء استمارة الشراكة
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Inter-Page Navigation Ribbon */}
      <section className="w-full py-12 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-space-md p-space-lg rounded-2xl bg-surface-container-low shadow-sm">
          <div className="flex items-center gap-space-md">
            <div className="w-12 h-12 rounded-xl bg-secondary text-on-secondary flex items-center justify-center shadow-sm">
              <Icon name="download" size={24} />
            </div>
            <div className="flex flex-col">
              <h4 className="font-title-lg text-title-lg font-bold text-on-surface">جرّب البرنامج بنفسك قبل الشراء</h4>
              <span className="font-body-md text-body-md text-on-surface-variant">تحميل فوري برابط مباشر، نسخة تجريبية كاملة المميزات لمدة {SITE.trialDays} أيام دون قيود</span>
            </div>
          </div>
          <div className="flex items-center gap-space-sm">
            <Link
              className="inline-flex items-center gap-space-xs px-space-lg py-3 rounded-xl bg-primary text-on-primary font-body-lg text-body-lg shadow-sm hover:bg-primary-container transition-all"
              to="/downloads"
            >
              <span>تحميل النسخة التجريبية</span>
              <Icon name="file_download" size={18} />
            </Link>
            <Link
              className="inline-flex items-center gap-space-xs px-space-lg py-3 rounded-xl bg-surface-container-highest text-on-surface font-body-lg text-body-lg hover:bg-surface-container transition-all"
              to="/pricing"
            >
              <span>تفاصيل التراخيص</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
