let lower = document.getElementById("lower");
let upper = document.getElementById("upper");
let digit = document.getElementById("digit");
let buton = document.getElementById("btn");
let result = document.getElementById("result")

buton.addEventListener("click", run)


function run() {
    let myString = "";
    let sayac = 0 ; 
    for (let i = lower.value; i <= upper.value; i++) {
        myString += i;   
    }
    for (i of myString) {
        if (i == digit.value) sayac++;
    }

    result.textContent = sayac;
    console.log(sayac);
}