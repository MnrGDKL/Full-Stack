/* 

let liste = document.querySelectorAll("li:nth-child(even)")

liste.forEach(i => {
    i.style.backgroundColor = "#111";
    i.style.color = "#fff"
    i.style.fontSize = "24px"
}); 

*/

let listeName = document.getElementsByName("liste");
console.log(listeName);

listeName.forEach(element => {
    element.style.backgroundColor = "#111";
});

let listeClass = document.getElementsByClassName("li");
console.log(listeClass);

let liste1 = document.querySelectorAll("[class=child]");
console.log(liste1);
