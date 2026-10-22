---
category: [FAQ]
order: 8
comment: false
---

# Migrasi MSIX lama ke Microsoft Store

Mulai 2.0.2, identitas paket MSIX rilis berubah. Windows membuat tempat penyimpanan data tersendiri untuk edisi Store; data dan pengaturan versi lama tidak dipindahkan otomatis.

::: warning
Jangan langsung menimpa pengaturan baru dengan `settings.dat` lama karena mungkin berisi jalur lama atau nilai khusus paket.
:::

1. Periksa **lokasi data sebenarnya** di aplikasi lama, termasuk jalur kustom. Buat cadangan lengkap lalu tutup kedua versi, termasuk proses tray di latar belakang.

2. Di File Explorer buka `%LOCALAPPDATA%\Packages`. Cari paket lama berawalan `E8B6E2B3-D2A0-4435-A81D-2A16AAF405C8_`. Data bawaan biasanya di `LocalState\Hutao`, tetapi gunakan jalur yang diatur sendiri jika berbeda.

3. Instal edisi Microsoft Store, jalankan sekali lalu tutup seluruhnya. Folder paket baru diawali `SnapHutaoRemasteringProje.SnapHutaoRemastered_`, dengan data standar di `LocalState\Hutao`.

4. Cadangkan berkas tujuan, kemudian salin data yang diperlukan seperti `Userdata.db` dan folder sumber daya ke **lokasi data baru yang sebenarnya**. Jangan menimpa seluruh `Packages` atau `LocalState`.

5. Jalankan edisi Store dan periksa akun serta riwayat wish. `LocalSettings` khusus untuk tiap paket; pengaturan, kredensial, dan status login mungkin perlu diatur ulang. Simpan cadangan dan versi lama sampai semuanya terverifikasi.

[Panduan Awal](/id/quick-start)
