/* let cars = ["Opel", "Audi", "BMW"];
console.log(cars);

let cars2 = Array.of("Opel", "Audi", "BMW");
console.log(cars2);

let cars3 = new Array("Opel", "Audi", "BMW");
console.log(cars3);

var num1 = new Array(2, 10);
console.log(num1);

var num2 = new Array(10);
console.log(num2);

 */



/* 
const cars = ["Opel", "Audi", [1, 2, true], "BMW"];

console.log(cars[0]); // Audi

console.log(cars[2][2]); //true

cars[2] = "Porsche";

console.log(cars); // ['Opel', 'Audi', 'Porsche', 'BMW']

cars[4] = "Mercedes";

console.log(cars); // ['Opel', 'Audi', 'Porsche', 'BMW', 'Mercedes']

cars[9] = "Ferrari"; // array uzunluğundan çok büyük bir elemana atama yaparsak, aradaki indexleri undefined empty opject oluşturuyor.

console.log(cars); //['Opel', 'Audi', 'Porsche', 'BMW', 'Mercedes', empty × 4, 'Ferrari']


const new_array = [1, ,,,,,"3",, "ali"];
console.log(new_array); // aradaki virgül kadar boş eleman ekler

console.log(typeof new_array); // object
console.log(cars instanceof Array); // true -- array olduğunu anlamak için 1nci yöndem

console.log(Array.isArray(new_array)); // true -- 2nci yöntem

 */

/* 
// CONCAT() -- dizileri birleştirme NOT: diziye kalıcı değişiklik yapmaz

const fruits = ["Banana", "Orange", "Lemon"];
const vegetables = ["Broccoli", "Celery", "Parsley", "Artichoke"];

console.log(fruits.concat(vegetables));
console.log(fruits.concat("Fig", 3, "Peer")); // dizi sonuna eleman ekler

console.log(" " + fruits); // string bir ifadeyle array toplarsak sonucu string yapıyor

console.log(fruits.toString());

console.log(fruits + vegetables); // sonuç string olur
 */

/* 
// SORT() -- string mantığına göre sıralama yapar, numaraları ASCII kodlarına göre sıralar

const daltones = ['Joe','Jack','William','Avarel'];
console.log(daltones.sort()); //  ['Avarel', 'Jack', 'Joe', 'William']

const num = [3, 22, 4, 5, 1, 100];
console.log(num.sort()); // [1, 100, 22, 3, 4, 5]

console.log(num.sort((a,b) => a - b)); // [1, 3, 4, 5, 22, 100]

console.log(num.sort((a, b) => b - a)); // [1, 3, 4, 5, 22, 100]
 */

/* 
// PUSH() -- dizi sonuna ilave bir eleman ekler ve arrayin yeni uzunluğunu döndürür
// POP() -- dizinin son elemanını siler

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Pears");
console.log(fruits);

fruits.push("Pears", "Pineapple", 2);
console.log(fruits);

console.log(fruits.pop()); // son elemanı silerken sildiği elemanı da geri döndürür

console.log(fruits.pop());
 */

/* 
// SHIFT() -- array ilk elemanını siler ve sildiği elemanı geri döndürür
// UNSHIFT() -- array'in en başına eleman ekler ve de bize ekledikten sonraki yeni dizinin uzunluğuun döndürür

const fruits = ["Banana", "Orange", "Apple", "Mango"];

const deleted = fruits.shift();
console.log(deleted); // Banana
console.log(fruits); // ['Orange', 'Apple', 'Mango']


const unshifted = fruits.unshift("Pears", 2, [1, 2]);
console.log(unshifted); // 6 yeni array uzunluğu
console.log(fruits); //  ['Pears', 2, [1, 2], 'Orange', 'Apple', 'Mango']
 */

/* 
// SPLICE() -- 2 işlemi aynı anda uygulanabilir. ekleme ve silme, sildiği elemanları da döndürür. Orjinal dizimizi değiştirir.

const names = ["John", "Edward", "Victor"];
var deleted = names.splice(1,2, "Mark", "James"); // 1nci indexten itibaren 2 eleman sil ve "Mark" ve "James" ekle

console.log(deleted); // ['Edward', 'Victor']
console.log(names); // ['John', 'Mark', 'James']
 */

/* 
// SLICE() -- verilen parametrelere göre içerisinden yeni bir dizi oluşturuyor. Tek rakam yazarsak o rakamdan itibaren tüm diziyi döndürür.

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

const citrus1 = fruits.slice(1,3); // ['Orange', 'Lemon']
const citrus2 = fruits.slice(1,-2); // ['Orange', 'Lemon']
const citrus3 = fruits.slice(-4,3); // ['Orange', 'Lemon']
const citrus4 = fruits.slice(-4,-2); // ['Orange', 'Lemon']


console.log(citrus1);
console.log(citrus2);
console.log(citrus3);
console.log(citrus4);
 */


/* 
// INDEXOF() -- stringlerdeki gibi içerisinde verilen ifadeyi arar, ilave değer verirsek verilen indexten sonraya bakar
// LASTINDEXOF() -- içerisinde verilen ifadenin en son geçtiği index numarasını verir. ilave değer verirsek verilen indexe kadar bakar

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango", "Banana"];

console.log(fruits.indexOf("Banana")); // 0
console.log(fruits.indexOf("Banana", 1)); // 5
console.log(fruits.indexOf("Muz")); // -1


console.log(fruits.lastIndexOf("Banana")); // 5
console.log(fruits.lastIndexOf("Banana", )); // 5

 */