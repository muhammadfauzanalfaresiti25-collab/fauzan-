const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Daftar harga barang
const barang = {
    1: { nama: "Buku", harga: 15000 },
    2: { nama: "Pulpen", harga: 5000 },
    3: { nama: "Tas", harga: 100000 },
    4: { nama: "Sepatu", harga: 250000 },
    5: { nama: "Jaket", harga: 300000 }
};

console.log("=================================");
console.log("       PROGRAM HITUNG DISKON     ");
console.log("=================================");
console.log("Daftar Barang:");
console.log("1. Buku   - Rp15.000");
console.log("2. Pulpen - Rp5.000");
console.log("3. Tas    - Rp100.000");
console.log("4. Sepatu - Rp250.000");
console.log("5. Jaket  - Rp300.000");
console.log("=================================");

let totalBelanja = 0;
let jumlahBarang = 0;

function pilihBarang() {
    if (jumlahBarang >= 3) {
        hitungDiskon();
        return;
    }

    rl.question(`Pilih barang ke-${jumlahBarang + 1} (1-5): `, function (pilihan) {

        // Switch Case untuk memilih barang
        switch (pilihan) {
            case "1":
                console.log("Anda memilih Buku - Rp15.000");
                totalBelanja += barang[1].harga;
                break;

            case "2":
                console.log("Anda memilih Pulpen - Rp5.000");
                totalBelanja += barang[2].harga;
                break;

            case "3":
                console.log("Anda memilih Tas - Rp100.000");
                totalBelanja += barang[3].harga;
                break;

            case "4":
                console.log("Anda memilih Sepatu - Rp250.000");
                totalBelanja += barang[4].harga;
                break;

            case "5":
                console.log("Anda memilih Jaket - Rp300.000");
                totalBelanja += barang[5].harga;
                break;

            default:
                console.log("Pilihan barang tidak tersedia!");
                pilihBarang();
                return;
        }

        jumlahBarang++;
        pilihBarang();
    });
}

// Menghitung diskon
function hitungDiskon() {
    let diskon = 0;
    let persenDiskon = 0;

    // Menentukan diskon berdasarkan total belanja
    if (totalBelanja >= 300000) {
        persenDiskon = 10;
        diskon = totalBelanja * 0.10;
    } 
    else if (totalBelanja >= 100000) {
        persenDiskon = 5;
        diskon = totalBelanja * 0.05;
    } 
    else if (totalBelanja >= 50000) {
        persenDiskon = 3;
        diskon = totalBelanja * 0.03;
    }

    let totalBayar = totalBelanja - diskon;

    console.log("\n=================================");
    console.log("          HASIL PEMBELIAN        ");
    console.log("=================================");
    console.log("Total Belanja : Rp" + totalBelanja.toLocaleString("id-ID"));

    if (diskon > 0) {
        console.log("Diskon        : " + persenDiskon + "%");
        console.log("Total Diskon  : Rp" + diskon.toLocaleString("id-ID"));
        console.log("Total Bayar   : Rp" + totalBayar.toLocaleString("id-ID"));
    } else {
        console.log("Anda tidak mendapat diskon karena");
        console.log("tidak mencapai minimum pembelanjaan.");
    }

    console.log("=================================");

    rl.close();
}

// Menjalankan program
pilihBarang();