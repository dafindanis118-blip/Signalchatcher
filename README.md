# WiFi Killer Simulator — HACKERAI Lab

Dashboard cyber bergaya neon menggunakan HTML, CSS, JavaScript, dan server Python opsional.

## Jalankan tanpa Python
Buka `index.html` di browser. Seluruh tombol dan metrik demo berjalan di JavaScript.

## Jalankan dengan Python
Pastikan Python 3 tersedia, lalu di folder proyek jalankan:
```bash
python server.py
```
Buka `http://127.0.0.1:8000`.

Endpoint `/api/status` mengembalikan data simulasi. UI saat ini memakai JavaScript lokal untuk metrik; server Python disediakan sebagai backend demo opsional.

## Batasan
Proyek ini hanya simulasi UI. Tidak memindai Wi-Fi sekitar, mengirim paket serangan, atau memutus koneksi perangkat.
