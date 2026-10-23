---
category: [FAQ]
icon: iconfont icon-delete
tag: [Uninstall]
order: 9
comment: false
description: Menghapus instalasi Snap Hutao itu mudah dan cepat. Anda bisa mengikuti panduan di halaman ini untuk menghapus Snap Hutao sesuai kebutuhan Anda.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/advanced/uninstall.html&has_description=False
---

# Menghapus Instalasi Snap Hutao

::: warning
Jika berpindah dari MSIX lama ke Microsoft Store 2.0.2, **jangan hapus aplikasi atau data lama sebelum membuat cadangan**. Baca [panduan migrasi](/id/advanced/msix-migration).
:::

Menghapus Snap Hutao adalah proses yang sederhana. Jika Anda ingin menghapus program dan semua datanya, silakan ikuti langkah-langkah berikut.

## Menghapus Aplikasi Snap Hutao

1. Buka **Start Menu**.
2. Cari `Snap Hutao`.
3. Klik kanan pada Snap Hutao, lalu pilih **"Uninstall"**.

## Menghapus data aplikasi (hanya jika sudah tidak diperlukan)

Lokasi penyimpanan tergantung metode instalasi dan pengaturan. MSIX lama biasanya memakai `%LOCALAPPDATA%\Packages\E8B6E2B3-D2A0-4435-A81D-2A16AAF405C8_*\LocalState\Hutao`, edisi Store memakai `%LOCALAPPDATA%\Packages\SnapHutaoRemasteringProje.SnapHutaoRemastered_*\LocalState\Hutao`, sedangkan Setup biasanya `%LOCALAPPDATA%\SnapHutaoRemastered`. Tanda bintang mewakili akhiran nama paket, bukan jalur folder literal. Gunakan jalur khusus jika pernah diatur, dan cadangkan data sebelum menghapusnya.

## Pertanyaan Umum

### Kenapa muncul pesan "You'll need a new app to open this"?

![uninstall-error](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01b3j0eY1g6duBXLJXg_!!1797064093.jpg_.webp)

Jika Anda melihat pesan seperti "You'll need a new app to open this hutao link" setelah menghapus Snap Hutao, ini artinya tugas otomatis untuk fitur Catatan Real-time belum terhapus. Masalah ini hanya terjadi pada Snap Hutao versi lama.

**Solusi:**

1. Instal ulang Snap Hutao.
2. Buka Pengaturan, lalu matikan tugas otomatis Catatan Real-time.
3. Hapus kembali instalasi Snap Hutao.

Jika Anda tidak dapat menemukan tugas tersebut di Penjadwal Tugas (Task Scheduler) sistem namun masalah tetap ada, silakan merujuk ke [dokumen ini](https://github.com/DGP-Studio/Snap.Hutao.Docs/issues/18) untuk solusi lebih lanjut.

### Bagaimana cara backup dan restore data secara penuh?

::: warning Peringatan Keamanan Data
File `Userdata.db` berisi semua data Anda, termasuk `Cookie` HoYoLAB yang sangat sensitif. Harap simpan file ini dengan aman dan jangan bagikan kepada siapa pun.
:::

#### **Untuk Backup:**

1. Buka folder data Snap Hutao (lokasi default: `%userprofile%/Documents/Hutao`).
2. Salin file `Userdata.db` dari folder tersebut ke lokasi backup pilihan Anda.

#### **Untuk Restore:**

1. Salin kembali file `Userdata.db` yang sudah Anda backup ke dalam folder data Snap Hutao.
2. Jalankan Snap Hutao, dan data Anda akan pulih seperti semula.