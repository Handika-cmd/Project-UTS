const formBuku = document.getElementById("form-buku");
const inputJudul = document.getElementById("judul");
const inputPenulis = document.getElementById("penulis");
const inputTahun = document.getElementById("tahun");
const simpan = document.getElementById("btn-simpan");
const tabel = document.getElementById("tabel-buku");

let daftarBuku = [];

// ===== BLOK 4: Fungsi untuk menampilkan data ke tabel =====
function renderTabel(){

    tabel.innerHTML = "";

    for (let i = 0; i < daftarBuku.length; i++){
        const bukuBaru = daftarBuku[i];

        const baris = document.createElement("tr");
        baris.className = "hover:bg-gray-50";

        baris.innerHTML =
        '<td class="p-3 font-medium">' + bukuBaru.judul + "</td>" +
        '<td class="p-3">' + bukuBaru.penulis + "</td>" +
        '<td class="p-3">' + bukuBaru.tahun + "</td>" +
        '<td class="p-3">Tersedia</td>' +
        '<td class="p-3">-</td>'

        tabel.appendChild(baris);

    }
};

// Mengaktifkan tombol Submmit
formBuku.addEventListener("submit", function(event){

    event.preventDefault();

    const judul = inputJudul.value;
    const penulis = inputPenulis.value;
    const tahun = inputTahun.value;

    const buku ={
        judul: judul,
        penulis: penulis,
        tahun: tahun
    };

    daftarBuku.push(buku);

    renderTabel();

    formBuku.reset();
    
});