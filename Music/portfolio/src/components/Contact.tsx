// src/components/Contact.tsx

import React from 'react';
import { SocialLink } from '../types';

interface ContactProps {
  email: string;
  socialLinks: SocialLink[];
}

const Contact: React.FC<ContactProps> = ({ email, socialLinks }) => {
  return (
    <section id="contact" style={styles.section}>
      <div style={styles.bg} />
      <p style={styles.sectionLabel}>04 — Kontak</p>
      <h2 style={styles.heading}>
        Mari bekerja<br />bersama
      </h2>
      <p style={styles.sub}>
        Saya terbuka untuk peluang freelance, kolaborasi, atau diskusi proyek.
      </p>
      <a href={`mailto:${email}`} style={styles.email}>
        {email}
      </a>
      <div style={styles.socialLinks}>
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href} style={styles.socialLink}>
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
};

const styles: Record<string, React.CSSProperties> = {
  section: {
    textAlign: 'center' as const,
    padding: '8rem 3rem',
    position: 'relative',
    overflow: 'hidden',
  },
  bg: {
    position: 'absolute' as const,
    inset: 0,
    background:
      'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,169,126,0.05) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  sectionLabel: {
    fontSize: '11px',
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
    color: 'var(--accent)',
    marginBottom: '2rem',
    position: 'relative',
  },
  heading: {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
    fontWeight: 300,
    marginBottom: '1.5rem',
    fontStyle: 'italic',
    color: 'var(--text)',
    position: 'relative',
    lineHeight: 1.15,
  },
  sub: {
    color: 'var(--muted)',
    marginBottom: '3rem',
    fontSize: '16px',
    position: 'relative',
  },
  email: {
    display: 'inline-block',
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(1.2rem, 3vw, 2rem)',
    fontWeight: 300,
    color: 'var(--accent)',
    textDecoration: 'none',
    borderBottom: '1px solid rgba(200,169,126,0.3)',
    paddingBottom: '4px',
    position: 'relative',
    marginBottom: '3rem',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    position: 'relative',
  },
  socialLink: {
    fontSize: '12px',
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: 'var(--muted)',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
};

export default Contact;
