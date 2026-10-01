import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Projects from '../components/Projects';
import Partners from '../components/Partners';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <WhyUs />
      <Projects />
      <Partners />
      <Contact />
    </div>
  );
};

export default Home;
