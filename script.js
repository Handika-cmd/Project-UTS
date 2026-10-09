// BLOK 1: Nampung Data ke Array & Simpan (Materi Array, Object, LocalStorage, JSON - Hari 9, 10, 15, 16)
let daftarKoleksiBuku = [];

const formBuku = document.getElementById("form-buku");
const inputJudul = document.getElementById("judul");
const inputPenulis = document.getElementById("penulis");
const inputTahun = document.getElementById("tahun");
const simpan = document.getElementById("btn-simpan");
const tabelBuku = document.getElementById("tabel-buku");

formBuku.addEventListener("submit", function(event){

  event.preventDefault();

  const bukuBaru ={
    judul: inputJudul.value,
    penulis: inputPenulis.value,
    tahun: inputTahun.value
  }

  daftarKoleksiBuku.push(bukuBaru);

  localStorage.setItem("dataBuku", JSON.stringify(daftarKoleksiBuku));

  formBuku.reset();

  tampilkanBuku();

});

// BLOK 2: Nampilin Data & Ngecek Saat Refresh (Materi Array Iteration - Hari 11)
function tampilkanBuku(){
  tabelBuku.innerHTML ="";

  daftarKoleksiBuku.map(function(buku, index){

    const barisBaru = document.createElement("tr");
    barisBaru.className = "text-center hover:bg-gray-50";

    barisBaru.innerHTML =`
      <td class="p-3 font-medium">${buku.judul}</td>
      <td class="p-3">${buku.penulis}</td>
      <td class="p-3">${buku.tahun}</td>
      <td class="p-3"></td>
      <td class="p-3">
        <button class="p-3 bg-red-500 text-white px-3 py-2 rounded hover:bg-red-700">Hapus</button>
      </td>
    `

    tabelBuku.appendChild(barisBaru);
  });
}

// BLOK 3: Jaga Data Pas Di-Refresh (Materi Control Flow & JSON Parsing - Hari 5 & 16)
if (localStorage.getItem("dataBuku")){
  daftarKoleksiBuku = JSON.parse(localStorage.getItem("dataBuku"));
  tampilkanBuku();
}