let num1 = document.getElementById("num1");

let num2 = document.getElementById("num2");
let operator = document.querySelector("#operator");
 let sonuc = document.querySelector(".sonuc");

let calc = document.querySelector(".calc");


calc.addEventListener("click", ()=>{
    switch (operator.value) {
        case "+":
        sonuc.innerText = +num1.value + +num2.value;
        break;
    case "-":
        sonuc.innerText = +num1.value - +num2.value;
        break;
    case "*":
        sonuc.innerText = +num1.value * +num2.value;
        break;
    default:
        sonuc.innerText = +num1.value / +num2.value;
        break;
}

});