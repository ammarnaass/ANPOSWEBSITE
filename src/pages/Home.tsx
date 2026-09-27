import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SITE, WA_ACTIVATE } from '../lib/site'

interface CartItem {
  id: number
  name: string
  price: number
  qty: number
}

const INITIAL_CART: CartItem[] = [
  { id: 1, name: 'حليب معقم 1 لتر', price: 600, qty: 2 },
  { id: 2, name: 'كرتونة أرز بسمتي', price: 960, qty: 1 },
  { id: 3, name: 'شاحن سريع 25W', price: 2000, qty: 1 },
]

const QUICK_PRODUCTS = [
  { id: 4, name: 'زيت نباتي 5 لتر', price: 1250, icon: 'liquor', category: 'غذائية' },
  { id: 5, name: 'قهوة مطحونة 250g', price: 340, icon: 'coffee', category: 'غذائية' },
  { id: 6, name: 'شوكولاتة بالحليب', price: 180, icon: 'bakery_dining', category: 'حلويات' },
  { id: 7, name: 'مناديل ورقية عبوة', price: 150, icon: 'cleaning_services', category: 'منظفات' },
]

const SCREENSHOT_TABS = [
  { id: 1, title: 'واجهة الكاشير ونقاط البيع', img: '/screenshots/1.png', desc: 'بيع فوري بالباركود، أزرار سريعة للمفضلة، وحساب تلقائي للمتبقي والباقي.' },
  { id: 2, title: 'إدارة بطاقات الأصناف والمخزون', img: '/screenshots/2.png', desc: 'تتبع لحظي للكميات، حساب متوسط سعر الشراء، وتنبيه تلقائي قبل نفاد الصنف.' },
  { id: 3, title: 'فواتير المشتريات والموردين', img: '/screenshots/3.png', desc: 'تسجيل وصول الشحنات، تحديث تكلفة المخزن آلياً، ومتابعة مدفوعات الموردين.' },
  { id: 4, title: 'دفتر الديون وحسابات الزبائن', img: '/screenshots/4.png', desc: 'إدارة ديون الزبائن بالدينار، تسديد جزئي أو كامل، وطباعة كشف حساب مفصل.' },
  { id: 5, title: 'تقارير الأرباح والصندوق اليومي', img: '/screenshots/5.png', desc: 'لوحة قيادة تفصيلية تعرض الأرباح الصافية، مبيعات اليوم، وتقرير إغلاق الخزينة Z.' },
]

