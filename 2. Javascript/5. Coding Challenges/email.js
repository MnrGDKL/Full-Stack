let email = document.getElementById("email");
let submit = document.querySelector(".btn");
submit.addEventListener("click", ()=>{
  let a = email.value;
  let index = a.lastIndexOf(".");
  let com = a.slice(index+1, a.length );
  let et = a.indexOf("@");
  alert((et !== -1) && (com.length == 2 || com.length == 3) ? true : false);
  console.log((et !== -1) && (com.length == 2 || com.length == 3) ? "valid" : "invalid");
});
