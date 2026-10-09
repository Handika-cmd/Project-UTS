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
    judul: inputJudul,
    penulis: inputPenulis,
    tahun: inputTahun
  }

  daftarKoleksiBuku.push(bukuBaru);

  localStorage.setItem("dataBuku", JSON.stringify(daftarKoleksiBuku));

  formBuku.reset();

});

