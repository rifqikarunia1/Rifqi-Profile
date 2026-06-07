// src/components/Projects.tsx

import React, { useState } from 'react';
import { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        background: hovered ? '#1a1a1c' : 'var(--surface)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          ...styles.cardTop,
          opacity: hovered ? 1 : 0,
        }}
      />
      <p style={styles.num}>{project.num}</p>
      <span style={styles.arrow}>↗</span>
      <h3
        style={{
          ...styles.title,
          color: hovered ? 'var(--accent)' : 'var(--text)',
        }}
      >
        {project.title}
      </h3>
      <p style={styles.desc}>{project.description}</p>
      <div style={styles.tags}>
        {project.tags.map((tag) => (
          <span key={tag} style={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" style={styles.section}>
      <p style={styles.sectionLabel}>03 — Proyek Pilihan</p>
      <div style={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
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
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1px',
    background: 'var(--border)',
    border: '1px solid var(--border)',
  },
  card: {
    padding: '2.5rem',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  cardTop: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: 'linear-gradient(90deg, var(--accent), transparent)',
    transition: 'opacity 0.3s',
  },
  num: {
    fontFamily: 'var(--font-serif)',
    fontSize: '0.85rem',
    color: 'var(--muted)',
    marginBottom: '1.5rem',
    fontStyle: 'italic',
  },
  arrow: {
    position: 'absolute' as const,
    top: '2.5rem',
    right: '2.5rem',
    fontSize: '1.2rem',
    color: 'var(--accent)',
  },
  title: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.5rem',
    fontWeight: 300,
    marginBottom: '0.75rem',
    transition: 'color 0.2s',
  },
  desc: {
    color: 'rgba(240,236,228,0.5)',
    fontSize: '14px',
    lineHeight: 1.7,
    marginBottom: '1.5rem',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '0.5rem',
  },
  tag: {
    padding: '3px 10px',
    border: '1px solid var(--border)',
    fontSize: '11px',
    letterSpacing: '0.06em',
    color: 'var(--muted)',
  },
};

export default Projects;
