import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StudioBanner from './components/StudioBanner';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Packages from './components/Packages';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { NAV_LINKS } from './data/siteData';

export default function App() {
  const [activeSection, setActiveSection] = useState('services');
  const [prefilledInquiry, setPrefilledInquiry] = useState(null);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSelectInquiry = (inquiry) => {
    setPrefilledInquiry({ ...inquiry, timestamp: Date.now() });
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-shell">
      <a href="#services" className="skip-link">
        Skip to main content
      </a>

      <Navbar activeSection={activeSection} />

      <main>
        <Hero />
        <StudioBanner />
        <Services />
        <Portfolio onSelectInquiry={handleSelectInquiry} />
        <Process />
        <Packages onSelectInquiry={handleSelectInquiry} />
        <About />
        <FAQ />
        <Contact prefilledInquiry={prefilledInquiry} />
      </main>

      <Footer />
    </div>
  );
}

