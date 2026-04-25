# Hitung Titik Lingkaran

Aplikasi web sederhana untuk menghitung titik pusat, jari-jari, dan keliling lingkaran berdasarkan dua titik koordinat (X dan Y). Dibuat menggunakan React, TypeScript, dan Vite dengan antarmuka yang modern, elegan, responsif, dan efek animasi _smooth_ tanpa tombol _submit_ (real-time calculation).

## 📁 Struktur Folder & File Utama

Berikut adalah penjelasan mengenai struktur file dan elemen-elemen penting yang ada di dalam *project* ini:

- **`src/`** : Folder pusat yang berisi seluruh kode React.
  - **`Kalkulator.tsx`** : Ini adalah komponen utama otak aplikasinya. Di file ini berisi logika state (`x`, `y`, `result`, `isLoading`), hitungan matematika (akar kuadrat, jari-jari, dan keliling), penundaan kalkulasi otomatis (*debounce timeout*), serta kerangka antarmuka/UI HTML-nya.
  - **`Kalkulator.css`** : File *styling* khusus untuk Kalkulator. Mengatur warna tema gelap (*dark theme*), efek kaca transparan (*glassmorphism*), responsivitas untuk perangkat HP, serta mendefinisikan keyframe animasi (seperti titik gelombang saat *loading*).
  - **`App.tsx`** : Komponen pembungkus pertama (*wrapper*) yang bertugas memanggil dan merender komponen `Kalkulator`.
  - **`main.tsx`** : File inisialisasi utama (titik masuk) yang mengaitkan kode React dengan file HTML.
  - **`index.css`** : Berisi reset *margin* dan *padding* dasar CSS global.
- **`index.html`** : File HTML murni (pondasi awal) tempat situs dirender. Di sini juga terdapat pengaturan `<title>` dan `<meta>` deskripsi website.
- **`package.json`** : Rapor dan pengatur proyek. Berisi informasi *project*, daftar paket library pihak ketiga (*dependencies*) yang dipakai, dan daftar perintah rahasia (seperti `npm run dev`).
- **`vite.config.ts`** : Pengaturan untuk **Vite** (alat perkakas super cepat yang menyatukan dan menjalankan semua file React ini).
- **`tsconfig.json`** : Aturan bahasa pemrograman TypeScript.

## 🚀 Cara Menjalankan di Laptop Lain (Clone & Run)

Jika kamu ingin memindahkan atau melanjutkan *project* ini di laptop lain, ikuti langkah-langkah berikut:

### Prasyarat

Pastikan laptop baru kamu sudah terinstall:

1. **[Node.js](https://nodejs.org/)** (Rekomendasi versi LTS, ini wajib agar bisa menjalankan `npm`).
2. **[Git](https://git-scm.com/)** (Untuk men-download / *clone* repository ini).

### Langkah-langkah

1. **Buka Terminal / Command Prompt** di folder tempat kamu ingin menyimpan *project* ini.
2. **Download (Clone) Repository** dari GitHub dengan perintah berikut:

   ```bash
   git clone https://github.com/lordbarry21/Hitung-Titik-Lingkaran.git
   ```
3. **Masuk ke dalam folder project**:

   ```bash
   cd Hitung-Titik-Lingkaran
   ```
4. **Install semua *dependencies* (paket Node.js)** yang dibutuhkan:

   ```bash
   npm install
   ```
   *(Tunggu sampai proses instalasi selesai, ini akan mengunduh folder `node_modules`)*
5. **Jalankan *Development Server***:

   ```bash
   npm run dev
   ```
6. **Selesai!** Buka link yang muncul di terminal (biasanya `http://localhost:5173`) di browsermu.
