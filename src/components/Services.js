import React from 'react';
import { motion } from 'framer-motion';
import { FaCogs, FaCode, FaGlobe, FaMobileAlt, FaUsers, FaBriefcase } from 'react-icons/fa';
import { useServicesStore } from '../store/servicesStore';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';

const iconMap = {
  FaCogs,
  FaCode,
  FaGlobe,
  FaMobileAlt,
  FaUsers,
  FaBriefcase,
};

const getIconComponent = (iconName, fallback = FaCogs) => {
  if (typeof iconName === 'function') return iconName;
  return iconMap[iconName] || fallback;
};

const Services = () => {
  const services = useServicesStore((state) => state.services);
  const loading = useServicesStore((state) => state.loading);
  const { ref, inView } = useInView({ threshold: 0.1 });
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';

  const displayServices = Array.isArray(services) ? services : [];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${isArabic ? 'text-right' : 'text-left'}`}>{t('services.title')}</h2>
          <p className={`text-gray-600 max-w-2xl mx-auto ${isArabic ? 'text-right' : 'text-left'}`}>{t('services.description')}</p>
        </motion.div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading && displayServices.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">{t('services.loading')}</div>
          ) : null}

          {!loading && displayServices.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">{t('services.empty')}</div>
          ) : null}

          {displayServices.map((service, index) => {
            const IconComponent = getIconComponent(service.icon, FaCogs);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-40 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-indigo-600 text-white text-2xl shadow-md">
                    <IconComponent />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{service.name}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <a href={`/services/${service.slug || ''}`} className="text-sm font-medium text-indigo-600 hover:underline">{t('services.learnMore')}</a>
                  <span className="text-sm text-gray-400">{service.service_type || ''}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
