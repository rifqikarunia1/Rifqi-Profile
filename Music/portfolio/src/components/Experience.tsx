// src/components/Experience.tsx

import React from 'react';
import { Experience as ExperienceType } from '../types';

interface ExperienceProps {
  experiences: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" style={styles.section}>
      <p style={styles.sectionLabel}>02 — Pengalaman</p>
      <div style={styles.list}>
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            style={{
              ...styles.item,
              borderTop: index === 0 ? '1px solid var(--border)' : undefined,
            }}
          >
            <div style={styles.year}>{exp.period}</div>
            <div>
              <h3 style={styles.role}>{exp.role}</h3>
              <p style={styles.company}>{exp.company}</p>
              <p style={styles.desc}>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: '6rem 3rem',
  },
  sectionLabel: {
    fontSize: '11px',
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
    color: 'var(--accent)',
    marginBottom: '3.5rem',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
  },
  item: {
    display: 'grid',
    gridTemplateColumns: '180px 1fr',
    gap: '3rem',
    padding: '2.5rem 0',
    borderBottom: '1px solid var(--border)',
    transition: 'background 0.2s',
    cursor: 'default',
  },
  year: {
    fontSize: '12px',
    letterSpacing: '0.1em',
    color: 'var(--muted)',
    paddingTop: '4px',
  },
  role: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.4rem',
    fontWeight: 300,
    marginBottom: '0.3rem',
    color: 'var(--text)',
  },
  company: {
    color: 'var(--accent)',
    fontSize: '13px',
    marginBottom: '0.75rem',
  },
  desc: {
    color: 'rgba(240,236,228,0.55)',
    fontSize: '14px',
    lineHeight: 1.7,
  },
};

export default Experience;
