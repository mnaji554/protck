import React, { useState } from 'react';
import logo from '../assets/icons/logo.png';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.whyUs'), href: '#why-us' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.partners'), href: '#partners' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Protck logo" className="w-10 h-10 object-contain" />
            <span className="text-gradient font-bold text-xl hidden sm:inline">
              Protck
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-gradient transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={t('nav.switchLanguage')}
              className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700"
            >
              <FaGlobe />
              {language === 'en' ? 'العربية' : 'English'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2"
            aria-label="Open menu"
          >
            {isOpen ? (
              <FaTimes size={24} className="text-gradient" />
            ) : (
              <FaBars size={24} className="text-gradient" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={t('nav.switchLanguage')}
              className="mt-2 flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700"
            >
              <FaGlobe />
              {language === 'en' ? 'العربية' : 'English'}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
