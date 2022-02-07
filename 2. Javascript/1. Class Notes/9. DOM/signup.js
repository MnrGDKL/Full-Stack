// DOM Accessing

/* 
let firstNameById = document.getElementById("first_name");
console.log(firstNameById);

let firstNameByClass = document.getElementsByClassName("input--style-4")[0];
console.log(firstNameByClass); // collection selector oldu

let firstNameByName = document.getElementsByName("first_name")[0]; // Node selector oldu
console.log(firstNameByName);

let firstNameBySelectorId = document.querySelector("#first_name");
console.log(firstNameBySelectorId);

let firstNameBySelectorClass = document.querySelector(".input--style-4"); // ilk elemanı yakalar
console.log(firstNameBySelectorClass);

let firstNameBySelectorName = document.querySelector("[name = first_name]");
console.log(firstNameBySelectorName);

let firstNameBySelectorAllClass = document.querySelectorAll(".input--style-4");
console.log(firstNameBySelectorAllClass);


console.log(firstNameById.getAttribute("id"));
console.log(firstNameById.getAttribute("class"));
console.log(firstNameById.getAttribute("name"));
 */

/* 
firstNameById.setAttribute("class", "redColorClass");
firstNameById.setAttribute("type", "radio");

 */

// innerHTML, innerText, textContent, (input => value)
/* 
let headerDiv = document.getElementById("headerId");

console.log("inner HTML: ", headerDiv.innerHTML);
console.log("inner Text: ", headerDiv.innerText);
console.log("text Content: ", headerDiv.textContent);

let firstNameById = document.getElementById("first_name");
// firstNameById.value = "Ryan"
lastNameById = document.getElementById("last_name");
lastNameById.value = "Daniel";

firstNameById.setAttribute("class", "redColorClass");
firstNameById.setAttribute("value", "Ryan");

let fullNameById = document.getElementById("full_name");
fullNameById.value = (firstNameById.value + " " + lastNameById.value).toUpperCase();


let emailById = document.getElementById("email");
emailById.value = "ryan.daniel@clarusway.com".toLocaleLowerCase();
 */

// CREAT LOGO ELEMENT

let logo = document.createElement("img");
console.log(logo);

logo.setAttribute("src", "img/logo.png");
logo.setAttribute("class", "headerLogo");
logo.setAttribute("alt", "logo");

let headerDiv = document.getElementById("headerId");
headerDiv.appendChild(logo);
// headerDiv.innerHTML += `<img src="img/logo.png" alt="Bank logo" class="nav__logo" id="logo" />`;