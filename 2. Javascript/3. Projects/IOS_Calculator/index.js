const screen1       =  document.querySelector(".screen1");
const screen2       = document.querySelector(".screen2");

const reset         = document.querySelector(".function-AC");
const neg_pos       = document.querySelector(".negative-positive");
const percentage    = document.querySelector(".percentage");

const divide        = document.querySelector(".divide");
const multiply      = document.querySelector(".multiply");
const subtract      = document.querySelector(".subtract");
const plus          = document.querySelector(".plus");

const equal         = document.querySelector(".equal");

const _0            = document.querySelector(".number-0");
const _1            = document.querySelector(".number-1");
const _2            = document.querySelector(".number-2");
const _3            = document.querySelector(".number-3");
const _4            = document.querySelector(".number-4");
const _5            = document.querySelector(".number-5");
const _6            = document.querySelector(".number-6");
const _7            = document.querySelector(".number-7");
const _8            = document.querySelector(".number-8");
const _9            = document.querySelector(".number-9");
const _dot          = document.querySelector(".number-dot");

let num;
let num1        = null; 
let num2        = null;
let operator    = "";
let result      = 0;

reset.addEventListener("click",()=>{
    screen1.innerText = "";
    screen2.innerText = "0"
    num1        = null; 
    num2        = null;
    operator    = "";
    result      = 0;
})

neg_pos.addEventListener("click",()=>{
    if (screen2.innerText[0] !== "-"){
        screen2.innerText = "-" + screen2.innerText;
    }else{
        screen2.innerText = screen2.innerText.substr(1);
    }

    // screen2.innerText = -1 * +screen2.innerText;
})

percentage.addEventListener("click",()=>{
    screen2.innerText = +screen2.innerText / 100;
})
const digit = document.querySelectorAll(".number");

_0.addEventListener("click", ()=>{screen2.innerText = (screen2.innerText == "0") ? screen2.innerText = "0" : screen2.innerText + "0" ;});
_1.addEventListener("click", ()=>{screen2.innerText = (screen2.innerText == "0") ? screen2.innerText = "1" : screen2.innerText + "1" ;});
_2.addEventListener("click", ()=>{screen2.innerText = (screen2.innerText == "0") ? screen2.innerText = "2" : screen2.innerText + "2" ;});
_3.addEventListener("click", ()=>{screen2.innerText = (screen2.innerText == "0") ? screen2.innerText = "3" : screen2.innerText + "3" ;});
_4.addEventListener("click", ()=>{screen2.innerText = (screen2.innerText == "0") ? screen2.innerText = "4" : screen2.innerText + "4" ;});
_5.addEventListener("click", ()=>{screen2.innerText = (screen2.innerText == "0") ? screen2.innerText = "5" : screen2.innerText + "5" ;});
_6.addEventListener("click", ()=>{screen2.innerText = (screen2.innerText == "0") ? screen2.innerText = "6" : screen2.innerText + "6" ;});
_7.addEventListener("click", ()=>{screen2.innerText = (screen2.innerText == "0") ? screen2.innerText = "7" : screen2.innerText + "7" ;});
_8.addEventListener("click", ()=>{screen2.innerText = (screen2.innerText == "0") ? screen2.innerText = "8" : screen2.innerText + "8" ;});
_9.addEventListener("click", ()=>{screen2.innerText = (screen2.innerText == "0") ? screen2.innerText = "9" : screen2.innerText + "9" ;});

// for (let i = 0; i < digit.length-1; i++) {
//     digit[i].addEventListener("click", () =>{
//        screen2.innerText = (screen2.innerText == "0") ? digit[i].innerText : screen2.innerText + digit[i].innerText;
//     });

// }

_dot.addEventListener("click",()=>{
    if (!screen2.innerText.includes(".")){screen2.innerText += ".";}
})

plus.addEventListener("click",()=>{
    num1 = +screen2.innerText;
    operator = "+";
    screen2.innerText = "";
    screen1.innerText = num1 + operator;
})

subtract.addEventListener("click",()=>{
    num1 = +screen2.innerText;
    operator = "-";
    screen2.innerText = "";
    screen1.innerText = num1 + operator;
})

multiply.addEventListener("click",()=>{
    num1 = +screen2.innerText;
    operator = "x";
    screen2.innerText = "";
    screen1.innerText = num1 + operator;
})

divide.addEventListener("click",()=>{
    num1 = +screen2.innerText;
    operator = "÷";
    screen2.innerText = "";
    screen1.innerText = num1 + operator;
})

equal.addEventListener("click",()=>{
   num2 = +screen2.innerText;
   switch (operator) {
       case "+":
           result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "x":
            result = num1 * num2;
            break;
          default:
            result = (num2 == 0) ? 0 : num1 / num2;
           break;
   }
   screen2.innerText = result;
   screen1.innerText = "";
})



