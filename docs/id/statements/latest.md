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

# 🎉 Berhasil Update ke Versi 2.0.1

[简体中文](/zh/statements/latest.html) | [繁體中文](/tw/statements/latest.html) | [English](/en/statements/latest.html) | **Bahasa Indonesia**

- **【🎉Baru】** Menambahkan jendela Analisis Riwayat Akun, yang dapat dibuka dari Pengaturan Jaringan serta halaman Riwayat Gacha, Spiral Abyss, Imaginarium Theater, dan Stygian Onslaught #335
- **【🎉Baru】** Menambahkan grafik berdasarkan data lokal: jumlah gacha bulanan dan distribusi banner secara terpisah untuk wish biasa dan Miliastra Wonderland, bintang Abyss, medali Theater, serta waktu penyelesaian solo Onslaught menurut tingkat kesulitan #335
- **【🎉Baru】** Analisis memakai hasil statistik gacha yang sudah tersedia, termasuk perolehan karakter dan senjata bintang lima, rata-rata pity, pity saat ini, hasil rate-up, dan jaminan; data riwayat yang tidak lengkap tidak dianggap nol #335
- **【🎉Baru】** Menambahkan asisten AI opsional pada Analisis Riwayat Akun, dengan analisis yang dimulai pengguna, jawaban Markdown secara streaming, dan pertanyaan lanjutan dalam beberapa putaran percakapan #335
- **【🎉Baru】** Asisten AI mendukung API OpenAI Chat Completions, OpenAI Responses, dan Anthropic, serta pengaturan endpoint, API Key, model, dan parameter inferensi #335
- **【🎉Baru】** Menambahkan penyimpanan dan pengelolaan percakapan AI, penggantian model, regenerasi jawaban, penyalinan percakapan, statistik token, serta opsi menyetujui atau menolak pemanggilan alat #335
- **【🎉Baru】** Menambahkan skala visual ToggleSwitch Liquid Glass dengan nilai default 0,7 tanpa mengubah ukuran teks
- **【🎉Baru】** Memperluas parameter optik dan pencahayaan penunjuk Liquid Glass, dengan perubahan yang langsung diterapkan
- **【🎉Baru】** Menambahkan Lewati versi ini pada notifikasi pembaruan: pemeriksaan otomatis tidak menampilkan versi yang dilewati lagi, tetapi pemeriksaan manual tetap tersedia
- **【🎉Baru】** Menambahkan pengaturan Redirect Catherine untuk Island, yang langsung membuka dialog klaim hadiah komisi harian dari pintasan Adventurer Handbook; memerlukan komponen Island yang kompatibel
- **【🎉Baru】** Menambahkan Segarkan Instalasi pada halaman peluncuran game untuk menampilkan config.ini dan ScriptVersion secara terpisah beserta peringatan ketidaksesuaian, berkas hilang, atau kegagalan pembacaan
- **【🎉Baru】** Menambahkan fitur menyalin ringkasan statistik riwayat akun untuk meninjau masukan analisis AI; API Key model yang dikonfigurasi disimpan di Windows Credential Locker

- **【✨Optimalisasi】** Mengaktifkan prakompilasi ReadyToRun (R2R) secara default untuk mengurangi beban JIT, membantu mempercepat startup dan responsivitas pada beberapa skenario, sekaligus menyempurnakan publikasi MSIX dan installer #334
- **【✨Optimalisasi】** Meningkatkan penemuan, label, dan pilihan model dari layanan kompatibel OpenAI; nama khusus, parameter, dan pilihan dipertahankan saat penyegaran, sementara ID duplikat atau tidak valid diabaikan
- **【✨Optimalisasi】** Penalaran AI kini tertutup secara default, dapat dibuka dan digulir; tata letak pengaturan model, jendela analisis, dan penanda tindakan berisiko juga diperbaiki
- **【✨Optimalisasi】** Meningkatkan validasi, penyimpanan, dan pemulihan pengaturan Liquid Glass agar perubahan yang ditolak dibatalkan tanpa menimpa pengaturan lain yang belum disimpan
- **【✨Optimalisasi】** Menyempurnakan warna teks Fluent dan Liquid Glass, pemotongan sudut serta bayangan kartu, ikon material kalender, dan tampilan kartu check-in #325
- **【✨Optimalisasi】** Meningkatkan tampilan Acrylic dan perilaku popup pada Flyout, ComboBox, NumberBox, serta kontrol terkait
- **【✨Optimalisasi】** Memindahkan pengambilan gambar cache dari callback UI serta meningkatkan penguncian asinkron dan pembersihan halaman guna mengurangi UI yang terhambat dan kondisi balapan
- **【✨Optimalisasi】** Meningkatkan jumlah pencapaian selesai setelah impor, pemulihan navigasi panduan, serta terjemahan Crowdin

