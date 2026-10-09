
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fungsi menghitung kalori lari
function kaloriLari(menit) {
    return (menit / 5) * 60;
}

// Fungsi menghitung kalori push-up
function kaloriPushUp(menit) {
    return (menit / 30) * 200;
}

// Fungsi menghitung kalori plank
function kaloriPlank(menit) {
    return menit * 5;
}

// Memasukkan durasi olahraga
rl.question("Masukkan durasi lari (menit): ", function(lari) {
    rl.question("Masukkan durasi push-up (menit): ", function(pushup) {
        rl.question("Masukkan durasi plank (menit): ", function(plank) {

            const waktuLari = Number(lari);
            const waktuPushUp = Number(pushup);
            const waktuPlank = Number(plank);

            if (
                lari.trim() === "" ||
                pushup.trim() === "" ||
                plank.trim() === "" ||
                !Number.isFinite(waktuLari) ||
                !Number.isFinite(waktuPushUp) ||
                !Number.isFinite(waktuPlank) ||
                waktuLari < 0 ||
                waktuPushUp < 0 ||
                waktuPlank < 0
            ) {
                console.log("Input harus berupa angka dan tidak boleh negatif.");
            } else {
                const hasilLari = kaloriLari(waktuLari);
                const hasilPushUp = kaloriPushUp(waktuPushUp);
                const hasilPlank = kaloriPlank(waktuPlank);

                const totalKalori =
                    hasilLari + hasilPushUp + hasilPlank;

                console.log("\n=== HASIL PERHITUNGAN KALORI ===");
                console.log("Kalori dari lari     :", hasilLari, "kalori");
                console.log("Kalori dari push-up  :", hasilPushUp, "kalori");
                console.log("Kalori dari plank    :", hasilPlank, "kalori");
                console.log("Total kalori terbakar:", totalKalori, "kalori");
            }

            rl.close();
        });
    });
});
