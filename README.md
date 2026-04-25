# Hitung Titik Lingkaran

Aplikasi web sederhana untuk menghitung titik pusat, jari-jari, dan keliling lingkaran berdasarkan dua titik koordinat (X dan Y). Dibuat menggunakan React, TypeScript, dan Vite dengan antarmuka yang modern, elegan, responsif, dan efek animasi _smooth_ tanpa tombol _submit_ (real-time calculation).

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

---

## 🌐 Cara Deploy ke Vercel

Karena kode kamu sudah tersimpan di GitHub, cara paling mudah dan otomatis untuk mendeploy website ini agar bisa diakses publik (online) adalah melalui **Vercel Dashboard**:

1. Kunjungi **[vercel.com](https://vercel.com/)** dan daftar/login menggunakan akun GitHub kamu.
2. Di *Dashboard* Vercel, klik tombol **"Add New..."** lalu pilih **"Project"**.
3. Cari repository `Hitung-Titik-Lingkaran` di daftar GitHub kamu, lalu klik tombol **"Import"**.
4. Di bagian *Configure Project*, Vercel akan otomatis mendeteksi bahwa ini adalah project **Vite**. Kamu tidak perlu mengubah apa-apa.
5. Langsung klik tombol **"Deploy"**.
6. Tunggu sekitar 1-2 menit hingga proses _build_ selesai.
7. **Selamat!** Website kamu sudah *live* dan Vercel akan memberikan URL publik (misalnya: `https://hitung-titik-lingkaran.vercel.app`) yang bisa kamu bagikan.

*Catatan: Setiap kali kamu melakukan `git push` perubahan baru ke GitHub, Vercel akan otomatis memperbarui website kamu secara *real-time*.*
