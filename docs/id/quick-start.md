---
pageClass: link-box
externalLinkIcon: false
category: [Functionality, Tutorial]
comment: false
icon: iconfont icon-launch
order: 5
description: Ikuti panduan mulai cepat ini untuk menyiapkan Snap Hutao dengan cepat.
banner: https://img.alicdn.com/imgextra/i1/1797064093/O1CN01mpzxPR1g6e22IjFMh_!!1797064093.png
---

# Mulai Cepat

Ikuti panduan mulai cepat ini untuk menyiapkan Snap Hutao dengan cepat.

## <HopeIcon icon="iconfont icon-windows" size="1.7rem" color="rgb(0, 168, 232)" /> Persyaratan Sistem Minimum

| Persyaratan | Spesifikasi |
| :--- | :--- |
| **Versi OS Minimum yang Didukung** | Windows 10 Build 19045.5371 (22H2)<br/> Windows 11 Build 22621 (22H2) |
| **Versi OS yang Direkomendasikan** | Windows 11 Build 26100 (24H2) atau lebih baru |
| **Komponen yang Dibutuhkan** | Windows Update, App Installer, **MSVC Runtime** |
| Komponen Opsional | WebView2 Runtime |

**Versi OS yang Tidak Didukung**:

1. Edisi Windows Enterprise, termasuk cabang **LTSC dan LTSB**
2. Edisi Windows IoT
3. **Versi Windows yang ringan atau dimodifikasi; masalah pada versi non-resmi Microsoft tidak akan ditangani**
4. Masalah pada build Windows Insider Preview tidak akan ditangani

