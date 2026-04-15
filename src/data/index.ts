export type Lang = 'ar' | 'en'

export interface Bilingual {
  ar: string
  en: string
}

export interface Product {
  id: number
  image: string
  nameAR: string
  nameEN: string
  descAR: string
  descEN: string
  origin: string
  colors: string[]
}

export interface Activity {
  ar: string
  en: string
}

export const COMPANY = {
  nameAR: 'دار السلطان الجديدة للمفروشات',
  nameEN: 'Dar Al Sultan Al Jadida for Furnishings',
  taglineAR: 'أثاث يليق بمكانتك',
  taglineEN: 'Furnishings worthy of your stature',
  locationAR: 'ترهونة، ليبيا',
  locationEN: 'Tarhuna, Libya',
  whatsapp: '+0944371217',
  phone: '+0921381513',
  license: '2101512',
  registryRef: '1351',
  licenseFrom: '2026/04/01',
  licenseTo: '2027/04/01',
  capital: '30,000',
  currency: 'LYD',
  duration: '25 years',
  type: 'LLC',
} as const

export const PRODUCTS: Product[] = [
  {
    id: 1,
    image: '/products/carpet-1-libyan-grid.jpg',
    nameAR: 'البساط الليبي المخطط',
    nameEN: 'Traditional Libyan Striped Carpet',
    descAR: 'مصنوع يدوياً بألوان الأحمر والأسود والذهبي',
    descEN: 'Handwoven in red, black and gold — classic Libyan style',
    origin: 'Libya',
    colors: ['#8B1A1A', '#1a1a3e', '#D4A017', 'white'],
  },
  {
    id: 2,
    image: '/products/carpet-3-turkish-diamond.jpg',
    nameAR: 'البساط الأمازيغي بنقش الغزلان',
    nameEN: 'Berber Amazigh Deer Motif Carpet',
    descAR: 'نقوش غزلان أمازيغية أصيلة على خلفية خمرية',
    descEN: 'Authentic Berber deer patterns on deep burgundy',
    origin: 'Libya',
    colors: ['#6B1111', '#2d5a2d', 'white', '#1a1a1a'],
  },
  {
    id: 3,
    image: '/products/carpet-4-amazigh-deer.jpg',
    nameAR: 'السجادة التركية الكلاسيكية',
    nameEN: 'Classic Turkish Carpet',
    descAR: 'صناعة تركية فاخرة بنقش المعينات',
    descEN: 'Premium Made in Türkiye — diamond medallion pattern',
    origin: 'Türkiye',
    colors: ['#8B1A1A', '#D4A017', '#1a1a3e', 'white'],
  },
]

export const ACTIVITIES: Activity[] = [
  { ar: 'استيراد الملابس بجميع أنواعها', en: 'Clothing import — all types' },
  { ar: 'الأقمشة والمنسوجات والسجاد', en: 'Fabrics, textiles & carpets' },
  { ar: 'الأحذية والحقائب والمصنوعات الجلدية', en: 'Shoes, bags & leather goods' },
  { ar: 'آلات ومستلزمات الحياكة والتطريز', en: 'Sewing & embroidery equipment' },
]

