// src/App.tsx

import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { navLinks, stats, skills, experiences, projects, socialLinks } from './data/portfolioData';
import './App.css';

const App: React.FC = () => {
  // Intersection Observer untuk animasi scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    const animateEls = document.querySelectorAll<HTMLElement>('.animate-on-scroll');
    animateEls.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = `opacity 0.7s ease ${i * 0.06}s, transform 0.7s ease ${i * 0.06}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar links={navLinks} logoName="A. Rizky" />

      <Hero
        name="Ahmad"
        nameAccent="Rizky"
        title="Full Stack Developer & UI Engineer"
        description="Membangun pengalaman digital yang bermakna—dari antarmuka yang elegan hingga arsitektur backend yang kokoh."
        stats={stats}
      />

      <About skills={skills} />

      <Experience experiences={experiences} />

      <Projects projects={projects} />

      <Contact
        email="ahmad.rizky@email.com"
        socialLinks={socialLinks}
      />

      <footer style={styles.footer}>
        <span>© {new Date().getFullYear()} Ahmad Rizky</span>
        <span>Dibuat dengan ♥ di Bandung</span>
      </footer>
    </>
  );
};

const styles: Record<string, React.CSSProperties> = {
  footer: {
    padding: '2rem 3rem',
    borderTop: '1px solid var(--border)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '12px',
    color: 'var(--muted)',
  },
};

export default App;
