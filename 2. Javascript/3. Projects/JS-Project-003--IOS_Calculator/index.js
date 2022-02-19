const hourEl        = document.querySelector('.hour');
const minuteEl      = document.querySelector('.minute');

const screen1       = document.querySelector(".screen-1");
const screen2       = document.querySelector(".screen-2");

const reset         = document.querySelector(".function-AC");
const neg_pos       = document.querySelector(".negative-positive");
const percentage    = document.querySelector(".percentage");

const divide        = document.querySelector(".divide");
const multiply      = document.querySelector(".multiply");
const subtract      = document.querySelector(".subtract");
const plus          = document.querySelector(".plus");

const digit         = document.querySelectorAll(".number");
const _dot          = document.querySelector(".number-dot");

const equal         = document.querySelector(".equal");

let num1        = 0;
let num2        = 0;
let numbers     = []; 
let result      = 0;
let oprs        = [];
let count       = 0;
let total       = 0;
let operator    = "";

screen1.innerText = "";
screen2.innerText = "0";


// set time (hour : minutes)
const updateTime = () => {
    const currentTime = new Date();
    let currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    hourEl.textContent = currentHour.toString().padStart(2, '0');
    minuteEl.textContent = currentMinute.toString().padStart(2, '0');
  }

  setInterval(updateTime, 1000);
  updateTime();

 // AC function
function resetAll(){
    num1                = 0;
    num2                = 0;
    operator            = "";
    oprs                = [];
    numbers             = [];
    count               = 0;
    result              = 0;
    screen1.innerText   = "";
    screen2.innerText   = 0 ;
    total               = 0;
    operator            = "";
};

// click AC button
reset.addEventListener("click", resetAll);

// click ± button
neg_pos.addEventListener("click", ()=>{
    if (screen2.innerText[0] !== "-"){
        screen2.innerText = "-" + screen2.innerText;
    }else{
        screen2.innerText = screen2.innerText.substr(1);
    }
})

// click % button
percentage.addEventListener("click", ()=>{
    let num = +screen2.innerText;
    screen2.innerText = num / 100;
});

// click numbers (except "." button)
for (let i = 0; i < digit.length-1; i++) {
    digit[i].addEventListener("click", () =>{
        if (count == 1){ resetAll() }
        screen2.innerText = (screen2.innerText == "0") 
                                ? digit[i].innerText
                                : screen2.innerText + digit[i].innerText;
    });

}

// click "." button
_dot.addEventListener("click",()=>{
    if (!screen2.innerText.includes(".")){screen2.innerText += ".";}
})


// click division operator
divide.addEventListener("click", ()=>{
    if(operator !== "" && screen2.innerText == ""){}
    else {
        num1 = +screen2.innerText;
        numbers.push(num1);
        screen2.innerText = "";
        operator = "÷";
        oprs.push("÷");
        screen1.innerText = (count == 1) ? num1 + operator : screen1.innerText + num1 + operator;
        count = 0;
    }
});

// click multiplication operator
multiply.addEventListener("click", ()=>{
    if(operator !== "" && screen2.innerText == ""){}
    else {
        num1 = +screen2.innerText;
        numbers.push(num1)
        screen2.innerText = "";
        operator = "x";
        oprs.push("x");
        screen1.innerText  = (count == 1) ? num1 + operator : screen1.innerText + num1 + operator;
        count = 0;
    }
});

// click subtraction operator
subtract.addEventListener("click", ()=>{
    if(operator !== "" && screen2.innerText == ""){}
    else {
        num1 = +screen2.innerText;
        numbers.push(num1)
        screen2.innerText = "";
        operator = "-";
        oprs.push("-");
        screen1.innerText  = (count == 1) ? num1 + operator : screen1.innerText + num1 + operator;
        count = 0;
    }
});

// click addition operator
plus.addEventListener("click", ()=>{
    if(operator !== "" && screen2.innerText == ""){}
    else {
        num1 = +screen2.innerText;
        numbers.push(num1);
        screen2.innerText = "";
        operator = "+";
        oprs.push("+");
        screen1.innerText  = (count == 1) ? num1 + operator : screen1.innerText + num1 + operator;
        count = 0;
    }
});

// click equal operator
equal.addEventListener("click", ()=>{

    if (count == 0){

        if (screen2.innerText == ""){
            oprs.pop();
            screen1.innerText = screen1.innerText.slice(0,screen2.innerText.length-1)
            num1 = totalResult();
            numbers = [];
            oprs    = [];
            operator = "";
            screen2.innerText = num1;
        }
        else{
            num2 = +screen2.innerText;
            numbers.push(num2);
            if (num2 == 0 && operator == "÷") {
                screen2.innerText = "Error";
                screen1.innerText = (screen2.innerText == "0") ? num2 : screen1.innerText + num2;
            }
            else{
                screen1.innerText = (screen2.innerText == "0") ? num2 : screen1.innerText + num2;
           
            num1 = totalResult();
            numbers = [];
            oprs    = [];
            operator = "";
            screen2.innerText = num1;
        }
        }
    }
    count = 1;

});

// operates all the entered number and return the result
function totalResult(){
    total = numbers[0];
    for (let i = 0; i < numbers.length-1; i++) {
        switch (oprs[i]) {
            case "+":
                total = (total == Infinity) ? Infinity : total + numbers[i+1];
                break;
            case "-":
                total = (total == Infinity) ? Infinity : total - numbers[i+1];
                break;
            case "x":
                total = (total == Infinity) ? Infinity : total * numbers[i+1];
                break;
            case "÷":
                total = (total == Infinity || numbers[i] == 0) ? Infinity : total / numbers[i+1] ;
                break;       
            default:
                resetAll();
                break;
        }
        
    }
    console.log(numbers, oprs);
    console.log("total: ",total);
    return (total == Infinity) ? "Error" : +(Math.round(total + "e+4") + "e-4");
}