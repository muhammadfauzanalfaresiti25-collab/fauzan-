// data nilai siswa
let studentsScore = [
  { name: "Andi", score: 90 },
  { name: "Rudi", score: 80 },
  { name: "Dira", score: 100 },
];

// urutkan nilai dari tertinggi ke terendah
studentsScore.sort((a, b) => b.score - a.score);

// tampilkan semua siswa berdasarkan urutan nilai
for (let i = 0; i < studentsScore.length; i++) {
  console.log("Peringkat " + (i + 1));
  console.log("Nama  : " + studentsScore[i].name);
  console.log("Nilai : " + studentsScore[i].score);
  console.log("----------------");
}