- **【🔨Perbaikan】** Memperbaiki penentuan versi game yang salah saat config.ini dan ScriptVersion berbeda; pembaruan dan pra-unduh berbasis versi dijeda, tetapi verifikasi menyeluruh dan perbaikan tetap tersedia
- **【🔨Perbaikan】** Memperbaiki penggunaan metadata instalasi lama saat operasi game: berkas diperiksa ulang sebelum operasi dan diperbarui hanya setelah verifikasi sumber daya berhasil, dengan cadangan, pengaturan kanal, dan rollback saat gagal
- **【🔨Perbaikan】** Memperbaiki pemeriksaan kompatibilitas versi game dan DLL Island sebelum meluncurkan proses; peluncuran normal tidak terhalang
- **【🔨Perbaikan】** Memperbaiki tugas startup versi tanpa MSIX yang menunjuk executable yang salah serta status pengaturan yang tidak sesuai saat pendaftaran tugas gagal
- **【🔨Perbaikan】** Memperbaiki nama model AI kosong, kehilangan pilihan, pengecualian saat menambah model, dan ketidakstabilan penyegaran daftar berukuran besar
- **【🔨Perbaikan】** Memperbaiki snapshot lama dari berkas pengaturan AI eksternal yang menimpa perubahan lokal atau kredensial yang lebih baru
- **【🔨Perbaikan】** Memperbaiki binding persetujuan dan penolakan pemanggilan alat AI serta tampilan nama alat dan argumen cadangan
- **【🔨Perbaikan】** Memperbaiki pustaka runtime native dan dependensi yang hilang dari paket MSIX serta installer yang dipublikasikan, dengan validasi sebelum pengemasan
- **【🔨Perbaikan】** Memperbaiki latar Liquid Glass yang masih tertinggal setelah dinonaktifkan, kesalahan binding template, dan warna teks tema yang keliru #317
- **【🔨Perbaikan】** Memperbaiki respons visual dan interaksi beberapa dropdown, flyout, serta kontrol Liquid Glass #308
- **【🔨Perbaikan】** Memperbaiki toggle notifikasi Daily Note yang tampilannya tidak segera mengikuti perubahan pengaturan
- **【🔨Perbaikan】** Memperbaiki akses lintas thread saat memilih peran akun, menambahkan ulang akun, dan mengambil daftar akun untuk check-in otomatis #318 #326
- **【🔨Perbaikan】** Memperbaiki status hotkey yang tertimpa nilai lama saat notifikasi properti masuk kembali #327
- **【🔨Perbaikan】** Memperbaiki daftar dan flyout yang tidak disegarkan setelah kartu rencana pengembangan dihapus, penyimpanan item lama, dan operasi kartu yang terhalang popup #329
- **【🔨Perbaikan】** Memperbaiki pengiriman ulang isi permintaan HTTP saat retry serta status pemutaran video latar setelah sesi Windows dikunci atau dibuka #320 #323
- **【🔨Perbaikan】** Memperbaiki pengecualian pada dialog reset kata sandi Hutao Passport dan hitung mundur konfirmasi penghapusan jeda skip dialog
- **【🔨Perbaikan】** Memperbaiki binding material kalender, beberapa ikon karakter serta teks deskripsi skill yang hilang, dan tombol peralihan statistik gacha #313

> Catatan: analisis AI hanya berjalan setelah pengguna mengatur penyedia model dan memulainya secara manual. Penyedia menerima ringkasan riwayat dan statistik wish, bukan seluruh basis data akun. Meski UID dan pengenal langsung dihapus, pola riwayat yang khas masih dapat dikaitkan dengan individu. Periksa kebijakan privasi penyedia pihak ketiga sebelum menggunakan fitur ini.
