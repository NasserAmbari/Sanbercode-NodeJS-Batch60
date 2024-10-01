/**
 *  Penggunaan Perbedaan var, let, const
 */

// Menggunakan var
var useVar = "Hello, var!";
if (true) {
  var useVar = "Reassigned var inside block";
  console.log(useVar); // Output: "Reassigned var inside block"
}
console.log(useVar); // Output: "Reassigned var inside block"

// Menggunakan let
let useLet = "Hello, let!";
if (true) {
  let useLet = "Scoped let inside block";
  console.log(useLet); // Output: "Scoped let inside block"
}
console.log(useLet); // Output: "Hello, let!"

// Menggunakan const
const useConst = "Hello, const!";
console.log(useConst); // Output: "Hello, const!"

// Error jika mencoba mengubah nilai const
// useConst = "Trying to change const";  // Uncaught TypeError: Assignment to constant variable

/**
 * Tipe Data
 */

// String
let name = "Ahmad Nasser Ambari";
console.log("String:", name); // Output: "Ahmad"
console.log(`Tipe data ${typeof name}`); // Output: "Tipe data string"

// Number
let age = 26;
console.log("Number:", age); // Output: 25
console.log(`Tipe data ${typeof age}`); // Output: "Tipe data number"

// Boolean
let isWorking = true;
console.log("Boolean:", isWorking); // Output: true
console.log(`Tipe data ${typeof isWorking}`); // Output: "Tipe data Boolean"

// Undefined
let job;
console.log("Undefined:", job); // Output: undefined
console.log(`Tipe data ${typeof isWorking}`); // Output: "Tipe data Boolean" -> Bingung kalok kenapa "Undefined" boolean :(

// Null
let money = null;
console.log("Null:", money); // Output: null
console.log(`Tipe data ${typeof money}`); // Output: "Tipe data object" -> Ini juga kenapa bisa jadi object :(

// Symbol
let symbol = Symbol("unique");
console.log("Symbol:", symbol); // Output: Symbol(unique)
console.log(`Tipe data ${typeof symbol}`); // Output: "Tipe data symbol"

let bigIntNum = BigInt(12345678901234567890);
console.log("BigInt:", bigIntNum); // Output: 12345678901234567890n
console.log(`Tipe data ${typeof bigIntNum}`); // Output: "Tipe data bigInt"

// Tipe Data Non-Primitif

// Object
let person = {
  name: "Ahmad Nasser Ambari",
  age: 25,
};
console.log("Object:", person); // Output: { name: 'Ahmad', age: 25 }
console.log(`Tipe data ${typeof person}`); // Output: "Tipe data object" -> Ini juga kenapa bisa jadi object :(

// Array
let fruits = ["Apple", "Banana", "Mango"];
console.log("Array:", fruits); // Output: [ 'Apple', 'Banana', 'Mango' ]
console.log(`Tipe data ${typeof fruits}`); // Output: "Tipe data object" -> Ini juga kenapa bisa jadi object :(

// Function
function greet() {
  return "Hello, World!";
}
console.log("Function:", greet()); // Output: "Hello, World!"

// Operator Aritmatika
let x = 10;
let y = 5;
console.log("Penjumlahan:", x + y); // Output: 15
console.log("Pengurangan:", x - y); // Output: 5
console.log("Perkalian:", x * y); // Output: 50
console.log("Pembagian:", x / y); // Output: 2
console.log("Modulus:", x % y); // Output: 0

// Operator Perbandingan
console.log("Apakah x lebih besar dari y?", x > y); // Output: true
console.log("Apakah x sama dengan y?", x == y); // Output: false
console.log("Apakah x tidak sama dengan y?", x != y); // Output: true
console.log("Strict equality (x === y):", x === y); // Output: false
console.log("Strict inequality (x !== y):", x !== y); // Output: true
