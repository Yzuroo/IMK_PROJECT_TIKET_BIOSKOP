let kursiDipilih = null;

function pilihKursi(kursi) {
  if (kursiDipilih) {
    document.querySelector(`button:contains(${kursiDipilih})`).classList.remove("taken");
  }
  kursiDipilih = kursi;
  document.querySelectorAll("#kursi button").forEach(btn => btn.classList.remove("taken"));
  event.target.classList.add("taken");
}

function buatQR() {
  let nama = document.getElementById("nama").value;
  let film = document.getElementById("film").value;

  if (!nama || !kursiDipilih) {
    alert("Isi nama dan pilih kursi terlebih dahulu!");
    return;
  }

  let data = `Nama: ${nama}\nFilm: ${film}\nKursi: ${kursiDipilih}`;
  document.getElementById("detail").innerText = data;

  document.getElementById("qrcode").innerHTML = "";
  new QRCode(document.getElementById("qrcode"), data);
}
