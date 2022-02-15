const lotteryNumber = document.querySelector(".numbers");
const btn    = document.querySelector(".btn");
const divBox = document.querySelector(".lottery-box");

btn.addEventListener("click", ()=>{
    divBox.innerHTML = "";
    let num = +lotteryNumber.value;
    for (let i = 0; i < num; i++) {
        let newP = document.createElement("p");
        newP.innerText = newLotteryNumbers();
        divBox.appendChild(newP);
        if (num > 1){
            let newHr = document.createElement("hr");
            divBox.appendChild(newHr);
        }        
    }
});


function randomNumbers(){
    let nums = [];
    let count = 0; 
    let number;
    
        while (nums.length < 7) {
            number = Math.trunc(Math.random() * 90 + 1);
            if (!nums.includes(number)) {
                nums.push(number);
            }  
        }
        return nums;
}

function newLotteryNumbers(){
    let numbers = randomNumbers();
    let jokerNumber = numbers.pop();
    let _6Numbers = numbers.sort((a,b)=> a-b).join("-");
    let superNumber = Math.trunc(Math.random() * 90 + 1);
    let textHTML = _6Numbers + " | " + jokerNumber + " | " + superNumber;
    return textHTML;
}
