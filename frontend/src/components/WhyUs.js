import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaRocket, FaHourglass, FaHeadset, FaLock, FaChartLine } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { useServicesStore } from '../store/servicesStore';
import { useLanguage } from '../context/LanguageContext';

const iconMap = {
  FaUsers,
  FaRocket,
  FaHourglass,
  FaHeadset,
  FaLock,
  FaChartLine,
};

const getIconComponent = (iconName, fallback = FaUsers) => {
  if (typeof iconName === 'function') return iconName;
  return iconMap[iconName] || fallback;
};

const WhyUs = () => {
  const whyUs = useServicesStore((state) => state.whyUs);
  const loading = useServicesStore((state) => state.loading);
  const { ref, inView } = useInView({ threshold: 0.1 });
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';

  const displayFeatures = Array.isArray(whyUs) ? whyUs : [];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${isArabic ? 'text-right' : 'text-left'}`}>{t('whyUs.title')}</h2>
          <p className={`text-gray-600 max-w-2xl mx-auto ${isArabic ? 'text-right' : 'text-left'}`}>{t('whyUs.description')}</p>
        </motion.div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading && displayFeatures.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">{t('whyUs.loading')}</div>
          ) : null}

          {!loading && displayFeatures.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">{t('whyUs.empty')}</div>
          ) : null}

          {displayFeatures.map((feature, index) => {
            const IconComponent = getIconComponent(feature.icon, FaUsers);
            return (
              <motion.div
                key={feature.id || index}
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="p-6 border rounded-2xl hover:shadow-lg transition-shadow bg-white"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl">
                    <IconComponent />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
