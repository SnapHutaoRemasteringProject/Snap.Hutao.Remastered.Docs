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

# 🎉 Berhasil Update ke Versi 1.20.4

**Bahasa Indonesia** | [English](/en/statements/latest.html)

- **【🎉Baru】** Menambahkan pengaturan "Material Kontrol" untuk beralih antara Fluent asli dan Liquid Glass, lengkap dengan pratinjau efek #279
- **【🎉Baru】** Liquid Glass kini dapat diaktifkan per jenis kontrol, dengan pengaturan optik seperti blur, refraksi, dan sorotan serta pratinjau langsung #279
- **【🎉Baru】** Menambahkan mode offline: menggunakan daftar repositori lokal saat server tidak dapat dijangkau, dengan tombol sambung ulang
- **【🎉Baru】** Halaman "Karakter Saya" kini mendukung pemilihan algoritma penilaian artefak per karakter: atribut rekomendasi HoYoLAB, preset penilaian bawaan, atau konfigurasi penilaian kustom #269
- **【🎉Baru】** Item di ransel kini memiliki filter status pemasangan (Terpasang / Tidak Terpasang) dan lencana karakter pemasang, dengan info perlengkapan di panel detail
- **【🎉Baru】** Artefak di ransel kini menampilkan penanda Sanctifying Elixir dan dapat difilter berdasarkan penanda tersebut; sub-stat yang ditentukan Sanctifying Elixir dapat dilihat
- **【🎉Baru】** Sub-stat artefak kini diwarnai berdasarkan valid / tidak valid / crit ganda / tidak aktif, dan sub-stat ke-4 yang tidak aktif ikut ditampilkan
- **【🎉Baru】** Menambahkan tombol segarkan pada kartu Catatan Waktu di halaman utama #281
- **【🎉Baru】** Menambahkan ID karakter versi 7.1 dan jenis material baru

- **【✨Optimalisasi】** Sistem plugin direfaktor: menonaktifkan plugin kini melepas assembly-nya, dan penyimpanan / reset pengaturan plugin menampilkan hasil
- **【✨Optimalisasi】** Yae ditingkatkan ke protokol 5.5.0, mendukung langganan paket kustom
- **【✨Optimalisasi】** Meningkatkan performa daftar item ransel, mengurangi tersendat saat beralih atau menyegarkan
- **【✨Optimalisasi】** Dialog konfigurasi skor artefak: batal tidak lagi menyimpan, penghapusan dijalankan dalam satu transaksi, pergantian preset tidak kembali, dan penyimpanan tidak lagi membuang perubahan yang ada
- **【✨Optimalisasi】** Mengoptimalkan kontrol thread video latar belakang untuk mengurangi penggunaan sumber daya di latar belakang
- **【✨Optimalisasi】** Menampilkan petunjuk saat gambar latar belakang tidak dapat di-decode, tidak lagi dilewati diam-diam
- **【✨Optimalisasi】** Memperbaiki pemilihan bahasa default dan pencocokan bahasa regional: mencocokkan bahasa yang didukung berdasarkan bahasa UI sistem, tetap membedakan Tionghoa Sederhana dan Tradisional #117
- **【✨Optimalisasi】** Meningkatkan ke .NET 11 dan memperbarui dependensi

- **【🔨Perbaikan】** Memperbaiki argumen protokol yang hilang saat "Mulai ulang otomatis sebagai administrator" aktif, sehingga `hutao://launch/` tidak dapat langsung meluncurkan game #305
- **【🔨Perbaikan】** Memperbaiki sinkronisasi level dan talenta karakter di rencana pengembangan yang tidak menghitung bonus konstelasi #307
- **【🔨Perbaikan】** Memperbaiki sebagian jumlah produk khas daerah yang tidak tersinkron saat rencana pengembangan disinkronkan melalui arsip ransel #280
- **【🔨Perbaikan】** Memperbaiki check-in otomatis yang hanya melakukan check-in untuk akun saat ini #302
- **【🔨Perbaikan】** Memperbaiki video latar belakang yang menggunakan SMTC sistem #290
- **【🔨Perbaikan】** Memperbaiki status pemasangan di ransel yang menganggap "tidak diketahui" sebagai "tidak terpasang", sehingga filter arsip lama salah
- **【🔨Perbaikan】** Memperbaiki pengecualian saat pemrosesan paket Yae merujuk buffer pool yang sudah dikembalikan
- **【🔨Perbaikan】** Memperbaiki peralihan domain cadangan dan percobaan ulang permintaan: parameter kueri URL tidak lagi salah ditulis ulang, dan permintaan non-idempoten tidak lagi dicoba ulang otomatis
- **【🔨Perbaikan】** Memperbaiki aplikasi yang terkadang terhenti saat keluar
- **【🔨Perbaikan】** Memperbaiki escaping HTML pada sumber daya multibahasa sehingga teks petunjuk tebal tampil kembali
