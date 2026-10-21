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
## 2.0.1 Release<Badge text="terbaru" type="tip" />
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

## 1.20.4 Release
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

## 1.20.3 Release
- **【🎉Baru】** Menambahkan lencana progres prapengunduhan di halaman manajemen game
- **【🔨Perbaikan】** Memperbaiki prapengunduhan yang tidak dapat dijeda
- **【🔨Perbaikan】** Memperbaiki potensi kebocoran memori saat memperbarui jendela game

## 1.20.2 Release
- **【🎉Baru】** Menambahkan halaman "Proporsi Sumber Primogem Bulan Ini" pada kartu Catatan Pelancong dengan diagram donat
- **【🎉Baru】** Rencana pengembangan kini mendukung sinkronisasi level dan talenta karakter melalui HoYoLAB
- **【🎉Baru】** Domain material tidak lagi dibatasi dalam 7 hari setelah pergantian banner, dan kartu kalender menampilkan petunjuknya
- **【🎉Baru】** Menambahkan jadwal pengambilan material baru dari Snezhnaya
- **【🎉Baru】** Menambahkan konfirmasi kedua saat menonaktifkan opsi item resin
- **【🎉Baru】** Notifikasi "Berjalan di latar belakang" kini dapat dinonaktifkan #260

- **【✨Optimalisasi】** Artefak di ransel kini diurutkan berdasarkan SortOrder
- **【✨Optimalisasi】** Menghapus filter tingkat kelangkaan item di halaman ransel
- **【✨Optimalisasi】** Menghapus latar belakang abu-abu pada ikon artefak di ransel
- **【✨Optimalisasi】** Daftar material pada kartu pengembangan kalender kini mendukung gulir vertikal
- **【✨Optimalisasi】** Menambahkan petunjuk pemecahan masalah untuk "Target Frame Rate" yang tidak berfungsi #262
- **【✨Optimalisasi】** Menambahkan keterangan pada dialog penukaran CDK Mirror酱
- **【✨Optimalisasi】** Mengoptimalkan interaksi dan tampilan dialog konfirmasi hitung mundur

- **【🔨Perbaikan】** Memperbaiki kesalahan deteksi jaringan yang membuat aplikasi tertahan pada "jaringan tidak tersedia" #268
- **【🔨Perbaikan】** Memperbaiki kegagalan pembaruan otomatis saat menggunakan domain cadangan #265
- **【🔨Perbaikan】** Memperbaiki hari pembukaan domain material dan data jadwal material

## 1.20.1 Release
- **【🎉Baru】** Menambahkan tampilan skor total karakter di halaman karakter, skor artefak mendukung gradasi warna #254
- **【🎉Baru】** Menambahkan kartu Catatan Pelancong di beranda untuk menampilkan Primogem dan Mora hari ini dan bulan ini #249
- **【🎉Baru】** Otomatisasi BetterGI kini mendukung pengambilan rencana pengembangan saat ini
- **【🎉Baru】** Menambahkan ID karakter versi 7.0

- **【✨Optimalisasi】** Mengoptimalkan animasi transisi halaman
- **【✨Optimalisasi】** Mengoptimalkan algoritma skor artefak karakter
- **【✨Optimalisasi】** Statistik banner permanen kini menampilkan jumlah dan rasio item bintang 2 #258

- **【🔨Perbaikan】** Memperbaiki beranda yang melompat saat membuka aplikasi #247
- **【🔨Perbaikan】** Memperbaiki video jendela web kompak yang tidak dapat masuk ke mini-window #245
- **【🔨Perbaikan】** Memperbaiki lag saat menutup jendela dalam mode administrator
- **【🔨Perbaikan】** Memperbaiki dialog crash yang menghilang

