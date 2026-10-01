// Praktikum 3: Operator dan Function

// Function operator
function operator(a, b) {
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", a / b);
    console.log("Modulus:", a % b);
}

// Function luas persegi
function luasPersegi(sisi) {
    return sisi * sisi;
}

// Function luas segitiga
function luasSegitiga(alas, tinggi) {
    return 0.5 * alas * tinggi;
}

// Function luas lingkaran
function luasLingkaran(jariJari) {
    return Math.PI * jariJari * jariJari;
}

// Pemanggilan function
operator(20, 6);

console.log("Luas Persegi:", luasPersegi(5));
console.log("Luas Segitiga:", luasSegitiga(10, 8));
console.log("Luas Lingkaran:", luasLingkaran(7));