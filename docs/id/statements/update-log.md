---
category:
  - Announcement
icon: iconfont icon-update
order: 1
comment: false
externalLinkIcon: false
description: Snap Hutao berusaha memberikan pengguna pengalaman pengguna terbaik dengan terus memperbarui dan memperbaiki masalah yang diketahui serta merilis fitur baru. Kami akan selalu menerbitkan log pembaruan untuk melacak perubahan yang dibuat pada program.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/statements/update-log.html
---

# Log Pembaruan
## 1.19.5 Release<Badge text="terbaru" type="tip" />
- **【🎉Baru】** Dukungan mode Unpackaged — Jalankan langsung via .exe tanpa MSIX
- **【🎉Baru】** Auto-update untuk instalasi non-MSIX (installer Inno Setup)
- **【🎉Baru】** Peningkatan sinkronisasi penyimpanan cloud Beyond Gacha Log (Thousand-Star Realm)
- **【🎉Baru】** Tampilan kalender aktivitas beralih saat mengganti akun #107
- **【🎉Baru】** Kompatibilitas penuh versi UIGF untuk impor/ekspor

- **【✨Optimalisasi】** Optimalisasi kecepatan startup — Lewati validasi pre-build di Release, inisialisasi bertahap
- **【✨Optimalisasi】** Refactoring sistem build Cake — Build MSIX + Installer terpadu, hapus otomatis onnxruntime.dll
- **【✨Optimalisasi】** Hapus code-behind dari halaman gacha
- **【✨Optimalisasi】** Perbarui ikon saat tidak ada plugin yang dimuat
- **【✨Optimalisasi】** Hapus sumber daya statis yang tidak digunakan (LoadingPic, dll.)

- **【🔨Perbaikan】** Memperbaiki kesalahan implementasi Loopback unlock
- **【🔨Perbaikan】** Memperbaiki anomali tampilan total tarikan gacha setelah mengganti akun #150
- **【🔨Perbaikan】** Memperbaiki tidak dapat memulai ulang sebagai administrator dalam mode Unpackaged
- **【🔨Perbaikan】** Memperbaiki instans kedua tidak keluar dengan benar dalam kasus tertentu
- **【🔨Perbaikan】** Memperbaiki token Hutao Passport tidak mencoba ulang refresh
- **【🔨Perbaikan】** Memperbaiki pesan kesalahan sekarang ditampilkan saat startup gagal
- **【🔨Perbaikan】** Memperbaiki nama field lokalisasi yang salah

## 1.19.2 Release

- **【🎉Baru】** Halaman utama menampilkan kalender event game versi saat ini
- **【🎉Baru】** Pengaturan menampilkan kalender event game versi saat ini yang belum berlangsung

- **【✨Optimalisasi】** Mengoptimalkan kecepatan pemuatan halaman utama
- **【✨Optimalisasi】** Mengoptimalkan logika pembaruan auto-start aplikasi tanpa hak administrator

- **【🔨Perbaikan】** Memperbaiki masalah tampilan dialog akun Pass

## 1.19.1 Release

- **【🎉Baru】** Halaman Karakter Saya mendukung ekspor batch status pengembangan karakter sebagai dokumen teks [#82]
- **【🎉Baru】** Antarmuka utama menampilkan hitung mundur untuk waktu acara yang tersisa [#76]
- **【🎉Baru】** Tampilan status tugas latar belakang untuk menghindari penilaian salah sebagai tidak responsif
- **【🎉Baru】** Fungsi auto-start program (dukungan penuh untuk Win11, dukungan terbatas untuk Win10)
- **【🎉Baru】** Tampilan UI bagan progres unduhan pembaruan baru (bukan efek akhir, masih dioptimalkan)
- **【🎉Baru】** Dukungan untuk jeda dan lanjut selama proses pembaruan/perbaikan game
- **【🎉Baru】** Peluncuran kustom: memungkinkan meluncurkan lebih banyak aplikasi dengan satu klik saat memulai game

- **【✨Optimalisasi】** Adaptasi pembaruan program internal [#96]
- **【✨Optimalisasi】** Menambahkan prompt pemelihara selama tahap OOBE: Snap Hutao Remastered tidak dikelola oleh penulis asli [#90]
- **【✨Optimalisasi】** Fungsi pulih otomatis setelah pemulihan lingkungan jaringan saat startup
- **【✨Optimalisasi】** Mengoptimalkan mekanisme verifikasi kegagalan login akun Hutao

- **【🔨Perbaikan】** Memperbaiki masalah dimana proses tidak keluar setelah menutup game [#98]
- **【🔨Perbaikan】** Memperbaiki keluar proses game yang abnormal [#92]
- **【🔨Perbaikan】** Memperbaiki pengecualian saat menyegarkan catatan wish [#78]
- **【🔨Perbaikan】** Memperbaiki kesalahan saat menambahkan pengembangan karakter [#87]
- **【🔨Perbaikan】** Menangani masalah dimana Deployment.exe dilaporkan salah sebagai Malgent!MSR oleh beberapa perangkat lunak antivirus [#91]
- **【🔨Perbaikan】** Memperbaiki masalah dimana jendela mungkin tidak menutup jika unduhan pembaruan game dibatalkan
- **【🔨Perbaikan】** Memperbaiki tumpang tindih teks pada tombol jeda

## 1.19.0 Release

- **【✨Optimalisasi】** Menghapus proses penyesuaian waktu (#66)  

- **【🔨Perbaikan】** Memperbaiki masalah dimana refresh stoken menyebabkan impor duplikat semua catatan wish (#74)  
- **【🔨Perbaikan】** Memperbaiki getar abnormal progress bar saat mengklik tombol "Cek Pembaruan" dua kali selama pembaruan versi (#67)  
- **【🔨Perbaikan】** Memperbaiki masalah "Tidak ada respons terhadap pembaruan" (#64)


## Log Pengembangan Proyek Asli Sebelum V1.18.0

**Untuk catatan perubahan versi lebih lama dari 1.18.0, silakan periksa [`Log Pembaruan Versi Lebih Lama dari 1.18.0`](update-log-pre-1.18.0-archive.md)**
