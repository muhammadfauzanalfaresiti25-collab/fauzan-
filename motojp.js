// Data event MotoGP
let motoGP = [
  {
    circuit: "Losail",
    location: "Qatar",
    winner: {
      firstName: "Andrea",
      lastName: "Dovizioso",
      country: "Italy",
    },
  },
  {
    circuit: "Autodromo",
    location: "Argentine",
    winner: {
      firstName: "Cal",
      lastName: "Crutchlow",
      country: "UK",
    },
  },
  {
    circuit: "De Jerez",
    location: "Spain",
    winner: {
      firstName: "Valentino",
      lastName: "Rossi",
      country: "Italy",
    },
  },
  {
    circuit: "Mugello",
    location: "Italy",
    winner: {
      firstName: "Andrea",
      lastName: "Dovizioso",
      country: "Italy",
    },
  },
];

// Menyimpan hasil pengelompokan berdasarkan negara pemenang
let hasil = {};

// Melakukan perulangan untuk setiap event MotoGP
for (let i = 0; i < motoGP.length; i++) {
  let event = motoGP[i];

  // Mengambil negara asal pemenang
  let negara = event.winner.country;

  // Membuat data baru jika negara belum ada di hasil
  if (!hasil[negara]) {
    hasil[negara] = {
      winningCircuits: [], // Menyimpan daftar kemenangan
      totalWin: 0,         // Menghitung total kemenangan
    };
  }

  // Menyimpan nama pemenang dan lokasi sirkuit
  hasil[negara].winningCircuits.push({
    name: event.winner.firstName + " " + event.winner.lastName,
    winLocation: event.circuit + ", " + event.location,
  });

  // Menambahkan jumlah kemenangan negara tersebut
  hasil[negara].totalWin++;
}

// Menampilkan total kemenangan setiap negara
Object.entries(hasil).forEach(([negara, data]) => {
  console.log(`${negara}: ${data.totalWin} kemenangan`);

  // Menampilkan nama pemenang dan lokasi setiap kemenangan
  data.winningCircuits.forEach(({ name, winLocation }) => {
    console.log(`  - ${name}, ${winLocation}`);
  });
});