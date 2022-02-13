const _0        = document.getElementById("zero");
const _1        = document.getElementById("one");
const _2        = document.getElementById("two");
const _3        = document.getElementById("three");
const _4        = document.getElementById("four");
const _5        = document.getElementById("five");
const _6        = document.getElementById("six");
const _7        = document.getElementById("seven");
const _8        = document.getElementById("eight");
const _9        = document.getElementById("nine");
const equal     = document.getElementById("equal");
const decimal   = document.getElementById("decimal");
const plus      = document.getElementById("plus");
const subtract  = document.getElementById("subtract");
const multiply  = document.getElementById("multiply");
const divide    = document.getElementById("divide");
const reset     = document.getElementById("reset");
const screen    = document.getElementById("screen");
let countDecimal = 0;
let num1, num2, operator, result;

reset.addEventListener("click", function resetAll() { 
    screen.innerText = "";
    countDecimal = 0;});

_0.addEventListener("click", ()=>{screen.innerText += "0";});
_1.addEventListener("click", ()=>{screen.innerText += "1";});
_2.addEventListener("click", ()=>{screen.innerText += "2";});
_3.addEventListener("click", ()=>{screen.innerText += "3";});
_4.addEventListener("click", ()=>{screen.innerText += "4";});
_5.addEventListener("click", ()=>{screen.innerText += "5";});
_6.addEventListener("click", ()=>{screen.innerText += "6";});
_7.addEventListener("click", ()=>{screen.innerText += "7";});
_8.addEventListener("click", ()=>{screen.innerText += "8";});
_9.addEventListener("click", ()=>{screen.innerText += "9";});

decimal.addEventListener("click", ()=>{
    if (countDecimal == 0) {
        screen.innerText += ".";
        countDecimal = 1;
    }
});

plus.addEventListener("click", ()=>{
    num1 = +screen.innerText;
    screen.innerText = "";
    countDecimal = 0;
    operator = "+";
});

subtract.addEventListener("click", ()=>{
    num1 = +screen.innerText;
    screen.innerText = "";
    countDecimal = 0;
    operator = "-";
});

multiply.addEventListener("click", ()=>{
    num1 = +screen.innerText;
    screen.innerText = "";
    countDecimal = 0;
    operator = "*";
});

divide.addEventListener("click", ()=>{
    num1 = +screen.innerText;
    screen.innerText = "";
    countDecimal = 0;
    operator = "/";
})

equal.addEventListener("click", ()=>{
    num2 = +screen.innerText;
    switch (operator) {
        case "+":
            result = num1 + num2;
            screen.innerText = result;
            break;
        case "-":
            result = num1 - num2;
            screen.innerText = result;
            break;
        case "*":
            result = num1 * num2;
            screen.innerText = result;
            break;
        case "/":
            num2 == 0 ? result = "∞" : result = num1 / num2 ;
            screen.innerText = result;
            break;       
        default:
            resetAll();
            break;
    }
})




