const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');

const screen1 = document.querySelector(".screen-1");
const screen2 = document.querySelector(".screen-2");

const reset = document.querySelector(".function-AC");
const neg_pos = document.querySelector(".negative-positive");
const percentage = document.querySelector(".percentage");

const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const subtract = document.querySelector(".subtract");
const plus = document.querySelector(".plus");

const _0 = document.querySelector(".number-0");
const _1 = document.querySelector(".number-1");
const _2 = document.querySelector(".number-2");
const _3 = document.querySelector(".number-3");
const _4 = document.querySelector(".number-4");
const _5 = document.querySelector(".number-5");
const _6 = document.querySelector(".number-6");
const _7 = document.querySelector(".number-7");
const _8 = document.querySelector(".number-8");
const _9 = document.querySelector(".number-9");
const _dot = document.querySelector(".number-dot");

const equal = document.querySelector(".equal");

let num1 = 0;
let num2 = 0;
let numbers = []; 
let decimal = 0;
let result = 0;
let operator = "";
let oprs = []; 

screen1.innerText = "";
screen2.innerText = "0";



const updateTime = () => {
    const currentTime = new Date();
  
    let currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
  
    // if (currentHour > 12) {
    //   currentHour -= 12;
    // }
    hourEl.textContent = currentHour.toString();
    minuteEl.textContent = currentMinute.toString().padStart(2, '0');
    console.log(currentHour, currentMinute);
  }
  setInterval(updateTime, 1000);
  updateTime();




reset.addEventListener("click", function reserAll(){
    num1 = 0;
    num2 = 0;
    operator = "";
    oprs = [];
    numbers = [];
    decimal = 0;
    result = 0;
    screen1.innerText = "";
    screen2.innerText = "0";
});

neg_pos.addEventListener("click", ()=>{
    if (screen2.innerText[0] !== "-"){
        screen2.innerText = "-" + screen2.innerText;
    }else{
        screen2.innerText = screen2.innerText.substr(1);
    }
})

percentage.addEventListener("click", ()=>{
    let num = +screen2.innerText;
    screen2.innerText = num / 100;
});


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

_dot.addEventListener("click", ()=>{
    if (decimal == 0) {
        screen2.innerText += "." ;
        decimal = 1;
    }   
});

divide.addEventListener("click", ()=>{
    num1 = +screen2.innerText;
    numbers.push(num1);
    screen2.innerText = "";
    operator = "÷";
    oprs.push(operator);
    screen1.innerText += `${num1}${operator}`
});

multiply.addEventListener("click", ()=>{
    num1 = +screen2.innerText;
    numbers.push(num1)
    screen2.innerText = "";
    operator = "x";
    oprs.push(operator);
    screen1.innerText += `${num1}${operator}`
});

subtract.addEventListener("click", ()=>{
    num1 = +screen2.innerText;
    numbers.push(num1)
    screen2.innerText = "";
    operator = "-";
    oprs.push(operator);
    screen1.innerText += `${num1}${operator}`
});

plus.addEventListener("click", ()=>{
    num1 = +screen2.innerText;
    numbers.push(num1)
    screen2.innerText = "";
    operator = "+";
    oprs.push(operator);
    screen1.innerText += `${num1}${operator}`
});

equal.addEventListener("click", ()=>{
    num2 = +screen2.innerText;
    numbers.push(num2)
    switch (operator) {
        case "+":
            result = num1 + num2;
            screen2.innerText = result;
            break;
        case "-":
            result = num1 - num2;
            screen2.innerText = result;
            break;
        case "x":
            result = num1 * num2;
            screen2.innerText = result;
            break;
        case "÷":
            num2 == 0 ? result = "∞" : result = num1 / num2 ;
            screen2.innerText = result;
            break;       
        default:
            resetAll();
            break;
    }
    let string = screen1.innerText;
    string += num2;
    screen1.innerText = string;
    num1 = result;
    console.log(numbers);
    console.log(oprs);
    let total = numbers[0];
    for (let i = 0; i < numbers.length-1; i++) {
        switch (oprs[i]) {
            case "+":
                total += numbers[i+1];
                break;
            case "-":
                total -= numbers[i+1];
                 break;
            case "x":
                total *= numbers[i+1];
                break;
            case "÷":
                numbers[i] == 0 ? total = "∞" : total /= numbers[i+1] ;
                break;       
            default:
                resetAll();
                break;
        }
    }
    screen2.innerText = total;
});