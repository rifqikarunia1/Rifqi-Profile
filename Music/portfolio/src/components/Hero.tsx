// src/components/Hero.tsx

import React, { useEffect, useRef } from 'react';
import { StatItem } from '../types';

interface HeroProps {
  name: string;
  nameAccent: string;
  title: string;
  description: string;
  stats: StatItem[];
}

const Hero: React.FC<HeroProps> = ({ name, nameAccent, title, description, stats }) => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = heroRef.current?.querySelectorAll<HTMLElement>('.fade-up');
    items?.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.15}s`;
    });
  }, []);

  return (
    <section id="hero" ref={heroRef} style={styles.hero}>
      <div style={styles.heroBg} />
      <div style={styles.heroGrid} />

      <div style={styles.heroContent}>
        <p className="fade-up" style={styles.eyebrow}>
          <span style={styles.eyebrowLine} />
          Tersedia untuk proyek baru
        </p>
        <h1 className="fade-up" style={styles.heroName}>
          {name}<br />
          <em style={styles.accent}>{nameAccent}</em>
        </h1>
        <p className="fade-up" style={styles.heroTitle}>{title}</p>
        <p className="fade-up" style={styles.heroDesc}>{description}</p>
        <div className="fade-up" style={styles.heroCta}>
          <a href="#projects" style={styles.btnPrimary}>Lihat Karya</a>
          <a href="#contact" style={styles.btnGhost}>Hubungi Saya</a>
        </div>
      </div>

      <div style={styles.scrollIndicator}>
        <div style={styles.scrollLine} />
        <span>Scroll</span>
      </div>

      <div style={styles.heroStats}>
        {stats.map((stat) => (
          <div key={stat.label} style={styles.stat}>
            <span style={styles.statNum}>{stat.value}</span>
            <span style={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles: Record<string, React.CSSProperties> = {
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: '8rem 3rem 4rem',
    position: 'relative',
    overflow: 'hidden',
  },
  heroBg: {
    position: 'absolute',
    inset: 0,
    background:
      'radial-gradient(ellipse 60% 80% at 70% 50%, rgba(200,169,126,0.06) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 20% 30%, rgba(126,184,200,0.05) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  heroGrid: {
    position: 'absolute',
    inset: 0,
    backgroundImage:
      'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
    backgroundSize: '60px 60px',
    maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)',
    pointerEvents: 'none',
  },
  heroContent: {
    position: 'relative',
    maxWidth: '750px',
  },
  eyebrow: {
    fontSize: '11px',
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
    color: 'var(--accent)',
    marginBottom: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  eyebrowLine: {
    display: 'block',
    width: '32px',
    height: '1px',
    background: 'var(--accent)',
  },
  heroName: {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(3rem, 7vw, 5.5rem)',
    fontWeight: 300,
    lineHeight: 1.05,
    letterSpacing: '-0.02em',
    marginBottom: '0.3rem',
    color: 'var(--text)',
  },
  accent: {
    fontStyle: 'italic',
    color: 'var(--accent)',
  },
  heroTitle: {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
    fontWeight: 300,
    color: 'var(--muted)',
    marginBottom: '2rem',
    fontStyle: 'italic',
  },
  heroDesc: {
    fontSize: '16px',
    color: 'rgba(240,236,228,0.65)',
    maxWidth: '480px',
    marginBottom: '3rem',
    lineHeight: 1.8,
  },
  heroCta: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap' as const,
  },
  btnPrimary: {
    padding: '0.75rem 2rem',
    background: 'var(--accent)',
    color: '#0e0e0f',
    border: 'none',
    fontFamily: 'var(--font-sans)',
    fontSize: '13px',
    fontWeight: 500,
    letterSpacing: '0.06em',
    textTransform: 'uppercase' as const,
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'opacity 0.2s, transform 0.2s',
    display: 'inline-block',
  },
  btnGhost: {
    padding: '0.75rem 2rem',
    background: 'transparent',
    color: 'var(--text)',
    border: '1px solid var(--border)',
    fontFamily: 'var(--font-sans)',
    fontSize: '13px',
    fontWeight: 400,
    letterSpacing: '0.06em',
    textTransform: 'uppercase' as const,
    textDecoration: 'none',
    cursor: 'pointer',
    display: 'inline-block',
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: '3rem',
    left: '3rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    color: 'var(--muted)',
    fontSize: '11px',
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
  },
  scrollLine: {
    width: '40px',
    height: '1px',
    background: 'var(--muted)',
  },
  heroStats: {
    position: 'absolute',
    right: '3rem',
    bottom: '3rem',
    display: 'flex',
    gap: '3rem',
  },
  stat: {
    textAlign: 'right',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  statNum: {
    fontFamily: 'var(--font-serif)',
    fontSize: '2.2rem',
    fontWeight: 300,
    color: 'var(--accent)',
    lineHeight: 1,
  },
  statLabel: {
    fontSize: '11px',
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: 'var(--muted)',
  },
};

export default Hero;
