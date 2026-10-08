const formBuku = document.getElementById("form-buku");
const inputJudul = document.getElementById("judul");
const inputPenulis = document.getElementById("penulis");
const inputTahun = document.getElementById("tahun");
const simpan = document.getElementById("btn-simpan");
const tabel = document.getElementById("tabel-buku");
const notif = document.getElementById("notif");

let daftarBuku = [];

// ===== BLOK 4: Fungsi untuk menampilkan data ke tabel (Saran Deklarasi dulu buat defenisi fungsi) =====
function renderTabel(){
    // 1. Kosongkan dulu isi tabel (biar nggak dobel)
    tabel.innerHTML = "";
    // 2. Loop setiap buku di array (materi Hari 7: Loop)
    for (i =0; i < daftarBuku.length; i++){
        const buku = daftarBuku[i];
    
    // 3. Bikin elemen baris <tr> baru
    const baris = document.createElement("tr");
    baris.className = "hover:bg-green-50";

    // 4. Isi baris dengan sel <td> berisi data buku
    baris.innerHTML = 
    '<td class="font-medium p-3">' + buku.judul + "</td>" +
    '<td class="p-3 text-center">' + buku.penulis + "</td>" +
    '<td class="p-3 text-center">' + buku.tahun + "</td>" +
    '<td class="p-3 text-center">Belum ada input</td>' +
    '<td class="p-3 text-center">Belum ada input</td>'
    // 5. Tempelkan baris ke dalam tabel
    tabel.appendChild(baris);
    }
};

// Mengaktifkan tombol Submmit
formBuku.addEventListener("submit", function(event){

    event.preventDefault();

    // 1. Ambil isi ketikan user dari tiap input
    const judul = inputJudul.value;
    const penulis = inputPenulis.value;
    const tahun = inputTahun.value;

    // 2. Bungkus jadi satu object buku
    const bukuBaru = {
        judul: judul,
        penulis: penulis,
        tahun: tahun
    };

    // 3. Masukkan ke array daftarBuku
    daftarBuku.push(bukuBaru);

    // 4. Tampilkan ulang isi tabel (fungsi ini kita bikin di Blok 4)
    renderTabel()

    // 5. Kosongkan form biar bisa input buku berikutnya
    formBuku.reset();

        // === Notifikasi muncul ===
    notif.classList.remove("hidden");
    notif.textContent = "Buku berhasil ditambah!";

    // Hilang otomatis setelah 3 detik
    setTimeout(() => {
      notif.classList.add("hidden");
    }, 3000);
});
