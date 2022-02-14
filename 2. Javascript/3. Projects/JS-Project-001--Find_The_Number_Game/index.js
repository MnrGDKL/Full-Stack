const inputNumber   = document.querySelector("#input-number");
const quessBtn      = document.querySelector(".quess-btn");
const quessResult   = document.querySelector(".quess-result");
const attemptNumber = document.querySelector(".attempt-left");

const myNumber = Math.trunc(Math.random() * 100 + 1);
console.log("My Number:", myNumber);

let min = 0;
let max = 100;
let count = 0;
let userNum = 0;
let quessNums = [];

// quessResult.innerText = `Enter a number between ${min} and ${max}.`
// attemptNumber.textContent = 10 - count;

quessBtn.addEventListener("click", ()=>{
    count++;
    userNum = +inputNumber.value;
    console.log(inputNumber.value, userNum);
    
    if (isNaN(inputNumber.value) && userNum <= 100 || userNum > 0){
        userNum = +inputNumber.value;
        quessNums.push(userNum);
    
        if (userNum !== myNumber) {
            if (userNum < myNumber) {
                min = userNum;
                quessResult.innerText = `Enter a number between ${min} and ${max}.`;
                attemptNumber.textContent = count;
            } else {
                max = userNum;
                quessResult.innerText = `Enter a number between ${min} and ${max}.`;
                attemptNumber.textContent = count;
            }
        }
    
        else{
            quessResult.innerText = `YOU WIN!`;
        }
    }
    
    else{
        quessResult.innerText = `Please, Enter only a number between ${min} and ${max}.`;
    }
});
