import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/icons/logo.png';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="inline-block bg-gradient-to-r from-pink-500 to-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">{t('hero.badge')}</p>

            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight ${isArabic ? 'text-right' : 'text-left'}`}>
              {t('hero.titleLine1')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600">{t('hero.titleHighlight')}</span>{' '}
              {t('hero.titleLine2')}
              <br /> {t('hero.titleLine3')}
            </h1>

            <p className={`text-lg text-gray-600 max-w-2xl ${isArabic ? 'text-right' : 'text-left'}`}>{t('hero.description')}</p>

            <div className="flex items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#services"
                className="inline-block btn-primary px-6 py-3 font-medium shadow-lg"
              >
                {t('hero.cta')}
              </motion.a>

              <a href="#contact" className={`inline-block text-sm text-gray-700 hover:text-gradient ${isArabic ? 'text-right' : 'text-left'}`}>{t('hero.secondary')}</a>
            </div>
          </motion.div>

          {/* Right - Logo Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 bg-white/60 backdrop-blur rounded-3xl shadow-2xl flex items-center justify-center">
                <motion.img
                  src={logo}
                  alt="Protck logo"
                  animate={{ rotate: [0, 4, -4, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="w-40 h-40 object-contain"
                />
              </div>
              <div className="absolute -left-6 -bottom-6 w-40 h-40 rounded-xl bg-gradient-to-tr from-pink-300 to-indigo-300 opacity-30 transform rotate-12 blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
