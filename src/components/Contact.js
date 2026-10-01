import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';
import { contactAPI } from '../services/api';
import toast from 'react-hot-toast';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
  });

  const [loading, setLoading] = useState(false);
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await contactAPI.submit(formData);
      toast.success(t('contact.success'));
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        phone: '',
      });
    } catch (error) {
      toast.error(t('contact.error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isArabic ? 'text-right' : 'text-left'}`}>{t('contact.title')}</h2>
          <p className={`text-lg text-gray-600 ${isArabic ? 'text-right' : 'text-left'}`}>{t('contact.description')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl text-gradient flex-shrink-0 mt-1">
                <FaPhone />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">{t('contact.phone')}</h4>
                <p className="text-gray-600">+966-503653836</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl text-gradient flex-shrink-0 mt-1">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">{t('contact.email')}</h4>
                <p className="text-gray-600">info@protck.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl text-gradient flex-shrink-0 mt-1">
                <FaGlobe />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">{t('contact.website')}</h4>
                <p className="text-gray-600">protck.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl text-gradient flex-shrink-0 mt-1">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">{t('contact.location')}</h4>
                <p className="text-gray-600">Riyadh, Saudi Arabia</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('contact.name')}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gradient-primary transition-colors"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('contact.yourEmail')}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gradient-primary transition-colors"
              />
            </div>

            <div>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t('contact.phoneNumber')}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gradient-primary transition-colors"
              />
            </div>

            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={t('contact.subject')}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gradient-primary transition-colors"
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('contact.message')}
                rows="5"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gradient-primary transition-colors resize-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="btn-primary w-full text-lg disabled:opacity-50"
            >
              {loading ? t('contact.sending') : t('contact.send')}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
