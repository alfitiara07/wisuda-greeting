let currentSlide = 1;
let nama = "";

function nextSlide() {
  document.getElementById(`slide${currentSlide}`).classList.remove('active');
  currentSlide++;

  // Ambil nama dari input
  if (currentSlide === 3) {
    nama = document.getElementById('namaInput').value || 'Teman Hebat';
  }

  // Hitung Mundur Slide
  if (currentSlide === 5) {
    document.getElementById(`slide${currentSlide}`).classList.add('active');
    let count = 3;
    const countEl = document.getElementById('count');
    const countdown = setInterval(() => {
      count--;
      countEl.innerText = count;
      if (count === 0) {
        clearInterval(countdown);
        nextSlide();
      }
    }, 1000);
    return;
  }

  // Ucapan Slide
  if (currentSlide === 6) {
    document.getElementById(`slide${currentSlide}`).classList.add('active');
    const ucapan = [
      `Happy Graduation ya ${nama}`,
      "Semoga ilmunya manfaat barokah fiddunya wal akhiroh ya",
      "Sukses selalu dan tetap semangat",
      "Semoga apa yang dicita-citakan bisa tercapai",
      "~alfityxra_"
    ];
    tampilkanPerkata("ucapan", ucapan, 0, () => {
      setTimeout(() => nextSlide(), 2000); // lanjut otomatis ke slide 7
    });
    return;
  }

  // Respon Slide
  if (currentSlide === 8) {
    document.getElementById(`slide${currentSlide}`).classList.add('active');
    tampilkanPerkata("teks8", ["Wkwk, mb alfi tau ko pasti kalian suka BWHAHAHA"], 0, () => {
      setTimeout(() => nextSlide(), 2000); // lanjut otomatis ke slide 9
    });
    return;
  }

  // Penutup Slide
  if (currentSlide === 9) {
    document.getElementById(`slide${currentSlide}`).classList.add('active');
    tampilkanPerkata("teks9a", ["Okedeh kalau gitu SEE U NEXT TIME YUP GUYS"], 0, () => {
      setTimeout(() => {
        tampilkanPerkata("teks9b", ["GOOD LUCK"], 0, () => {
          setTimeout(() => {
            tampilkanPerkata("teks9c", ["AND DON'T FORGET ME AHAHAAAAA"], 0);
          }, 1000);
        });
      }, 1000);
    });
    return;
  }

  // Default show next slide
  document.getElementById(`slide${currentSlide}`).classList.add('active');
}

// Fungsi tampil kata per kata
function tampilkanPerkata(id, kalimatArray, index, callback) {
  const elemen = document.getElementById(id);
  elemen.innerHTML = "";
  const kata = kalimatArray[index].split(" ");
  let i = 0;
  const tampil = setInterval(() => {
    elemen.innerHTML += kata[i] + " ";
    i++;
    if (i >= kata.length) {
      clearInterval(tampil);
      if (index + 1 < kalimatArray.length) {
        setTimeout(() => tampilkanPerkata(id, kalimatArray, index + 1, callback), 1000);
      } else if (callback) {
        callback();
      }
    }
  }, 400);
}
