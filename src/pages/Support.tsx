import { useState } from 'react'
import Icon from '../components/ui/Icon'

import { SITE, WA_NUMBER_1 } from '../lib/site'

interface FaqItem {
  id: string
  category: 'pricing' | 'hardware' | 'data'
  icon: string
  question: string
  answer: React.ReactNode
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'pricing',
    icon: 'timer_off',
    question: 'ماذا يحدث بالضبط عند انتهاء فترة التجربة المجانية (7 أيام)؟',
    answer: (
      <p>
        بياناتك، مخزنك، فواتيرك، وقوائم الأسعار التي أدخلتها تبقى محفوظة 100% ولن تفقد أي معلومة. عند انتهاء الأيام السبعة تظهر شاشة تنبيه بسيطة تطلب إدخال مفتاح التفعيل الدائم. بمجرد إدخال الكود المستلم عبر واتساب، يفتح البرنامج مباشرة بنفس البيانات وتستأنف عملك فوراً وبكل سلاسة.
      </p>
    ),
  },
  {
    id: 'faq-2',
    category: 'pricing',
    icon: 'payments',
    question: 'هل مبلغ 15,000 دج يدفع مرة واحدة أم هو اشتراك سنوي؟',
    answer: (
      <p>
        المبلغ يدفع <strong>مرة واحدة فقط مدى الحياة (Lifetime License)</strong> بدون أي رسوم اشتراك شهرية أو سنوية خفية. يشمل السعر أيضاً الدعم التقني، التحديثات المستقبلية لفرع الإصدار v2.x، وضمان نقل الترخيص لجهاز بديل في حال تعطل جهازك.
      </p>
    ),
  },
  {
    id: 'faq-3',
    category: 'pricing',
    icon: 'lan',
    question: 'هل يمكن تشغيل نفس الترخيص على أكثر من كمبيوتر في نفس المحل؟',
    answer: (
      <p>
        الترخيص الأساسي يولد مفتاحاً مشفراً لجهاز كمبيوتر رئيسي واحد (Server/POS). إذا كان لديك كاشير إضافي أو جهاز إدارة في الخلف، يمكنك ربطهما على نفس الشبكة المحلية (Local LAN) باقتناء رخصة إضافية مخفضة تبلغ 7,000 دج فقط لكل شاشة إضافية، مع مزامنة فورية وموحدة للمخزون والفواتير.
      </p>
    ),
  },
  {
    id: 'faq-4',
    category: 'pricing',
    icon: 'account_balance_wallet',
    question: 'كيف أدفع وأحصل على كود التفعيل عبر بريدي موب BaridiMob أو CCP؟',
    answer: (
      <div>
        عملية الدفع بسيطة جداً:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>قم بتحويل 15,000 دج إلى حساب بريدي موب RIP الخاص بمؤسستنا (يظهر في نافذة الدفع داخل البرنامج أو عبر مراسلتنا).</li>
          <li>أو عبر الحساب البريدي الجاري CCP في أي مركز بريد في الجزائر.</li>
          <li>خذ صورة أو لقطة شاشة للوصل، وأرسلها عبر واتساب مع معرّف الجهاز (Machine ID).</li>
          <li>يتم توليد المفتاح ومشاركته معك فوراً في غضون 5 إلى 10 دقائق.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'faq-5',
    category: 'hardware',
    icon: 'wifi_off',
    question: 'هل يحتاج البرنامج إلى اتصال إنترنت ليعمل داخل المتجر؟',
    answer: (
      <p>
        <strong>إطلاقاً، لا يحتاج لأي اتصال بالإنترنت.</strong> نظام AN POS مبني كبرنامج محلي أصيل (100% Offline Desktop Application)، مما يضمن سرعة بيع فورية (أجزاء من الثانية للمنتج)، حماية بياناتك من انقطاعات الإنترنت، واستقراراً تاماً للمبيعات طوال ساعات العمل. تحتاج الإنترنت فقط لطلب مساعدة عن بعد أو إرسال ملفات النسخ الاحتياطي السحابي إن أردت.
      </p>
    ),
  },
  {
    id: 'faq-6',
    category: 'hardware',
    icon: 'receipt_long',
    question: 'هل الطابعة الحرارية ودرج النقود وقارئ الباركود يعملون تلقائياً؟',
    answer: (
      <p>
        نعم. البرنامج مجهز برمجياً للتعرف الفوري على قارئات الباركود اللاسلكية والـ USB (Plug and Play)، كما يدعم الطابعات الحرارية الشائعة في الجزائر مقاس 80 مم و 58 مم، ويدعم أمر فتح درج النقود الآلي عبر منفذ RJ11 بمجرد ضغط زر الدفع أو زر <kbd className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface font-label-keycap text-label-keycap">F12</kbd>.
      </p>
    ),
  },
  {
    id: 'faq-7',
    category: 'data',
    icon: 'device_reset',
    question: 'ماذا أفعل لو تعطل كمبيوتر المحل وأردت نقل البرنامج لجهاز آخر؟',
    answer: (
      <p>
        حقك مضمون تماماً. بمجرد تواصلك معنا وإثبات هويتك أو رقم وصل الشراء السابق، يقوم فريق الدعم الفني بتوليد كود ترخيص جديد لجهازك الجديد <strong>مجاناً دون أي تكلفة إضافية</strong>، ومساعدتك عبر AnyDesk لاسترجاع آخر نسخة احتياطية لمحلك التجاري.
      </p>
    ),
  },
]

