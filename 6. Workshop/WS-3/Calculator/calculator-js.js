let opr;
let num1;
let num2;

let calculator = function (operator, x, y) {
    switch (operator) {
        case "+":
            return x + y;
            break;
        case "-":
            return x - y;
            break;
        case "*":
            return x * y;
            break;
        case "/":
            return x / y;
            break;
        default:
            return "Something Wrong! Try Again.";
            break;
    }

}
 opr = prompt("Hesap Makinesi:\n+:  Toplama\n-:  Çıkartma\n*:  Çarpma3\n/:  Bölme");
num1 = +prompt("Enter 1st Number: ");
num2 = +prompt("Enter 2nd Number: ");

opr == "+" ? console.log(`${num1} ${opr} ${num2} = `, calculator("+", num1, num2)):
opr == "-" ? console.log(`${num1} ${opr} ${num2} = `, calculator("-", num1, num2)):
opr == "*" ? console.log(`${num1} ${opr} ${num2} = `, calculator("*", num1, num2)):
opr == "/" ? console.log(`${num1} ${opr} ${num2} = `, calculator("/", num1, num2)): 
console.log("Something Wrong");
