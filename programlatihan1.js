
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1. Membalik kata atau kalimat
function balikKalimat(kalimat) {
    return kalimat.split("").reverse().join("");
}

// 2. Menghitung pangkat bilangan
function hitungPangkat(angka, pangkat) {
    return angka ** pangkat;
}

// 3. Menghitung faktorial
function faktorial(n) {
    if (n < 0 || !Number.isInteger(n)) {
        return "Input harus bilangan bulat nonnegatif";
    }
    

    if (n === 0 || n === 1) {
        return 1;
    }

    return n * faktorial(n - 1);
}

// 4. Menghapus semua spasi
function hapusSpasi(kalimat) {
    return kalimat.replace(/\s/g, "");
}

// 5. Mengecek email valid atau tidak
function cekEmail(email) {
    const pola = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pola.test(email);
}

// Menu program
function menu() {
    console.log("\n=== PROGRAM JAVASCRIPT ===");
    console.log("1. Membalik kata/kalimat");
    console.log("2. Menghitung pangkat");
    console.log("3. Menghitung faktorial");
    console.log("4. Menghapus spasi");
    console.log("5. Mengecek email");
    console.log("0. Keluar");

    rl.question("Pilih menu: ", function (pilihan) {
        switch (pilihan) {
            case "1":
                rl.question("Masukkan kalimat: ", function (teks) {
                    console.log("Hasil:", balikKalimat(teks));
                    menu();
                });
                break;

            case "2":
                rl.question("Masukkan bilangan: ", function (a) {
                    rl.question("Masukkan pangkat: ", function (b) {
                        const angka = Number(a);
                        const pangkat = Number(b);

                        if (a.trim() === "" || b.trim() === "" ||
                            !Number.isFinite(angka) ||
                            !Number.isFinite(pangkat)) {
                            console.log("Input harus berupa angka.");
                        } else {
                            console.log(
                                "Hasil:",
                                hitungPangkat(angka, pangkat)
                            );
                        }
                        menu();
                    });
                });
                break;

            case "3":
                rl.question("Masukkan bilangan bulat: ", function (n) {
                    if (n.trim() === "") {
                        console.log("Input tidak boleh kosong.");
                    } else {
                        console.log("Hasil:", faktorial(Number(n)));
                    }
                    menu();
                });
                break;

            case "4":
                rl.question("Masukkan kalimat: ", function (teks) {
                    console.log("Hasil:", hapusSpasi(teks));
                    menu();
                });
                break;

            case "5":
                rl.question("Masukkan email: ", function (email) {
                    if (cekEmail(email)) {
                        console.log("Email valid.");
                    } else {
                        console.log("Email tidak valid.");
                    }
                    menu();
                });
                break;

            case "0":
                console.log("Program selesai.");
                rl.close();
                break;

            default:
                console.log("Pilihan tidak tersedia.");
                menu();
        }
    });
}

menu();
