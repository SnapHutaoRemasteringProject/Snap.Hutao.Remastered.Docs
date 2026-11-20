---
comment: false
externalLinkIcon: false
index: false
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/statements/update-log.html
sidebar: false
navbar: false
footer: false
copyright: false
editLink: false
breadcrumbExclude: true
breadcrumb: false
lastUpdated: false
contributors: false
backToTop: false
pageInfo: false
---


# 🎉 Berhasil Memperbarui ke Versi 2.0.2

**简体中文** [zh](/zh/statements/latest) · **繁體中文** [tw](/tw/statements/latest) · **English** [en](/en/statements/latest) · **日本語** [jp](/jp/statements/latest) · **Bahasa Indonesia** [id](/id/statements/latest) · **Русский** [ru](/ru/statements/latest)

Rilis ini menambahkan ubin aktif Catatan Real-time untuk Windows 10, meningkatkan **deteksi status dan pengelolaan proses game**, membuka pengaturan Island Catherine Redirect untuk semua pengguna, serta memperbaiki masalah masuk ke MiYouShe yang dialami sebagian pengguna.

### 🎉 Fitur Baru

- **【🎉Baru】** Halaman Peluncuran Game otomatis mendeteksi Genshin Impact yang dijalankan di luar Snap Hutao, menampilkan statusnya, dan menyediakan opsi untuk menghentikan proses game.
- **【🎉Baru】** Pengaturan Island Catherine Redirect kini tersedia untuk semua pengguna.
- **【🎉Baru】** Edisi MSIX di Windows 10 kini mendukung ubin aktif Catatan Real-time di menu Mulai untuk melihat Resin dan progres komisi harian. Cari karakter untuk memakai kartu namanya sebagai latar ubin.
- **【🎉Baru】** Pengaturan Menu Paimon Lama di Island mengembalikan posisi toko Miliastra Wonderland dan daftar Wonder populer di menu Paimon.
- **【🎉Baru】** Penginstal kini dapat menyertakan gambar bawaan. Pengelolaan penyimpanan dapat menghapus salinan cache yang sama dengan gambar bawaan.

### ✨ Peningkatan

- **【✨Peningkatan】** Mengurangi pemindaian proses yang tidak diperlukan dan menggunakan notifikasi dari sistem operasi saat proses berakhir agar status game segera diperbarui.
- **【✨Peningkatan】** Snap Hutao kini dapat mencoba menghentikan proses game yang berjalan dengan tingkat izin yang sama tanpa perlu dijalankan sebagai administrator.
- **【✨Peningkatan】** Memperbaiki pemeriksaan status setelah proses game dihentikan, menangani beberapa proses yang cocok, dan menampilkan pesan kesalahan yang lebih jelas saat operasi gagal.
- **【✨Peningkatan】** MSIX dan Setup yang menyertakan gambar melewati pengunduhan gambar massal saat penyiapan awal. Gambar yang belum tersedia diunduh saat dibutuhkan. Setup standar masih dapat mengunduh gambar per kategori.
- **【✨Peningkatan】** Menambahkan petunjuk bergambar untuk Catherine Redirect di aplikasi.
- **【✨Peningkatan】** Menerapkan tema yang tersimpan ke setiap jendela dan dialog serta menyempurnakan animasi Pengaturan dan terjemahan.
- **【✨Peningkatan】** Menambahkan dukungan untuk kategori material baru di Genshin Impact 7.1.

### 🔨 Perbaikan Masalah

- **【🔨Perbaikan】** Memperbaiki masalah yang membuat sebagian pengguna tidak dapat masuk ke MiYouShe.
- **【🔨Perbaikan】** Memperbaiki keterlambatan pembaruan status saat game dijalankan atau ditutup di luar Snap Hutao.
- **【🔨Perbaikan】** Memperbaiki status Island yang terkadang masih ditampilkan sebagai terhubung setelah proses game berakhir.
- **【🔨Perbaikan】** Memperbaiki notifikasi perubahan pada beberapa properti hanya-baca yang gagal memperbarui binding `x:Bind` di halaman Peluncuran Game.
- **【🔨Perbaikan】** Memperbaiki kesalahan saat menghentikan game jika sebagian proses tidak dapat diakses atau ada beberapa proses yang cocok.
- **【🔨Perbaikan】** Memperbaiki hasil permintaan konfigurasi fitur jarak jauh yang gagal dan tersimpan terlalu lama di cache sehingga percobaan ulang tertunda.
- **【🔨Perbaikan】** Memperbaiki daftar di halaman pengambilan Riwayat Wish yang tidak dapat digulir.
- **【🔨Perbaikan】** Memperbaiki waktu penyegaran yang bertumpuk dengan UID pada kartu Catatan Real-time.
- **【🔨Perbaikan】** Memperbaiki Island yang dapat menutup game saat verifikasi akun mengalami gangguan jaringan atau kehabisan waktu. Kini muncul peringatan dan game tetap berjalan.
- **【🔨Perbaikan】** Memperbaiki deteksi dan perbaikan versi ketika `config.ini` memiliki entri `game_version` ganda, serta memperbaiki penanganan komentar dan judul bagian INI.
- **【🔨Perbaikan】** Memisahkan kueri Wish biasa dan Miliastra Wonderland, memperbaiki validasi URL Wish dari input manual dan cache web, serta menerjemahkan pesan kesalahan saat metadata Wish tidak tersedia.
- **【🔨Perbaikan】** Memperbaiki sinkronisasi inventaris yang gagal dan dapat menghapus item yang sudah tersimpan.
- **【🔨Perbaikan】** Memperbaiki unduhan gambar yang macet dan tidak segera berhenti saat penyiapan awal.
- **【🔨Perbaikan】** Memperbaiki nilai lama yang masih digunakan setelah pengaturan plugin dikosongkan, serta beberapa opsi daftar tarik turun yang kosong.
- **【🔨Perbaikan】** Memperbaiki proses menunggu saat aplikasi ditutup dan kesalahan saat inisialisasi akun.
- **【🔨Perbaikan】** Mengembalikan ikon afiliasi karakter Nod-Krai dan Snezhnaya.

### Catatan Penggunaan

Jika game berjalan dengan tingkat izin yang lebih tinggi, Anda mungkin masih perlu menjalankan Snap Hutao sebagai administrator untuk menghentikan proses game.

[Catatan Perubahan Lengkap](https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/compare/2.0.1...2.0.2)
