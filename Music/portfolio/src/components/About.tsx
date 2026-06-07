// src/components/About.tsx

import React from 'react';
import { Skill } from '../types';

interface AboutProps {
  skills: Skill[];
}

const About: React.FC<AboutProps> = ({ skills }) => {
  return (
    <section id="about" style={styles.section}>
      <p style={styles.sectionLabel}>01 — Tentang Saya</p>
      <div style={styles.grid}>
        <div>
          <h2 style={styles.heading}>
            Saya membangun produk yang{' '}
            <em style={styles.accent}>terasa hidup</em>
          </h2>
          <p style={styles.text}>
            Seorang Full Stack Developer berbasis di Bandung dengan ketertarikan mendalam pada
            desain antarmuka dan performa aplikasi. Saya percaya bahwa kode yang baik adalah
            kode yang terbaca seperti puisi.
          </p>
          <p style={styles.text}>
            Spesialisasi saya adalah React & TypeScript di frontend, Node.js & PostgreSQL di
            backend, dengan sentuhan UI yang kuat dan penuh perhatian terhadap detail.
          </p>
          <a href="#contact" style={styles.btnGhost}>
            Mari Berkolaborasi →
          </a>
        </div>

        <div>
          <p style={styles.skillsHeading}>Teknologi yang Dikuasai</p>
          <div style={styles.skillsGrid}>
            {skills.map((skill) => (
              <div key={skill.name} style={styles.skillTag}>
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: '6rem 3rem',
    background: 'var(--surface)',
  },
  sectionLabel: {
    fontSize: '11px',
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
    color: 'var(--accent)',
    marginBottom: '3.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '5rem',
    alignItems: 'start',
  },
  heading: {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: 300,
    lineHeight: 1.2,
    marginBottom: '1.5rem',
    color: 'var(--text)',
  },
  accent: {
    fontStyle: 'italic',
    color: 'var(--accent)',
  },
  text: {
    color: 'rgba(240,236,228,0.65)',
    lineHeight: 1.9,
    marginBottom: '1.5rem',
  },
  btnGhost: {
    display: 'inline-block',
    marginTop: '1rem',
    padding: '0.75rem 2rem',
    background: 'transparent',
    color: 'var(--text)',
    border: '1px solid var(--border)',
    fontFamily: 'var(--font-sans)',
    fontSize: '13px',
    letterSpacing: '0.06em',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  skillsHeading: {
    fontSize: '11px',
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    color: 'var(--muted)',
    marginBottom: '1rem',
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '0.5rem',
  },
  skillTag: {
    padding: '0.5rem 1rem',
    border: '1px solid var(--border)',
    fontSize: '12px',
    letterSpacing: '0.06em',
    color: 'var(--muted)',
    cursor: 'default',
    transition: 'border-color 0.2s, color 0.2s',
  },
};

export default About;
