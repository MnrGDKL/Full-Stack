const text = document.querySelector(".text");


text.addEventListener("focus",()=>{
    text.style.backgroundColor= "green"
    text.rows="7"
})

text.addEventListener("blur",()=>{
    text.style.backgroundColor= "orange"
    text.rows="2"
})