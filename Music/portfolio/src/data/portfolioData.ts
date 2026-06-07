// src/data/portfolioData.ts

import { NavLink, Skill, Experience, Project, SocialLink, StatItem } from '../types';

export const navLinks: NavLink[] = [
  { label: 'Tentang', href: '#about' },
  { label: 'Pengalaman', href: '#experience' },
  { label: 'Proyek', href: '#projects' },
  { label: 'Kontak', href: '#contact' },
];

export const stats: StatItem[] = [
  { value: '4+', label: 'Tahun Pengalaman' },
  { value: '30+', label: 'Proyek Selesai' },
];

export const skills: Skill[] = [
  { name: 'TypeScript' },
  { name: 'React.js' },
  { name: 'Next.js' },
  { name: 'Node.js' },
  { name: 'PostgreSQL' },
  { name: 'Prisma ORM' },
  { name: 'Tailwind CSS' },
  { name: 'Docker' },
  { name: 'REST API' },
  { name: 'GraphQL' },
  { name: 'Git & GitHub' },
  { name: 'Figma' },
];

export const experiences: Experience[] = [
  {
    id: 1,
    period: '2023 — Sekarang',
    role: 'Senior Frontend Engineer',
    company: 'PT Teknologi Maju Bersama',
    description:
      'Memimpin tim frontend dalam membangun dashboard analitik berbasis React & TypeScript. Meningkatkan performa render hingga 40% melalui optimasi bundle dan lazy loading.',
  },
  {
    id: 2,
    period: '2021 — 2023',
    role: 'Full Stack Developer',
    company: 'Startup Digital Nusantara',
    description:
      'Mengembangkan platform e-commerce B2B dari nol menggunakan Next.js, Node.js, dan PostgreSQL. Bertanggung jawab atas arsitektur API dan implementasi sistem pembayaran.',
  },
  {
    id: 3,
    period: '2020 — 2021',
    role: 'Frontend Developer',
    company: 'Agensi Kreatif Bandung',
    description:
      'Membangun landing page dan web app untuk klien berbagai industri dengan fokus pada performa, aksesibilitas, dan pengalaman pengguna.',
  },
];

export const projects: Project[] = [
  {
    id: 1,
    num: '001',
    title: 'AnalytikPro Dashboard',
    description:
      'Platform visualisasi data real-time untuk bisnis retail. Menampilkan chart interaktif, laporan otomatis, dan integrasi dengan berbagai sumber data.',
    tags: ['React', 'TypeScript', 'D3.js', 'Node.js'],
  },
  {
    id: 2,
    num: '002',
    title: 'TanahKu Marketplace',
    description:
      'Platform jual-beli properti digital dengan fitur pencarian peta, virtual tour 3D, dan sistem negosiasi terintegrasi langsung di platform.',
    tags: ['Next.js', 'PostgreSQL', 'Prisma', 'Mapbox'],
  },
  {
    id: 3,
    num: '003',
    title: 'KasirKu POS System',
    description:
      'Aplikasi kasir modern untuk UMKM dengan fitur offline-first, sinkronisasi cloud, laporan harian otomatis, dan manajemen stok real-time.',
    tags: ['React', 'PWA', 'IndexedDB', 'Express'],
  },
  {
    id: 4,
    num: '004',
    title: 'SalamChat Messaging App',
    description:
      'Aplikasi pesan instan dengan enkripsi end-to-end, fitur grup, berbagi file, dan notifikasi push lintas platform berbasis WebSocket.',
    tags: ['React Native', 'WebSocket', 'Redis', 'TypeScript'],
  },
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/' },
  { label: 'Dribbble', href: 'https://dribbble.com/' },
  { label: 'Twitter/X', href: 'https://x.com/' },
];
