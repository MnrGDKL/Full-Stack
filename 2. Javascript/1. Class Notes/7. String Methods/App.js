// STRING METHODS

let str1 = "Hello ";
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






