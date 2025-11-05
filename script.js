// Variable untuk menyimpan timeout debounce
let trackingTimeout = null;

// Logika untuk Modul C (Pelacakan Status di Halaman Beranda)
function checkStatus() {
    // Ambil nilai input dan konversi ke huruf kapital untuk mempermudah perbandingan
    const input = document.getElementById('tracking-input').value.trim().toUpperCase();
    const resultDiv = document.getElementById('tracking-result');
    
    // Reset konten default
    resultDiv.innerHTML = '';

    if (input === 'PZN-20251008-001') {
        resultDiv.classList.remove('hidden');
        resultDiv.innerHTML = `
            <h3>Status: PZN-20251008-001 (Aktif)</h3>
            <div class="timeline-item completed">
                <i class="fas fa-check-circle"></i>
                <div><h4>1. Pengajuan Dokumen Online</h4><p>10 Okt 2025, 09:30 WIB | Pemohon: Bpk. Andi</p></div>
            </div>
            <div class="timeline-item active">
                <i class="fas fa-spinner fa-spin"></i>
                <div>
                    <h4>2. Verifikasi Administrasi</h4>
                    <p>10 Okt 2025, 14:00 WIB | Petugas: Siti M.</p>
                    <span class="note" style="color: #007bff;">Status: Menunggu validasi kelengkapan dokumen.</span>
                </div>
            </div>
            <div class="timeline-item pending"><i class="far fa-circle"></i><div><h4>3. Survei Lapangan</h4><p>Belum Dimulai | Penanggung Jawab: Bidang Teknik</p></div></div>
            <div class="timeline-item pending"><i class="far fa-circle"></i><div><h4>4. Penerbitan Izin</h4><p>Belum Dimulai</p></div></div>
        `;
    } else if (input === 'PZN-20251009-002') {
        // Simulasi kasus butuh perbaikan
        resultDiv.classList.remove('hidden');
        resultDiv.innerHTML = `
            <h3>Status: PZN-20251009-002 (Perlu Perbaikan)</h3>
            <div class="timeline-item completed">
                <i class="fas fa-check-circle"></i>
                <div><h4>1. Pengajuan Dokumen Online</h4><p>12 Okt 2025, 10:00 WIB | Pemohon: PT Jaya Abadi</p></div>
            </div>
            <div class="timeline-item active">
                <i class="fas fa-exclamation-triangle" style="color: #dc3545;"></i>
                <div>
                    <h4>2. Verifikasi Administrasi (Perlu Perbaikan)</h4>
                    <p>13 Okt 2025, 15:30 WIB | Petugas: Rina S.</p>
                    <span class="note">Catatan: Mohon unggah ulang NPWP yang terlegasisir dan surat kuasa direktur.</span>
                </div>
            </div>
            <div class="timeline-item pending"><i class="far fa-circle"></i><div><h4>3. Survei Lapangan</h4><p>Belum Dimulai</p></div></div>
            <div class="timeline-item pending"><i class="far fa-circle"></i><div><h4>4. Penerbitan Izin</h4><p>Belum Dimulai</p></div></div>
        `;
    } 
    else {
        // Jika kode tidak ditemukan, tampilkan pesan di div hasil (tanpa alert)
        resultDiv.classList.add('hidden');
        if (input !== '') {
            resultDiv.innerHTML = `<h3>Status Tidak Ditemukan 😔</h3><p>Kode Tracking <b>${input}</b> tidak valid atau belum terdaftar.</p>`;
            resultDiv.classList.remove('hidden');
        }
    }
}

// FUNGSI BARU: Menangani input dan menjalankan cek status secara otomatis (debounce)
function handleTrackingInput() {
    const input = document.getElementById('tracking-input').value.trim();
    
    // Hapus timeout sebelumnya
    if (trackingTimeout) {
        clearTimeout(trackingTimeout);
    }

    // Set timeout baru: Cek status setelah 500ms (0.5 detik) jika input tidak berubah
    trackingTimeout = setTimeout(() => {
        // Hanya cek jika inputnya cukup panjang (misal lebih dari 5 karakter)
        if (input.length > 5) {
            checkStatus();
        } else {
             // Sembunyikan hasil jika input terlalu pendek atau kosong
            document.getElementById('tracking-result').classList.add('hidden');
        }
    }, 500); // Debounce 500ms
}


// Logika untuk Modul B (Portal Pemohon) - Asumsi fungsi ini sekarang menggunakan modal pop-up
function submitPermohonan() {
    // Fungsi submitPermohonan yang lebih baru (jika menggunakan modal) harus dipindahkan ke pemohon_portal.html
    // Jika masih menggunakan alert lama:
    alert('Permohonan berhasil diajukan! Anda akan menerima Kode Tracking melalui email.');
}

// Logika untuk Modul D (Portal Petugas/Admin)
function verifikasiPermohonan(id) {
    window.location.href = `verifikasi_detail.html?id=${id}`;
}