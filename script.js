// Kita siapkan array kosong buat nampung data bukunya
let daftarKoleksiBuku = [];

// Ambil elemen form, input, dan tabel
const formBuku = document.getElementById('form-buku');
const inputJudul = document.getElementById('judul');
const inputPenulis = document.getElementById('penulis');
const inputTahun = document.getElementById('tahun');
const tabelBuku = document.getElementById('tabel-buku');

// Event pas tombol Simpan Buku diklik
formBuku.addEventListener('submit', function(e) {
  e.preventDefault(); // Cegah reload halaman

  // 1. Masukin data input ke bentuk Object (Materi Hari 10)
  const bukuBaru = {
    judul: inputJudul.value,
    penulis: inputPenulis.value,
    tahun: inputTahun.value
  };

  // 2. Masukin object bukuBaru ke dalam Array pake .push() (Materi Hari 9)
  daftarKoleksiBuku.push(bukuBaru);

  // 3. Simpan Array ke localStorage dalam bentuk String JSON (Materi Hari 15 & 16)
  // JSON.stringify dipake karena localStorage nggak bisa langsung nyimpen Array/Object
  localStorage.setItem('dataBuku', JSON.stringify(daftarKoleksiBuku));

  // 4. Kosongkan kotak input biar siap ngetik lagi
  inputJudul.value = '';
  inputPenulis.value = '';
  inputTahun.value = '';
  inputJudul.focus();

  // PANGGIL FUNGSI UNTUK TAMPILKAN KE LAYAR (Di blok 2 nanti)
  tampilkanBuku();
});

// Fungsi buat nampilin daftar buku ke layar
function tampilkanBuku() {
  // Kosongin dulu isi tabel biar nggak dobel nambahnya
  tabelBuku.innerHTML = '';

  // Looping array pake .map() (Materi Hari 11 - Array Iteration)
  daftarKoleksiBuku.map(function(buku, index) {
    // Bikin elemen baris baru
    const barisBaru = document.createElement('tr');
    barisBaru.className = 'text-center hover:bg-gray-50';
    
    // Masukin data ke kolom <td>
    barisBaru.innerHTML = `
      <td class="p-3">${buku.judul}</td>
      <td class="p-3">${buku.penulis}</td>
      <td class="p-3">${buku.tahun}</td>
      <td class="p-3"></td>
      <td class="p-3">
        <button class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Hapus</button>
      </td>
    `;

    // Tempel barisnya ke tbody
    tabelBuku.appendChild(barisBaru);
  });
}

// Saat halaman pertama kali dimuat / direfresh
if (localStorage.getItem('dataBuku')) {
  // Ambil data string dari localStorage, ubah balik jadi Array pake JSON.parse
  daftarKoleksiBuku = JSON.parse(localStorage.getItem('dataBuku'));
  
  // Langsung tampilkan data lama tadi ke tabel
  tampilkanBuku();
}