> **Pembaruan Windows Januari 2025 [KB5049981](https://support.microsoft.com/en-us/topic/january-14-2025-kb5049981-os-builds-19044-5371-and-19045-5371-12f3788f-6e7d-4524-8ab3-27d1666e0510) adalah persyaratan wajib untuk menjalankan Snap Hutao di Windows 10. Ini termasuk dalam Windows 10 Build 19045.5371 dan yang lebih baru.**

## <HopeIcon icon="iconfont icon-cache" size="1.8rem" color="rgb(128, 161, 255)" /> Unduh Snap Hutao

### Instalasi Baru

::: tabs

== Gunakan Snap.Hutao.Remastered.Deployment Installer

<div class="vp-card-container">
  <div class="hint-container warning">
    <p class="hint-container-title">Snap.Hutao.Remastered.Deployment adalah installer baru kami yang dapat mengonfigurasi sertifikat, dll. secara otomatis</p>
  </div>

<VPCard
title="Tautan Dipercepat"
desc="Menyediakan unduhan installer dalam situs ini"
logo="/assets/logo.png"
link="https://static.snaphutaorp.org/Snap.Hutao.Remastered.Deployment.exe"
background="rgba(155, 233, 168, 0.15)"
/>

<VPCard
title="Github"
desc="Tautan asli Github"
logo="/images/202312/github-mark.svg"
link="https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/releases/download/1.19.0.0/Snap.Hutao.Remastered.Deployment.exe"
background="rgba(155, 233, 168, 0.15)"
/>

</div>

== Unduh dari Github Release

<div class="vp-card-container">
  <div class="hint-container warning">
    <p class="hint-container-title">
    Disarankan untuk menggunakan Snap.Hutao.Remastered.Deployment
    Jika tidak, Anda perlu menginstal sertifikat secara manual dan mengunduh paket msix
    </p>
  </div>

<VPCard
title="GitHub"
desc="Semua versi Snap Hutao Remastered dirilis di repositori kode utama"
logo="/images/202312/github-mark.svg"
link="https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/releases"
background="rgba(155, 233, 168, 0.15)"
/>

</div>
:::

## Versi Turunan yang Dikembangkan Komunitas

Dari kekuatan komunitas!
:::tabs 

== Snap Hutao Remastered

<div class="vp-card-container">
<VPCard
title="Situs Web Resmi Snap Hutao Remastered"
desc="Proyek yang telah mendesain ulang fitur-fitur canggih"
logo="https://snaphutaorp.org/logo.png"
link="https://snaphutaorp.org/"
background="rgba(155, 233, 168, 0.15)"
/>
</div>

== Snap Hutao Perbaikan Asli
<div class="vp-card-container">
<VPCard
title="Snap Hutao Asli"
desc="Disajikan oleh WDG"
logo="/images/202312/github-mark.svg"
link="https://github.com/wangdage12/Snap.Hutao"
background="rgba(155, 233, 168, 0.15)"
/>
</div>
:::

Jika Anda tertarik untuk membuat proyek Snap Hutao Remastered menjadi lebih baik melalui usaha Anda sendiri, kami menyambut Anda untuk [bergabung dengan kami](development/join.md)!

### <HopeIcon icon="iconfont icon-update" size="1.5rem" color="rgb(255, 185, 0)" /> Perbarui Snap Hutao

Biasanya, mengikuti petunjuk pembaruan dalam aplikasi akan menyelesaikan pembaruan.

Selama Anda tidak menghapus direktori data secara manual, data lokal Anda tidak akan terpengaruh.

## <HopeIcon icon="iconfont icon-expansion" size="1.7rem" color="rgb(7, 163, 161)" /> Instal Komponen Opsional

Melalui komponen opsional, Snap Hutao dapat mengimplementasikan beberapa fungsi dengan lebih efisien. Meskipun bukan komponen wajib, mereka dapat secara signifikan meningkatkan pengalaman pengguna.

### <img src="/images/202312/MSEdge.webp" alt="Edge" width="20" height="20"> WebView2 Runtime

WebView2 Runtime disediakan oleh Microsoft dan memungkinkan Snap Hutao menyematkan komponen browser dengan overhead rendah. Komponen ini digunakan untuk mengimplementasikan fungsi login WebView2 akun MiYouShe.

Anda dapat menemukan `Evergreen Standalone Installer` di bagian bawah [situs web resmi Microsoft](https://developer.microsoft.com/en-us/microsoft-edge/webview2/). Pilih `x64` untuk mengunduh dan menginstal.

### <img src="/images/202409/Microsoft-logo.svg" alt="Microsoft" width="20" height="20"> Font Segoe Fluent Icons

Font ini disediakan oleh Microsoft dan mengoptimalkan efek tampilan ikon Snap Hutao. Kehilangan font ini dapat menyebabkan beberapa ikon tidak ditampilkan dengan benar.

Klik [tautan ini](https://aka.ms/SegoeFluentIcons) untuk mengunduh file ZIP font. Setelah diekstrak, klik kanan untuk menginstal font ke sistem.

### <img src="/images/202409/Microsoft-logo.svg" alt="Microsoft" width="20" height="20"> MSVC Runtime Library (MSVCRT)

MSVC Runtime Library adalah komponen yang diperlukan untuk membuka kunci fungsi frame rate. Jika Anda diminta dengan "Missing XXX.dll" atau "Missing XXX component", silakan instal versi terbaru MSVCRT.

Klik [tautan ini](https://aka.ms/vs/17/release/vc_redist.x64.exe) untuk mengunduh file instalasi MSVC Runtime Library (x64) dan selesaikan instalasi.

## <HopeIcon icon="iconfont icon-adduser" size="1.7rem" color="rgb(7, 163, 161)" /> Tambahkan Akun MiHoYo Pertama

Di antarmuka utama, klik panel akun di sudut kiri bawah antara tombol dokumen dan tombol pengaturan. Di panel akun MiHoYo yang muncul, pilih metode login sesuai dengan jenis akun.

Terlepas dari metode yang digunakan, pastikan akun telah diinisialisasi melalui aplikasi resmi. Jika tidak, Snap Hutao tidak akan dapat memperoleh informasi akun dengan benar.

:::: tabs

== Login Kode Verifikasi Seluler MiYouShe

::: warning
Pastikan akun MiYouShe terikat dengan akun server domestik Genshin Impact.
:::

1.  Klik tombol "Kode Verifikasi Seluler", isi nomor ponsel dan kirim kode verifikasi.
2.  Setelah mengisi kode verifikasi, konfirmasi, dan tunggu sejenak hingga akun ditambahkan.

== Login Kode QR MiYouShe

::: warning
Pastikan akun MiYouShe terikat dengan akun server domestik Genshin Impact.
:::

1.  Klik tombol "Login Kode QR" dan tunggu hingga kode QR dimuat.
2.  Gunakan Aplikasi MiYouShe untuk memindai kode QR dan konfirmasi login.
3.  Tunggu sejenak, dan Snap Hutao akan menambahkan akun tersebut.

== Login Kata Sandi HoYoLAB

::: warning
Pastikan akun HoYoLAB terikat dengan akun server internasional Genshin Impact.
:::

1.  Klik tombol "Login Kata Sandi", isi kata sandi akun, dan konfirmasi.
2.  Tunggu sejenak, dan akun akan ditambahkan.

== Login Akun Media Sosial HoYoLAB

Metode ini bergantung pada komponen WebView2 Runtime.

::: warning
HoYoLAB memblokir koneksi jaringan dari daratan Tiongkok secara default.
:::

1.  Klik tombol "Login Pihak Ketiga" dan login melalui WebView2.
2.  Tunggu sejenak, dan akun akan ditambahkan.

== Login Cookie

::: warning
Harap simpan informasi Cookie Anda dengan aman untuk menghindari risiko akun.
:::

Login dengan memasukkan SToken secara manual untuk mengirimkan Cookie.

1.  Klik ikon Aplikasi target dan pilih "Input Manual".
2.  Masukkan Cookie yang valid dan konfirmasi. Setelah beberapa saat, akun akan ditambahkan.
    ::::

## <HopeIcon icon="iconfont icon-ask" size="1.7rem" color="var(--theme-color)" /> FAQ Instalasi

### Mengapa Muncul Tulisan Aneh (Mojibake) di Ikon Program

- Pengguna Windows 10 dapat menyelesaikan masalah dengan menginstal font `Segoe Fluent Icons`.
- Pilih "Install for all users" saat menginstal.

### Apakah Masalah Instalasi Bisa Diselesaikan dengan Memperbaiki Komponen Sistem

Anda bisa mencoba memperbaiki komponen yang hilang berdasarkan pesan kesalahan, tetapi tim pengembang Snap Hutao tidak akan memberikan dukungan.
