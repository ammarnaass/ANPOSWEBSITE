import { Link } from 'react-router-dom'
import { WA_ACTIVATE } from '../lib/site'

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Top Hero Section with Tactical Split and Elevated Mockup */}
      <section className="relative overflow-hidden pt-space-xl pb-space-xl px-6 lg:px-12 bg-surface">
        {/* Ambient Glow / Backdrop Depth */}
        <div className="absolute -top-32 -start-32 w-96 h-96 bg-secondary-fixed/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -end-32 w-[32rem] h-[32rem] bg-tertiary-fixed/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center relative z-10">
          {/* Content Column (RTL Right side) */}
          <div className="lg:col-span-6 flex flex-col items-start text-start">
            {/* Status Tag */}
            <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container mb-space-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse" />
              <span className="font-label-sm text-label-sm text-on-surface">
                إصدار الجزائر 2025 • معتمد ومطابق للمعايير الجبائية
              </span>
              <span className="font-label-keycap text-label-keycap bg-surface-container-lowest px-1.5 py-0.5 rounded text-secondary font-bold">
                DZ-POS
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display-total text-display-total tracking-tight text-on-surface mb-space-md">
              نظّم مبيعات متجرك ومخزونك <br className="hidden sm:inline" />
              <span className="text-secondary inline-block">من جهاز واحد أو عدة أجهزة</span>
            </h1>

            {/* Subtitle */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-space-lg leading-relaxed">
              نظام كاشير ونقاط بيع متكامل لسطح المكتب والهاتف. صُمم خصيصاً للمحلات والمتاجر الجزائرية لسرعة البيع الفائقة، إدارة المخزون اللحظية، ودعم الطابعات الحرارية والمعايير الجبائية المحلية.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-space-md w-full sm:w-auto mb-space-lg">
              <Link
                to="/downloads"
                className="w-full sm:w-auto flex items-center justify-center gap-space-sm px-space-xl py-space-md bg-secondary hover:bg-secondary-container text-on-secondary rounded-xl font-headline-md text-title-lg transition-all shadow-md active:translate-y-0.5 group"
              >
                <span className="material-symbols-outlined text-[24px]">download</span>
                <span>حمّل التطبيق – جرّبه 7 أيام مجاناً</span>
                <span className="font-label-keycap text-label-keycap bg-on-secondary/20 px-space-xs py-0.5 rounded">
                  F12
                </span>
              </Link>
              <a
                href="#features"
                className="w-full sm:w-auto flex items-center justify-center gap-space-xs px-space-lg py-space-md bg-surface-container hover:bg-surface-container-high text-on-surface rounded-xl font-body-lg text-body-lg transition-colors"
              >
                <span className="material-symbols-outlined text-[20px] text-secondary">visibility</span>
                <span>شاهد المميزات الكاملة</span>
              </a>
            </div>

            {/* Quick Spec Stats */}
            <div className="grid grid-cols-3 gap-space-md w-full max-w-lg pt-space-md">
              <div className="p-space-sm rounded-lg bg-surface-container-low">
                <div className="font-headline-md text-headline-md text-on-surface font-bold">0.1 ثانية</div>
                <div className="font-label-sm text-label-sm text-on-surface-variant">زمن قراءة وطباعة الباركود</div>
              </div>
              <div className="p-space-sm rounded-lg bg-surface-container-low">
                <div className="font-headline-md text-headline-md text-secondary font-bold">100% أوفلاين</div>
                <div className="font-label-sm text-label-sm text-on-surface-variant">عمل متواصل بلا انقطاع</div>
              </div>
              <div className="p-space-sm rounded-lg bg-surface-container-low">
                <div className="font-headline-md text-headline-md text-on-tertiary-container font-bold">58 ولاية</div>
                <div className="font-label-sm text-label-sm text-on-surface-variant">تغطية ودعم فني معتمد</div>
              </div>
            </div>
          </div>

          {/* Device Showcase / Mockups (Interactive Styled POS Terminal UI) */}
          <div className="lg:col-span-6 relative mt-space-lg lg:mt-0">
            {/* Background subtle frame glow */}
            <div className="relative w-full rounded-2xl bg-surface-container-lowest p-space-sm shadow-xl">
              {/* Mockup Window Chrome */}
              <div className="flex items-center justify-between px-space-sm py-space-xs bg-surface-container-low rounded-t-xl mb-space-xs" dir="ltr">
                <div className="flex items-center gap-space-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-error" />
                  <span className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
                  <span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed" />
                  <span className="font-label-keycap text-label-keycap text-on-surface-variant ms-space-xs" dir="rtl">
                    AN POS v2.4 • نظام كاشير نقطة بيع مباشر
                  </span>
                </div>
                <div className="flex items-center gap-space-xs" dir="rtl">
                  <span className="inline-flex items-center gap-1 font-label-keycap text-label-keycap bg-surface-container px-2 py-0.5 rounded text-on-surface">
                    <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container animate-ping" />
                    ماسح الباركود متصل
                  </span>
                  <span className="font-label-keycap text-label-keycap bg-secondary-fixed text-on-secondary-fixed px-1.5 py-0.5 rounded">
                    جلسة #01
                  </span>
                </div>
              </div>

              {/* Screen Workspace Mirroring Screenshot Layout */}
              <div className="bg-surface-bright rounded-b-xl p-space-sm grid grid-cols-12 gap-space-xs">
                {/* Left Panel: Summary & Metrics */}
                <div className="col-span-8 flex flex-col gap-space-xs">
                  {/* Quick Stats Strip */}
                  <div className="grid grid-cols-3 gap-space-xs">
                    <div className="p-space-xs rounded bg-surface-container-lowest shadow-sm flex flex-col">
                      <div className="flex items-center justify-between">
                        <span className="font-label-keycap text-label-keycap text-on-surface-variant">المخزون الكلي</span>
                        <span className="material-symbols-outlined text-[16px] text-secondary">inventory_2</span>
                      </div>
                      <span className="font-headline-md text-headline-md text-on-surface">
                        16 <span className="font-label-sm text-label-sm text-on-surface-variant">صنف</span>
                      </span>
                      <span className="font-label-keycap text-label-keycap text-on-tertiary-container">النشطة: 16 صنف</span>
                    </div>

                    <div className="p-space-xs rounded bg-surface-container-lowest shadow-sm flex flex-col">
                      <div className="flex items-center justify-between">
                        <span className="font-label-keycap text-label-keycap text-on-surface-variant">مخزون منخفض</span>
                        <span className="material-symbols-outlined text-[16px] text-error">warning</span>
                      </div>
                      <span className="font-headline-md text-headline-md text-error">
                        2 <span className="font-label-sm text-label-sm text-on-surface-variant">أصناف</span>
                      </span>
                      <span className="font-label-keycap text-label-keycap text-error">تحت حد الأمان</span>
                    </div>

                    <div className="p-space-xs rounded bg-surface-container-lowest shadow-sm flex flex-col">
                      <div className="flex items-center justify-between">
                        <span className="font-label-keycap text-label-keycap text-on-surface-variant">القيمة الإجمالية</span>
                        <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">trending_up</span>
                      </div>
                      <span className="font-title-lg text-title-lg text-on-surface">
                        418.047 <span className="font-label-keycap text-label-keycap">دج</span>
                      </span>
                      <span className="font-label-keycap text-label-keycap text-on-tertiary-container">هامش ربح متوقع +59%</span>
                    </div>
                  </div>

                  {/* POS Search and Shortcut Actions */}
                  <div className="bg-surface-container-lowest p-space-xs rounded shadow-sm flex items-center gap-space-xs">
                    <div className="flex-1 flex items-center bg-surface-container-low px-space-xs py-1 rounded text-on-surface-variant">
                      <span className="material-symbols-outlined text-[16px] me-1">search</span>
                      <span className="font-label-sm text-label-sm">ابحث بالاسم، الباركود أو رقم SKU...</span>
                    </div>
                    <button type="button" className="bg-secondary text-on-secondary px-space-xs py-1 rounded font-label-keycap text-label-keycap flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">add</span> صنف جديد
                    </button>
                  </div>

                  {/* Product Grid Demo Tiles */}
                  <div className="grid grid-cols-3 gap-space-xs">
                    <div className="p-space-xs bg-surface-container-lowest rounded shadow-sm">
                      <span className="font-label-keycap text-label-keycap bg-surface-container-high px-1 py-0.5 rounded text-secondary font-bold">
                        عبوة ×24
                      </span>
                      <div className="font-body-md text-body-md text-on-surface font-semibold truncate mt-1">كرتونة أرز بسمتي 1 كغ</div>
                      <div className="flex items-center justify-between mt-1">
                        <span className="font-title-lg text-title-lg text-on-surface font-bold">
                          960,00 <span className="font-label-keycap text-label-keycap text-on-surface-variant">دج</span>
                        </span>
                        <span className="material-symbols-outlined text-[18px] text-secondary">add_circle</span>
                      </div>
                    </div>

                    <div className="p-space-xs bg-surface-container-lowest rounded shadow-sm">
                      <span className="font-label-keycap text-label-keycap bg-surface-container-high px-1 py-0.5 rounded text-secondary font-bold">
                        عبوة ×6
                      </span>
                      <div className="font-body-md text-body-md text-on-surface font-semibold truncate mt-1">حليب معقم 1 لتر</div>
                      <div className="flex items-center justify-between mt-1">
                        <span className="font-title-lg text-title-lg text-on-surface font-bold">
                          600,00 <span className="font-label-keycap text-label-keycap text-on-surface-variant">دج</span>
                        </span>
                        <span className="material-symbols-outlined text-[18px] text-secondary">add_circle</span>
                      </div>
                    </div>

                    <div className="p-space-xs bg-surface-container-lowest rounded shadow-sm">
                      <span className="font-label-keycap text-label-keycap bg-surface-container-high px-1 py-0.5 rounded text-secondary font-bold">
                        عبوة ×8
                      </span>
                      <div className="font-body-md text-body-md text-on-surface font-semibold truncate mt-1">كرتونة شاحن سريع 25W</div>
                      <div className="flex items-center justify-between mt-1">
                        <span className="font-title-lg text-title-lg text-on-surface font-bold">
                          2.000,00 <span className="font-label-keycap text-label-keycap text-on-surface-variant">دج</span>
                        </span>
                        <span className="material-symbols-outlined text-[18px] text-secondary">add_circle</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Panel: Cart & Tender Box */}
                <div className="col-span-4 bg-surface-container-low p-space-xs rounded flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-outline-variant/30 pb-1 mb-1">
                      <span className="font-body-md text-body-md font-bold text-on-surface">سلة الفاتورة #142</span>
                      <span className="font-label-keycap text-label-keycap bg-surface-container px-1 py-0.5 rounded text-on-surface">
                        3 أصناف
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="bg-surface-container-lowest p-1 rounded text-start flex items-center justify-between text-on-surface">
                        <span className="font-label-sm text-label-sm truncate max-w-[90px]">كرتونة أرز بسمتي</span>
                        <span className="font-label-sm text-label-sm font-bold">960 دج</span>
                      </div>
                      <div className="bg-surface-container-lowest p-1 rounded text-start flex items-center justify-between text-on-surface">
                        <span className="font-label-sm text-label-sm truncate max-w-[90px]">حليب معقم 1 لتر</span>
                        <span className="font-label-sm text-label-sm font-bold">600 دج</span>
                      </div>
                      <div className="bg-surface-container-lowest p-1 rounded text-start flex items-center justify-between text-on-surface">
                        <span className="font-label-sm text-label-sm truncate max-w-[90px]">شاحن سريع 25W</span>
                        <span className="font-label-sm text-label-sm font-bold">2.000 دج</span>
                      </div>
                    </div>
                  </div>

                  {/* Grand Total Callout Box Inside Terminal */}
                  <div className="bg-primary-container text-on-primary p-space-xs rounded mt-2">
                    <div className="flex items-center justify-between font-label-keycap text-label-keycap text-on-primary-container">
                      <span>المجموع الصافي:</span>
                      <span>شامل الرسم الجبائي</span>
                    </div>
                    <div className="font-headline-md text-headline-md font-bold text-tertiary-fixed text-end">
                      3.560,00 <span className="font-label-sm text-label-sm text-on-primary">دج</span>
                    </div>
                    <div className="grid grid-cols-2 gap-1 mt-1">
                      <button type="button" className="bg-secondary text-on-secondary py-1 rounded font-label-keycap text-label-keycap font-bold flex items-center justify-center gap-1">
                        <span className="material-symbols-outlined text-[12px]">print</span> طبع وصل
                      </button>
                      <button type="button" className="bg-on-tertiary-container text-on-primary py-1 rounded font-label-keycap text-label-keycap font-bold flex items-center justify-center gap-1">
                        <span className="material-symbols-outlined text-[12px]">payments</span> تسديد (F12)
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping Smartphone Mobile App Companion Mockup */}
            <div className="hidden sm:flex flex-col absolute -bottom-6 -start-6 w-48 rounded-2xl bg-primary-container text-on-primary p-2 shadow-2xl z-20">
              <div className="flex items-center justify-between px-1 mb-1">
                <span className="font-label-keycap text-label-keycap text-tertiary-fixed font-bold">AN POS Mobile</span>
                <span className="material-symbols-outlined text-[14px] text-tertiary-fixed">signal_cellular_alt</span>
              </div>
              <div className="bg-surface-bright rounded-xl p-2 text-on-surface">
                <div className="font-label-keycap text-label-keycap text-on-surface-variant mb-0.5">مبيعات اليوم الآنية</div>
                <div className="font-title-lg text-title-lg text-secondary font-bold">
                  64.500 <span className="font-label-keycap text-label-keycap text-on-surface-variant">دج</span>
                </div>
                <div className="mt-2 pt-2 border-t border-outline-variant/30 flex items-center justify-between text-start">
                  <span className="font-label-keycap text-label-keycap font-semibold text-on-surface">مسح باركود حراري</span>
                  <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">qr_code_scanner</span>
                </div>
                <div className="mt-1 bg-surface-container-high p-1 rounded font-label-keycap text-label-keycap text-center text-on-surface">
                  جرد المخزن عبر الهاتف مفعّل
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Bar (Full Width Card) */}
      <section className="w-full bg-surface-container-low py-space-lg px-6 lg:px-12 shadow-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          <div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-lowest shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
              <span className="material-symbols-outlined text-[28px]">verified_user</span>
            </div>
            <div>
              <div className="font-title-lg text-title-lg text-on-surface font-bold">تجربة مجانية كاملة 7 أيام</div>
              <div className="font-body-md text-body-md text-on-surface-variant">
                تفعيل فوري تلقائي بدون بطاقة بنكية وبلا شروط مسبقة.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-lowest shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-on-tertiary-container/10 flex items-center justify-center text-on-tertiary-container shrink-0">
              <span className="material-symbols-outlined text-[28px]">print_connect</span>
            </div>
            <div>
              <div className="font-title-lg text-title-lg text-on-surface font-bold">توافق شامل مع الطابعات</div>
              <div className="font-body-md text-body-md text-on-surface-variant">
                يدعم طابعات الإيصالات الحرارية USB، Bluetooth، والشبكية 80/58mm.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-lowest shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center text-on-surface shrink-0">
              <span className="material-symbols-outlined text-[28px]">wifi_off</span>
            </div>
            <div>
              <div className="font-title-lg text-title-lg text-on-surface font-bold">يعمل 100% بدون إنترنت</div>
              <div className="font-body-md text-body-md text-on-surface-variant">
                بياناتك محفوظة محلياً بالكامل ومحمية مع إمكانية المزامنة السحابية.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Features Overview (Bento Grid) */}
      <section className="py-space-xl px-6 lg:px-12 bg-surface" id="features">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-space-xl max-w-2xl mx-auto">
            <span className="font-label-keycap text-label-keycap px-space-sm py-space-xs rounded bg-surface-container text-secondary uppercase font-bold mb-space-xs">
              حلول متطورة لمتاجر الجزائر
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mb-space-sm">
              كل ما يحتاجه نشاطك التجاري في واجهة واحدة فائقة السرعة
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              تمت هندسة AN POS ليلغي طوابير الانتظار، يضمن دقة الصندوق بالدينار، ويمنحك السيطرة المطلقة على حركة المخزن والأسعار.
            </p>
          </div>

          {/* Bento Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            {/* Card 1: POS Checkout Speed */}
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary mb-space-md">
                  <span className="material-symbols-outlined text-[26px]">flash_on</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface font-bold mb-space-xs">
                  نقطة بيع فائقة السرعة والكفاءة
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                  واجهة تفاعلية مصممة لشاشات اللمس وقارئات الباركود. أزرار مخصصة للمفضلة والعبوات والكراتين السريعة، واختصارات كيبورد عملية (F1 إلى F12) تسرع تدفق الكاشير في أوقات الذروة.
                </p>
              </div>
              <div className="pt-space-sm border-t border-outline-variant/30 flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-secondary font-bold">دعم البيع بالقطعة أو الكرتونة</span>
                <span className="font-label-keycap text-label-keycap bg-surface-container px-2 py-0.5 rounded text-on-surface">
                  وضع التجزئة والجملة
                </span>
              </div>
            </div>

            {/* Card 2: Inventory & Stock Management */}
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary mb-space-md">
                  <span className="material-symbols-outlined text-[26px]">shelves</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface font-bold mb-space-xs">
                  إدارة مخزون لحظية وتنبيه النواقص
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                  تحديث تلقائي وفوري للكميات عند كل عملية بيع أو إرجاع. تنبيهات ذكية عند الوصول لحد الأمان، وإمكانية استيراد وتصدير بطاقات المواد بملفات Excel بنقرة زر واحدة.
                </p>
              </div>
              <div className="pt-space-sm border-t border-outline-variant/30 flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-error font-bold">حساب تلقائي لمتوسط تكلفة الشراء</span>
                <span className="font-label-keycap text-label-keycap bg-error-container text-on-error-container px-2 py-0.5 rounded">
                  تنبيه حد الأمان
                </span>
              </div>
            </div>

            {/* Card 3: Invoicing & Receipts */}
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary mb-space-md">
                  <span className="material-symbols-outlined text-[26px]">receipt_long</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface font-bold mb-space-xs">
                  فوترة وطباعة حرارية مخصصة
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                  طباعة فورية للوصولات الحرارية (80mm و 58mm) مع شعار متجرك ورمز QR Code، بالإضافة إلى فواتير المقاس الكامل A4 / A5 للمؤسسات وحسابات الموردين.
                </p>
              </div>
              <div className="pt-space-sm border-t border-outline-variant/30 flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">تخصيص كامل لمعلومات الترويسة</span>
                <span className="font-label-keycap text-label-keycap bg-surface-container px-2 py-0.5 rounded text-on-surface">
                  ESC/POS
                </span>
              </div>
            </div>

            {/* Card 4: Fiscal Compliance Algeria */}
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary mb-space-md">
                  <span className="material-symbols-outlined text-[26px]">account_balance</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface font-bold mb-space-xs">
                  امتثال للمعايير الجبائية والمحاسبية
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                  دعم كامل للمعلومات القانونية الجزائرية: رقم التعريف الجبائي (NIF)، السجل التجاري (RC)، رقم التعريف الإحصائي (NIS)، وإدارة نسب الرسم على القيمة المضافة (TVA).
                </p>
              </div>
              <div className="pt-space-sm border-t border-outline-variant/30 flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">فواتير نظامية معتمدة</span>
                <span className="font-label-keycap text-label-keycap bg-surface-container px-2 py-0.5 rounded text-secondary font-bold">
                  قانون المالية DZ
                </span>
              </div>
            </div>

            {/* Card 5: Real-time Reports & Margins */}
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary mb-space-md">
                  <span className="material-symbols-outlined text-[26px]">analytics</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface font-bold mb-space-xs">
                  تقارير أرباح وخزينة تفصيلية
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                  لوحة تحكم إحصائية تعرض هامش الربح الصافي، المداخيل اليومية والشهرية، تقرير إغلاق الصندوق، وجدول الأكثر مبيعاً لتحديد المنتجات الأعلى عائداً بدقة.
                </p>
              </div>
              <div className="pt-space-sm border-t border-outline-variant/30 flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-tertiary-container font-bold">حساب هوامش الربح الحقيقية</span>
                <span className="font-label-keycap text-label-keycap bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded font-bold">
                  تقارير Z &amp; X
                </span>
              </div>
            </div>

            {/* Card 6: Backup & Cloud Sync */}
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary mb-space-md">
                  <span className="material-symbols-outlined text-[26px]">cloud_sync</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface font-bold mb-space-xs">
                  نسخ احتياطي محلي وسحابي آمن
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                  احمِ سجل مبيعاتك وحسابات الزبائن والموردين بآلية نسخ احتياطي تلقائي مشفرة تُحفظ على قرصك الصلب أو سحابياً لمنع أي فقدان مفاجئ للبيانات.
                </p>
              </div>
              <div className="pt-space-sm border-t border-outline-variant/30 flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">تشفير كامل لقواعد البيانات</span>
                <span className="font-label-keycap text-label-keycap bg-surface-container px-2 py-0.5 rounded text-on-surface">
                  استعادة سريعة
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Desktop vs Mobile Comparison Section */}
      <section className="py-space-xl px-6 lg:px-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-space-xl max-w-xl mx-auto">
            <span className="font-label-keycap text-label-keycap px-space-sm py-space-xs rounded bg-surface-container text-secondary uppercase font-bold mb-space-xs">
              مرونة تشغيل لا متناهية
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mb-space-sm">
              سطح المكتب أم الهاتف الذكي؟
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              يعمل البرنامج بتناغم بين محطات الكاشير الثابتة وأجهزة الهواتف الذكية لمراقبة نشاطك أينما كنت.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
            {/* Desktop Platform Card */}
            <div className="p-space-xl rounded-2xl bg-surface-container-lowest shadow-md flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-space-lg">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-14 h-14 rounded-xl bg-primary-container text-on-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[32px]">desktop_windows</span>
                    </div>
                    <div>
                      <h3 className="font-headline-md text-headline-md text-on-surface font-bold">نسخة سطح المكتب</h3>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Windows 10 / 11 &amp; macOS</span>
                    </div>
                  </div>
                  <span className="font-label-keycap text-label-keycap bg-secondary-fixed text-on-secondary-fixed px-space-sm py-1 rounded font-bold">
                    الأمثل لمحطات البيع
                  </span>
                </div>

                <div className="space-y-space-sm mb-space-lg">
                  <div className="flex items-start gap-space-sm">
                    <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">check_circle</span>
                    <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                      <strong>مثالية لمحطات الكاشير الثابتة وشاشات اللمس:</strong> دعم قارئات الباركود المكتبية، أدراج النقدية (Cash Drawer)، وطابعات الإيصالات الضخمة في السوبرماركت والمحلات الكبيرة.
                    </p>
                  </div>
                  <div className="flex items-start gap-space-sm">
                    <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">check_circle</span>
                    <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                      <strong>لوحة تحكم إدارية شاملة:</strong> إدخال الفواتير الضخمة، تصدير تقارير المحاسب، إدارة متعددة لصلاحيات الكاشير، والعمل دون أي اعتماد على شبكة خارجية.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-space-sm rounded-xl bg-surface-container-low flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant">الحجم: 85 ميجابايت • تثبيت بنقرة واحدة</span>
                <span className="font-label-keycap text-label-keycap text-secondary font-bold">يدعم جميع ملحقات POS</span>
              </div>
            </div>

            {/* Mobile Platform Card */}
            <div className="p-space-xl rounded-2xl bg-surface-container-lowest shadow-md flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-space-lg">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-14 h-14 rounded-xl bg-secondary text-on-secondary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[32px]">smartphone</span>
                    </div>
                    <div>
                      <h3 className="font-headline-md text-headline-md text-on-surface font-bold">نسخة الهاتف والتابلت</h3>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Android &amp; iOS</span>
                    </div>
                  </div>
                  <span className="font-label-keycap text-label-keycap bg-tertiary-fixed text-on-tertiary-fixed px-space-sm py-1 rounded font-bold">
                    إدارة متنقلة وجرد ذكي
                  </span>
                </div>

                <div className="space-y-space-sm mb-space-lg">
                  <div className="flex items-start gap-space-sm">
                    <span className="material-symbols-outlined text-on-tertiary-container text-[20px] shrink-0 mt-0.5">check_circle</span>
                    <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                      <strong>لإدارة المبيعات المتنقلة والجرد السريع:</strong> استخدام كاميرا الهاتف كقارئ باركود سريع لجرد الرفوف بالمخزن والبيع الميداني في المعارض وسيارات التوزيع.
                    </p>
                  </div>
                  <div className="flex items-start gap-space-sm">
                    <span className="material-symbols-outlined text-on-tertiary-container text-[20px] shrink-0 mt-0.5">check_circle</span>
                    <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                      <strong>متابعة الأرباح والخزينة عن بُعد:</strong> اطلع على مداخيل محلك لحظة بلحظة وأنت خارج المتجر، واستقبل إشعارات فورية بالمبيعات وتجاوز حد الأمان للمخزون.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-space-sm rounded-xl bg-surface-container-low flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant">اتصال مباشر عبر البلوتوث بالطابعات المحمولة</span>
                <span className="font-label-keycap text-label-keycap text-on-tertiary-container font-bold">Android APK &amp; iOS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Simplified Transparent Pricing & Activation Section */}
      <section className="py-space-xl px-6 lg:px-12 bg-surface">
        <div className="max-w-5xl mx-auto">
          <div className="p-space-xl rounded-3xl bg-surface-container-lowest shadow-xl text-start relative overflow-hidden">
            {/* Accent Banner Decor */}
            <div className="absolute top-0 end-0 bg-secondary text-on-secondary px-6 py-2 rounded-es-2xl font-label-keycap text-label-keycap font-bold shadow-sm">
              عرض خاص بالدينار الجزائري (DZD)
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
              {/* Pricing Left Info */}
              <div className="lg:col-span-7 space-y-space-md">
                <span className="font-label-keycap text-label-keycap px-space-sm py-space-xs rounded bg-surface-container text-secondary font-bold">
                  شفافية مطلقة وبلا اشتراكات متكررة
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold leading-tight">
                  ابدأ الآن بـ 7 أيام تجربة مجانية بكامل الصلاحيات
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  قم بتحميل البرنامج وتثبيته مباشرة. النظام يمنحك تجربة حية لكافة الوظائف (مبيعات، مخزون، باركود، طباعة). عند انتهاء التجربة ورضاك التام، يمكنك التفعيل مدى الحياة دفعة واحدة دون أي اقتطاعات شهرية.
                </p>

                {/* Features Included Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs pt-space-xs font-body-md text-body-md text-on-surface">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">done</span>
                    <span>ترخيص أصلي لجهاز الكمبيوتر مدى الحياة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">done</span>
                    <span>تحديثات تقنية مستمرة مجانية</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">done</span>
                    <span>دعم فني وتدريب عبر الهاتف والواتساب</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">done</span>
                    <span>دعم تطبيق الهاتف الذكي المساعد</span>
                  </div>
                </div>

                {/* Payment Methods Supported */}
                <div className="pt-space-md flex items-center gap-space-md flex-wrap">
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">
                    وسائل الدفع والتفعيل المقبولة:
                  </span>
                  <span className="font-label-keycap text-label-keycap bg-surface-container px-2 py-1 rounded text-on-surface font-semibold">
                    بريدي موب BaridiMob
                  </span>
                  <span className="font-label-keycap text-label-keycap bg-surface-container px-2 py-1 rounded text-on-surface font-semibold">
                    حساب البريد الجاري CCP
                  </span>
                  <span className="font-label-keycap text-label-keycap bg-surface-container px-2 py-1 rounded text-on-surface font-semibold">
                    تحويل بريدي فوري
                  </span>
                </div>
              </div>

              {/* Pricing Right Tier Card */}
              <div className="lg:col-span-5 bg-surface-container-low p-space-lg rounded-2xl flex flex-col justify-between shadow-sm">
                <div className="text-center pb-space-md border-b border-outline-variant/30">
                  <div className="font-label-sm text-label-sm text-on-surface-variant mb-1">الترخيص الشامل الدائم</div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-display-total text-display-total text-on-surface font-bold">15,000</span>
                    <span className="font-title-lg text-title-lg text-on-surface-variant font-bold">دج</span>
                  </div>
                  <div className="font-label-sm text-label-sm text-on-tertiary-container font-semibold mt-1">
                    دفعة واحدة فقط مدى الحياة • بدون رسوم شهرية
                  </div>
                </div>

                <div className="py-space-md space-y-space-sm text-start">
                  <div className="flex items-center gap-2 font-body-md text-body-md text-on-surface">
                    <span className="material-symbols-outlined text-secondary text-[20px]">bolt</span>
                    <span>تفعيل فوري خلال 5 دقائق بعد التحويل</span>
                  </div>
                  <div className="flex items-center gap-2 font-body-md text-body-md text-on-surface">
                    <span className="material-symbols-outlined text-secondary text-[20px]">support_agent</span>
                    <span>مساعدة عن بُعد بواسطة AnyDesk للتركيب</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-space-xs">
                  <Link
                    to="/downloads"
                    className="w-full flex items-center justify-center gap-space-xs py-space-md bg-secondary hover:bg-secondary-container text-on-secondary rounded-xl font-body-lg text-body-lg font-bold transition-all shadow-md active:translate-y-0.5"
                  >
                    <span className="material-symbols-outlined text-[20px]">download</span>
                    <span>تحميل وبدء التجربة المجانية الآن</span>
                  </Link>
                  <a
                    className="w-full flex items-center justify-center gap-space-xs py-space-md bg-tertiary-container text-on-tertiary-container rounded-xl font-body-md text-body-md font-bold hover:bg-tertiary-container/90 transition-all"
                    href={WA_ACTIVATE}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                    <span>طلب التفعيل الفوري عبر واتساب</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Visual Customer Store Success Banner */}
      <section className="py-space-lg px-6 lg:px-12 bg-surface-container-lowest mb-space-xl">
        <div className="max-w-7xl mx-auto rounded-2xl bg-primary-container text-on-primary p-space-lg lg:p-space-xl flex flex-col md:flex-row items-center justify-between gap-space-lg">
          <div className="flex items-center gap-space-md">
            <div className="w-16 h-16 rounded-2xl bg-surface-container-lowest/10 flex items-center justify-center text-tertiary-fixed shrink-0">
              <span className="material-symbols-outlined text-[36px]">storefront</span>
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md font-bold mb-1">مناسب لجميع الأنشطة التجارية في الجزائر</h4>
              <p className="font-body-md text-body-md text-on-primary-container">
                المواد الغذائية والسوبرماركت، محلات الأواني، الملابس والأحذية، الهواتف والإلكترونيات، الصيدليات ومستحضرات التجميل، قطع الغيار، والمخابز والمطاعم.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-space-sm shrink-0">
            <Link
              to="/contact"
              className="px-space-lg py-space-md rounded-xl bg-secondary text-on-secondary font-body-md text-body-md font-semibold hover:bg-secondary-container transition-all"
            >
              استشر فريقنا لاختيار عتادك المناسب
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
