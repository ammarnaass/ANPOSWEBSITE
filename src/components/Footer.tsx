import { Link } from 'react-router-dom'
import { SITE } from '../lib/site'

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low shadow-[0_-1px_8px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl mb-space-xl">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-space-sm mb-space-sm">
              <img src="/logo.png" alt="شعار AN POS" className="w-9 h-9 rounded-xl object-contain shadow-sm" />
              <span className="font-title-lg text-title-lg text-on-surface font-bold">AN POS الجزائر</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
              المنظومة المحاسبية والبيعية المتكاملة لإدارة المحلات التجارية ونقاط البيع في الجزائر، مهيأة للعمل المكتبي والسحابي وتطبيقات الهواتف الذكية.
            </p>
            <div className="flex items-center gap-space-xs text-on-surface-variant mb-space-md">
              <span className="material-symbols-outlined text-[18px] text-secondary">verified</span>
              <span className="font-label-sm text-label-sm">متوافق مع المعايير الجبائية والمحاسبية الجزائرية</span>
            </div>

            {/* Developer Community / Socials */}
            <div className="flex flex-col gap-1.5 pt-2 border-t border-outline-variant/30">
              <span className="font-label-keycap text-label-keycap text-on-surface-variant">قنوات ومجتمع المطور:</span>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={SITE.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors"
                >
                  فيسبوك
                </a>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors"
                >
                  إنستغرام ({SITE.social.instagramHandle})
                </a>
                <a
                  href={SITE.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors"
                >
                  يوتيوب ({SITE.social.youtubeHandle})
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <div className="font-title-lg text-title-lg text-on-surface mb-space-md font-bold">روابط سريعة</div>
            <ul className="space-y-space-xs">
              <li dir="rtl">
                <Link className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" to="/">
                  الرئيسية للنظام
                </Link>
              </li>
              <li>
                <Link className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" to="/features">
                  مميزات نقاط البيع
                </Link>
              </li>
              <li>
                <Link className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" to="/downloads">
                  تنزيل حزمة التثبيت
                </Link>
              </li>
              <li>
                <Link className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" to="/pricing">
                  التسعير وطرق التفعيل
                </Link>
              </li>
              <li>
                <Link className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" to="/support">
                  مركز المساعدة والأسئلة الشائعة
                </Link>
              </li>
              <li>
                <Link className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" to="/contact">
                  طلب عرض تجريبي واستشارة
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Payment Methods */}
          <div>
            <div className="font-title-lg text-title-lg text-on-surface mb-space-md font-bold">طرق الدفع والتسديد المعتمدة</div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-space-sm">
              نوفر وسائل تسديد محلية آمنة وفورية لتفعيل رخصتك مدى الحياة مباشرة:
            </p>
            <div className="space-y-space-xs font-body-md text-body-md text-on-surface-variant">
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-[20px] text-secondary">credit_card</span>
                <span>بريدي موب (BaridiMob)</span>
              </div>
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-[20px] text-secondary">account_balance</span>
                <span>حساب البريد الجاري (CCP)</span>
              </div>
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-[20px] text-secondary">payments</span>
                <span>حوالة ودفع نقدي مباشر</span>
              </div>
            </div>
          </div>

          {/* Col 4: Support Center */}
          <div>
            <div className="font-title-lg text-title-lg text-on-surface mb-space-md font-bold">مركز الدعم والمبيعات</div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-space-sm">
              {SITE.waDescription}
            </p>
            <div className="space-y-2 font-body-md text-body-md text-on-surface-variant">
              {/* WhatsApp Links */}
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-on-tertiary-container">chat</span>
                <span className="font-semibold text-on-surface">واتساب:</span>
                <a
                  href={SITE.wa1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline font-bold"
                  dir="ltr"
                >
                  {SITE.phone1} (1)
                </a>
                <span>-</span>
                <a
                  href={SITE.wa2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline font-bold"
                  dir="ltr"
                >
                  {SITE.phone2} (2)
                </a>
              </div>

              {/* Phone Calls */}
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">call</span>
                <span className="font-semibold text-on-surface">اتصال:</span>
                <a href={SITE.tel1} className="hover:underline font-medium" dir="ltr">{SITE.phone1}</a>
                <span>أو</span>
                <a href={SITE.tel2} className="hover:underline font-medium" dir="ltr">{SITE.phone2}</a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">mail</span>
                <a href={`mailto:${SITE.email}`} className="hover:underline" dir="ltr">{SITE.email}</a>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-2 pt-1 text-on-surface-variant">
                <span className="material-symbols-outlined text-[20px]">schedule</span>
                <span className="font-label-sm text-label-sm">{SITE.hours}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-space-lg border-t border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-space-md font-body-md text-body-md text-on-surface-variant">
          <p>© 2025 AN POS الجزائر. جميع الحقوق محفوظة.</p>
          <p className="font-label-sm text-label-sm text-on-surface-variant/80">
            برنامج معتمد لإدارة المخزون ونقاط البيع وفق القانون الجبائي والرقمنة الوطنية.
          </p>
        </div>
      </div>
    </footer>
  )
}
