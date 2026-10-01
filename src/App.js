import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { useServicesStore } from './store/servicesStore';
import { useLanguage } from './context/LanguageContext';

function App() {
  const fetchServices = useServicesStore((state) => state.fetchServices);
  const fetchWhyUs = useServicesStore((state) => state.fetchWhyUs);
  const fetchProjects = useServicesStore((state) => state.fetchProjects);
  const fetchPartners = useServicesStore((state) => state.fetchPartners);
  const { language } = useLanguage();

  useEffect(() => {
    fetchServices(language);
    fetchWhyUs(language);
    fetchProjects(language);
    fetchPartners(language);
  }, [fetchServices, fetchWhyUs, fetchProjects, fetchPartners, language]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
