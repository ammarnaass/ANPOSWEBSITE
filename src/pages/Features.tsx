import { useState } from 'react'
import { Link } from 'react-router-dom'
import { WA_ACTIVATE } from '../lib/site'

export default function Features() {
  const [selectedPayment, setSelectedPayment] = useState<'cash' | 'cib' | 'credit'>('cash')

  return (
    <div className="flex flex-col w-full">
      {/* 1. Features Hero Section */}
      <section className="relative w-full overflow-hidden bg-surface py-space-xl lg:py-24">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute -top-32 start-1/4 w-96 h-96 rounded-full bg-secondary-fixed/40 blur-3xl" />
          <div className="absolute top-1/2 end-10 w-80 h-80 rounded-full bg-surface-container-high/60 blur-2xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container shadow-sm mb-space-lg">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span className="font-label-keycap text-label-keycap text-secondary tracking-wider uppercase">
              مميزات صُممت لواقع التجارة الحقيقي
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-headline-lg text-headline-lg md:text-[40px] md:leading-[50px] text-on-surface max-w-4xl tracking-tight mb-space-md font-bold">
            كل أداة تحتاجها لإدارة متجرك، تسريع البيع، وحماية أرباحك
          </h1>

          {/* Subtitle */}
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed mb-space-xl">
            من محطة الكاشير إلى جرد المخزن وطباعة الفواتير الجبائية. استكشف كيف يحل AN POS المشاكل اليومية للمحلات والمطاعم بدون تعقيد تقني أو انقطاع في الخدمة.
          </p>

          {/* CTA Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-space-md w-full sm:w-auto">
            <Link
              to="/downloads"
              className="w-full sm:w-auto px-space-xl py-space-md rounded-xl bg-secondary text-on-secondary shadow-md hover:bg-secondary-container transition-all flex items-center justify-center gap-space-sm group"
            >
              <span className="font-title-lg text-title-lg font-bold">جرّب كافة المميزات مجاناً لمدة 7 أيام</span>
              <span className="font-label-keycap text-label-keycap bg-surface-container-lowest/25 px-space-xs py-0.5 rounded group-hover:bg-surface-container-lowest/35 transition-colors">
                F12
              </span>
            </Link>
            <a
              className="w-full sm:w-auto px-space-lg py-space-md rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors flex items-center justify-center gap-space-xs"
              href={WA_ACTIVATE}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[20px] text-on-tertiary-container">chat</span>
              <span className="font-body-md text-body-md font-semibold">تفعيل فوري مع مستشار</span>
            </a>
          </div>

          {/* Guarantee Tagline */}
          <div className="flex items-center gap-space-sm mt-space-md text-on-surface-variant">
            <span className="material-symbols-outlined text-[18px] text-secondary">verified_user</span>
            <span className="font-label-sm text-label-sm">
              بدون بطاقة بنكية، تفعيل فوري، وتوافق تام 100% مع الطابعات وأجهزة الباركود
            </span>
          </div>

          {/* Hero Visual Metric Bar */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-space-md mt-space-xl pt-space-xl bg-surface-container-lowest/80 rounded-2xl p-space-lg shadow-sm">
            <div className="flex flex-col items-center justify-center text-center p-space-sm">
              <span className="font-display-total text-display-total text-secondary">&lt; 0.3 ثا</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">زمن إضافة المنتج بالفاتورة</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-space-sm">
              <span className="font-display-total text-display-total text-on-surface">100%</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">عمل أوفلاين دون انقطاع</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-space-sm">
              <span className="font-display-total text-display-total text-on-tertiary-container">58 ولاية</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">تغطية ودعم فني متاح</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-space-sm">
              <span className="font-display-total text-display-total text-on-surface">0 دج</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">رسوم اشتراك شهرية خفية</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Features Interactive Grid */}
      <section className="w-full py-space-xl bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
            <div>
              <div className="flex items-center gap-space-xs text-secondary font-label-keycap text-label-keycap mb-space-xs uppercase tracking-wider">
                <span className="material-symbols-outlined text-[16px]">widgets</span>
                <span>الأدوات الميدانية المتطورة</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                باقة الميزات المصممة لتسهيل يوم الكاشير والمدير
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              حلول عملية تتجاوز النظريات: تم اختبار كل ميزة داخل مئات المحلات وسوبرماركت ومطاعم بالجزائر لضمان الفاعلية.
            </p>
          </div>

          {/* Feature Tiles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            {/* Feature 1: POS Speed */}
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[28px]">speed</span>
                  </div>
                  <div className="flex gap-space-xs">
                    <span className="font-label-keycap text-label-keycap px-space-xs py-0.5 rounded bg-surface-container text-on-surface">
                      F1
                    </span>
                    <span className="font-label-keycap text-label-keycap px-space-xs py-0.5 rounded bg-surface-container text-on-surface">
                      F12
                    </span>
                  </div>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface font-bold mb-space-xs">
                  نقطة بيع فائقة السرعة (Ultra-Fast POS)
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                  واجهة تفاعلية فورية تعمل بقارئ الباركود أو شاشة اللمس، مع دعم لوحة المفضلة السريعة (FAV)، وتعليق الفواتير (Suspend Sale) لخدمة زبون آخر دون خسارة السلة الحالية.
                </p>
              </div>
              <div className="pt-space-md bg-surface-container-low/50 rounded-xl p-space-sm flex items-center justify-between">
                <span className="font-label-sm text-label-sm font-semibold text-on-surface">اختصارات لوحة المفاتيح</span>
                <span className="font-label-keycap text-label-keycap text-secondary font-bold">تسريع 3x للبيع</span>
              </div>
            </div>

            {/* Feature 2: Real-time Stock */}
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[28px]">inventory_2</span>
                  </div>
                  <span className="font-label-keycap text-label-keycap px-space-xs py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-bold">
                    تنبيه ذكي
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface font-bold mb-space-xs">
                  إدارة المخزون وتنبيه النواقص لحظياً
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                  جرد حي مستمر للمخازن، إشعارات تلقائية فور وصول المنتج إلى حد الأمان، وبطاقات تكلفة دقيقة توضح هامش الربح الصافي. استيراد وتصدير بطاقات المواد عبر Excel بنقرة واحدة.
                </p>
              </div>
              <div className="pt-space-md bg-surface-container-low/50 rounded-xl p-space-sm flex items-center justify-between">
                <span className="font-label-sm text-label-sm font-semibold text-on-surface">استيراد المنتجات</span>
                <span className="font-label-keycap text-label-keycap text-on-surface-variant">Excel / CSV فوري</span>
              </div>
            </div>

            {/* Feature 3: DZ Fiscal Compliance */}
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-on-tertiary-container">
                    <span className="material-symbols-outlined text-[28px]">receipt_long</span>
                  </div>
                  <span className="font-label-keycap text-label-keycap px-space-xs py-0.5 rounded bg-surface-container text-on-tertiary-container font-bold">
                    معايير DZ
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface font-bold mb-space-xs">
                  الفوترة والامتثال الجبائي الجزائري
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                  إدراج مباشر للمعرفات القانونية والجبائية (NIF / NIS / RC / Article d'imposition)، دعم نسب الرسم على القيمة المضافة (TVA 9% و 19%)، وتوليد رمز QR مشفر للتحقق والتدقيق.
                </p>
              </div>
              <div className="pt-space-md bg-surface-container-low/50 rounded-xl p-space-sm flex items-center justify-between">
                <span className="font-label-sm text-label-sm font-semibold text-on-surface">الفواتير وسندات التسليم</span>
                <span className="font-label-keycap text-label-keycap text-secondary font-bold">A4, A5 و تذكرة 80mm</span>
              </div>
            </div>

            {/* Feature 4: Printer & Hardware Support */}
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[28px]">print</span>
                  </div>
                  <span className="font-label-keycap text-label-keycap px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-bold">
                    ESC/POS
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface font-bold mb-space-xs">
                  دعم شامل للطابعات الحرارية ودرج النقود
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                  توافق مع طابعات 80mm و 58mm عبر USB أو Ethernet أو Bluetooth. إشارة فتح درج الكاشير تلقائياً عند الدفع (RJ11 Kick 24V) مع القص الآلي للورق (Auto-Cutter).
                </p>
              </div>
              <div className="pt-space-md bg-surface-container-low/50 rounded-xl p-space-sm flex items-center justify-between">
                <span className="font-label-sm text-label-sm font-semibold text-on-surface">سرعة الطباعة المباشرة</span>
                <span className="font-label-keycap text-label-keycap text-secondary font-bold">طباعة فورية RAW</span>
              </div>
            </div>

            {/* Feature 5: Reports & Cash Closing */}
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[28px]">monitoring</span>
                  </div>
                  <span className="font-label-keycap text-label-keycap px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-bold">
                    Z &amp; X Reports
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface font-bold mb-space-xs">
                  تقارير الأرباح وتصفية الصندوق اليومي
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                  تقارير إغلاق الوردية وكشف العجز والزيادة بالدينار، تتبع صافي الأرباح الحقيقية بعد طرح التكاليف والمصاريف اليومية، وترتيب الأصناف الأكثر ربحية بحساب دقيق.
                </p>
              </div>
              <div className="pt-space-md bg-surface-container-low/50 rounded-xl p-space-sm flex items-center justify-between">
                <span className="font-label-sm text-label-sm font-semibold text-on-surface">إغلاق الصندوق</span>
                <span className="font-label-keycap text-label-keycap text-secondary font-bold">تقرير فوري بنقرة</span>
              </div>
            </div>

            {/* Feature 6: Offline & AES Encryption */}
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[28px]">wifi_off</span>
                  </div>
                  <span className="font-label-keycap text-label-keycap px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-bold">
                    AES-256
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface font-bold mb-space-xs">
                  عمل دون إنترنت ونسخ احتياطي مشفر
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                  لا داعي للقلق عند انقطاع الإنترنت؛ التطبيق يعمل محلياً بنسبة 100%. نظام أرشفة ونسخ احتياطي تلقائي مشفر لحماية قاعدة بيانات الزبائن والمعاملات من أي تلف.
                </p>
              </div>
              <div className="pt-space-md bg-surface-container-low/50 rounded-xl p-space-sm flex items-center justify-between">
                <span className="font-label-sm text-label-sm font-semibold text-on-surface">أمان البيانات</span>
                <span className="font-label-keycap text-label-keycap text-secondary font-bold">تشفير محلي عالي</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Workflow Breakdown */}
      <section className="w-full py-space-xl bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            {/* Visual Simulation Mockup */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="bg-surface-container-lowest rounded-2xl shadow-md p-space-lg space-y-space-md">
                {/* Mock Header Bar */}
                <div className="flex items-center justify-between pb-space-sm bg-surface-container-low p-space-sm rounded-xl" dir="ltr">
                  <div className="flex items-center gap-space-xs">
                    <span className="w-3 h-3 rounded-full bg-error" />
                    <span className="w-3 h-3 rounded-full bg-secondary-container" />
                    <span className="w-3 h-3 rounded-full bg-tertiary-fixed-dim" />
                    <span className="font-label-sm text-label-sm font-semibold ms-2 text-on-surface" dir="rtl">
                      محطة الكاشير 01 - الوردية الصباحية
                    </span>
                  </div>
                  <span className="font-label-keycap text-label-keycap px-space-xs py-0.5 rounded bg-surface text-on-surface-variant" dir="rtl">
                    نشط ومستقر
                  </span>
                </div>

                {/* Scanned Cart Lines */}
                <div className="space-y-space-xs">
                  <div className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-low">
                    <div className="flex items-center gap-space-sm">
                      <span className="font-label-keycap text-label-keycap px-space-xs py-0.5 rounded bg-surface-container text-on-surface">
                        01
                      </span>
                      <div>
                        <div className="font-body-md text-body-md font-semibold text-on-surface">حليب معقم كانديا 1 لتر</div>
                        <div className="font-label-sm text-label-sm text-on-surface-variant">الكمية: 2 × 135.00 دج</div>
                      </div>
                    </div>
                    <span className="font-title-lg text-title-lg font-bold text-on-surface">270.00 دج</span>
                  </div>

                  <div className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-low">
                    <div className="flex items-center gap-space-sm">
                      <span className="font-label-keycap text-label-keycap px-space-xs py-0.5 rounded bg-surface-container text-on-surface">
                        02
                      </span>
                      <div>
                        <div className="font-body-md text-body-md font-semibold text-on-surface">زيت إيليو 5 لتر</div>
                        <div className="font-label-sm text-label-sm text-on-surface-variant">الكمية: 1 × 650.00 دج</div>
                      </div>
                    </div>
                    <span className="font-title-lg text-title-lg font-bold text-on-surface">650.00 دج</span>
                  </div>

                  <div className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-low">
                    <div className="flex items-center gap-space-sm">
                      <span className="font-label-keycap text-label-keycap px-space-xs py-0.5 rounded bg-surface-container text-on-surface">
                        03
                      </span>
                      <div>
                        <div className="font-body-md text-body-md font-semibold text-on-surface">قهوة فاميكو مطحونة 250غ</div>
                        <div className="font-label-sm text-label-sm text-on-surface-variant">الكمية: 3 × 220.00 دج</div>
                      </div>
                    </div>
                    <span className="font-title-lg text-title-lg font-bold text-on-surface">660.00 دج</span>
                  </div>
                </div>

                {/* Grand Total Block */}
                <div className="bg-primary-container text-on-primary p-space-md rounded-xl flex items-center justify-between shadow-inner">
                  <div>
                    <span className="font-label-sm text-label-sm text-on-primary-container block">المجموع الصافي للدفع</span>
                    <span className="font-headline-lg text-headline-lg text-tertiary-fixed font-bold tracking-tight">
                      1,580.00 دج
                    </span>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <span className="font-label-keycap text-label-keycap bg-surface-container-lowest/15 px-space-sm py-1 rounded text-on-primary">
                      F12 تسديد
                    </span>
                  </div>
                </div>

                {/* Fast Tender Row */}
                <div className="grid grid-cols-3 gap-space-xs pt-space-xs">
                  <button
                    type="button"
                    onClick={() => setSelectedPayment('cash')}
                    className={`py-space-xs rounded-lg font-label-sm text-label-sm font-bold transition-colors ${
                      selectedPayment === 'cash'
                        ? 'bg-secondary text-on-secondary shadow-sm'
                        : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                    }`}
                  >
                    نقداً (Cash)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedPayment('cib')}
                    className={`py-space-xs rounded-lg font-label-sm text-label-sm font-bold transition-colors ${
                      selectedPayment === 'cib'
                        ? 'bg-secondary text-on-secondary shadow-sm'
                        : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                    }`}
                  >
                    بطاقة ذهبية / CIB
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedPayment('credit')}
                    className={`py-space-xs rounded-lg font-label-sm text-label-sm font-bold transition-colors ${
                      selectedPayment === 'credit'
                        ? 'bg-secondary text-on-secondary shadow-sm'
                        : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                    }`}
                  >
                    آجل (كريدي)
                  </button>
                </div>
              </div>
            </div>

            {/* Description Column */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-space-md">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded bg-surface-container text-secondary font-label-keycap text-label-keycap font-bold">
                سلاسة قصوى في أوقات الذروة
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                تجربة كاشير صُممت للقضاء التام على طوابير الانتظار
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                نعلم ما يمر به أصحاب المتاجر والمشرفون في ساعات الازدحام. صُمم نظام AN POS ليكون خفيفاً وسريع الاستجابة بدون أي بطء أو تجميد في الشاشة أثناء عمليات البيع المتتالية.
              </p>
              <div className="space-y-space-sm pt-space-xs">
                <div className="flex items-start gap-space-sm">
                  <div className="w-6 h-6 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary shrink-0 mt-1">
                    <span className="material-symbols-outlined text-[16px]">check</span>
                  </div>
                  <div>
                    <h4 className="font-title-lg text-title-lg font-bold text-on-surface">إدخال الكميات المجمعة بضغطة زر</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      ضرب مباشر للسعر أو الكمية دون الحاجة لتكرار المسح الضوئي لنفس الصنف.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-space-sm">
                  <div className="w-6 h-6 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary shrink-0 mt-1">
                    <span className="material-symbols-outlined text-[16px]">check</span>
                  </div>
                  <div>
                    <h4 className="font-title-lg text-title-lg font-bold text-on-surface">إدارة حسابات الديون والزبائن (الكريدي)</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      تتبع ديون الزبائن وسجلات التسديد الجزئي مع كشف حساب يمكن إرساله فوراً عبر واتساب أو طباعته.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-space-sm">
                  <div className="w-6 h-6 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary shrink-0 mt-1">
                    <span className="material-symbols-outlined text-[16px]">check</span>
                  </div>
                  <div>
                    <h4 className="font-title-lg text-title-lg font-bold text-on-surface">صلاحيات متعددة للمستخدمين</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      منع الكاشير من تعديل الأسعار أو حذف الفواتير القديمة إلا بإذن المشرف أو الرقم السري الإداري.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Detailed Comparison: Desktop vs Mobile */}
      <section className="w-full py-space-xl bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Title */}
          <div className="text-center max-w-3xl mx-auto mb-space-xl">
            <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container text-secondary font-label-keycap text-label-keycap mb-space-xs font-bold uppercase">
              مرونة المنصات
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mb-space-xs">
              مقارنة الإمكانيات: نسخة سطح المكتب مقابل نسخة الهاتف
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              يعمل AN POS بتناغم كامل بين أجهزة الكاشير المادية وتطبيقات الهاتف الذكي للمتابعة والتحكم في متجرك من أي مكان.
            </p>
          </div>

          {/* Comparison Table Card */}
          <div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-start text-on-surface">
                <thead>
                  <tr className="bg-surface-container-high/60">
                    <th className="p-space-lg font-title-lg text-title-lg text-start font-bold w-1/3">
                      الميزة والوظيفة التشغيلية
                    </th>
                    <th className="p-space-lg font-title-lg text-title-lg text-start font-bold w-1/3">
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-secondary">desktop_windows</span>
                        <span>نسخة سطح المكتب (Windows / Mac)</span>
                      </div>
                    </th>
                    <th className="p-space-lg font-title-lg text-title-lg text-start font-bold w-1/3">
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-on-tertiary-container">smartphone</span>
                        <span>نسخة الهاتف الذكي (Android / iOS)</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/15 font-body-md text-body-md">
                  {/* Row 1 */}
                  <tr className="hover:bg-surface-container-low/40 transition-colors">
                    <td className="p-space-lg">
                      <div className="font-bold text-on-surface">سرعة البيع بالكاشير والباركود</div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">تفريغ السلع وإصدار التذاكر</div>
                    </td>
                    <td className="p-space-lg">
                      <div className="flex items-center gap-space-xs text-on-surface">
                        <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                        <span className="font-semibold">فائقة السرعة عبر قارئ USB وشاشات اللمس</span>
                      </div>
                    </td>
                    <td className="p-space-lg">
                      <div className="flex items-center gap-space-xs text-on-surface">
                        <span className="material-symbols-outlined text-on-tertiary-container text-[20px]">check_circle</span>
                        <span>مسح سريع عبر كاميرا الهاتف وقوائم اللمس</span>
                      </div>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="hover:bg-surface-container-low/40 transition-colors">
                    <td className="p-space-lg">
                      <div className="font-bold text-on-surface">دعم الطابعات الحرارية ودرج النقود</div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">طباعة التذاكر والإيصالات</div>
                    </td>
                    <td className="p-space-lg">
                      <div className="flex items-center gap-space-xs text-on-surface">
                        <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                        <span className="font-semibold">طابعات USB / شبكة LAN / فتح درج النقود</span>
                      </div>
                    </td>
                    <td className="p-space-lg">
                      <div className="flex items-center gap-space-xs text-on-surface">
                        <span className="material-symbols-outlined text-on-tertiary-container text-[20px]">check_circle</span>
                        <span>طابعات Bluetooth الحرارية اللاسلكية المحمولة</span>
                      </div>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="hover:bg-surface-container-low/40 transition-colors">
                    <td className="p-space-lg">
                      <div className="font-bold text-on-surface">إدارة المخزون والجرد الميداني</div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">تسوية الكميات وإدخال الفواتير</div>
                    </td>
                    <td className="p-space-lg">
                      <div className="flex items-center gap-space-xs text-on-surface">
                        <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                        <span className="font-semibold">تحكم مركزي شامل وتعديل وتصدير كميات ضخمة</span>
                      </div>
                    </td>
                    <td className="p-space-lg">
                      <div className="flex items-center gap-space-xs text-on-surface">
                        <span className="material-symbols-outlined text-on-tertiary-container text-[20px]">check_circle</span>
                        <span>جرد ميداني فوري ومسح الباركود على الرفوف مباشرة</span>
                      </div>
                    </td>
                  </tr>

                  {/* Row 4 */}
                  <tr className="hover:bg-surface-container-low/40 transition-colors">
                    <td className="p-space-lg">
                      <div className="font-bold text-on-surface">متابعة المداخيل وصندوق المبيعات</div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">التقارير اليومية وتصفية الصندوق</div>
                    </td>
                    <td className="p-space-lg">
                      <div className="flex items-center gap-space-xs text-on-surface">
                        <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                        <span className="font-semibold">تقارير مفصلة Z &amp; X، وجرد الصندوق المالي بالكامل</span>
                      </div>
                    </td>
                    <td className="p-space-lg">
                      <div className="flex items-center gap-space-xs text-on-surface">
                        <span className="material-symbols-outlined text-on-tertiary-container text-[20px]">check_circle</span>
                        <span>إشعارات المبيعات اللحظية ومتابعة الأرباح عن بعد</span>
                      </div>
                    </td>
                  </tr>

                  {/* Row 5 */}
                  <tr className="hover:bg-surface-container-low/40 transition-colors">
                    <td className="p-space-lg">
                      <div className="font-bold text-on-surface">وضع العمل دون إنترنت (Offline Mode)</div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">الاعتمادية وعدم الاعتماد على الشبكة</div>
                    </td>
                    <td className="p-space-lg">
                      <div className="flex items-center gap-space-xs text-on-surface">
                        <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                        <span className="font-semibold">يعمل محلياً 100% بدون حاجة لأي اتصال</span>
                      </div>
                    </td>
                    <td className="p-space-lg">
                      <div className="flex items-center gap-space-xs text-on-surface">
                        <span className="material-symbols-outlined text-on-tertiary-container text-[20px]">check_circle</span>
                        <span>يعمل أوفلاين مع مزامنة سحابية تلقائية عند توفر النت</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Hardware Compatibility Section */}
      <section className="w-full py-space-xl bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
            <div>
              <div className="flex items-center gap-space-xs text-secondary font-label-keycap text-label-keycap mb-space-xs uppercase tracking-wider">
                <span className="material-symbols-outlined text-[16px]">devices_other</span>
                <span>العتاد المتوافق 100%</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                توافق تام مع جميع أجهزة الكاشير ونقاط البيع
              </h2>
            </div>
            <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-xl bg-surface-container text-on-surface font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">done_all</span>
              <span>يدعم أي جهاز يعمل ببروتوكول ESC/POS القياسي</span>
            </div>
          </div>

          {/* Hardware Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {/* Item 1: Touch POS */}
            <div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center text-secondary mb-space-sm">
                <span className="material-symbols-outlined text-[36px]">touch_app</span>
              </div>
              <h4 className="font-title-lg text-title-lg font-bold text-on-surface mb-1">
                شاشات اللمس و All-in-One
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                متوافق مع محطات POS المدمجة، شاشات اللمس الصناعية، ومحطات العرض المزدوجة للزبائن.
              </p>
              <span className="mt-space-sm font-label-keycap text-label-keycap text-on-surface-variant">
                Windows 10 / 11 / Android
              </span>
            </div>

            {/* Item 2: Barcode Readers */}
            <div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center text-secondary mb-space-sm">
                <span className="material-symbols-outlined text-[36px]">barcode_scanner</span>
              </div>
              <h4 className="font-title-lg text-title-lg font-bold text-on-surface mb-1">
                قوارئ الباركود (1D / 2D)
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                دعم لقوارئ الليزر اليدوية والقوارئ الثابتة متعددة الاتجاهات (Omnidirectional) وقراءة QR Code.
              </p>
              <span className="mt-space-sm font-label-keycap text-label-keycap text-on-surface-variant">
                USB Plug &amp; Play / Wireless
              </span>
            </div>

            {/* Item 3: Thermal Printers */}
            <div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center text-secondary mb-space-sm">
                <span className="material-symbols-outlined text-[36px]">receipt</span>
              </div>
              <h4 className="font-title-lg text-title-lg font-bold text-on-surface mb-1">
                طابعات الإيصالات الحرارية
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Epson، Xprinter، Bixolon، Sunmi، Rongta، وأي طابعة حرارية 80mm أو 58mm تدعم ESC/POS.
              </p>
              <span className="mt-space-sm font-label-keycap text-label-keycap text-on-surface-variant">
                USB / Network LAN / Bluetooth
              </span>
            </div>

            {/* Item 4: Electronic Scales & Cash Drawers */}
            <div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center text-secondary mb-space-sm">
                <span className="material-symbols-outlined text-[36px]">scale</span>
              </div>
              <h4 className="font-title-lg text-title-lg font-bold text-on-surface mb-1">
                الموازين وأدراج النقود
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                قراءة مباشرة من موازين الباركود المطبوع وموازين الربط التسلسلي (RS232) مع فتح درج الكاشير آلياً.
              </p>
              <span className="mt-space-sm font-label-keycap text-label-keycap text-on-surface-variant">
                RJ11 / Serial COM / Ethernet
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Bottom CTA Banner */}
      <section className="w-full py-space-xl bg-primary-container text-on-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="rounded-2xl p-space-xl bg-surface-container-lowest/5 backdrop-blur-md flex flex-col lg:flex-row items-center justify-between gap-space-xl">
            <div className="space-y-space-sm max-w-2xl text-center lg:text-start">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded bg-surface-container-lowest/10 text-tertiary-fixed font-label-keycap text-label-keycap uppercase font-bold">
                بدون أي التزام أو مخاطرة
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-primary font-bold">
                جاهز لتجربة كل هذه المميزات في متجرك الآن؟
              </h2>
              <p className="font-body-lg text-body-lg text-inverse-on-surface/85 leading-relaxed">
                حمّل النسخة التجريبية الكاملة خلال دقيقتين. ابدأ بتسجيل منتجاتك، تنظيم مبيعاتك، واختبر استقرار النظام بدون دفع مسبق.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-space-md shrink-0 w-full sm:w-auto">
              <Link
                to="/downloads"
                className="w-full sm:w-auto px-space-xl py-space-md rounded-xl bg-secondary text-on-secondary shadow-md hover:bg-secondary-container transition-all flex items-center justify-center gap-space-xs font-title-lg text-title-lg font-bold"
              >
                <span>ابدأ تجربتك المجانية لمدة 7 أيام الآن</span>
              </Link>
              <a
                className="w-full sm:w-auto px-space-lg py-space-md rounded-xl bg-tertiary-container text-on-tertiary-container hover:bg-tertiary-container/80 transition-all flex items-center justify-center gap-space-xs shadow-md"
                href={WA_ACTIVATE}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[22px]">chat</span>
                <span className="font-body-md text-body-md font-bold">تفعيل النسخة الدائمة (15,000 دج)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