## 1.20.0 Release
- **【🎉Baru】** Menambahkan halaman item ransel dengan filter, pengurutan dinamis, dan tampilan detail
- **【🎉Baru】** Menambahkan fitur skor artefak #158
- **【🎉Baru】** Menambahkan ikon kunci dan tanda untuk senjata dan artefak
- **【🎉Baru】** Tugas otomatisasi kini mendukung pengisian jalur BetterGI secara manual #232
- **【🎉Baru】** Rencana pengembangan kini mendukung sinkronisasi item dari arsip item ransel
- **【🎉Baru】** Menambahkan kanal unduhan Mirror酱 (MirrorChyan) dan adaptasi pembaruan otomatis

- **【✨Optimalisasi】** Mengoptimalkan perhitungan pengembangan #220
- **【✨Optimalisasi】** Mengoptimalkan performa item ransel
- **【✨Optimalisasi】** Mengurangi overhead salin di halaman gacha
- **【✨Optimalisasi】** Menutup menu flyout secara otomatis setelah mengubah parameter pengembangan
- **【✨Optimalisasi】** Tidak lagi memblokir Windows versi lama, melainkan menampilkan peringatan saat pertama kali dijalankan

- **【🔨Perbaikan】** Memperbaiki video latar belakang paruh pertama 7.0 yang tidak diputar atau tampil tidak normal
- **【🔨Perbaikan】** Memperbaiki crash saat menginstal game
- **【🔨Perbaikan】** Memperbaiki FileUnlocker yang menyebabkan pembaruan metadata macet
- **【🔨Perbaikan】** Memperbaiki crash saat proses bantuan notifikasi Toast tidak terdaftar #216
- **【🔨Perbaikan】** Memperbaiki jendela duplikat saat pemulihan setelah jendela ditutup saat game diluncurkan #238
- **【🔨Perbaikan】** Memperbaiki kesalahan tinggi ComboBox pemilihan level skill di halaman karakter #242
- **【🔨Perbaikan】** Memperbaiki kesalahan impor pencapaian Embedded Yae #246
- **【🔨Perbaikan】** Memperbaiki item ransel yang menampilkan material kosong
- **【🔨Perbaikan】** Memperbaiki condensed resin yang dikategorikan sebagai material alih-alih barang berharga

## 1.19.9 Release
- **【🔨Perbaikan】** Memperbaiki crash saat mengganti halaman dalam mode debug
- **【🔨Perbaikan】** Sepenuhnya memperbaiki masalah zona waktu UIGF
- **【🔨Perbaikan】** Memperbaiki animasi interaksi ContentDialog yang hilang

## 1.19.8 Release
- **【🎉Baru】** Jendela utama otomatis menutup saat game diluncurkan, otomatis pulih saat game keluar #195
- **【🎉Baru】** Kotak centang persetujuan ditambahkan ke registrasi Hutao Passport
- **【🎉Baru】** Tampilan grid achievement menunjukkan jumlah primogem yang diperoleh / total #219

- **【✨Optimalisasi】** Dialog konfirmasi penghapusan catatan gacha untuk mencegah penghapusan tidak sengaja
- **【✨Optimalisasi】** Batas frame rate disesuaikan
- **【✨Optimalisasi】** Peralihan domain cadangan otomatis tidak lagi mengubah pengaturan persisten
- **【✨Optimalisasi】** Peningkatan pesan kesalahan saat peluncuran game

- **【🔨Perbaikan】** Memperbaiki aplikasi macet di halaman unduhan dalam skenario tertentu
- **【🔨Perbaikan】** Memperbaiki kegagalan ekspor UIGF v3.0 karena kotak centang UID hilang #217
- **【🔨Perbaikan】** Memperbaiki perlu login ulang saat meluncurkan via BetterGI setelah login Hutao Passport #151
- **【🔨Perbaikan】** Memperbaiki penyegaran ganda halaman pengumuman saat beralih tab #118
- **【🔨Perbaikan】** Memperbaiki jendela tidak dapat dipulihkan setelah diminimalkan ke tray
- **【🔨Perbaikan】** Memperbaiki scrollbar vertikal menyembunyikan tombol aksi catatan gacha

