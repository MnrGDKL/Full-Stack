const startNum = document.querySelector("#startNumber");
const endNum   = document.querySelector("#topNumber");

const palBtn = document.querySelector(".palButton");
const perBtn = document.querySelector(".perButton");

const palList = document.getElementById("palList");
const perList = document.getElementById("perList");


palBtn.addEventListener("click", palindrome);
perBtn.addEventListener("click",perfectNum);

function palindrome(){
    for (let i = +startNum.value; i <= +endNum.value; i++) {
        if (i == i.toString().split("").reverse().join("")) {
            palList.value += i + "\n";
        }
        
    }
}

function perfectNum(){
    let temp;
    for (let i = +startNum.value; i <= +endNum.value; i++) {
        temp = 0;
        for (let j = 0; j < i; j++) {
            temp = (i % j == 0) ? temp + j : temp; 
        }
        perList.value = (temp == i) ? perList.value + i + "\n" : perList.value;
        }
        
    }
