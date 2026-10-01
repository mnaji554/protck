import React from 'react';
import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <footer className="bg-gradient-primary text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className={`text-2xl font-bold mb-6 ${isArabic ? 'text-right' : 'text-left'}`}>{t('footer.getInTouch')}</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaPhone className="text-2xl" />
                <p>+966-503653836</p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-2xl" />
                <p>info@protck.com</p>
              </div>
              <div className="flex items-center gap-3">
                <FaGlobe className="text-2xl" />
                <p>protck.com</p>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-2xl" />
                <p>Riyadh, Saudi Arabia</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className={`text-2xl font-bold mb-6 ${isArabic ? 'text-right' : 'text-left'}`}>{t('footer.followUs')}</h3>
            <div className="flex gap-6">
              <a href="#" className="text-4xl hover:scale-110 transition-transform">
                <FaLinkedin />
              </a>
              <a href="#" className="text-4xl hover:scale-110 transition-transform">
                <FaTwitter />
              </a>
              <a href="#" className="text-4xl hover:scale-110 transition-transform">
                <FaFacebook />
              </a>
            </div>

            {/* Quick Links */}
            <div className="mt-8">
              <h4 className={`font-bold mb-3 ${isArabic ? 'text-right' : 'text-left'}`}>{t('footer.quickLinks')}</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:underline">{t('footer.services')}</a></li>
                <li><a href="#why-us" className="hover:underline">{t('footer.whyUs')}</a></li>
                <li><a href="#contact" className="hover:underline">{t('footer.contact')}</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
