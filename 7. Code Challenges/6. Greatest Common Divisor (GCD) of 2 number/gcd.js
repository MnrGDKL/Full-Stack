

function GCD(num1,num2){
    let divisors = [];
    for (const i of Array.from(Array(Math.max(num1,num2)), (_,i)=> i+1)) {
        if (num1 % i == 0 && num2 % i == 0){
            divisors.push(i);
        }
    }
    return divisors.reverse()[0];
}

console.log(GCD(40,120)); // 40
console.log(GCD(25,50));  // 25
console.log(GCD(6,9));    // 3


