// STRING METHODS

/* let str1 = "Hello ";
let str2 = 'World';
let str3 = `${str1+str2}`;
console.log(typeof str1, str1);
console.log(typeof str2, str2);
console.log(typeof str3, str3);

let str4 = new String("A String Object"); // Object type

console.log(typeof str4, str4);

var str1_str2 = str1.concat(str2);
console.log(str1_str2);


var a = "primitive.\nlerin properti veya metodu olmaz."; // length : 44
var b = "primitive.lerin properti veya metodu olmaz."; // length:43

console.log(a);

console.log(a.charAt(9));
console.log(a.charAt(10)); // \n özel karakter olduğu için string içinde yer almaz, indexte de tek karakter olarak dahil edilir.
console.log(a.charAt(11));

console.log(a.length); // 44
console.log(b.length); // 43

console.log(a.charAt(a.length-1)); // string'in son elemanı
console.log(a[a.length-1]); // string'in son elemanı



var str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

console.log(str.includes("simply")); // true
console.log(str.includes("Simply")); // false


console.log(str.indexOf("simply"));  // 15
console.log(str.indexOf("Simply"));  // -1
console.log(str.indexOf("clarusway"));  // -1

console.log(str.lastIndexOf("in")); // 65

var new_str = str.replace("in", "IN");
console.log(new_str);

var new_str = str.replaceAll("in", "IN");

console.log(new_str); */
/* 
var s = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

console.log(s.replace("dummy", "hello"));
console.log(s);

console.log(s.replace(/Dummy/i, "hello"));
console.log(s.replace(/s/g, "--")); // replace all
console.log(s.replaceAll("s", "--"));

console.log(s.search("text")); //28
console.log(s.search(/TEXT/i)); // 28 i- disable case sensative option

// indexOf ile search arasındaki tek fark ndexOf'ta regex kullanamıyoruz.


console.log(s.slice(0, 5)); // Lorem Ipsum
console.log(s.slice(6)); // 6ncı indexten itibaren hepsini verir

console.log(s.slice(40, 45)); // print
console.log(s.slice(-34, 45)); // print
console.log(s.slice(-34, -29)); // print

 */
/* 
var s = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

console.log(s.split(" "));
console.log(s.split("m"));

console.log(s.substr(40, 5)); // print
console.log(s.substr(22, 10)); // dummy text

console.log(s.substring(40, 45)); // print
console.log(s.substring(45,40)); // print

 */
/* 
var s = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

console.log(s.toLowerCase()); // change the string to lowercase

console.log(s.toUpperCase()); // make uppercase

let = str = "   ahmet   "
console.log(str.trim());
 */

let pangram = "pijamalı hasta yağız şoföre çabucak güvendi";

console.log(pangram.toUpperCase()); // PIJAMALI HASTA YAĞIZ ŞOFÖRE ÇABUCAK GÜVENDI

console.log(pangram.toLocaleUpperCase("tr-TR")); // browser dil ayarına göre çevirir, istersek içerisine çevirmek istediğimiz dilin alfabesine göre de kullanabiliriz. "tr-TR" için: PİJAMALI HASTA YAĞIZ ŞOFÖRE ÇABUCAK GÜVENDİ


let pangram2 = "PİJAMALI HASTA YAĞIZ ŞOFÖRE ÇABUCAK GÜVENDİ";
console.log(pangram2.toLowerCase()); // pi̇jamali hasta yağiz şoföre çabucak güvendi̇

console.log(pangram2.toLocaleLowerCase("tr-TR")); // pijamalı hasta yağız şoföre çabucak güvendi










