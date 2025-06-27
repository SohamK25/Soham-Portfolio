import React, { useEffect, useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';
import StarBackground from '../components/StarBackground';
import DaySky from '../components/DayBackground';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contacts from '../components/Contacts';
import ArrowToTop from '../components/ArrowToTop';
import Educations from '../components/Educations';

const Home = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const isDarkMode = root.classList.contains('dark');
    setIsDark(isDarkMode);

    const observer = new MutationObserver(() => {
      const updatedDarkMode = root.classList.contains('dark');
      setIsDark(updatedDarkMode);
    });

    observer.observe(root, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      <ThemeToggle />

      {isDark ? <StarBackground /> : <DaySky />}

      <Navbar />

      <main className='pt-[5rem] md:pt-[7rem]'>
        <HeroSection />
        <About />
        <Educations />
        <Skills />
        <Projects />
        <Contacts />
      </main>

      <ArrowToTop />
    </div>
  );
};

export default Home;
