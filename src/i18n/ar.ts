// بنية i18n جاهزة للتوسعة لاحقاً — القاموس العربي هو الافتراضي
export const ar = {
  brand: 'AN POS',
  nav: {
    home: 'الرئيسية',
    features: 'المميزات',
    downloads: 'التحميل',
    pricing: 'الأسعار',
    client: 'بوابة العميل',
    support: 'الدعم',
    contact: 'تواصل معنا',
  },
  cta: {
    download: 'حمّل التطبيق – جرّبه 7 أيام مجاناً',
    demo: 'فعّل نسختك — 15,000 دج',
    login: 'بوابة العميل',
  },
  hero: {
    title: 'نظّم مبيعاتك من جهاز واحد أو عدة أجهزة',
    subtitle:
      'AN POS نظام نقاط بيع لسطح المكتب والهاتف — كاشير سريع، مخزون لحظي، فواتير وطباعة حرارية، وتقارير واضحة. حمّله الآن وابدأ تجربتك المجانية.',
  },
  footer: {
    rights: '© 2025 AN POS. جميع الحقوق محفوظة.',
  },
} as const

export type Dict = typeof ar
export const t = ar