export default function Home() {
  // Live POS Terminal interactive state
  const [activeTab, setActiveTab] = useState<'terminal' | 'mobile' | 'analytics'>('terminal')
  const [cart, setCart] = useState<CartItem[]>(INITIAL_CART)
  const [printed, setPrinted] = useState(false)
  const [activeScreenshotTab, setActiveScreenshotTab] = useState(1)

  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0)
  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0)

  const handleAddProduct = (prod: typeof QUICK_PRODUCTS[0]) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === prod.id)
      if (existing) {
        return prev.map((i) => (i.id === prod.id ? { ...i, qty: i.qty + 1 } : i))
      }
      return [...prev, { id: prod.id, name: prod.name, price: prod.price, qty: 1 }]
    })
    setPrinted(false)
  }

  const handlePrint = () => {
    setPrinted(true)
    setTimeout(() => setPrinted(false), 3500)
  }

  const handleResetCart = () => {
    setCart([])
    setPrinted(false)
  }

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* ========================================================
          1. HERO SECTION (Ultra-Modern SaaS Landing)
         ======================================================== */}
      <section className="relative pt-6 sm:pt-12 pb-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
        {/* Ambient Radial Lights */}
        <div className="absolute top-0 start-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-100/60 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute top-20 start-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 end-10 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Top Pill Announcement */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel shadow-sm border border-blue-200/60 text-xs sm:text-sm font-semibold text-slate-800 hover:border-blue-400 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>الجيل الجديد لنقاط البيع في الجزائر • إصدار 2025/2026 المعتمد</span>
              <span className="bg-blue-600 text-white font-mono text-[10px] px-2 py-0.5 rounded-full font-bold">
                DZ-POS
              </span>
            </div>
          </div>

          {/* Main Title & Subtitle */}
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 mb-6 leading-[1.2] sm:leading-[1.15]">
              نظّم مبيعات متجرك ومخزونك <br />
              <span className="gradient-text">بأسرع وأدق نظام نقاط بيع</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
              منظومة كاشير ومحاسبة شاملة تجمع بين <strong>الحاسوب المكتبي</strong> و<strong>تطبيق الهاتف</strong>. صُممت خصيصاً للمحلات والمتاجر الجزائرية: سرعة خارقة بالباركود، توافق شامل مع الطابعات الحرارية، وعمل كامل <strong>بدون إنترنت (100% Offline)</strong>.
            </p>

            {/* Hero CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
              <Link
                to="/downloads"
                className="btn-shimmer w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-secondary hover:bg-blue-700 text-white font-bold text-base sm:text-lg transition-all shadow-[0_4px_20px_rgba(37,99,235,0.35)] hover:shadow-[0_6px_25px_rgba(37,99,235,0.45)] active:translate-y-0.5 flex items-center justify-center gap-2 group"
              >
                <span className="material-symbols-outlined text-[24px]">download</span>
                <span>حمّل وجرّبه 7 أيام مجاناً</span>
                <span className="hidden sm:inline-block font-mono text-xs bg-white/20 px-2 py-0.5 rounded font-bold">
                  F12
                </span>
              </Link>

              <a
                href={WA_ACTIVATE}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl glass-panel hover:bg-slate-100 text-slate-800 font-bold text-base transition-colors flex items-center justify-center gap-2 border border-slate-200"
              >
                <span className="material-symbols-outlined text-[20px] text-emerald-600">chat</span>
                <span>تفعيل فوري عبر واتساب</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-10 grid grid-cols-3 gap-3 max-w-xl mx-auto pt-6 border-t border-slate-200/80">
              <div className="text-center p-2 rounded-xl bg-slate-50/80 border border-slate-200/50">
                <div className="text-lg sm:text-2xl font-black text-slate-900 font-mono">0.1 ثا</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium">سرعة قراءة وطباعة الباركود</div>
              </div>
              <div className="text-center p-2 rounded-xl bg-blue-50/60 border border-blue-100">
                <div className="text-lg sm:text-2xl font-black text-blue-600 font-mono">100% أوفلاين</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium">عمل مستمر بدون انقطاع</div>
              </div>
              <div className="text-center p-2 rounded-xl bg-emerald-50/60 border border-emerald-100">
                <div className="text-lg sm:text-2xl font-black text-emerald-600 font-mono">58 ولاية</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium">دعم فني وتوزيع معتمد</div>
              </div>
            </div>
          </div>

          {/* ========================================================
              LIVE INTERACTIVE POS TERMINAL SHOWCASE (SaaS Core Demo)
             ======================================================== */}
          <div className="relative max-w-5xl mx-auto mt-6">
            {/* Floating SaaS Highlights */}
            <div className="hidden lg:flex items-center gap-2 absolute -top-5 -start-6 z-30 px-3.5 py-2 rounded-xl glass-panel shadow-lg border border-slate-200 text-xs font-bold text-slate-800 animate-float">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span>طابعة إيصالات 80mm متصلة بنجاح ✓</span>
            </div>

            <div className="hidden lg:flex items-center gap-2 absolute -bottom-5 -end-6 z-30 px-3.5 py-2 rounded-xl glass-panel shadow-lg border border-slate-200 text-xs font-bold text-slate-800 animate-float-delayed">
              <span className="material-symbols-outlined text-blue-600 text-[18px]">cloud_done</span>
              <span>مزامنة المخزون مع هاتف المدير آنية</span>
            </div>

            {/* Terminal Window Container */}
            <div className="rounded-3xl glass-panel-dark p-2 sm:p-3 shadow-[0_20px_50px_rgba(15,23,42,0.3)] border border-slate-700/80">
              {/* Window Chrome Header */}
              <div className="flex flex-wrap items-center justify-between px-3 py-2 bg-slate-900/90 rounded-2xl border-b border-slate-800 gap-2">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5" dir="ltr">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-slate-300 ms-2 font-semibold">
                    {SITE.name} Terminal • محاكاة شاشة البيع التفاعلية ({SITE.version})
                  </span>
                </div>

                {/* Switcher Modes */}
                <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700">
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      activeTab === 'terminal'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    شاشة الكاشير (POS)
                  </button>
                  <button
                    onClick={() => setActiveTab('mobile')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      activeTab === 'mobile'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    تطبيق الهاتف المساعد
                  </button>
                  <button
                    onClick={() => setActiveTab('analytics')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      activeTab === 'analytics'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    الأرباح والإحصائيات
                  </button>
                </div>
              </div>

              {/* Terminal Workspace Body */}
              <div className="bg-slate-950 rounded-2xl p-3 sm:p-4 text-slate-100 min-h-[380px]">
                {activeTab === 'terminal' && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
                    {/* Left/Main Column: Quick Products Catalog */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                      <div>
                        {/* Search & Scanner status bar */}
                        <div className="flex items-center justify-between gap-2 mb-3 bg-slate-900 p-2 rounded-xl border border-slate-800">
                          <div className="flex items-center gap-2 text-xs text-slate-400 flex-1">
                            <span className="material-symbols-outlined text-[18px] text-blue-400">barcode_scanner</span>
                            <span>ماسح الباركود متصل وجاهز للقراءة...</span>
                          </div>
                          <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
                            مباشر F1
                          </span>
                        </div>

                        {/* Interactive Quick Add Items */}
                        <div className="mb-2">
                          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                            <span>أصناف سريعة (انقر للإضافة الفورية إلى الفاتورة):</span>
                            <span className="text-[11px] text-blue-400">انقر لتجربة السرعة ⚡</span>
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                            {QUICK_PRODUCTS.map((prod) => (
                              <button
                                key={prod.id}
                                onClick={() => handleAddProduct(prod)}
                                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-blue-500/50 transition-all text-start group active:scale-98 cursor-pointer"
                              >
                                <div className="flex items-center gap-2">
                                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-[18px]">{prod.icon}</span>
                                  </div>
                                  <div>
                                    <div className="text-xs font-bold text-slate-200 group-hover:text-white line-clamp-1">
                                      {prod.name}
                                    </div>
                                    <div className="text-[10px] text-slate-400 font-mono">{prod.category}</div>
                                  </div>
                                </div>
                                <div className="text-end">
                                  <span className="text-xs font-bold text-emerald-400 font-mono block">
                                    {prod.price} <span className="text-[9px]">دج</span>
                                  </span>
                                  <span className="text-[9px] text-blue-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                    + إضافة
                                  </span>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Cashier status footer */}
                      <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          <span>الكاشير: أحمد (جلسة #01)</span>
                        </span>
                        <span className="font-mono text-slate-500">ESC/POS 80mm Ready</span>
                      </div>
                    </div>

                    {/* Right Column: Live Bill / Cart */}
                    <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl p-3 border border-slate-800 flex flex-col justify-between">
                      <div>
                        {/* Cart Header */}
                        <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-white">فاتورة بيع مباشرة</span>
                            <span className="bg-blue-500/20 text-blue-400 font-mono px-1.5 py-0.2 rounded text-[10px]">
                              #142
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-slate-400 font-mono">{cartCount} قطع</span>
                            <button
                              onClick={handleResetCart}
                              className="text-[11px] text-rose-400 hover:underline cursor-pointer"
                              title="إفراغ الفاتورة"
                            >
                              مسح
                            </button>
                          </div>
                        </div>

                        {/* Cart Line Items */}
                        <div className="space-y-1.5 my-2 max-h-[160px] overflow-y-auto pe-1">
                          {cart.length === 0 ? (
                            <div className="py-8 text-center text-xs text-slate-500">
                              الفاتورة فارغة. اختر منتجاً من القائمة لإضافته.
                            </div>
                          ) : (
                            cart.map((item) => (
                              <div
                                key={item.id}
                                className="flex items-center justify-between p-2 rounded-lg bg-slate-950/80 border border-slate-800/80 text-xs"
                              >
                                <div className="flex items-center gap-1.5">
                                  <span className="font-mono font-bold text-blue-400 bg-blue-950/60 px-1 rounded text-[11px]">
                                    {item.qty}×
                                  </span>
                                  <span className="text-slate-200 font-medium truncate max-w-[110px]">
                                    {item.name}
                                  </span>
                                </div>
                                <span className="font-mono font-bold text-emerald-400">
                                  {(item.price * item.qty).toLocaleString()} <span className="text-[10px]">دج</span>
                                </span>
                              </div>
                            ))
                          )}
                        </div>
                      </div>

                      {/* Total and Actions */}
                      <div className="pt-2 border-t border-slate-800">
                        {/* Grand Total Display */}
                        <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 mb-2">
                          <div className="flex items-center justify-between text-[11px] text-slate-400">
                            <span>المجموع الصافي:</span>
                            <span className="text-emerald-400 text-[10px]">شامل الرسم الجبائي</span>
                          </div>
                          <div className="text-xl sm:text-2xl font-black font-mono text-emerald-400 text-end tracking-tight">
                            {cartTotal.toLocaleString()} <span className="text-xs text-slate-300">دج</span>
                          </div>
                        </div>

                        {/* Thermal Print Alert if Triggered */}
                        {printed && (
                          <div className="mb-2 p-2 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold text-center animate-in fade-in">
                            ✓ تمت طباعة الوصل الحراري وحفظ الفاتورة بنجاح!
                          </div>
                        )}

                        {/* Action Buttons */}
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={handlePrint}
                            className="btn-shimmer bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-98 transition-all cursor-pointer"
                          >
                            <span className="material-symbols-outlined text-[16px]">print</span>
                            <span>طبع وصل (F12)</span>
                          </button>
                          <button
                            onClick={handlePrint}
                            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-98 transition-all cursor-pointer"
                          >
                            <span className="material-symbols-outlined text-[16px]">payments</span>
                            <span>تسديد فوري</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'mobile' && (
                  <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-4">
                    {/* Phone Mockup Frame */}
                    <div className="w-64 bg-slate-900 rounded-[32px] p-3 border-4 border-slate-700 shadow-2xl">
                      {/* Notch */}
                      <div className="w-24 h-4 bg-slate-950 rounded-full mx-auto mb-2" />
                      {/* Phone Screen */}
                      <div className="bg-slate-950 rounded-[20px] p-3 text-slate-200 min-h-[280px] flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between text-[10px] text-slate-400 pb-1 mb-2 border-b border-slate-800">
                            <span className="font-bold text-blue-400">AN POS Mobile</span>
                            <span>متصل بالمخزن</span>
                          </div>
                          <div className="bg-slate-900 p-2 rounded-xl mb-2 text-center">
                            <span className="text-[10px] text-slate-400 block">مبيعات اليوم الآنية</span>
                            <span className="text-xl font-bold font-mono text-emerald-400">64,500 دج</span>
                          </div>
                          <div className="space-y-1 text-xs">
                            <div className="p-1.5 rounded bg-slate-900 flex items-center justify-between">
                              <span>جرد الرف A4:</span>
                              <span className="text-emerald-400 font-mono">142 قطعة</span>
                            </div>
                            <div className="p-1.5 rounded bg-slate-900 flex items-center justify-between">
                              <span>تنبيه نفاد زيت:</span>
                              <span className="text-rose-400 font-mono">متبقي 2</span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-blue-600/30 text-blue-300 p-1.5 rounded-lg text-[10px] text-center font-bold">
                          مسح الباركود بكاميرا الهاتف مفعّل
                        </div>
                      </div>
                    </div>

                    {/* Explanatory side */}
                    <div className="max-w-md text-start space-y-3">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold">
                        <span>تطبيق الأندرويد المساعد (Android POS)</span>
                      </div>
                      <h3 className="text-xl font-bold text-white">تحكّم بمتجرك ومخزنك من جيبك أينما كنت</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        استخدم كاميرا هاتفك كقارئ باركود فائق السرعة لجرد الرفوف بالمخزن، أو لمتابعة مداخيل الصندوق لحظة بلحظة وأنت خارج المحل بدون الحاجة للجلوس أمام شاشة الكاشير.
                      </p>
                      <div className="pt-2">
                        <Link
                          to="/downloads"
                          className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 hover:underline"
                        >
                          <span>تحميل تطبيق الأندرويد APK مجاناً</span>
                          <span className="material-symbols-outlined text-[16px]">arrow_left</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'analytics' && (
                  <div className="py-4 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-start">
                        <span className="text-xs text-slate-400">إجمالي مداخيل الأسبوع</span>
                        <div className="text-xl font-bold font-mono text-emerald-400 mt-1">428,500 دج</div>
                        <span className="text-[10px] text-emerald-500 font-semibold">+18% مقارنة بالأسبوع الماضي</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-start">
                        <span className="text-xs text-slate-400">هامش الربح الصافي</span>
                        <div className="text-xl font-bold font-mono text-blue-400 mt-1">112,300 دج</div>
                        <span className="text-[10px] text-slate-400 font-semibold">محسوب بدقة بعد خصم التكاليف</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-start">
                        <span className="text-xs text-slate-400">حجم المخزون المقدر</span>
                        <div className="text-xl font-bold font-mono text-amber-400 mt-1">1,840,000 دج</div>
                        <span className="text-[10px] text-slate-400 font-semibold">قيمة بضاعة المحل الحالية</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-start">
                      <div className="flex items-center justify-between mb-3 text-xs">
                        <span className="font-bold text-white">المنتجات الأعلى مبيعاً هذا الشهر:</span>
                        <span className="text-slate-400 font-mono">تقرير Z لشهر أكتوبر</span>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-300">1. حليب معقم ومشتقاته</span>
                          <span className="font-mono text-emerald-400 font-bold">1,420 عبوة بيعت</span>
                        </div>
                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div className="bg-emerald-500 h-full w-[85%]" />
                        </div>

                        <div className="flex items-center justify-between pt-1">
                          <span className="text-slate-300">2. بطاقات ومستلزمات الهواتف</span>
                          <span className="font-mono text-blue-400 font-bold">890 عملية</span>
                        </div>
                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div className="bg-blue-500 h-full w-[65%]" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. BUSINESS CATEGORIES & TRUST MARQUEE
         ======================================================== */}
      <section className="py-12 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <p className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider mb-6">
            حل برمجي معتمد ومخصص لمختلف القطاعات والأنشطة التجارية في الجزائر
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { label: 'السوبرماركت والمواد الغذائية', icon: 'shopping_cart' },
              { label: 'محلات الملابس والأحذية', icon: 'apparel' },
              { label: 'الهواتف ومستلزمات الإعلام الآلي', icon: 'devices' },
              { label: 'الأواني المنزلية والكوزماتيك', icon: 'countertops' },
              { label: 'قطع غيار السيارات والعقاقير', icon: 'build' },
              { label: 'الصيدليات وشبه الصيدلاني', icon: 'medication' },
              { label: 'المطاعم والمقاهي السريعة', icon: 'restaurant' },
              { label: 'المكتبات والقرطاسية', icon: 'menu_book' },
            ].map((cat, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/70 text-slate-800 text-xs sm:text-sm font-semibold transition-colors shadow-2xs"
              >
                <span className="material-symbols-outlined text-[18px] text-blue-600">{cat.icon}</span>
                <span>{cat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. BENTO GRID FEATURES (Modern SaaS Feature Section)
         ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-slate-50/60" id="features">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-3">
              مميزات صممت للسرعة والإنتاجية
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              كل ما تحتاجه لإلغاء الطوابير وحماية أرباحك
            </h2>
            <p className="text-base text-slate-600">
              واجهة مريحة للبصر خالية من التعقيدات، تمكن أي عامل أو كاشير من البيع خلال 5 دقائق تدريب فقط.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {/* Card 1: POS Checkout Speed (Span 8) */}
            <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl glass-panel hover-glow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-md shadow-blue-500/20">
                  <span className="material-symbols-outlined text-[28px]">flash_on</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-blue-600 font-mono">SPEED & ERGONOMICS</span>
                  <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                    أقل من 0.3 ثانية
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  نقطة بيع فائقة السرعة مع اختصارات لوحة المفاتيح
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  استجابة فورية لقارئات الباركود وشاشات اللمس. يدعم اختصارات عملية من <kbd className="font-mono bg-slate-100 px-1.5 py-0.5 rounded border border-slate-300 text-slate-800 font-bold">F1</kbd> إلى <kbd className="font-mono bg-slate-100 px-1.5 py-0.5 rounded border border-slate-300 text-slate-800 font-bold">F12</kbd> تتيح للكاشير البحث، إدخال الكميات، طباعة الفاتورة، وحساب الباقي في جزء من الثانية دون لمس الفأرة.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                  <span className="font-bold text-xs text-slate-800 block">بيع بالتجزئة والجملة</span>
                  <span className="text-[11px] text-slate-500">سعر القطعة أو الكرتونة بنقرة</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                  <span className="font-bold text-xs text-slate-800 block">تعليق الفواتير المفتوحة</span>
                  <span className="text-[11px] text-slate-500">خدمة زبون آخر دون خسارة السلة</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                  <span className="font-bold text-xs text-slate-800 block">شاشة مزدوجة للزبون</span>
                  <span className="text-[11px] text-slate-500">عرض الأسعار للعميل في الوقت الفعلي</span>
                </div>
              </div>
            </div>

            {/* Card 2: Smart Inventory & Security Limits (Span 4) */}
            <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl glass-panel hover-glow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center mb-6 shadow-md shadow-amber-500/20">
                  <span className="material-symbols-outlined text-[28px]">shelves</span>
                </div>
                <span className="text-xs font-bold text-amber-600 font-mono block mb-1">LIVE STOCK</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  مخزون ذكي وتنبيه آلي للنواقص
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  تحديث مباشر للكميات مع كل عملية بيع أو إرجاع. تنبيهات استباقية باللون الأحمر عند اقتراب أي صنف من حد الأمان المحدد لمنع فراغ الرفوف.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200/80">
                <div className="flex items-center justify-between text-xs font-bold text-rose-800 mb-1">
                  <span>تنبيه حد الأمان</span>
                  <span className="font-mono">متبقي 3 فقط</span>
                </div>
                <div className="w-full bg-rose-200 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-rose-600 h-full w-[15%]" />
                </div>
              </div>
            </div>

            {/* Card 3: Invoices & Receipts (Span 4) */}
            <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl glass-panel hover-glow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-6 shadow-md shadow-emerald-500/20">
                  <span className="material-symbols-outlined text-[28px]">receipt_long</span>
                </div>
                <span className="text-xs font-bold text-emerald-600 font-mono block mb-1">THERMAL PRINTING</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  طباعة وصولات حرارية وفواتير A4/A5
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  تخصيص كامل لشعار محلك، نصوص الترحيب، ورمز QR Code. متوافق بنسبة 100% مع جميع طابعات التذاكر (80mm & 58mm) بدون تعريفات معقدة.
                </p>
              </div>
              <div className="text-xs font-bold text-emerald-700 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
                يدعم أوامر قطع الورق وفتح درج النقود آلياً
              </div>
            </div>

            {/* Card 4: Algerian Fiscal Compliance (Span 4) */}
            <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl glass-panel hover-glow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mb-6 shadow-md shadow-indigo-500/20">
                  <span className="material-symbols-outlined text-[28px]">account_balance</span>
                </div>
                <span className="text-xs font-bold text-indigo-600 font-mono block mb-1">FISCAL DZ</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  مطابقة للمعايير الجبائية والمحاسبية
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  إدراج دقيق للرقم الجبائي (NIF)، السجل التجاري (RC)، ورقم التعريف الإحصائي (NIS)، مع دعم فواتير الرسم على القيمة المضافة (TVA) للمؤسسات والشركات.
                </p>
              </div>
              <div className="text-xs font-bold text-indigo-700 bg-indigo-50 p-2.5 rounded-xl border border-indigo-200">
                فواتير معتمدة ومطابقة لقوانين المالية الجزائرية
              </div>
            </div>

            {/* Card 5: Offline & Cloud Backup (Span 4) */}
            <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl glass-panel hover-glow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-800 text-white flex items-center justify-center mb-6 shadow-md shadow-slate-700/20">
                  <span className="material-symbols-outlined text-[28px]">security</span>
                </div>
                <span className="text-xs font-bold text-slate-500 font-mono block mb-1">DATA PROTECTION</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  بياناتك محمية ونسخ احتياطي فوري
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  قواعد بيانات محلية سريعة ومحمية من التلف. إمكانية تصدير نسخة احتياطية مشفرة إلى فلاش ديسك أو سحابة إلكترونية لحماية سنوات من العمل بنقرة واحدة.
                </p>
              </div>
              <div className="text-xs font-bold text-slate-700 bg-slate-100 p-2.5 rounded-xl border border-slate-200">
                استعادة سريعة لقاعدة البيانات في حال تغيير الجهاز
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. HARDWARE ECOSYSTEM SHOWCASE (Modern Tech Compatibility)
         ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-3">
              توافق عتاد شامل 100%
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
              يعمل مع كافة أجهزة وملحقات نقاط البيع
            </h2>
            <p className="text-base text-slate-600">
              لا داعي لتغيير عتادك الحالي. AN POS يدعم بروتوكولات الربط القياسية عبر USB، البلوتوث، والشبكة السلكية واللاسلكية.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">print</span>
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-1">طابعات الإيصالات الحرارية</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                مقاسات 80mm و 58mm عبر منافذ USB، Network LAN، أو Bluetooth (Epson, Xprinter, Bixolon, وغيرها).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">qr_code_scanner</span>
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-1">قارئات الباركود الليزرية</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                دعم الباركود 1D و 2D QR Code السلكية واللاسلكية، بالإضافة إلى القارئات المدمجة على طاولات الكاشير.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">point_of_sale</span>
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-1">أدراج النقدية (Cash Drawer)</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                فتح آلي لدرج النقود عند كل عملية تسديد نقدي أو طباعة الفاتورة بأمان تام عبر كيبل RJ11.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">scale</span>
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-1">الموازين الإلكترونية للباركود</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                قراءة باركود الوزن التلقائي من موازين السوبرماركت ومحلات الخضر والفواكه بدقة حسابية فورية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. INTERACTIVE PRODUCT SCREENSHOT TOUR (Real App Views)
         ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-slate-900 text-white relative overflow-hidden">
        {/* Ambient Dark Mesh */}
        <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold mb-3 border border-blue-500/30">
              جولة مرئية تفاعلية
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              استكشف واجهات النظام الحقيقية
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              انقر على التبويبات أدناه لمعاينة الشاشات الفعلية للنظام وقوة أدواته المحاسبية.
            </p>
          </div>

          {/* Screenshot Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {SCREENSHOT_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveScreenshotTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeScreenshotTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-102'
                    : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Active Screenshot Display in Laptop Frame */}
          {SCREENSHOT_TABS.filter((t) => t.id === activeScreenshotTab).map((tab) => (
            <div key={tab.id} className="animate-in fade-in duration-300">
              <div className="rounded-3xl overflow-hidden glass-panel-dark p-2 sm:p-3 border border-slate-700 shadow-2xl">
                <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800">
                  <img
                    src={tab.img}
                    alt={tab.title}
                    className="w-full h-auto object-cover max-h-[550px] mx-auto block"
                    loading="lazy"
                  />
                </div>
              </div>
              <p className="text-center text-slate-300 text-sm mt-4 font-medium max-w-xl mx-auto">
                {tab.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          6. PRICING & INSTANT ACTIVATION (Transparent SaaS Plan)
         ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-white" id="pricing">
        <div className="max-w-5xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-blue-200/80 shadow-xl relative overflow-hidden">
            {/* Top Right Badge */}
            <div className="absolute top-0 end-0 bg-secondary text-white px-6 py-2 rounded-es-2xl text-xs font-bold shadow-sm">
              ترخيص دائم مدى الحياة (DZD)
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Info Column */}
              <div className="lg:col-span-7 space-y-4 text-start">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                  بدون اشتراكات شهرية متكررة
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  ابدأ بـ 7 أيام تجربة مجانية، ثم فعّل مدى الحياة دفعة واحدة
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  حمّل البرنامج الآن وجرّبه بكامل صلاحياته في محلك. عند رضاك التام، ادفع مرة واحدة فقط لتحصل على ترخيص رسمي دائم ومفتاح تنشيط مدى الحياة.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-sm text-slate-800 font-semibold">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-emerald-600">check_circle</span>
                    <span>ترخيص أصلي دائم للحاسوب</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-emerald-600">check_circle</span>
                    <span>تحديثات مستمرة مجانية</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-emerald-600">check_circle</span>
                    <span>دعم فني وتدريب عبر الهاتف والواتساب</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-emerald-600">check_circle</span>
                    <span>تطبيق أندرويد للهاتف مدمج</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/80">
                  <span className="text-xs font-bold text-slate-500 block mb-2">طرق الدفع والتسديد المقبولة:</span>
                  <div className="flex flex-wrap gap-2 text-xs font-semibold">
                    <span className="bg-slate-100 px-3 py-1 rounded-lg text-slate-700">بريدي موب (BaridiMob)</span>
                    <span className="bg-slate-100 px-3 py-1 rounded-lg text-slate-700">حساب CCP الجاري</span>
                    <span className="bg-slate-100 px-3 py-1 rounded-lg text-slate-700">تحويل فوري عبر الموزعين</span>
                  </div>
                </div>
              </div>

              {/* Price Card */}
              <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-lg text-center">
                <div className="pb-6 border-b border-slate-800">
                  <span className="text-xs text-slate-400 font-semibold block mb-1">الترخيص الشامل الدائم</span>
                  <div className="flex items-baseline justify-center gap-1 font-mono">
                    <span className="text-4xl sm:text-5xl font-black text-emerald-400">15,000</span>
                    <span className="text-lg text-slate-300 font-bold">دج</span>
                  </div>
                  <span className="text-xs text-emerald-400/90 font-medium block mt-1">
                    دفعة واحدة فقط مدى الحياة • 0 دج اشتراك شهري
                  </span>
                </div>

                <div className="py-4 space-y-2 text-xs text-slate-300 text-start">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-emerald-400">bolt</span>
                    <span>تفعيل فوري خلال دقائق بعد إرسال الوصل</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-blue-400">support_agent</span>
                    <span>تركيب ومساعدة عن بُعد عبر AnyDesk</span>
                  </div>
                </div>

                <div className="space-y-2 mt-2">
                  <Link
                    to="/downloads"
                    className="btn-shimmer w-full py-3 bg-secondary hover:bg-blue-700 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    <span>تحميل النسخة وتجربتها مجاناً</span>
                  </Link>
                  <a
                    href={WA_ACTIVATE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    <span>طلب التفعيل المباشر عبر واتساب</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. BOTTOM ASSISTANCE / CONTACT BANNER
         ======================================================== */}
      <section className="py-12 px-4 sm:px-6 lg:px-12 bg-slate-50">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-blue-300 shrink-0">
              <span className="material-symbols-outlined text-[32px]">support_agent</span>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-1">هل تحتاج مساعدة لاختيار العتاد أو الاستفسار؟</h4>
              <p className="text-xs sm:text-sm text-blue-200">
                فريقنا متاح لمساعدتك في ربط الطابعات وإعداد النظام لمتجرك في أي ولاية.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-colors shrink-0 shadow-md"
          >
            تواصل مع مستشار العتاد
          </Link>
        </div>
      </section>
    </div>
  )
}
