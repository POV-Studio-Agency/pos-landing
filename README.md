# POSITIF Landing Page

Situs statis POSITIF yang siap dipublikasikan melalui GitHub Pages.

## Halaman

- `index.html` — landing page
- `features.html` — daftar fitur restoran dan retail
- `pricing.html` — harga bulanan dan tahunan
- `privacy.html` — kebijakan privasi
- `404.html` — halaman tidak ditemukan khusus GitHub Pages

## Menjalankan secara lokal

```bash
python3 -m http.server 4175
```

Buka `http://127.0.0.1:4175`.

## Publikasi di GitHub Pages

1. Buat repository GitHub kosong.
2. Tambahkan remote dan push branch `main`.
3. Buka **Settings → Pages**.
4. Pilih **Deploy from a branch**, branch `main`, folder `/ (root)`.

Situs tidak membutuhkan proses build atau dependency.