export const TEXT = {
  nav: {
    home: { ar: 'الرئيسية', en: 'Home' },
    products: { ar: 'المنتجات', en: 'Products' },
    about: { ar: 'من نحن', en: 'About' },
    contact: { ar: 'تواصل معنا', en: 'Contact' },
  },
  hero: {
    badge: { ar: 'الفخامة والأناقة منذ عقود', en: 'Luxury & elegance for decades' },
    heading: { ar: 'أثاث يليق بمكانتك', en: 'Furnishings worthy of your stature' },
    sub: {
      ar: 'نوفر لك أرقى المفروشات والسجاد المستورد من أفضل المصانع العالمية، بجودة لا تُضاهى وأسعار تنافسية.',
      en: 'We bring you the finest furnishings and imported carpets from the world\'s best manufacturers, with unmatched quality and competitive prices.',
    },
    ctaBrowse: { ar: 'تصفح المجموعات', en: 'Browse Collections' },
    ctaContact: { ar: 'تواصل معنا', en: 'Contact Us' },
    statProducts: { ar: 'منتج', en: 'Products' },
    statYears: { ar: 'سنة خبرة', en: 'Years Experience' },
    statCustomers: { ar: 'عميل سعيد', en: 'Happy Customers' },
  },
  marquee: {
    items: {
      ar: ['سجاد تركي', 'مفروشات ليبية', 'أقمشة فاخرة', 'بُسط يدوية', 'مستلزمات الحياكة', 'حقائب جلدية', 'أحذية مستوردة'],
      en: ['Turkish Carpets', 'Libyan Furnishings', 'Luxury Fabrics', 'Handwoven Rugs', 'Sewing Supplies', 'Leather Bags', 'Imported Shoes'],
    },
  },
  trustStory: {
    eyebrow: { ar: 'قصتنا', en: 'Our Story' },
    headingBeforeGold: { ar: 'رحلتنا نحو الجودة و', en: 'Our journey toward quality and ' },
    headingGold: { ar: 'الأصالة', en: 'authenticity' },
    paragraph: {
      ar: 'تأسست دار السلطان الجديدة للمفروشات لتكون وجهتك الأولى للمفروشات الفاخرة في ليبيا. نستورد أجود أنواع السجاد والأقمشة من تركيا وأفضل المصانع العالمية، ونقدم لك منتجات تجمع بين الأصالة والعصرية. مقرنا في ترهونة، ونخدم جميع أنحاء ليبيا بالتوصيل المجاني.',
      en: 'Dar Al Sultan Al Jadida for Furnishings was established to be your first choice for luxury furnishings in Libya. We import the finest carpets and fabrics from Türkiye and the world\'s leading manufacturers, offering products that combine heritage with a contemporary feel. Based in Tarhuna, we serve all of Libya with free delivery.',
    },
    stats: [
      {
        numberAR: '+١٠٠٠',
        numberEN: '+1,000',
        label: { ar: 'عميل سعيد', en: 'Happy customers' },
      },
      {
        numberAR: '٥',
        numberEN: '5',
        label: { ar: 'مجموعات حصرية', en: 'Exclusive collections' },
      },
      {
        numberAR: '١٥+',
        numberEN: '15+',
        label: { ar: 'سنة في السوق', en: 'Years in the market' },
      },
      {
        numberAR: '١٠٠٪',
        numberEN: '100%',
        label: { ar: 'توصيل مجاني', en: 'Free delivery' },
      },
    ],
    highlights: [
      {
        title: { ar: 'تنوع المجموعات', en: 'Diverse collections' },
        body: {
          ar: 'من الزرابي الليبية اليدوية إلى السجاد التركي الفاخر — لدينا ما يناسب كل ذوق وميزانية.',
          en: 'From handmade Libyan rugs to premium Turkish carpets — we have something for every taste and budget.',
        },
        icon: 'Layers' as const,
      },
      {
        title: { ar: 'جودة لا تُضاهى', en: 'Unmatched quality' },
        body: {
          ar: 'كل قطعة مختارة بعناية من أفضل المصانع والحرفيين في ليبيا وتركيا وآسيا الوسطى.',
          en: 'Every piece is carefully selected from leading factories and artisans in Libya, Türkiye, and Central Asia.',
        },
        icon: 'Sparkles' as const,
      },
      {
        title: { ar: 'خدمة أنحاء ليبيا', en: 'Serving all of Libya' },
        body: {
          ar: 'نوصل إلى جميع أنحاء ليبيا مجاناً من مقرنا في ترهونة. تواصل معنا عبر واتساب لأي طلب.',
          en: 'We deliver free nationwide from our base in Tarhuna. Message us on WhatsApp for any order.',
        },
        icon: 'MapPin' as const,
      },
    ],
  },
  products: {
    eyebrow: { ar: 'مجموعاتنا', en: 'Our Collections' },
    heading: { ar: 'أجود السجاد والمفروشات', en: 'Finest Carpets & Furnishings' },
    headingGold: { ar: 'المختارة لك', en: 'Selected for You' },
    origin: { ar: 'المنشأ', en: 'Origin' },
    orderNow: { ar: 'اطلب الآن', en: 'Order Now' },
    viewAll: { ar: 'عرض جميع المنتجات', en: 'View All Products' },
  },
  whyUs: {
    eyebrow: { ar: 'لماذا نحن', en: 'Why Choose Us' },
    heading: { ar: 'نقدم لك الأفضل', en: 'We Offer the Best' },
    headingGold: { ar: 'دائماً', en: 'Always' },
    features: [
      {
        titleAR: 'جودة مضمونة',
        titleEN: 'Quality Guaranteed',
        descAR: 'منتجات أصلية من أفضل المصانع العالمية مع ضمان الجودة',
        descEN: 'Authentic products from the world\'s best factories with quality assurance',
        icon: 'Shield' as const,
      },
      {
        titleAR: 'توصيل مجاني',
        titleEN: 'Free Delivery',
        descAR: 'نوصل لك طلبك أينما كنت في ليبيا مجاناً',
        descEN: 'We deliver your order anywhere in Libya for free',
        icon: 'Truck' as const,
      },
      {
        titleAR: 'تصميم مخصص',
        titleEN: 'Custom Design',
        descAR: 'نصمم لك مفروشات حسب ذوقك ومقاسات منزلك',
        descEN: 'We design furnishings tailored to your taste and home dimensions',
        icon: 'Palette' as const,
      },
      {
        titleAR: 'تقسيط بدون فوائد',
        titleEN: 'Interest-Free Installments',
        descAR: 'خطط دفع مريحة بدون أي فوائد إضافية',
        descEN: 'Comfortable payment plans with zero additional interest',
        icon: 'CreditCard' as const,
      },
    ],
  },
  about: {
    eyebrow: { ar: 'من نحن', en: 'About Us' },
    heading: { ar: 'دار السلطان الجديدة', en: 'Dar Al Sultan Al Jadida' },
    headingGold: { ar: 'للمفروشات', en: 'for Furnishings' },
    story: {
      ar: 'تأسست دار السلطان الجديدة للمفروشات لتكون وجهتك الأولى للمفروشات الفاخرة في ليبيا. نستورد أجود أنواع السجاد والأقمشة من تركيا وأفضل المصانع العالمية، ونقدم لك منتجات تجمع بين الأصالة والعصرية. مقرنا في ترهونة، ونخدم جميع أنحاء ليبيا بالتوصيل المجاني.',
      en: 'Dar Al Sultan Al Jadida for Furnishings was established to be your premier destination for luxury furnishings in Libya. We import the finest carpets and fabrics from Türkiye and the world\'s best manufacturers, offering products that blend heritage with modernity. Based in Tarhuna, we serve all of Libya with free delivery.',
    },
    activitiesTitle: { ar: 'أنشطتنا التجارية', en: 'Our Business Activities' },
    licenseTitle: { ar: 'الترخيص الرسمي', en: 'Official License' },
    licenseNo: { ar: 'رقم الترخيص', en: 'License No.' },
    registryRef: { ar: 'رقم القيد', en: 'Registry Ref.' },
    validFrom: { ar: 'صالح من', en: 'Valid From' },
    validTo: { ar: 'صالح حتى', en: 'Valid Until' },
    capital: { ar: 'رأس المال', en: 'Capital' },
    companyType: { ar: 'نوع الشركة', en: 'Company Type' },
    duration: { ar: 'المدة', en: 'Duration' },
    llc: { ar: 'شركة ذات مسؤولية محدودة', en: 'LLC' },
  },
  contactCTA: {
    heading: { ar: 'هل أعجبك ما رأيت؟', en: 'Like what you see?' },
    sub: { ar: 'تواصل معنا الآن واحصل على أفضل العروض', en: 'Get in touch now for the best deals' },
    whatsapp: { ar: 'واتساب', en: 'WhatsApp' },
    phone: { ar: 'اتصل بنا', en: 'Call Us' },
  },
  footer: {
    rights: { ar: 'جميع الحقوق محفوظة', en: 'All rights reserved' },
    quickLinks: { ar: 'روابط سريعة', en: 'Quick Links' },
    contactUs: { ar: 'تواصل معنا', en: 'Contact Us' },
    legal: { ar: 'معلومات قانونية', en: 'Legal Info' },
    licenseLabel: { ar: 'رقم الترخيص', en: 'License No.' },
  },
  productsPage: {
    heading: { ar: 'جميع المنتجات', en: 'All Products' },
    sub: { ar: 'تصفح مجموعتنا الكاملة من أفخر السجاد والمفروشات', en: 'Browse our complete collection of finest carpets and furnishings' },
  },
  aboutPage: {
    heading: { ar: 'قصتنا', en: 'Our Story' },
    sub: { ar: 'تعرف على دار السلطان الجديدة للمفروشات', en: 'Get to know Dar Al Sultan Al Jadida for Furnishings' },
    docsTitle: { ar: 'الوثائق الرسمية', en: 'Official Documents' },
    closingCta: {
      ar: 'هل تريد معرفة المزيد؟ تواصل معنا',
      en: 'Want to know more? Get in touch with us',
    },
    closingCtaButton: { ar: 'تواصل معنا الآن', en: 'Contact us now' },
  },
} as const