export default function Support() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<'all' | 'pricing' | 'hardware' | 'data'>('all')
  const [openFaq, setOpenFaq] = useState<string | null>(null)

  // Form state
  const [storeName, setStoreName] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const [wilaya, setWilaya] = useState('')
  const [issueType, setIssueType] = useState('تفعيل الترخيص الدائم')
  const [anydeskId, setAnydeskId] = useState('')
  const [issueDesc, setIssueDesc] = useState('')

  const handleSupportSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = encodeURIComponent(
      `*طلب دعم فني جديد - برنامج AN POS*\n\n` +
      `🏪 المحل: ${storeName}\n` +
      `📍 الولاية: ${wilaya}\n` +
      `📞 رقم الهاتف: ${phoneNum}\n` +
      `⚠️ نوع المشكلة: ${issueType}\n` +
      `💻 رقم AnyDesk: ${anydeskId || 'غير متوفر'}\n` +
      `📝 ملاحظات: ${issueDesc || 'لا يوجد تفاصيل إضافية'}`
    )
    window.open(`https://wa.me/${WA_NUMBER_1}?text=${message}`, '_blank')
  }

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory
    const q = searchQuery.toLowerCase().trim()
    const matchesSearch = !q || item.question.toLowerCase().includes(q)
    return matchesCategory && matchesSearch
  })

  return (
    <div className="flex flex-col w-full">
      {/* Top Ambient Glow */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-96 bg-gradient-to-b from-primary-fixed/40 via-surface-variant/30 to-transparent blur-3xl pointer-events-none -z-10"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-16">
          {/* Top Breadcrumb & Status Badge */}
          <div className="flex flex-wrap items-center justify-between gap-space-md mb-8">
            <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-high text-on-surface">
              <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-on-tertiary-container -mr-3"></span>
              <span className="font-label-sm text-label-sm font-semibold">مركز الدعم والمساعدة الفنية • إجابات وحلول سريعة</span>
            </div>
            <div className="hidden sm:flex items-center gap-space-sm text-on-surface-variant">
              <Icon name="wifi_protected_setup" size={18} className="text-secondary" />
              <span className="font-label-keycap text-label-keycap">أنظمة الدعم متصلة 24/7 • الجزائر</span>
            </div>
          </div>

          {/* Main Header Section */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="font-headline-lg text-headline-lg sm:text-[38px] sm:leading-[46px] text-on-surface tracking-tight">
              كيف يمكننا مساعدتك اليوم؟
            </h1>
            <p className="mt-4 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              تصفح أدلة الاستخدام المصورة، حلول المشاكل الشائعة، أو تواصل فوراً مع فريق الدعم الفني لمساعدتك عن بعد في ربط أجهزتك وضبط نقطة البيع.
            </p>

            {/* Big Search Interface */}
            <div className="w-full mt-8">
              <div className="relative flex items-center bg-surface-container-lowest rounded-full p-2 shadow-[0_4px_24px_rgba(11,28,48,0.08)] transition-all focus-within:shadow-[0_8px_30px_rgba(0,81,213,0.14)]">
                <Icon name="search" size={24} className="text-on-surface-variant mr-3 ms-2" />
                <input
                  className="w-full bg-transparent px-3 py-3 font-body-lg text-body-lg text-on-surface placeholder:text-outline outline-none"
                  id="faqSearchInput"
                  placeholder="ابحث عن سؤال، كود تفعيل، إعداد طابعة، أو حل مشكلة..."
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="button"
                  className="hidden sm:inline-flex items-center gap-space-xs px-space-lg py-2.5 rounded-full bg-primary text-on-primary font-body-md text-body-md hover:bg-primary-container transition-all"
                  onClick={() => {
                    const el = document.getElementById('faqList')
                    el?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <span>بحث</span>
                  <span className="font-label-keycap text-label-keycap opacity-75">↵</span>
                </button>
              </div>

              {/* Quick Tag Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
                <span className="font-label-sm text-label-sm text-on-surface-variant ml-1">الأكثر بحثاً:</span>
                {[
                  'ربط الطابعة الحرارية',
                  'تفعيل بعد 7 أيام',
                  'بريدي موب BaridiMob',
                  'AnyDesk عن بعد',
                  'نقل الترخيص',
                ].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className="px-3 py-1 rounded-full bg-surface-container-low hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors"
                    onClick={() => {
                      setSearchQuery(tag)
                      const el = document.getElementById('faqList')
                      el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Support Channels Quick Cards */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: AnyDesk */}
          <div className="flex flex-col justify-between bg-surface-container-lowest rounded-2xl p-6 lg:p-8 shadow-[0_2px_12px_rgba(11,28,48,0.04)] hover:shadow-[0_8px_24px_rgba(11,28,48,0.08)] transition-all group">
            <div>
              <div className="w-14 h-14 rounded-xl bg-error-container/60 text-error flex items-center justify-center mb-6">
                <Icon name="desktop_windows" size={30} />
              </div>
              <div className="flex items-center gap-space-xs mb-2">
                <span className="px-2 py-0.5 rounded-lg bg-surface-container-high text-on-surface-variant font-label-keycap text-label-keycap">تدخل تقني</span>
                <span className="font-label-keycap text-label-keycap text-secondary font-bold">مجاني للمشتركين</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">الدعم المباشر عن بعد (AnyDesk / TeamViewer)</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                فريقنا التقني جاهز للتحكم بجهاز الكاشير الخاص بك عن بعد لحل مشاكل تعريف الطابعات الحرارية، إعداد قارئ الباركود، وضبط الخيارات التقنية فوراً.
              </p>
            </div>
            <div>
              <a
                className="w-full inline-flex items-center justify-center gap-space-sm px-5 py-3.5 rounded-xl bg-primary text-on-primary font-body-lg text-body-lg shadow-[0_2px_4px_rgba(14,26,47,0.08)] hover:bg-primary-container transition-all active:translate-y-0.5"
                href="#quick-ticket"
              >
                <Icon name="screen_share" size={20} />
                <span>طلب جلسة AnyDesk الآن</span>
              </a>
              <span className="block text-center font-label-sm text-label-sm text-on-surface-variant mt-2">زمن الانتظار الوسطي: أقل من 10 دقائق</span>
            </div>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="flex flex-col justify-between bg-surface-container-lowest rounded-2xl p-6 lg:p-8 shadow-[0_2px_12px_rgba(11,28,48,0.04)] hover:shadow-[0_8px_24px_rgba(11,28,48,0.08)] transition-all group relative overflow-hidden">
            <div className="absolute top-0 end-0 px-4 py-1.5 rounded-bl-xl bg-tertiary-fixed text-on-tertiary-fixed font-label-keycap text-label-keycap font-bold">
              الأسرع استجابة
            </div>
            <div>
              <div className="w-14 h-14 rounded-xl bg-tertiary-fixed/30 text-on-tertiary-container flex items-center justify-center mb-6">
                <Icon name="chat" size={30} filled />
              </div>
              <div className="flex items-center gap-space-xs mb-2">
                <span className="px-2 py-0.5 rounded-lg bg-surface-container-high text-on-surface-variant font-label-keycap text-label-keycap">محادثة فورية</span>
                <span className="font-label-keycap text-label-keycap text-on-tertiary-container font-bold">فريق الخبراء</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">محادثة واتساب فورية</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                {SITE.waDescription}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <a
                className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-primary text-on-primary font-body-md text-body-md shadow-[0_2px_4px_rgba(14,26,47,0.08)] hover:bg-primary-container transition-all active:translate-y-0.5"
                href={SITE.wa1}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="flex items-center gap-2">
                  <Icon name="send" size={18} />
                  <span>واتساب (1)</span>
                </div>
                <span className="font-label-keycap text-label-keycap" dir="ltr">{SITE.phone1}</span>
              </a>
              <a
                className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-surface-container-high text-on-surface font-body-md text-body-md hover:bg-surface-container-highest transition-all active:translate-y-0.5"
                href={SITE.wa2}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="flex items-center gap-2">
                  <Icon name="send" size={18} />
                  <span>واتساب (2)</span>
                </div>
                <span className="font-label-keycap text-label-keycap" dir="ltr">{SITE.phone2}</span>
              </a>
            </div>
          </div>

          {/* Card 3: Phone & Field Representatives */}
          <div className="flex flex-col justify-between bg-surface-container-lowest rounded-2xl p-6 lg:p-8 shadow-[0_2px_12px_rgba(11,28,48,0.04)] hover:shadow-[0_8px_24px_rgba(11,28,48,0.08)] transition-all group">
            <div>
              <div className="w-14 h-14 rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center mb-6">
                <Icon name="support_agent" size={30} />
              </div>
              <div className="flex items-center gap-space-xs mb-2">
                <span className="px-2 py-0.5 rounded-lg bg-surface-container-high text-on-surface-variant font-label-keycap text-label-keycap">مكالمة هاتفية</span>
                <span className="font-label-keycap text-label-keycap text-secondary font-bold">تدخل عاجل</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">الاتصال الهاتفي المباشر</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                {SITE.phoneUrgentInfo}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <a
                className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-surface-container-high text-on-surface font-body-md text-body-md hover:bg-surface-container-highest transition-all active:translate-y-0.5"
                href={SITE.tel1}
              >
                <div className="flex items-center gap-2">
                  <Icon name="call" size={18} />
                  <span>اتصال (1)</span>
                </div>
                <span className="font-label-keycap text-label-keycap" dir="ltr">{SITE.phone1}</span>
              </a>
              <a
                className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-surface-container-high text-on-surface font-body-md text-body-md hover:bg-surface-container-highest transition-all active:translate-y-0.5"
                href={SITE.tel2}
              >
                <div className="flex items-center gap-2">
                  <Icon name="call" size={18} />
                  <span>اتصال (2)</span>
                </div>
                <span className="font-label-keycap text-label-keycap" dir="ltr">{SITE.phone2}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Guided Troubleshooting & Setup Guides (Visual Bento) */}
      <div className="w-full bg-surface-container-low/70 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-space-xs px-2.5 py-1 rounded-lg bg-surface-container-high text-on-surface mb-2">
                <Icon name="menu_book" size={16} className="text-secondary" />
                <span className="font-label-sm text-label-sm font-semibold">أدلة تقنية سريعة</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">أدلة التثبيت والإعداد الذاتي</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">اتبع هذه الخطوات البسيطة لربط عتادك وضبط إعدادات المتجر دون انتظار المساعدة التقنية.</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-label-sm text-label-sm text-on-surface-variant">محدثة للإصدار:</span>
              <span className="px-2 py-0.5 rounded-lg bg-surface-container-highest text-on-surface font-label-keycap text-label-keycap">{SITE.name} {SITE.version}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Guide 1: Printers */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_1px_3px_rgba(15,23,42,0.05)] flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
                      <Icon name="print" size={24} />
                    </div>
                    <div>
                      <h3 className="font-title-lg text-title-lg text-on-surface">دليل ربط وتثبيت الطابعات الحرارية (80mm / 58mm)</h3>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Xprinter, Rongta, Epson, Zebra وغيرها</span>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded-lg bg-surface-container text-on-surface font-label-keycap text-label-keycap">4 خطوات</span>
                </div>
                <ol className="space-y-3 mt-4 text-on-surface">
                  <li className="flex items-start gap-3 text-body-md font-body-md">
                    <span className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-label-keycap text-label-keycap shrink-0 mt-0.5">1</span>
                    <span>توصيل كابل USB وتشغيل الطابعة وتثبيت التعريف (Driver) الخاص بها من موقع الشركة المصنعة.</span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md font-body-md">
                    <span className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-label-keycap text-label-keycap shrink-0 mt-0.5">2</span>
                    <span>الدخول لبرنامج AN POS ثم قائمة <strong>الإعدادات</strong> &gt; <strong>الطابعات ومنافذ البيع</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md font-body-md">
                    <span className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-label-keycap text-label-keycap shrink-0 mt-0.5">3</span>
                    <span>اختيار اسم الطابعة وتحديد مقاس الورق (80mm لوصل المحلات أو 58mm الصغير)، وتفعيل فتح درج النقود (Cash Drawer RJ11).</span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md font-body-md">
                    <span className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-label-keycap text-label-keycap shrink-0 mt-0.5">4</span>
                    <span>الضغط على زر <strong>طباعة وصل تجريبي</strong> للتأكد من القص التلقائي وسرعة الطبع.</span>
                  </li>
                </ol>
              </div>
              <div className="mt-6 pt-4 flex items-center justify-between bg-surface-container-low p-3 rounded-xl">
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <Icon name="verified" size={18} />
                  <span className="font-label-sm text-label-sm">يدعم بروتوكول ESC/POS القياسي المباشر</span>
                </div>
                <a
                  className="font-body-md text-body-md text-secondary hover:underline font-semibold"
                  href={`https://wa.me/${WA_NUMBER_1}?text=${encodeURIComponent('أحتاج مساعدة في تعريف الطابعة')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  طلب ملف Driver
                </a>
              </div>
            </div>

            {/* Guide 2: 7-day Activation */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_1px_3px_rgba(15,23,42,0.05)] flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
                      <Icon name="key" size={24} />
                    </div>
                    <div>
                      <h3 className="font-title-lg text-title-lg text-on-surface">دليل تفعيل النسخة الدائمة بعد الـ 7 أيام</h3>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">الاحتفاظ بجميع بياناتك بدون مسح أو انقطاع</span>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded-lg bg-surface-container text-on-surface font-label-keycap text-label-keycap">فوري</span>
                </div>
                <ol className="space-y-3 mt-4 text-on-surface">
                  <li className="flex items-start gap-3 text-body-md font-body-md">
                    <span className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-label-keycap text-label-keycap shrink-0 mt-0.5">1</span>
                    <span>فتح شاشة <strong>حول البرنامج / التفعيل</strong> ونسخ <strong>معرّف الجهاز الفريد (Machine ID)</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md font-body-md">
                    <span className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-label-keycap text-label-keycap shrink-0 mt-0.5">2</span>
                    <span>تسديد المستحقات (15,000 دج لمرة واحدة) عبر BaridiMob أو حساب CCP أو الدفع نقداً.</span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md font-body-md">
                    <span className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-label-keycap text-label-keycap shrink-0 mt-0.5">3</span>
                    <span>إرسال لقطة الشاشة أو صورة الوصل مع معرّف الجهاز إلى رقم واتساب الرسمي الخاص بنا.</span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md font-body-md">
                    <span className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-label-keycap text-label-keycap shrink-0 mt-0.5">4</span>
                    <span>لصق كود الترخيص والضغط على <strong>تفعيل دائم مدى الحياة</strong> لتستمر مباشرة.</span>
                  </li>
                </ol>
              </div>
              <div className="mt-6 pt-4 flex items-center justify-between bg-surface-container-low p-3 rounded-xl">
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <Icon name="lock_reset" size={18} />
                  <span className="font-label-sm text-label-sm">البيانات والمعاملات السابقة لا تحذف أبداً</span>
                </div>
                <span className="font-label-keycap text-label-keycap text-on-tertiary-container font-bold">تفعيل خلال 5 دقائق</span>
              </div>
            </div>

            {/* Guide 3: Excel Import */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_1px_3px_rgba(15,23,42,0.05)] flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
                      <Icon name="table_view" size={24} />
                    </div>
                    <div>
                      <h3 className="font-title-lg text-title-lg text-on-surface">دليل استيراد السلع وقوائم الأسعار من ملف Excel</h3>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">إدخال آلاف الأصناف والباركود في ثوانٍ</span>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded-lg bg-surface-container text-on-surface font-label-keycap text-label-keycap">أتمتة</span>
                </div>
                <ol className="space-y-3 mt-4 text-on-surface">
                  <li className="flex items-start gap-3 text-body-md font-body-md">
                    <span className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-label-keycap text-label-keycap shrink-0 mt-0.5">1</span>
                    <span>تحميل النموذج المعتمد بصيغة (.xlsx أو .csv) من قائمة <strong>المخزون</strong> &gt; <strong>استيراد منتجات</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md font-body-md">
                    <span className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-label-keycap text-label-keycap shrink-0 mt-0.5">2</span>
                    <span>ملء أعمدة: اسم المنتج، الباركود الدولي أو الداخلي، سعر الشراء، وسعر البيع (بالتجزئة والجملة).</span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md font-body-md">
                    <span className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-label-keycap text-label-keycap shrink-0 mt-0.5">3</span>
                    <span>رفع الملف ومراجعة مطابقة الحقول ثم الضغط على <strong>بدء المعالجة السريعة</strong>.</span>
                  </li>
                </ol>
              </div>
              <div className="mt-6 pt-4 flex items-center justify-between bg-surface-container-low p-3 rounded-xl">
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <Icon name="bolt" size={18} />
                  <span className="font-label-sm text-label-sm">معالجة حتى 25,000 منتج في أقل من 15 ثانية</span>
                </div>
                <button
                  type="button"
                  className="font-body-md text-body-md text-secondary hover:underline font-semibold"
                  onClick={() => alert('تم تجهيز قالب الإكسل التجريبي للتحميل')}
                >
                  تحميل النموذج
                </button>
              </div>
            </div>

            {/* Guide 4: Backup & Migration */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_1px_3px_rgba(15,23,42,0.05)] flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface">
                      <Icon name="sync_saved_locally" size={24} />
                    </div>
                    <div>
                      <h3 className="font-title-lg text-title-lg text-on-surface">دليل النسخ الاحتياطي ونقل البيانات لجهاز جديد</h3>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">حماية رأس مالك التجاري من تلف الأقراص الصلبة</span>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded-lg bg-surface-container text-on-surface font-label-keycap text-label-keycap">أمان 100%</span>
                </div>
                <ol className="space-y-3 mt-4 text-on-surface">
                  <li className="flex items-start gap-3 text-body-md font-body-md">
                    <span className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-label-keycap text-label-keycap shrink-0 mt-0.5">1</span>
                    <span>من شاشة الإغلاق اليومي أو قائمة الأمان، اضغط على <strong>أخذ نسخة احتياطية فورية (.bak)</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md font-body-md">
                    <span className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-label-keycap text-label-keycap shrink-0 mt-0.5">2</span>
                    <span>اختر مسار الحفظ على قرص فلاش خارجي (USB Flash Disk) أو خدمة سحابية مفضلة.</span>
                  </li>
                  <li className="flex items-start gap-3 text-body-md font-body-md">
                    <span className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-label-keycap text-label-keycap shrink-0 mt-0.5">3</span>
                    <span>عند الانتقال لكمبيوتر جديد: ثبّت AN POS ثم اختر <strong>استعادة نسخة احتياطية سابقة</strong>.</span>
                  </li>
                </ol>
              </div>
              <div className="mt-6 pt-4 flex items-center justify-between bg-surface-container-low p-3 rounded-xl">
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <Icon name="verified_user" size={18} />
                  <span className="font-label-sm text-label-sm">النسخ مشفر ومحمي بكلمة سر المدير</span>
                </div>
                <span className="font-label-keycap text-label-keycap text-on-surface-variant">نسخ تلقائي مجدول يومياً</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed FAQ Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-space-xs px-2.5 py-1 rounded-lg bg-surface-container text-on-surface mb-2">
            <Icon name="help" size={16} className="text-secondary" />
            <span className="font-label-sm text-label-sm font-semibold">قاعدة المعرفة</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">الأسئلة الشائعة والأكثر تكراراً</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">كل ما تحتاج معرفته عن التراخيص، الأجهزة المدعومة، طرق الدفع والخدمات بعد الشراء.</p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-8 overflow-x-auto pb-2">
          <button
            type="button"
            className={`faq-tab px-4 py-2 rounded-xl font-body-md text-body-md transition-all ${
              activeCategory === 'all'
                ? 'bg-primary text-on-primary font-semibold'
                : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
            }`}
            onClick={() => setActiveCategory('all')}
          >
            جميع الأسئلة
          </button>
          <button
            type="button"
            className={`faq-tab px-4 py-2 rounded-xl font-body-md text-body-md transition-all ${
              activeCategory === 'pricing'
                ? 'bg-primary text-on-primary font-semibold'
                : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
            }`}
            onClick={() => setActiveCategory('pricing')}
          >
            التسعير والتفعيل و BaridiMob
          </button>
          <button
            type="button"
            className={`faq-tab px-4 py-2 rounded-xl font-body-md text-body-md transition-all ${
              activeCategory === 'hardware'
                ? 'bg-primary text-on-primary font-semibold'
                : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
            }`}
            onClick={() => setActiveCategory('hardware')}
          >
            الأجهزة والعتاد والإنترنت
          </button>
          <button
            type="button"
            className={`faq-tab px-4 py-2 rounded-xl font-body-md text-body-md transition-all ${
              activeCategory === 'data'
                ? 'bg-primary text-on-primary font-semibold'
                : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
            }`}
            onClick={() => setActiveCategory('data')}
          >
            البيانات والنسخ والضمان
          </button>
        </div>

        {/* FAQ Accordion Container */}
        <div className="max-w-4xl mx-auto space-y-4" id="faqList">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center text-on-surface-variant bg-surface-container-lowest rounded-xl">
              لم يتم العثور على أي سؤال مطابق لـ "{searchQuery}"
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaq === faq.id
              return (
                <div
                  key={faq.id}
                  className="faq-item bg-surface-container-lowest rounded-xl p-5 shadow-[0_1px_3px_rgba(15,23,42,0.05)] transition-all cursor-pointer"
                  onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Icon name={faq.icon} size={22} className="text-secondary" />
                      <h3 className="font-title-lg text-title-lg text-on-surface font-semibold">{faq.question}</h3>
                    </div>
                    <Icon
                      name="expand_more"
                      size={20}
                      className={`text-on-surface-variant transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </div>
                  {isOpen && (
                    <div className="faq-answer mt-4 pt-3 text-on-surface-variant font-body-md text-body-md leading-relaxed border-t border-surface-container-low">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })
          )}
        </div>
      </div>

      {/* Direct Support Ticket & Quick Help Form */}
      <div className="w-full bg-surface-container-low py-16" id="quick-ticket">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="bg-surface-container-lowest rounded-2xl p-8 lg:p-10 shadow-[0_4px_20px_rgba(11,28,48,0.06)]">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <div className="flex items-center gap-3">
                <Icon name="confirmation_number" size={26} className="text-secondary" />
                <span className="font-label-sm text-label-sm text-secondary font-bold">{SITE.ticketTitle}</span>
              </div>
              <a
                href={`mailto:${SITE.email}?subject=${encodeURIComponent('تذكرة مساعدة داخلية - برنامج AN POS')}`}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors"
                dir="ltr"
              >
                <Icon name="mail" size={16} />
                <span>{SITE.email}</span>
              </a>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">تذكرة مساعدة ومتابعة المشاكل البرمجية</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">{SITE.ticketDescription}</p>

            <form className="space-y-6" id="supportForm" onSubmit={handleSupportSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Store / Business Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm text-label-sm text-on-surface font-semibold" htmlFor="storeName">اسم المحل أو النشاط التجاري *</label>
                  <input
                    className="px-4 py-3 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline focus:bg-surface-container-lowest focus:outline-none transition-all"
                    id="storeName"
                    placeholder="مثال: سوبرماركت البركة، صيدلية النور..."
                    required
                    type="text"
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                  />
                </div>
                {/* Phone / WhatsApp */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm text-label-sm text-on-surface font-semibold" htmlFor="phoneNum">رقم الهاتف (للتواصل عبر واتساب) *</label>
                  <input
                    className="px-4 py-3 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline focus:bg-surface-container-lowest focus:outline-none transition-all text-right"
                    dir="ltr"
                    id="phoneNum"
                    placeholder="0660 00 00 00"
                    required
                    type="tel"
                    value={phoneNum}
                    onChange={(e) => setPhoneNum(e.target.value)}
                  />
                </div>
                {/* Wilaya */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm text-label-sm text-on-surface font-semibold" htmlFor="wilaya">الولاية (58 ولاية) *</label>
                  <select
                    className="px-4 py-3 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none transition-all"
                    id="wilaya"
                    required
                    value={wilaya}
                    onChange={(e) => setWilaya(e.target.value)}
                  >
                    <option disabled value="">اختر ولايتك</option>
                    <option value="16 - الجزائر العاصمة">16 - الجزائر العاصمة</option>
                    <option value="31 - وهران">31 - وهران</option>
                    <option value="25 - قسنطينة">25 - قسنطينة</option>
                    <option value="19 - سطيف">19 - سطيف</option>
                    <option value="06 - بجاية">06 - بجاية</option>
                    <option value="09 - البليدة">09 - البليدة</option>
                    <option value="35 - بومرداس">35 - بومرداس</option>
                    <option value="15 - تيزي وزو">15 - تيزي وزو</option>
                    <option value="13 - تلمسان">13 - تلمسان</option>
                    <option value="05 - باتنة">05 - باتنة</option>
                    <option value="07 - بسكرة">07 - بسكرة</option>
                    <option value="30 - ورقلة">30 - ورقلة</option>
                    <option value="47 - غرداية">47 - غرداية</option>
                    <option value="أخرى">ولاية أخرى من الـ 58 ولاية</option>
                  </select>
                </div>
                {/* Issue Type */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm text-label-sm text-on-surface font-semibold" htmlFor="issueType">نوع الطلب أو المشكلة *</label>
                  <select
                    className="px-4 py-3 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none transition-all"
                    id="issueType"
                    required
                    value={issueType}
                    onChange={(e) => setIssueType(e.target.value)}
                  >
                    <option value="تفعيل الترخيص الدائم">تفعيل الترخيص الدائم (إرسال الوصل)</option>
                    <option value="ضبط وتعريف طابعة حرارية">ضبط وتعريف طابعة حرارية أو باركود</option>
                    <option value="نقل البرنامج لجهاز كمبيوتر جديد">نقل البرنامج لجهاز كمبيوتر جديد</option>
                    <option value="مساعدة في استيراد ملف Excel">مساعدة في استيراد ملف Excel الأصناف</option>
                    <option value="طلب تدريب أو زيارة ميدانية">طلب تدريب أو زيارة تقنية لمحل</option>
                    <option value="استفسار عام آخر">استفسار عام آخر</option>
                  </select>
                </div>
              </div>

              {/* AnyDesk ID Optional */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label className="font-label-sm text-label-sm text-on-surface font-semibold" htmlFor="anydeskId">رقم AnyDesk للتحكم عن بعد (اختياري للإسراع)</label>
                  <span className="font-label-keycap text-label-keycap text-on-surface-variant">تسريع الحل</span>
                </div>
                <input
                  className="px-4 py-3 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline focus:bg-surface-container-lowest focus:outline-none transition-all text-right"
                  dir="ltr"
                  id="anydeskId"
                  placeholder="مثال: 123 456 789"
                  type="text"
                  value={anydeskId}
                  onChange={(e) => setAnydeskId(e.target.value)}
                />
              </div>

              {/* Issue details */}
              <div className="flex flex-col gap-1.5">
                <label className="font-label-sm text-label-sm text-on-surface font-semibold" htmlFor="issueDesc">تفاصيل إضافية عن المشكلة (اختياري)</label>
                <textarea
                  className="px-4 py-3 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline focus:bg-surface-container-lowest focus:outline-none transition-all resize-none"
                  id="issueDesc"
                  placeholder="اكتب نوع جهاز الطابعة، أو رسالة الخطأ التي ظهرت لك..."
                  rows={3}
                  value={issueDesc}
                  onChange={(e) => setIssueDesc(e.target.value)}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm px-8 py-3.5 rounded-xl bg-primary text-on-primary font-body-lg text-body-lg shadow-[0_2px_4px_rgba(14,26,47,0.08)] hover:bg-primary-container transition-all active:translate-y-0.5"
                  type="submit"
                >
                  <Icon name="send" size={20} />
                  <span>إرسال طلب الدعم الفوري عبر واتساب</span>
                </button>
                <div className="flex items-center gap-2 text-on-tertiary-container font-label-sm text-label-sm">
                  <Icon name="verified" size={18} />
                  <span>متاح طاقم دعم فني متخصص للرد الفوري</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Trust & Warranty Guarantee Banner */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-12">
        <div className="rounded-2xl bg-primary text-on-primary p-8 lg:p-12 relative overflow-hidden shadow-lg">
          <div className="absolute -end-16 -top-16 w-64 h-64 rounded-full bg-secondary-container/20 blur-2xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-surface-container-lowest/10 backdrop-blur-sm flex items-center justify-center text-tertiary-fixed shrink-0">
                <Icon name="workspace_premium" size={32} />
              </div>
              <div>
                <span className="px-2 py-0.5 rounded-lg bg-surface-container-lowest/20 text-on-primary font-label-keycap text-label-keycap">التزام AN POS الرسمي</span>
                <h3 className="font-headline-md text-headline-md text-on-primary mt-2">دعم فني مستمر ومجاني بعد الشراء مدى الحياة</h3>
                <p className="font-body-md text-body-md text-on-primary-container mt-1 max-w-2xl">
                  شراء الترخيص ليس مجرد برنامج، بل شراكة دائمة لضمان سير أعمال محلك دون أي توقف أو أخطاء محاسبية. نحن معكم خطوة بخطوة في كامل الـ 58 ولاية.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <a
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-lg text-body-lg font-bold hover:bg-surface-container-low transition-all"
                href={`https://wa.me/${WA_NUMBER_1}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="support" size={20} className="text-on-tertiary-container" />
                <span>تحدث مع تقني الآن</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
