// src/components/Navbar.tsx

import React from 'react';
import { NavLink } from '../types';

interface NavbarProps {
  links: NavLink[];
  logoName: string;
}

const Navbar: React.FC<NavbarProps> = ({ links, logoName }) => {
  return (
    <nav style={styles.nav}>
      <span style={styles.logo}>{logoName}</span>
      <ul style={styles.navLinks}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} style={styles.link}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const styles: Record<string, React.CSSProperties> = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1.2rem 3rem',
    background: 'rgba(14,14,15,0.85)',
    backdropFilter: 'blur(16px)',
    borderBottom: '1px solid var(--border)',
  },
  logo: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.3rem',
    fontWeight: 300,
    color: 'var(--accent)',
    letterSpacing: '0.02em',
  },
  navLinks: {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  link: {
    color: 'var(--muted)',
    textDecoration: 'none',
    fontSize: '13px',
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
    transition: 'color 0.2s',
  },
};

export default Navbar;
