
/* 
function sayHi(){
    let name = "Hello";
    return name;
}

console.log(typeof sayHi());
console.log(sayHi());
 */

/* 
let square = function(number){return number*number};
console.log(square(5));
 */


/* 
// Function Constructor
let a = new Function("number", "return number * number");
console.log(a(3));
 */

/* 
let topla = function(a,b) {return a+b};

let addTwo = function(num1){
    return topla(+num1,2);
}
 */


/* 
// Fonksiyon değeri değişmeyecek kullanım

function square(num1){
    let myNum = num1 *num1;
    return myNum;
}
let myNum = 4;
console.log(square(myNum));
console.log(myNum);

 */
/* 
let student = {};
student.name = "Mesut";

function sayHi2(student){
    console.log(`Hello! ${student.name} from entry point`);
    student= {name : "Leon"};
    console.log(`Hello! ${student.name} from inside fuction`);
}

sayHi2(student);
console.log(student); */

/* 
let student = "Mustafa";

function SayHi3(studentName){
    console.log(`Welcome ${studentName}`);
}

SayHi3(student);
 */


/* 
let students = ["John", "Jane", "Joe"];

function sayHi4(studentName){
    console.log(`Welcome ${studentName}`);
}

for (let i = 0; i < students.length; i++) {
    sayHi4(students[i]);
}
 */
/* 
function sum(){
    let sum = 0;
    console.log(arguments);
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sum(1));
console.log(sum(1,2,3,4,5,6));

 */
/* 
function sum1(a,b, ...others){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i];
        }
        return sum;
}

console.log(sum1(1,2,34,5,6));
 */
/* 
const bill = function(item, tax){
    let total = 0;
    for (let i = 0; i < item.length; i++) {
        total += item[i]+item[i]*tax;        
    }
    return total;
}

console.log(bill([10,15,20],0.18));

 */


/* 
const bill2 = function(tax, ...list){
    let total = 0;
    console.log(list);
    for (let i = 0; i < list.length; i++) {
        total += list[i]+list[i]*tax;        
    }
    return total;
}

console.log(bill2(0.18, 10, 15, 20, 12));

 */
/* 
function bolme(num1, num2){
    if (num2 === 0) return "Zero Devision Error";
    return num1 / num2
}

console.log(bolme(12, 0));
console.log(bolme(12, 2));
 */


/* 
function bolme(num1, num2){
    return num2 ? num1 / num2 : "Zero Devision Error";
}

console.log(bolme(12, 2));

 */


/* 
function pascalNumbers(n) {
    return n === 1 ? 1 : n + pascalNumbers(n-1);
}

console.log(pascalNumbers(10));
 */


// -------- ARROW FUNCTIONS


/* const pascalNumbers1 = (n) => n === 1 ? 1 : n + pascalNumbers1(n-1);
const pascalNumbers2 = n => n === 1 ? 1 : n + pascalNumbers2(n-1);


console.log(pascalNumbers1(4));
console.log(pascalNumbers2(4));
 */

let iife = (function(n) {return n === 1 ? 1 : n + iife(n-1);}

console.log(iife(3));
