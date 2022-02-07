let num1 = +prompt("Enter 1st Number: ");

let operator = prompt("Hesap Makinesi:\n1:  Toplama\n2:  Çıkartma\n3:  Çarpma\n4:  Bölme");

let num2 = +prompt("Enter 2nd Number: ");
let sonuc; 

switch (operator) {
    case "1":
        sonuc = num1 + num2;
        break;
    case "2":
        sonuc = num1 - num2;
        break;
    case "3":
        sonuc = num1 * num2;
        break;
    case "4":
        if (num2 == 0) {sonuc = "Something Wrong";}
        else {sonuc = num1 / num2;}
        break;
    default:
        sonuc = "Something Wrong";
        break;
}

console.log(sonuc);


