/**
 *
 * Penggunaan If else kasus bilangan genap-ganjil
 */

const bilangan = 1;

if (bilangan % 2 == 0) {
  console.log("Bilangan Genap");
} else {
  console.log("Bilangan Ganjil");
}

/**
 *
 * Penggunaan switch case kasus pilihan hari
 */
const hari = 2;

switch (hari) {
  case 1:
    console.log("Senin");
    break;

  case 2:
    console.log("Selasa");
    break;

  case 3:
    console.log("Rabu");
    break;

  case 4:
    console.log("Kamis");
    break;

  case 5:
    console.log("Jumat");
    break;

  case 6:
    console.log("Sabtu");
    break;

  case 7:
    console.log("Minggu");
    break;

  default:
    console.log("Kiamat keknya");
    break;
}
