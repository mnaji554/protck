import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useServicesStore } from '../store/servicesStore';
import { useLanguage } from '../context/LanguageContext';

const Partners = () => {
  const partners = useServicesStore((state) => state.partners);
  const { ref, inView } = useInView({ threshold: 0.1 });
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${isArabic ? 'text-right' : 'text-left'}`}>
            {t('partners.title')}
          </h2>
          <p className={`text-gray-600 max-w-2xl mx-auto ${isArabic ? 'text-right' : 'text-left'}`}>
            {t('partners.description')}
          </p>
        </motion.div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">{t('partners.empty')}</div>
          ) : null}

          {partners.map((partner, index) => (
            <motion.div
              key={partner.id || index}
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="p-6 border rounded-2xl hover:shadow-lg transition-shadow bg-gray-50"
            >
              {partner.logo ? (
                <img src={partner.logo} alt={partner.name} className="h-20 w-full object-contain mb-4" />
              ) : (
                <div className="h-20 flex items-center justify-center rounded-xl bg-white text-lg font-bold text-indigo-600 mb-4">
                  {partner.name}
                </div>
              )}

              <h3 className="text-lg font-semibold mb-2">{partner.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{partner.description}</p>

              {partner.website ? (
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-indigo-600 hover:underline"
                >
                  {t('partners.visitWebsite')}
                </a>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
