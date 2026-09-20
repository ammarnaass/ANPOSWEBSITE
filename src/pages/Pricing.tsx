import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SITE, WA_ACTIVATE, WA_NUMBER_1 } from '../lib/site'

interface FaqItem {
  q: string
  a: string
}

const pricingFaqs: FaqItem[] = [
  {
    q: 'هل أدفع أي شيء قبل انتهاء الـ 7 أيام التجريبية؟',
    a: 'إطلاقاً. التحميل والتجربة لمدة 7 أيام مجانية بالكامل دون الحاجة لإدخال أي بطاقة بنكية أو التزام مالي. الهدف هو أن تختبر البرنامج في ظروف عملك الحقيقية وتتأكد من ملاءمته الكاملة قبل اتخاذ أي قرار دفع.',
  },
  {
    q: 'هل مبلغ 15,000 دج اشتراك سنوي أم مدى الحياة؟',
    a: 'الـ 15,000 دج هي دفعة واحدة لمرة واحدة فقط مدى الحياة (Lifetime License). لا نعتمد نظام الاشتراكات الشهرية أو السنوية المتكررة. بمجرد التفعيل، يبقى البرنامج شغالاً عندك بصورة دائمة مع التحديثات التقنية الأساسية مجاناً.',
  },
  {
    q: 'ماذا يحدث لبياناتي ومنتجاتي بعد انتهاء الـ 7 أيام والتفعيل؟',
    a: 'تبقى كافة بياناتك، المنتجات، الأسعار، أرصدة المخزون، وسجل المبيعات محفوظة 100% في قاعدة البيانات المحلية لحاسوبك. بمجرد إدخال كود التفعيل المستلم، يستأنف البرنامج العمل فوراً وتستمر في نشاطك دون إعادة إدخال أي معلومة.',
  },
  {
    q: 'هل يمكن نقل الترخيص لجهاز كمبيوتر آخر في حال تعطل القديم؟',
    a: 'نعم بالتأكيد! نحن نضمن لك حق استخدام البرنامج. إذا قمت بتغيير الحاسوب أو تعطل جهازك القديم، كل ما عليك هو التواصل مع فريق الدعم الفني عبر واتساب لنقوم بنقل وتوليد مفتاح تفعيل جديد لحاسوبك الجديد مجاناً.',
  },
  {
    q: 'هل يشمل السعر المساعدة في ربط الطابعات والموازين وقارئ الباركود؟',
    a: 'نعم، يتضمن السعر دعماً فنياً وتدريباً مجانياً عن بعد عبر برنامج AnyDesk أو الهاتف. يقوم مهندسونا بضبط تعريفات طابعات التذاكر الحرارية (80mm/58mm)، إعداد فتح درج النقود الآلي، وتجربة قوارئ الباركود والموازين لضمان انطلاقة سلسة لمشروعك.',
  },
]

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Activation Form State
  const [clientName, setClientName] = useState('')
  const [clientPhone, setClientPhone] = useState('')
  const [clientWilaya, setClientWilaya] = useState('')
  const [clientPlatform, setClientPlatform] = useState('ويندوز لسطح المكتب')
  const [machineId, setMachineId] = useState('')

  // License Simulator State
  const [demoKey, setDemoKey] = useState('')
  const [demoStatus, setDemoStatus] = useState<{ text: string; color: string } | null>(null)

  const handleActivationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = encodeURIComponent(
      `السلام عليكم، أرغب في تفعيل النسخة الدائمة لنظام AN POS (15,000 دج):\n` +
      `- الاسم / المحل: ${clientName}\n` +
      `- الهاتف: ${clientPhone}\n` +
      `- الولاية: ${clientWilaya}\n` +
      `- النسخة: ${clientPlatform}\n` +
      `- معرف الجهاز (Machine ID): ${machineId}`
    )
    window.open(`https://wa.me/${WA_NUMBER_1}?text=${message}`, '_blank')
  }

  const verifyDemoLicense = () => {
    const val = demoKey.trim().toUpperCase()
    if (!val) {
      setDemoStatus({
        text: 'يرجى كتابة أو لصق كود التفعيل أولاً للتجربة.',
        color: 'text-error',
      })
      return
    }
    if (val.length >= 12) {
      setDemoStatus({
        text: '✓ كود مطابق لصيغة رخصة AN POS الأصلية! قم بنسخه ولصقه داخل البرنامج لتثبيته نهائياً.',
        color: 'text-on-tertiary-container font-semibold',
      })
    } else {
      setDemoStatus({
        text: 'تنبيه: يتكون كود التفعيل من 16 إلى 20 رمزاً مقسمة بمطّات.',
        color: 'text-secondary font-semibold',
      })
    }
  }

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section className="relative w-full overflow-hidden bg-surface py-space-xl lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container shadow-sm mb-space-md">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span className="font-label-keycap text-label-keycap text-secondary font-bold uppercase">
              تسعير عادل وشفاف • ترخيص دائم مدى الحياة • أسعار الشراكة
            </span>
          </div>

          <h1 className="font-display-total text-display-total lg:text-5xl text-on-surface tracking-tight max-w-4xl leading-tight mb-space-md">
            استثمار بسيط لمرة واحدة... <br className="hidden md:inline" />
            <span className="text-secondary">أرباح وتنظيم مستقر</span> يدوم معك مدى الحياة
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed mb-space-xl">
            ابدأ الآن بتجربة كاملة الصلاحيات لمدة 7 أيام دون أي قيود، ثم فعّل نسختك الدائمة متى شئت بمبلغ{' '}
            <span className="font-headline-md text-headline-md text-on-surface font-bold">15,000 دج</span>{' '}
            فقط دفعة واحدة، دون تجديدات شهرية أو رسوم سنوية مستترة.
          </p>

          {/* Trust Indicators Ribbon */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md w-full max-w-2xl bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
            <div className="flex items-center justify-center gap-space-xs text-on-surface">
              <span className="material-symbols-outlined text-[20px] text-on-tertiary-container">credit_card_off</span>
              <span className="font-body-md text-body-md font-semibold">بدون بطاقة دفع مسبقة</span>
            </div>
            <div className="flex items-center justify-center gap-space-xs text-on-surface">
              <span className="material-symbols-outlined text-[20px] text-secondary">all_inclusive</span>
              <span className="font-body-md text-body-md font-semibold">رخصة نهائية غير منتهية</span>
            </div>
            <div className="flex items-center justify-center gap-space-xs text-on-surface">
              <span className="material-symbols-outlined text-[20px] text-on-tertiary-container">cloud_off</span>
              <span className="font-body-md text-body-md font-semibold">يعمل 100% بدون إنترنت</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Pricing Card Showcase Section */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12 -mt-8 relative z-20 w-full mb-space-xl">
        <div className="bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden">
          {/* High Badge Top Bar */}
          <div className="bg-primary text-on-primary px-space-lg py-space-sm flex items-center justify-between">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[20px] text-tertiary-fixed">verified</span>
              <span className="font-body-md text-body-md font-bold">الخيار الأكثر اعتماداً للمحلات والمتاجر الجزائرية</span>
            </div>
            <span className="font-label-keycap text-label-keycap bg-surface-container-lowest/15 px-space-sm py-1 rounded">
              نسخة شاملة {SITE.version}
            </span>
          </div>

          <div className="p-space-lg lg:p-space-xl grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
            {/* Left details summary column */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-space-sm mb-space-xs">
                  <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                    الترخيص الاحترافي الكامل
                  </span>
                  <span className="font-label-keycap text-label-keycap bg-surface-container text-on-surface px-space-xs py-0.5 rounded">
                    جهاز واحد + دعم دائم
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-md">
                  حزمة نقطة البيع المتكاملة AN POS
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-lg">
                  حل برمجي متكامل لإدارة المبيعات السريعة، مراقبة المخازن، وإصدار الفواتير القانونية. يتم تثبيته مباشرة على جهازك دون الاعتماد على خوادم خارجية لحماية خصوصية بيانات تجارتك.
                </p>

                {/* Feature Bullet Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="flex items-start gap-space-sm">
                    <div className="w-6 h-6 rounded-md bg-surface-container flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">check</span>
                    </div>
                    <div>
                      <div className="font-body-md text-body-md font-semibold text-on-surface">رخصة أصلية مدى الحياة</div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">دون أي اشتراك أو تجديد سنوي</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-space-sm">
                    <div className="w-6 h-6 rounded-md bg-surface-container flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">check</span>
                    </div>
                    <div>
                      <div className="font-body-md text-body-md font-semibold text-on-surface">إدارة المخزون والتنبيهات</div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">جرد لحظي، تنبيه النواقص والصلاحية</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-space-sm">
                    <div className="w-6 h-6 rounded-md bg-surface-container flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">check</span>
                    </div>
                    <div>
                      <div className="font-body-md text-body-md font-semibold text-on-surface">فوترة جزائرية معتمدة</div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">NIF, NIS, RC ورمز الاستجابة QR</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-space-sm">
                    <div className="w-6 h-6 rounded-md bg-surface-container flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">check</span>
                    </div>
                    <div>
                      <div className="font-body-md text-body-md font-semibold text-on-surface">توافق كامل مع العتاد</div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">طابعات 80/58mm، موازين إلكترونية، باركود</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-space-sm">
                    <div className="w-6 h-6 rounded-md bg-surface-container flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">check</span>
                    </div>
                    <div>
                      <div className="font-body-md text-body-md font-semibold text-on-surface">تشغيل 100% أوفلاين</div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">مستقر تماماً عند انقطاع شبكة الإنترنت</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-space-sm">
                    <div className="w-6 h-6 rounded-md bg-surface-container flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">check</span>
                    </div>
                    <div>
                      <div className="font-body-md text-body-md font-semibold text-on-surface">دعم ومساعدة عن بعد</div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">مساعدة وتثبيت مجاني عبر AnyDesk</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-space-lg pt-space-md flex items-center gap-space-md text-on-surface-variant">
                <span className="material-symbols-outlined text-[20px] text-secondary">security_update_good</span>
                <span className="font-label-sm text-label-sm">
                  تشمل الحزمة التحديثات التطورية والتحسينات البرمجية دون تكاليف إضافية.
                </span>
              </div>
            </div>

            {/* Right Callout and Checkout Column */}
            <div className="lg:col-span-5 bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="font-label-keycap text-label-keycap px-space-sm py-0.5 rounded bg-surface-container-high text-on-surface">
                    دفعة واحدة نهائية
                  </span>
                  <span className="font-label-sm text-label-sm text-on-tertiary-container font-semibold">تفعيل فوري</span>
                </div>

                {/* Grand Price Display */}
                <div className="my-space-md">
                  <div className="flex items-baseline gap-space-xs">
                    <span className="font-display-total text-display-total text-on-surface font-extrabold">15,000</span>
                    <span className="font-title-lg text-title-lg text-on-surface-variant font-bold">دج</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                    لا توجد أي اقتطاعات سنوية أو شهرية لاحقة على الإطلاق.
                  </p>
                </div>

                {/* Guarantees box */}
                <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm space-y-space-xs mb-space-lg">
                  <div className="flex items-center gap-space-sm text-on-surface">
                    <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">check_circle</span>
                    <span className="font-body-md text-body-md">نقل مجاني للترخيص في حال استبدال الحاسوب</span>
                  </div>
                  <div className="flex items-center gap-space-sm text-on-surface">
                    <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">check_circle</span>
                    <span className="font-body-md text-body-md">فاتورة شراء نظام رسمية فور الطلب</span>
                  </div>
                  <div className="flex items-center gap-space-sm text-on-surface">
                    <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">check_circle</span>
                    <span className="font-body-md text-body-md">تدريب المحاسبين والعمال بالفيديو والمباشر</span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="space-y-space-sm">
                <a
                  className="w-full flex items-center justify-between bg-tertiary-container text-on-tertiary-container hover:bg-tertiary-container/90 px-space-md py-space-md rounded-xl font-body-lg text-body-lg font-bold shadow-md transition-all active:scale-[0.98]"
                  href={WA_ACTIVATE}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[22px]">chat</span>
                    <span>تفعيل فوري عبر واتساب</span>
                  </div>
                  <span className="font-label-keycap text-label-keycap bg-surface-container-lowest/20 px-space-xs py-0.5 rounded text-on-tertiary-container">
                    15,000 دج
                  </span>
                </a>
                <Link
                  to="/downloads"
                  className="w-full flex items-center justify-center gap-space-xs bg-surface-container hover:bg-surface-container-high text-on-surface px-space-md py-space-sm rounded-xl font-body-md text-body-md font-semibold transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  <span>تنزيل والتجربة 7 أيام مجاناً أولاً</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Interactive Timeline: Usage Lifecycle */}
      <div className="w-full bg-surface-container-low py-space-xl lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-space-xl">
            <span className="font-label-keycap text-label-keycap bg-surface-container px-space-sm py-space-xs rounded text-on-surface font-bold">
              بساطة مطلقة
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mt-space-xs mb-space-sm">
              كيف تعمل دورة التجربة والتفعيل؟
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              خطوات واضحة وسريعة من لحظة التنزيل إلى تفعيل ترخيصك الدائم دون تعقيد ودون توقف لمبيعات محلك.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md relative">
            {/* Step 1 */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <span className="font-display-total text-display-total text-secondary opacity-30 font-bold">01</span>
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[22px]">downloading</span>
                  </div>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface mb-space-xs font-bold">
                  تنزيل وتجربة مجانية 7 أيام
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  قم بتحميل حزمة البرنامج وتثبيتها بنقرة واحدة. ابدأ بإدخال المنتجات وإجراء عمليات البيع بكل صلاحيات النظام.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs">
                <span className="font-label-keycap text-label-keycap text-secondary font-semibold">بدون إدخال أي وسيلة دفع</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <span className="font-display-total text-display-total text-on-surface-variant opacity-30 font-bold">02</span>
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface">
                    <span className="material-symbols-outlined text-[22px]">notification_important</span>
                  </div>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface mb-space-xs font-bold">
                  إشعار نهاية الفترة ورقم الجهاز
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  عند اقتراب نهاية الـ 7 أيام، تظهر نافذة توضيحية هادئة تعرض (Machine ID) المخصص لحاسوبك لطلب كود التفعيل الدائم.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs">
                <span className="font-label-keycap text-label-keycap text-on-tertiary-container font-semibold">
                  بياناتك ومبيعاتك محفوظة 100%
                </span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <span className="font-display-total text-display-total text-on-tertiary-container opacity-30 font-bold">03</span>
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-tertiary-container">
                    <span className="material-symbols-outlined text-[22px]">payments</span>
                  </div>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface mb-space-xs font-bold">
                  التسديد وإرسال الوصل
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  أرسل رقم الجهاز ووصل التحويل (بريدي موب أو CCP) إلى مسؤول التفعيل عبر واتساب، وسيتم التحقق خلال دقائق معدودة.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs">
                <span className="font-label-keycap text-label-keycap text-on-surface font-semibold">تحقق وتأكيد سريع</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <span className="font-display-total text-display-total text-secondary opacity-30 font-bold">04</span>
                  <div className="w-10 h-10 rounded-lg bg-secondary text-on-secondary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">key</span>
                  </div>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface mb-space-xs font-bold">
                  إدخال المفتاح والتفعيل الدائم
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  انسخ كود التفعيل المستلم وضعه داخل شاشة النظام، لتتحول نسختك فوراً إلى رخصة أصلية غير منتهية الصلاحية مدى الحياة.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs">
                <span className="font-label-keycap text-label-keycap text-secondary font-semibold">مبروك، برنامجك جاهز للأبد</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Interactive Customer Activation Portal (Double Box) */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-space-xl lg:py-24 w-full">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-label-keycap text-label-keycap bg-surface-container-low px-space-sm py-space-xs rounded text-secondary font-bold">
            بوابة الخدمات
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mt-space-xs mb-space-sm">
            بوابة تفعيل التراخيص السريعة
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            سواء كنت ترغب بطلب ترخيص جديد أو تمتلك كود التفعيل وتريد معرفة كيفية تطبيقه، فريقنا رهن إشارتك.
          </p>
        </div>

        {/* Dual Layout Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
          {/* Right Box: Request Activation via Form to WhatsApp */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-space-lg lg:p-space-xl rounded-xl shadow-md">
            <div className="flex items-center gap-space-sm mb-space-md">
              <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[20px]">assignment</span>
              </div>
              <div>
                <h3 className="font-title-lg text-title-lg text-on-surface font-bold">أريد تفعيل نسختي الآن</h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  املأ المعلومات وسيتم تجهيز رسالة التفعيل إلى واتساب مباشرة
                </p>
              </div>
            </div>

            <form className="space-y-space-md" onSubmit={handleActivationSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div>
                  <label className="block font-label-sm text-label-sm font-semibold text-on-surface mb-1" htmlFor="clientName">
                    الاسم الكامل / اسم المحل التجاري *
                  </label>
                  <input
                    className="w-full bg-surface-container-low text-on-surface px-space-md py-space-sm rounded-lg font-body-md text-body-md outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary transition-all"
                    id="clientName"
                    placeholder="مثال: سوبرماركت النور"
                    required
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm font-semibold text-on-surface mb-1" htmlFor="clientPhone">
                    رقم الهاتف *
                  </label>
                  <input
                    className="w-full bg-surface-container-low text-on-surface px-space-md py-space-sm rounded-lg font-body-md text-body-md outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary transition-all text-right"
                    dir="ltr"
                    id="clientPhone"
                    placeholder="0550 00 00 00"
                    required
                    type="tel"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div>
                  <label className="block font-label-sm text-label-sm font-semibold text-on-surface mb-1" htmlFor="clientWilaya">
                    الولاية *
                  </label>
                  <select
                    className="w-full bg-surface-container-low text-on-surface px-space-md py-space-sm rounded-lg font-body-md text-body-md outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary transition-all"
                    id="clientWilaya"
                    required
                    value={clientWilaya}
                    onChange={(e) => setClientWilaya(e.target.value)}
                  >
                    <option value="">اختر الولاية</option>
                    <option value="الجزائر">16 - الجزائر</option>
                    <option value="وهران">31 - وهران</option>
                    <option value="قسنطينة">25 - قسنطينة</option>
                    <option value="سطيف">19 - سطيف</option>
                    <option value="باتنة">05 - باتنة</option>
                    <option value="البليدة">09 - البليدة</option>
                    <option value="تلمسان">13 - تلمسان</option>
                    <option value="عنابة">23 - عنابة</option>
                    <option value="تيزي وزو">15 - تيزي وزو</option>
                    <option value="بجاية">06 - بجاية</option>
                    <option value="أخرى">ولاية أخرى (كافة الـ 58 ولاية)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm font-semibold text-on-surface mb-1" htmlFor="clientPlatform">
                    نسخة البرنامج *
                  </label>
                  <select
                    className="w-full bg-surface-container-low text-on-surface px-space-md py-space-sm rounded-lg font-body-md text-body-md outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary transition-all"
                    id="clientPlatform"
                    required
                    value={clientPlatform}
                    onChange={(e) => setClientPlatform(e.target.value)}
                  >
                    <option value="ويندوز لسطح المكتب">نسخة ويندوز للكمبيوتر (Desktop)</option>
                    <option value="أندرويد للهواتف والتابلت">نسخة أندرويد (Mobile / Tablet)</option>
                  </select>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block font-label-sm text-label-sm font-semibold text-on-surface" htmlFor="machineId">
                    رقم الجهاز المولد (Machine ID) *
                  </label>
                  <span className="font-label-keycap text-label-keycap text-secondary">تلقاه داخل إعدادات البرنامج</span>
                </div>
                <div className="relative">
                  <input
                    className="w-full bg-surface-container-low text-on-surface px-space-md py-space-sm rounded-lg font-body-md text-body-md outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary uppercase transition-all tracking-wider font-mono text-center sm:text-right"
                    dir="ltr"
                    id="machineId"
                    placeholder="مثال: ANPOS-8842-X7K1-99A0"
                    required
                    type="text"
                    value={machineId}
                    onChange={(e) => setMachineId(e.target.value)}
                  />
                  <div className="absolute inset-y-0 start-3 flex items-center pointer-events-none text-on-surface-variant">
                    <span className="material-symbols-outlined text-[18px]">terminal</span>
                  </div>
                </div>
              </div>

              <div className="p-space-sm bg-surface-container rounded-lg flex items-center gap-space-xs text-on-surface">
                <span className="material-symbols-outlined text-[18px] text-secondary">info</span>
                <span className="font-label-sm text-label-sm">
                  عند الضغط، سيتم فتح واتساب تلقائياً مع الرسالة الجاهزة لتأكيد التفعيل والدفع.
                </span>
              </div>

              <button
                className="w-full bg-secondary text-on-secondary hover:bg-secondary-container transition-all py-space-sm px-space-lg rounded-xl font-body-lg text-body-lg font-bold flex items-center justify-center gap-space-xs shadow-sm"
                type="submit"
              >
                <span className="material-symbols-outlined text-[20px]">send</span>
                <span>إرسال طلب التفعيل الفوري (15,000 دج)</span>
              </button>
            </form>
          </div>

          {/* Left Box: I already have a key / Guidance Simulator */}
          <div className="lg:col-span-5 bg-surface-container-low p-space-lg lg:p-space-xl rounded-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-space-sm mb-space-md">
                <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-tertiary-container">
                  <span className="material-symbols-outlined text-[20px]">verified_user</span>
                </div>
                <div>
                  <h3 className="font-title-lg text-title-lg text-on-surface font-bold">لدي كود تفعيل بالفعل</h3>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">خطوات تفعيل البرنامج بعد استلام الكود</p>
                </div>
              </div>

              {/* Step Instructions */}
              <div className="space-y-space-md mb-space-lg">
                <div className="flex items-start gap-space-sm">
                  <div className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center font-label-sm text-label-sm font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    افتح تطبيق <strong className="text-on-surface">AN POS</strong> على حاسوبك، وتوجه إلى القائمة الجانبية:{' '}
                    <span className="font-label-keycap text-label-keycap bg-surface-container px-space-xs py-0.5 rounded text-on-surface">
                      الإعدادات &gt; تفعيل النظام
                    </span>
                    .
                  </p>
                </div>
                <div className="flex items-start gap-space-sm">
                  <div className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center font-label-sm text-label-sm font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    الصق كود الترخيص المستلم من فريقنا واضغط على زر <strong className="text-on-surface">تأكيد التفعيل الدائم</strong>.
                  </p>
                </div>
                <div className="flex items-start gap-space-sm">
                  <div className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center font-label-sm text-label-sm font-bold shrink-0 mt-0.5">
                    3
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    تظهر علامة النجاح وتُزال شارة التجربة نهائياً مع استمرار عمل كافة بياناتك دون انقطاع.
                  </p>
                </div>
              </div>

              {/* Key Verification Simulator Box */}
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-space-xs">
                  <span className="font-label-sm text-label-sm font-bold text-on-surface">محاكاة إدخال المفتاح</span>
                  <span className="font-label-keycap text-label-keycap bg-surface-container px-1.5 py-0.5 rounded text-on-surface-variant">
                    تجربة تفاعلية
                  </span>
                </div>
                <div className="space-y-space-xs">
                  <input
                    className="w-full bg-surface-container-low text-on-surface px-space-sm py-2 rounded-lg font-mono text-center font-body-md text-body-md outline-none uppercase tracking-wider"
                    dir="ltr"
                    id="demoLicenseInput"
                    placeholder="XXXXX-XXXXX-XXXXX-XXXXX"
                    type="text"
                    value={demoKey}
                    onChange={(e) => setDemoKey(e.target.value)}
                  />
                  <button
                    className="w-full bg-primary text-on-primary hover:bg-primary/90 py-2 rounded-lg font-body-md text-body-md font-bold transition-all"
                    onClick={verifyDemoLicense}
                    type="button"
                  >
                    فحص صحة المفتاح تجريبياً
                  </button>
                </div>
                {demoStatus && (
                  <div className={`mt-space-xs text-center font-label-sm text-label-sm ${demoStatus.color}`}>
                    {demoStatus.text}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-space-lg p-space-sm bg-surface-container-lowest rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-[20px]">support_agent</span>
                <span className="font-body-md text-body-md text-on-surface font-semibold">هل واجهت أي صعوبة؟</span>
              </div>
              <a
                className="font-label-sm text-label-sm text-secondary hover:underline font-bold"
                href={WA_ACTIVATE}
                rel="noopener noreferrer"
                target="_blank"
              >
                تحدث مع التقني الآن
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Accepted Payment Methods in Algeria Section */}
      <div className="w-full bg-surface-container-low py-space-xl lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-space-xl">
            <span className="font-label-keycap text-label-keycap bg-surface-container px-space-sm py-space-xs rounded text-on-surface font-bold">
              دفع محلي آمن ومضمون
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mt-space-xs mb-space-sm">
              طرق الدفع والتسديد المعتمدة في الجزائر
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              نوفر وسائل دفع محلية سهلة ومريحة تغطي كافة ولايات الوطن مع إرسال الفاتورة والوصل الرسمي مباشرة بعد العملية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            {/* BaridiMob Card */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
                    <span className="material-symbols-outlined text-[26px]">smartphone</span>
                  </div>
                  <span className="font-label-keycap text-label-keycap bg-surface-container text-on-tertiary-container px-space-xs py-0.5 rounded font-bold">
                    تفعيل خلال 5 دقائق
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface mb-space-xs font-bold">
                  بريدي موب (BaridiMob)
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                  الخيار الأسرع على الإطلاق. تحويل مباشر عبر رقم RIP الخاص بحسابنا، وتفعيل ترخيصك في دقائق بعد إرسال الإشعار الإلكتروني.
                </p>
              </div>
              <div className="p-space-sm bg-surface-container-low rounded-lg flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant">المعالجة والتسليم:</span>
                <span className="font-body-md text-body-md font-bold text-on-surface">فوري ومؤتمت</span>
              </div>
            </div>

            {/* CCP Card */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[26px]">account_balance</span>
                  </div>
                  <span className="font-label-keycap text-label-keycap bg-surface-container text-on-surface px-space-xs py-0.5 rounded font-bold">
                    عبر 58 ولاية
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface mb-space-xs font-bold">
                  حساب البريد الجاري (CCP)
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                  الدفع عبر أي مكتب بريد جزائري قريب منك بحوالة عادية، والتقاط صورة واضحة للوصل لإرسالها عبر واتساب أو البريد.
                </p>
              </div>
              <div className="p-space-sm bg-surface-container-low rounded-lg flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant">المعالجة والتسليم:</span>
                <span className="font-body-md text-body-md font-bold text-on-surface">نفس اليوم</span>
              </div>
            </div>

            {/* In-person / Onsite Installation */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-on-surface">
                    <span className="material-symbols-outlined text-[26px]">handshake</span>
                  </div>
                  <span className="font-label-keycap text-label-keycap bg-surface-container text-on-surface px-space-xs py-0.5 rounded font-bold">
                    وكلاء معتمدون
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface mb-space-xs font-bold">
                  الدفع والتثبيت الميداني
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                  إمكانية إرسال تقني إلى محلك التجاري لتهيئة العتاد بالكامل والتدريب الحضوري، مع الدفع يداً بيد بعد المعاينة والرضا.
                </p>
              </div>
              <div className="p-space-sm bg-surface-container-low rounded-lg flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant">الخدمة الميدانية:</span>
                <span className="font-body-md text-body-md font-bold text-on-surface">حسب التنسيق والولاية</span>
              </div>
            </div>
          </div>

          {/* Legal & Guarantee Callout banner */}
          <div className="mt-space-lg p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-md">
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-tertiary-container shrink-0">
                <span className="material-symbols-outlined text-[24px]">receipt_long</span>
              </div>
              <div>
                <div className="font-body-lg text-body-lg font-bold text-on-surface">
                  فاتورة بيع ووصل قانوني لكل عملية شراء
                </div>
                <div className="font-body-md text-body-md text-on-surface-variant">
                  مرفقة برقم السجل التجاري والتعريف الجبائي والإحصائي للمؤسسة لتقييدها في محاسبتك الرسمية.
                </div>
              </div>
            </div>
            <div className="shrink-0">
              <span className="font-label-keycap text-label-keycap px-space-md py-space-xs rounded bg-surface-container text-on-surface font-semibold">
                ضمان المعاملة 100%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Pricing FAQ Section */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-space-xl lg:py-24 w-full">
        <div className="text-center mb-space-xl">
          <span className="font-label-keycap text-label-keycap bg-surface-container px-space-sm py-space-xs rounded text-on-surface font-bold">
            الوضوح المالي
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mt-space-xs mb-space-sm">
            الأسئلة الشائعة حول التسعير والتفعيل
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            كل ما تحتاج معرفته عن ترخيص برنامج AN POS وسياسة الاستخدام والدعم الفني.
          </p>
        </div>

        {/* Accordion Elements */}
        <div className="space-y-space-sm">
          {pricingFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx
            return (
              <div key={faq.q} className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full text-right p-space-lg flex items-center justify-between gap-space-md"
                >
                  <span className="font-title-lg text-title-lg text-on-surface font-semibold">{faq.q}</span>
                  <span
                    className={`material-symbols-outlined text-[22px] text-on-surface-variant transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <div className="px-space-lg pb-space-lg animate-in fade-in">
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* 7. Bottom Interactive CTA Closing Dock */}
      <div className="w-full bg-primary text-on-primary py-space-xl lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-space-xs bg-surface-container-lowest/10 px-space-md py-space-xs rounded-full mb-space-md">
            <span className="material-symbols-outlined text-[18px] text-tertiary-fixed">lock_open</span>
            <span className="font-label-keycap text-label-keycap text-on-primary">جاهزية تشغيلية كاملة وفورية</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg lg:text-4xl font-bold mb-space-md max-w-3xl leading-tight">
            ابدأ الآن تجربة الـ 7 أيام مجاناً، أو فعّل رخصتك الدائمة بـ 15,000 دج فقط
          </h2>
          <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl mx-auto mb-space-xl leading-relaxed">
            انضم لأكثر من 1,200 تاجر ومتجر في 58 ولاية وثقوا بـ AN POS لتأمين مبيعاتهم وتنظيم حساباتهم بدقة وسرعة فائقة.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-space-md w-full sm:w-auto">
            <a
              className="w-full sm:w-auto flex items-center justify-center gap-space-sm bg-tertiary-container text-on-tertiary-container hover:scale-105 transition-transform px-space-xl py-space-md rounded-xl font-body-lg text-body-lg font-bold shadow-lg"
              href={WA_ACTIVATE}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[24px]">chat</span>
              <span>تواصل وتفعيل فوري عبر واتساب</span>
            </a>
            <Link
              to="/downloads"
              className="w-full sm:w-auto flex items-center justify-center gap-space-xs bg-surface-container-lowest/15 hover:bg-surface-container-lowest/25 text-on-primary px-space-xl py-space-md rounded-xl font-body-lg text-body-lg font-semibold transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">download</span>
              <span>تحميل حزمة التثبيت (نسخة مجانية)</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
