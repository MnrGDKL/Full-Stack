// DOM recap, DOM traversing

// let navbarPathItemText = document.getElementsByClassName("nav__item")[0].innerText;
// console.log(navbarPathItemText);

// let navbarPathItemText2 = document.getElementsByClassName("nav__link")[0].innerText;
// console.log(navbarPathItemText2);

// let navbarPathItemText3 = document.getElementsByClassName("nav__links")[0].children[0].innerText;
// console.log(navbarPathItemText3);

// let navbarPathItemText4 = document.getElementsByClassName("nav__links")[0].firstElementChild.innerText;
// console.log(navbarPathItemText4);
/* 
let navbarPathsLi = document.querySelector(".nav__item");
// console.log(navbarPathsLi);


window.addEventListener("load", ()=>{
    console.log("Window Loaded");
});

window.onload = () => {
    console.log("Ready for Use");
}

navbarPathsLi.addEventListener("click", (event) => {
    alert(navbarPathsLi.innerText + " clicked");
});

// 3ncü eventlistener ekleme şekli ödev;

 */

/* 
let navbarInstructorsLi = document.querySelectorAll(".nav__item")[1];
console.log(navbarInstructorsLi);


navbarInstructorsLi.addEventListener("mouseover", () => {
    navbarInstructorsLi.innerText = "Over Me";
    navbarInstructorsLi.style.color = "red";
    navbarInstructorsLi.style.fontSize = "1.7rem";
    navbarInstructorsLi.style.cursor = "pointer";
}),

navbarInstructorsLi.addEventListener("mouseout", () => {
    navbarInstructorsLi.innerText = "Instructor";
    navbarInstructorsLi.style.color = "#444444";
    navbarInstructorsLi.style.fontSize = "1.7rem";
});


let navbarStudentsLi = document.querySelectorAll(".nav__item")[2];
let randomColor = () => "rgb(" + Math.floor(Math.random() * 255)
+ "," + Math.floor(Math.random() * 255) + ","
+ Math.floor(Math.random() * 255) + ")";


navbarStudentsLi.addEventListener("click", (event) =>{
    event.stopPropagation();
    navbarStudentsLi.style.color = randomColor();
});

navbarStudentsLi.parentElement.addEventListener("click", (event) =>{
    navbarStudentsLi.style.color = randomColor();
});


navbarStudentsLi.parentElement.parentElement.addEventListener("click", (event) =>{
    navbarStudentsLi.style.color = randomColor();
});

 */


let lastName = document.querySelector("[name=last_name]");
console.log(lastName);

let charSpan = document.getElementById("charCount");

lastName.addEventListener("keyup", ()=> {
    if (lastName.value.length == 0) {
        charSpan.style.display = "none";
    }else{
        charSpan.style.display = "inline";
        charSpan.innerText = lastName.value.length + " / 40";

    }
})


let birthdayPicker = document.querySelector("[name=birthday]");
birthdayPicker.addEventListener("change", ()=>{
    console.log(birthdayPicker.value);
    let year = new Date().getFullYear() - new Date(birthdayPicker.value).getFullYear();
    console.log(year);

    alert(`You are ${year} years old.`);
})







