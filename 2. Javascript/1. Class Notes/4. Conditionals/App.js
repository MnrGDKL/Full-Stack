/* // Conditionals

let score = 48
let score = +prompt('Notunuzu girin : ')
let grade = score >= 50
if (grade) console.log(`Tebrikler, notunuz ${score} geçtiniz`);
    console.log('kod sonu');
    if (grade) {
    console.log(`Tebrikler, notunuz ${score} geçtiniz`);
    } else {
    console.log('Üzgünüm kaldınız');
}
*/

/* 
// Turnary if

let score = 49;

score >= 50 ? console.log("Tebrikler"): console.log("Üzgünüm");

score = 80;

score >= 50 ? (score >=75 ? console.log("Takdir"): console.log("Teşekkür")):console.log("Kaldınız");

 */

/* 
// switch

let product = "eraser";
let message;

switch (product){
    case "pen":
        message = "Pen is $2";
        break;
    case "eraser":
        message = "Eraser is $5";
        break;
    default:
        message = "Everything is OK";
        break;
}

console.log(message);
 */

/* 
var text;
var fruits;

fruits = "Banana"
switch (fruits) {
    case "Banana":
        text = "Banana is good"
        break;
    case "Orange":
        text = "I am not a fan of orange.";
        break;
    case "Apple":
        text = "How you like them apples?";
        break;
    default:
        text = "I have never heard of that fruit...";
        break;
}
console.log(text);
 */

/* 
// toLowerCase()

var text;
var fruits;
fruits = "LIME"
switch (fruits.toLowerCase()) {
    case "banana":
        text = "Banana is good"
        break;
    case "lime":
    case "orange":
    case "lemon":
        text = `I am not a fan of ${fruits.toLowerCase()}.`;
        break;
    case "apple":
        text = "How you like them apples?";
        break;
    default:
        text = "I have never heard of that fruit...";
        break;
}
console.log(text);
 */

/* 
let day = prompt("Enter the Day");
let your_job;


switch (day.toLowerCase()) {
    case "pazartesi":
    case "çarşamba":
    case "cumartesi":
        your_job = "Dersiniz var";
        break;
    case "salı":
    case "cuma":
        your_job = "Teamwork var";
        break;
    case "pazar":
        your_job = "Tatil"
        break;
    default:
        your_job = "Wrong Day"
}

console.log(your_job);
 */

/* 
var year = 2152;
var month = 2;
var dayCount;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        dayCount = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        dayCount = 30;
        break;
    case 2:
        if (((year % 4 == 0) && !(year % 100 == 0))
            || (year % 400 == 0))
            dayCount = 29;
        else
            dayCount = 28;
        break;
    default:
        dayCount = -1; // invalid month
}
console.log(dayCount); // 29
 */


