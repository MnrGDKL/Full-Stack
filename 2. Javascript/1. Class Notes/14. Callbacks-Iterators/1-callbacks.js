//* ======================================================
//*                    CALLBACK
//* ======================================================

//! 1. Kullanım Yeri - Event Handler
const counter = document.getElementById("counter");
const btn = document.querySelector("button");
const increment = () => {
    counter.textContent = +counter.textContent + 1;
}
btn.addEventListener("click",increment);

//! 2. Kullanım Yeri - Effective programing Approach

const sum = (a, b) => a + b; 
const sub = (a, b) => a - b; 
const mul = (a, b) => a * b; 
const div = (a, b) => a / b; 

const calculate = (callback) => {
    const num1 = Number(prompt("First Number"));
    const num2 = Number(prompt("Second Number"));
    console.log("RESULT:", callback(num1, num2));
}

/* calculate(sum);
calculate(sub);*/

//! 3. Kullanım Yeri - Asenkron Yapılar