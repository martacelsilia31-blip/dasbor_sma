// 1. Pilih tombol berdasarkan ID-nya di HTML ('halloButton' menggunakan 'h' kecil)
const tombolSapa = document.getElementById('halloButton');

// 2. Tambahkan 'event listener' untuk mendeteksi aksi klik pada tombol
tombolSapa.addEventListener('click', function() {
  // 3. Tampilkan pesan pop-up saat tombol di-klik
  alert('Halo! Terima kasih sudah berkunjung!');
});
