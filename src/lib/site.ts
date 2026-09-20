// ثوابت الموقع — مصدر واحد للسعر والتجربة وقنوات التواصل
export const PRICE_DZD = '15,000 دج'
export const TRIAL_DAYS = 7

// أرقام التواصل والواتساب المعتمدة
export const WA_NUMBER_1 = '213555220620'
export const WA_NUMBER_2 = '213674784859'
export const SUPPORT_EMAIL = 'andev2000@gmail.com'

export const DEFAULT_WA_TEXT = 'السلام عليكم، أحتاج مساعدة أو استفسار بخصوص برنامج AN POS'

export const WA_LINK_1 = `https://wa.me/${WA_NUMBER_1}?text=${encodeURIComponent(DEFAULT_WA_TEXT)}`
export const WA_LINK_2 = `https://wa.me/${WA_NUMBER_2}?text=${encodeURIComponent(DEFAULT_WA_TEXT)}`

const msg = (text: string) => `https://wa.me/${WA_NUMBER_1}?text=${encodeURIComponent(text)}`

export const WA_GENERAL = WA_LINK_1
export const WA_ACTIVATE = msg('مرحباً، أريد تفعيل النسخة الكاملة من AN POS (15,000 دج).')
export const WA_GUIDE = msg('مرحباً، أريد دليل استخدام الطابعات الحرارية لتطبيق AN POS.')

// روابط التحميل الرسمية لبرنامج AN POS (نسخ الحاسوب)
export const DOWNLOAD_SETUP_URL = 'https://download1324.mediafire.com/0439fuzoyi7gryK6_jx8LE2mbT8PctS3hSWXzSrDFKtvMEl0KFZ5NxPCfIhCDAZHDjkrBMyPGvFmXMCouhRRbQv26UmybjBlomrma4mis0G54xbpU7TV9JpWuk1qvZwnziMuTLMCfiuZUMNTI9wp1D6aqcXGLK06q1itbB35kxytWg/6idvqu4gegekr72/AN+POS+Setup+0.0.0.exe'
export const DOWNLOAD_PORTABLE_URL = 'https://download1347.mediafire.com/cae04jian2vgsFsgrCA0JxLh0N1gFH1eF4sWXgXQdixr31fKnafTWLVtr4471yn-5yKBODhc3AhLIUmYJuFHMhri43A4C9SOr3AKFdbRtiT5qV1dlD3DRDlX39kDAAM4cAbzh1CJZdHAnauGcBPxANcivuutgnchylWe2wC4xRHVWw/jqe7q9gf6mfbu6y/AN+POS+0.0.0.exe'

// روابط تحميل تطبيق الهاتف (Android APK & Google Play)
export const DOWNLOAD_ANDROID_APK_URL = 'https://download.mediafire.com/anpos/AN-POS-Mobile.apk'
export const DOWNLOAD_GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.anpos.mobile'

export const SITE = {
  name: 'AN POS',
  tagline: 'نقاط البيع السريعة',
  logo: '/logo.png',
  phone1: '0555 22 06 20',
  phone2: '0674 78 48 59',
  tel1: 'tel:+213555220620',
  tel2: 'tel:+213674784859',
  wa1: WA_LINK_1,
  wa2: WA_LINK_2,
  email: SUPPORT_EMAIL,
  price: PRICE_DZD,
  trialDays: TRIAL_DAYS,
  downloads: {
    setup: DOWNLOAD_SETUP_URL,
    portable: DOWNLOAD_PORTABLE_URL,
    setupFileName: 'AN POS Setup 0.0.0.exe',
    portableFileName: 'AN POS 0.0.0.exe',
    androidApk: DOWNLOAD_ANDROID_APK_URL,
    androidApkFileName: 'AN-POS-Mobile.apk',
    googlePlay: DOWNLOAD_GOOGLE_PLAY_URL,
  },
  waDescription: 'تواصل مباشرة مع فريق الخبراء عبر تطبيق WhatsApp للتدخل السريع وحل المشاكل التقنية واستفسارات التشغيل.',
  ticketTitle: 'تذكرة مساعدة داخلية',
  ticketDescription: 'أرسل بلاغاً أو مشكلة برمجية مشفوعة ببيانات إصدار النظام وقاعدة البيانات للمتابعة.',
  phoneUrgentInfo: 'للحالات العاجلة وانقطاع العمل في أوقات الذروة، متاح من السبت إلى الخميس (08:00 - 20:00).',
  hours: 'السبت - الخميس (08:00 - 20:00)',
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com/andev2000',
    instagramHandle: '@andev2000',
    youtube: 'https://youtube.com/@andev20',
    youtubeHandle: '@andev20',
  },
}
