/** @format */

console.log("Hallo omeens");
let namaBarang = "Kopi";
let harga = 5000;

console.log(namaBarang);
console.log(harga);

let totalBelanja = 180000;

if (totalBelanja >= 150000) {
  console.log("Diskon 15%");
} else if (totalBelanja >= 100000) {
  console.log("Diskon 10%");
} else {
  console.log("Tidak Mendapat Diskon");
}

function tampilkanHarga() {
  console.log(8000);
}

console.log("Mulai Transaksi");
tampilkanHarga();

console.log("Transaksi Selesai");

function cekKasir() {
  console.log("Kasir aktif");
}

console.log("Membuka toko");

console.log("Memeriksa pembayaran");

cekKasir();

console.log("Toko siap");

function diaMancing() {
  console.log("memancing");
}

diaMancing();

function hitungTotal(harga, jumlah) {
  return harga * jumlah;
}
let totalHarga = hitungTotal(5000, 3);
let itemHarga = hitungTotal(6000, 4);
console.log(totalHarga);
console.log(itemHarga);

function totalGambar(image) {
  console.log("image");
}
totalGambar();
console.log("memasak");

function hitungHarga(price) {
  console.log("price * 2");
  return price * 7;
}
let hasil = hitungHarga(30000);
console.log(hasil);

function jumlahBarang(harga, jumlah, uangKembali) {
  let totalBarang = harga * jumlah;

  if (uangKembali >= totalBarang) {
    return uangKembali - totalBelanja;
  } else {
    return "uang tidak cukup";
  }
}
let kembalian = jumlahBarang(12000, 3, 40000);
console.log(kembalian);

function jumlahItem(datang, laku, jumlahRetur) {
    let totalItem = datang * laku;
    if (totalItem >= jumlahRetur ) {
        return totalItem - jumlahRetur;
    }
    else {
        return "total barang kurang"
    }
}
let semuanya = jumlahItem(10, 5, 5);
console.log(semuanya);

function hitungDiskon(totalBeli) {
    if (totalBeli >= 200000) {
        return totalBeli * 0.2;
    
}
else if (totalBeli >= 100000) {
    return totalBeli * 0.1;
}
else {
    return 0;
}
}
let diskon = hitungDiskon(160000);
console.log(diskon);

function hitungPromo(totalBuy) {
    if (totalBuy >= 100000) {
        return totalBuy * 0.1;
    }
    return 0;
}

function hitungTotalAkhir(totalBuy) {
    let promo = hitungPromo(totalBuy);
    return totalBuy - promo;
}

let pembayaran = hitungTotalAkhir(150000);
console.log(pembayaran);