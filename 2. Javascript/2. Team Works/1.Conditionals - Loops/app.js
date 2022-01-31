 const name = "John Blue";
const department = "Development";
let salary = 70000;

const a = `Name: ${name}\nDepartment: ${department}\nSalary: ${salary}`;

document.body.innerHTML = a;



const html = `
      <ul>
       <li>${name}</li>
       <li>${department}</li>
       <li>${salary}</li>
       <li>${10 / 4}</li>
       <li>${a}</li>
      </ul> `

document.body.innerHTML = html;


const number = "2";

if (number === 2) {
    console.log(`Integer`);
    }
else if (number === "2"){
    console.log("String");
    }

let process = "1";

switch(process) {
    case "1":
        console.log("İşlem 1");
        break;
    case 2:
        console.log("İşlem 2");
        break;
    case 3:
        console.log("İşlem 3");
        break;
    case 4:
        console.log("İşlem 4");
    default:
        console.log("Geçersiz İşlem");
}

const condition = 200; 
console.log(condition == 100 ? "Sayı: 100" : "Sayı 100 değil");