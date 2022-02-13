
let yearHTML    = document.querySelector("#years");
let monthHTML   = document.querySelector("#months");
let dayHTML     = document.querySelector("#days");
let hourHTML    = document.querySelector("#hours");
let minuteHTML  = document.querySelector("#minutes");
let secondHTML  = document.querySelector("#seconds");

let birthday    = document.querySelector("[name=birthday]");

let loading     = document.querySelector(".loading");
let body        = document.querySelector("body");

 // ----- To lock the date beyond today -----
birthday.max    = new Date().toISOString().slice(0, -14);


// --- to hide the loading icon 1 second after page load
let hiddenLoading = ()=> {loading.style.visibility = "hidden";}
setTimeout(hiddenLoading, 1000);

/* to calculate the age */
birthday.addEventListener("change", function calc() {
  let birthDate = new Date(birthday.value);
  let today     = new Date();
 
  // if the choosen date is bigger than today,need a warning message
  if (today < birthDate) {
    alert("Something Wrong\nPlease Enter a Date before Today");
  }else {
    let year    = today.getFullYear() - birthDate.getFullYear();
    let month   = today.getMonth()    - birthDate.getMonth();
    let day     = today.getDate()     - birthDate.getDate();
    let hour    = today.getHours()    - birthDate.getHours();
    let minute  = today.getMinutes()  - birthDate.getMinutes();
    let second  = today.getSeconds()  - birthDate.getSeconds();

    if (month   < 0){year -= 1;month += 12;}
    if (day     < 0){ 
                  month -= 1;
                  currentMonth = new Date().getMonth() + 1;
                  switch (currentMonth) {
                    case (4 || 6 || 9 || 11) :
                      day += 30;
                      break;
                    case 2:
                      day += 28;
                      break;
                    default:
                      day += 31;
                      break; }}
    if (hour    < 0){day -= 1; hour += 24;}
    if (minute  < 0){hour -= 1;minute += 60;}
    if (second  < 0) {minute -= 1;second += 60;}

    yearHTML.innerText    = (year   < 10 ? "0" : "") + year;
    monthHTML.innerText   = (month  < 10 ? "0" : "") + month;
    dayHTML.innerText     = (day    < 10 ? "0" : "") + day;
    hourHTML.innerText    = (hour   < 10 ? "0" : "") + hour;
    minuteHTML.innerText  = (minute < 10 ? "0" : "") + minute;
    secondHTML.innerText  = (second < 10 ? "0" : "") + second;
    
  }
  setInterval(calc,1000); // time interval is 1 second
});

birthday.addEventListener("change", ()=>{
  body.style.backgroundImage = 'url("https://picsum.photos/id/828/800/600")';
});
