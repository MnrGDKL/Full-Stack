let text = document.querySelector("#text");
let btn1 = document.querySelector(".capitalize");
let new_text =document.querySelector(".text-area");


btn1.addEventListener("click", ()=>{
    let string = text.value.split(" ");
    for (let i = 0; i < string.length; i++) {
        string[i] = string[i][0].toUpperCase() + string[i].substr(1);
    }

    new_text.innerText = string.join(" ");
});