## 1.19.7 Release
- **【🎉Baru】** Latar dinamis seperti official launcher #191
- **【🎉Baru】** Dukungan wallpaper video latar yang dapat disesuaikan

- **【✨Optimalisasi】** Unduhan GuideView dengan tampilan kecepatan dan deteksi terhenti #188
- **【✨Optimalisasi】** Pemisahan opsi anti-blur karakter dan mosaik bawah air #184
- **【✨Optimalisasi】** Peningkatan notifikasi toast dalam mode admin; dukungan notifikasi mode Unpackaged #113
- **【✨Optimalisasi】** Pembaruan gaya halaman Wiki karakter
- **【✨Optimalisasi】** Ikon tema terang untuk tombol Beyond Gacha #166
- **【✨Optimalisasi】** Tidak menampilkan pesan plugin saat startup
- **【✨Optimalisasi】** Mode layar penuh diaktifkan secara default

- **【🔨Perbaikan】** Video latar terus mendekode GPU setelah jendela diminimalkan
- **【🔨Perbaikan】** Jendela error kadang muncul setelah keluar
- **【🔨Perbaikan】** Pesan error akun berulang saat jaringan tidak normal
- **【🔨Perbaikan】** Pintasan quick launch game sulit dipicu #194
- **【🔨Perbaikan】** Wiki karakter tidak menampilkan konten karakter yang diperkuat event #190
- **【🔨Perbaikan】** Pengaturan video latar tidak tersimpan
- **【🔨Perbaikan】** Kesalahan teks konstelasi Durin #185
- **【🔨Perbaikan】** Masalah zona waktu file UIGF

## 1.19.6.0 Release
- **【🎉Baru】** Aktifkan domain cadangan secara otomatis saat domain utama tercemar #169
- **【🎉Baru】** Senjata "Frostbound Oath" ditambahkan ke database #165
- **【🎉Baru】** Gambar latar lokal mendukung jalur kustom dan tautan pintasan #143

- **【✨Optimalisasi】** Adaptasi game versi 6.7
- **【✨Optimalisasi】** Pembaruan grafik Speedgraph #183
- **【✨Optimalisasi】** Tambahkan ikon baru untuk AssociationTypeIconConverter

- **【🔨Perbaikan】** "Hapus Kamera Elemental Burst" pada fitur injeksi tidak berfungsi #182
- **【🔨Perbaikan】** "Tutup Banner Peta" masih muncul di game saat diaktifkan #181
- **【🔨Perbaikan】** Jumlah tarikan pool disinkronkan dengan perubahan tombol gabung #179
- **【🔨Perbaikan】** Tombol tampilan daftar dan grid tidak berfungsi di catatan gacha #178
- **【🔨Perbaikan】** Perbaikan fitur refresh cache web untuk catatan gacha #175
- **【🔨Perbaikan】** Crash saat memilih jalur game atau menginstal plugin #173
- **【🔨Perbaikan】** Perilaku fungsi anti-blur karakter di dalam air #162
- **【🔨Perbaikan】** NotifyIcon klik kiri ganda tidak mengaktifkan jendela yang diminimalkan #112

## 1.19.5.1 Release
- **【✨Optimalisasi】** Mengurangi jumlah thread pembaruan otomatis
- **【✨Optimalisasi】** Mengubah direktori data WebView2 dalam mode Unpackaged untuk mengatasi masalah izin

- **【🔨Perbaikan】** Memperbaiki pembaruan otomatis tidak dapat berjalan untuk kedua kalinya dalam kasus tertentu
- **【🔨Perbaikan】** Memperbaiki mulai ulang sebagai administrator tidak berfungsi
- **【🔨Perbaikan】** Memperbaiki catatan Beyond Gacha tidak dapat diunduh dari Hutao Cloud
- **【🔨Perbaikan】** Menambahkan migrasi data untuk perbaikan catatan Beyond Gacha

## 1.19.5 Release
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
