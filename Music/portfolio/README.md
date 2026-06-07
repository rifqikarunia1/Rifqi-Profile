# 🎨 Portfolio Website — React + TypeScript

Website portofolio elegan dengan desain dark-luxury menggunakan React dan TypeScript.

## 📁 Struktur Proyek

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Navigasi sticky
│   │   ├── Hero.tsx         # Halaman hero utama
│   │   ├── About.tsx        # Tentang saya + skills
│   │   ├── Experience.tsx   # Riwayat pekerjaan
│   │   ├── Projects.tsx     # Proyek pilihan
│   │   └── Contact.tsx      # Halaman kontak
│   ├── data/
│   │   └── portfolioData.ts # Semua data konten
│   ├── types/
│   │   └── index.ts         # TypeScript interfaces
│   ├── App.tsx              # Komponen utama
│   ├── App.css              # Global styles
│   └── index.tsx            # Entry point
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Cara Menjalankan

### 1. Install dependencies
```bash
npm install
```

### 2. Jalankan development server
```bash
npm start
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### 3. Build untuk production
```bash
npm run build
```

## ✏️ Cara Kustomisasi

### Ubah informasi pribadi
Edit file `src/data/portfolioData.ts`:
- Ganti nama, title, dan deskripsi di `App.tsx`
- Update `experiences` untuk riwayat pekerjaan
- Update `projects` untuk proyek-proyek Anda
- Ganti `email` dan `socialLinks` di `Contact`

### Ubah warna tema
Edit variabel CSS di `src/App.css`:
```css
:root {
  --accent: #c8a97e;   /* Ganti warna aksen */
  --bg: #0e0e0f;       /* Ganti warna background */
  --text: #f0ece4;     /* Ganti warna teks */
}
```

### Tambah proyek baru
Di `src/data/portfolioData.ts`, tambahkan ke array `projects`:
```typescript
{
  id: 5,
  num: '005',
  title: 'Nama Proyek Baru',
  description: 'Deskripsi proyek...',
  tags: ['React', 'TypeScript'],
  link: 'https://github.com/...',
}
```

## 🎨 Desain

- **Tema**: Dark luxury dengan aksen emas
- **Font**: Fraunces (serif) + DM Sans
- **Animasi**: Fade-up on scroll dengan IntersectionObserver
- **Responsif**: Mobile-friendly

## 📦 Deploy

### Vercel (Disarankan)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload folder /build ke Netlify
```

---

Dibuat dengan ❤️ di Bandung
