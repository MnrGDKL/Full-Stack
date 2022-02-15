const inputNumber   = document.querySelector("#input-number");
const quessBtn      = document.querySelector(".quess-btn");
const quessResult   = document.querySelector(".quess-result");
const attemptNumber = document.querySelector(".attempt-left");
const prevAttempts  = document.querySelector(".prev-attempts")
const congrats      = document.querySelector("img");
const newGame       = document.querySelector(".new-game");

const myNumber = Math.trunc(Math.random() * 100 + 1);
console.log("My Number:", myNumber);

let min = 0;
let max = 100;
let count = 10;
let userNum = 0;
let quessNums = [];
let difference = 0;

quessBtn.addEventListener("click", ()=>{
    count--;
    userNum = +inputNumber.value;
    difference = Math.abs(myNumber-userNum);
    if (count > 0){
        if (0 < userNum && userNum <= 100){
            userNum = +inputNumber.value;
            quessNums.push(userNum);
        
            if (userNum !== myNumber) {
                if (userNum < myNumber) {
                    min = userNum;
                    quessResult.innerText =  (difference <5) ? `Little Low!\nGo Up` 
                                           : (difference <10) ? `Low!\nGo Up`
                                           : `Too Low!\nGo Up`;

                    prevAttempts.innerText = `Your Previous Quesses: \n${quessNums.join(" - ")}`;
                    attemptNumber.textContent = count + " left";
                    inputNumber.value = "";
                    inputNumber.focus();
                } else {
                    max = userNum;
                    quessResult.innerText =   (difference <5) ? `Little High!\nGo Down` 
                                            : (difference <10) ? `High\nGo Down`
                                            : `Too High!\nGo Down`;

                    prevAttempts.innerText = `Your Previous Guesses: \n${quessNums.join(" - ")}`;
                    attemptNumber.textContent = count + " left";
                    inputNumber.value = "";
                    inputNumber.focus();
                }
            }
        
            else{
                quessResult.innerText = `YOU WIN!`;
                congrats.style.visibility = "visible";
                attemptNumber.textContent = count + " left";
            }
        }
        
        else{
            quessResult.innerText = `Please, Enter only a number between ${min} and ${max}.`;
            inputNumber.value = "";
            inputNumber.focus();
            count++;
        }
    }
    else{
        quessResult.innerText = `YOU LOSE \n \n Would You like To Play Again?`;
        // alert("You have no more chance to continue.");
        Swal.fire(
            'YOU LOSE!',
            'Try Again',
            'error'
          )
    }
});

newGame.addEventListener("click", ()=>{
    window.location.reload();
})
