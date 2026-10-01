import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      whyUs: 'Why Us',
      projects: 'Projects',
      partners: 'Partners',
      contact: 'Contact',
      switchLanguage: 'Switch language',
    },
    hero: {
      badge: 'Trusted by SMBs & Enterprises',
      titleLine1: 'Delivering',
      titleHighlight: 'modern',
      titleLine2: 'technical solutions',
      titleLine3: 'that scale with your business.',
      description: 'We design and build resilient systems, intuitive user experiences, and ongoing support so your team can focus on what matters.',
      cta: 'Explore Services',
      secondary: 'Contact Us',
    },
    services: {
      title: 'What We Do',
      description: 'Tailored solutions spanning ERP, web, mobile, and business automation to accelerate your operations.',
      loading: 'Loading services...',
      empty: 'No services available right now.',
      learnMore: 'Learn more',
    },
    whyUs: {
      title: 'Why Choose Protck?',
      description: 'We combine experienced teams, modern practices, and clear delivery processes to build reliable products.',
      loading: 'Loading reasons...',
      empty: 'No reasons available right now.',
    },
    projects: {
      title: 'Our Projects',
      description: 'A selection of recent work demonstrating how we turn ideas into scalable digital products.',
      loading: 'Loading projects...',
      empty: 'No projects available right now.',
      viewProject: 'View project',
    },
    partners: {
      title: 'Our Partners',
      description: 'We work with trusted partners to deliver stronger results for our customers.',
      loading: 'Loading partners...',
      empty: 'No partners available right now.',
      visitWebsite: 'Visit website',
    },
    contact: {
      title: 'Get In Touch',
      description: "We'd love to hear from you. Let's discuss your project.",
      phone: 'Phone',
      email: 'Email',
      website: 'Website',
      location: 'Location',
      name: 'Your Name',
      yourEmail: 'Your Email',
      phoneNumber: 'Phone Number',
      subject: 'Subject',
      message: 'Your Message',
      sending: 'Sending...',
      send: 'Send Message',
      success: 'Thank you! We will contact you soon.',
      error: 'Failed to send message. Please try again.',
    },
    footer: {
      getInTouch: 'Get In Touch',
      followUs: 'Follow Us',
      quickLinks: 'Quick Links',
      services: 'Services',
      whyUs: 'Why Us',
      contact: 'Contact',
      copyright: '© 2024 Protck. All rights reserved. | Complete Technical Solutions for Business Growth',
    },
    dashboard: {
      title: 'Dashboard',
      subtitle: "Welcome back! Here's what's happening with your business.",
      totalMessages: 'Total Messages',
      newMessages: 'New Messages',
      services: 'Services',
      teamMembers: 'Team Members',
      recentMessages: 'Recent Messages',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      status: 'Status',
      actions: 'Actions',
      empty: 'No messages yet',
      markAsRead: 'Mark as Read',
      failedLoad: 'Failed to load dashboard data',
      failedUpdate: 'Failed to update contact',
      markedAsRead: 'Marked as read',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      whyUs: 'لماذا بروتك؟',
      projects: 'المشاريع',
      partners: 'الشركاء',
      contact: 'تواصل معنا',
      switchLanguage: 'تبديل اللغة',
    },
    hero: {
      badge: 'موثوق به من قبل الشركات الصغيرة والكبيرة',
      titleLine1: 'نوفر',
      titleHighlight: 'حلولًا تقنية حديثة',
      titleLine2: 'تتكيف مع نمو',
      titleLine3: 'عملك وتوسعك.',
      description: 'نصمم ونبني أنظمة مرنة، وتجارب مستخدم بديهية، ودعمًا مستمرًا حتى تتمكن فريقك من التركيز على ما يهم.',
      cta: 'استكشف الخدمات',
      secondary: 'تواصل معنا',
    },
    services: {
      title: 'ما الذي نقدمه',
      description: 'حلول مخصصة تشمل أنظمة ERP والويب والموبايل وأتمتة الأعمال لتسريع عملياتك.',
      loading: 'جارٍ تحميل الخدمات...',
      empty: 'لا توجد خدمات متاحة حاليًا.',
      learnMore: 'اعرف المزيد',
    },
    whyUs: {
      title: 'لماذا تختار بروتك؟',
      description: 'نجمع بين فرق خبرة وممارسات حديثة وعمليات تسليم واضحة لبناء منتجات موثوقة.',
      loading: 'جارٍ تحميل الأسباب...',
      empty: 'لا توجد أسباب متاحة حاليًا.',
    },
    projects: {
      title: 'مشاريعنا',
      description: 'مجموعة من أحدث أعمالنا التي توضح كيف نحول الأفكار إلى منتجات رقمية قابلة للتطوير.',
      loading: 'جارٍ تحميل المشاريع...',
      empty: 'لا توجد مشاريع متاحة حاليًا.',
      viewProject: 'عرض المشروع',
    },
    partners: {
      title: 'شركاؤنا',
      description: 'نعمل مع شركاء موثوقين لتقديم نتائج أقوى لعملائنا.',
      loading: 'جارٍ تحميل الشركاء...',
      empty: 'لا توجد شراكات متاحة حاليًا.',
      visitWebsite: 'زيارة الموقع',
    },
    contact: {
      title: 'تواصل معنا',
      description: 'نحب أن نسمع منك. دعنا نناقش مشروعك.',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      website: 'الموقع الإلكتروني',
      location: 'الموقع',
      name: 'اسمك',
      yourEmail: 'بريدك الإلكتروني',
      phoneNumber: 'رقم الهاتف',
      subject: 'الموضوع',
      message: 'رسالتك',
      sending: 'جارٍ الإرسال...',
      send: 'إرسال الرسالة',
      success: 'شكرًا لك! سنواصل معك قريبًا.',
      error: 'فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.',
    },
    footer: {
      getInTouch: 'تواصل معنا',
      followUs: 'تابعنا',
      quickLinks: 'روابط سريعة',
      services: 'الخدمات',
      whyUs: 'لماذا بروتك؟',
      contact: 'تواصل معنا',
      copyright: '© 2024 بروتك. جميع الحقوق محفوظة. | حلول تقنية كاملة لنمو الأعمال',
    },
    dashboard: {
      title: 'لوحة التحكم',
      subtitle: 'مرحبًا بك مرة أخرى! إليك ما يحدث في عملك.',
      totalMessages: 'إجمالي الرسائل',
      newMessages: 'الرسائل الجديدة',
      services: 'الخدمات',
      teamMembers: 'أعضاء الفريق',
      recentMessages: 'الرسائل الأخيرة',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      subject: 'الموضوع',
      status: 'الحالة',
      actions: 'الإجراءات',
      empty: 'لا توجد رسائل بعد',
      markAsRead: 'وضع علامة مقروء',
      failedLoad: 'فشل تحميل بيانات لوحة التحكم',
      failedUpdate: 'فشل تحديث الرسالة',
      markedAsRead: 'تمت الإشارة إلى أنها مقروءة',
    },
  },
};

const getTranslation = (language, key) => {
  const path = key.split('.');
  return path.reduce((current, segment) => current?.[segment], translations[language]) || key;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ar');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((current) => (current === 'en' ? 'ar' : 'en'));
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t: (key) => getTranslation(language, key),
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
