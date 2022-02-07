/* 
// Basit fonksiyon (parametresiz)

function myFunction(){
    return 10 + 2;
}

// let x = myFunction();
console.log(myFunction());

 */

/* 
// Basit fonksiyon (tek parametre)

let a = 10;

function myFunction(x){
return x + 2;
}

console.log(myFunction(a));
 */


/* 
// Basit fonksiyon (çift  parametre)

let a = 10;
let b = 2;

function myFunction(x, y){
     return x + y;
}

console.log(myFunction(10, a));
 */

/* 

// isimsiz fonksiyon

var foo = function ahmet() {
    console.log("Hello");

}

foo();
 */



// içiçe fonksiyon

/* 
let n = 10;
function factorial (n) {
    console.log("n: ",n ); 
    return !(n > 1) ? 1 : factorial(n - 1) * n;
}

console.log(factorial(n));
 */

/* 

// Argumanlı fonksiyon

function myConcat(a) {
    console.log("a: ",a);
    console.log("arguments: ",arguments);

}

myConcat("ahmet");
myConcat(5, "ahmet");


let array = ["1",2,"aaa"];

myConcat("ahmet", "mehmet","ali",true, 7, array);

 */
/* 
function myFun(a,  b, ...rest) {
    console.log("a: ", a)
    console.log("b: ", b)
    console.log("Rest: ", rest)
  }
  
myFun(1, true, "three", "four", "five", "six");
 */

/* 
function myFun1(a,b) {
    console.log("a: ", a)
    console.log("b: ", b)
    console.log("Arguments: ", arguments)
  }
  
myFun1("one", "two", "three", "four", "five", "six");
 */


// arrow fonksiyon
/* 
let a = function(){
    return 50 + 100;
}

console.log(a());


let x = () => 50 + 100;

console.log(x());
 */
/* 
str = "ali" 

let fac = () => {
    console.log("Merhaba");
    console.log(100 + 50);
    console.log(str);
}

fac();
 */
/* 
let fac_a = (a) => {
    console.log("Merhaba");
    console.log(100 + 50);
    console.log(a);
}

fac_a(125);
 */
/* 
let fac_a_b = (a,b) => {
    console.log("Merhaba");
    console.log(100 + 50);
    console.log(a);
    console.log(b);
}

fac_a_b("ahmet", 120);
 */

/* 
let fac_a_b_rest = (a,b, ...rest) => {
    console.log("a: ", a);
    console.log("b: ", b);
    console.log("rest:", rest);
}

fac_a_b_rest(11, "naim", "ali", true, 120, "ahmet");

 */

/* 
let fac_a_b_arguments = (a,b) => {
    console.log("a: ", a);
    console.log("b: ", b);
    console.log("arguments:", arguments);
}

fac_a_b_arguments("a", "b", 25); */