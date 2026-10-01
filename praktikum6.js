const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("Nama mahasiswa: ", function(nama) {
	rl.question("Nilai tugas: ", function(inputTugas) {
		const nilaiTugas = parseFloat(inputTugas);

		rl.question("Nilai UTS: ", function(inputUts) {
			const nilaiUts = parseFloat(inputUts);

			rl.question("Nilai UAS: ", function(inputUas) {
				const nilaiUas = parseFloat(inputUas);
				const nilaiAkhir = (nilaiTugas * 0.3) + (nilaiUts * 0.3) + (nilaiUas * 0.4);

				console.log("Nama mahasiswa:", nama);
				console.log("Nilai akhir:", nilaiAkhir.toFixed(2));
				rl.close();
			});
		});
	});
});