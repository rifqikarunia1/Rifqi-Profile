// src/types/index.ts

export interface NavLink {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
}

export interface Experience {
  id: number;
  period: string;
  role: string;
  company: string;
  description: string;
}

export interface Project {
  id: number;
  num: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}
