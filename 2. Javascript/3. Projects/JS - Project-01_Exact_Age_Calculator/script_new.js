

let yearHTML    = document.getElementById("years");
let monthHTML   = document.getElementById("months");
let dayHTML     = document.getElementById("days");
let hourHTML    = document.getElementById("hours");
let minuteHTML  = document.getElementById("minutes");
let secondHTML  = document.getElementById("seconds");

let birthdayHTML = document.querySelector("[name=birthday]");
let image        = document.getElementById("loading");
let background   = document.querySelector("body");



birthdayHTML.addEventListener("change", function calc(){
    
    let birthday    = new Date(birthdayHTML.value);
    let today       = new Date();

    let year        = today.getFullYear() - birthday.getFullYear();
    let month       = today.getMonth() - birthday.getMonth() + 1;
    let day         = today.getDate() - birthday.getDate();
    let hour        = today.getHours() - birthday.getHours();
    let minute      = today.getMinutes() - birthday.getMinutes();
    let second      = today.getSeconds() - birthday.getSeconds();

    if (birthday > today){
        alert("Please enter a select date");
    }
    else{
        /*         
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
        
        */
        
        if (second <= 0) {
            if (minute <= 0) {
                if (hour <= 0) {
                    if (day <= 0) {
                        if (month <= 0) {
                            year -= 1;
                            month += 12;
                        }
                        month -= 1;
                        day += 30;
                    } 
                    day -= 1;
                    hour += 24;
                }
                hour -= 1;
                minute += 60;
            }
            minute -= 1;
            second += 60; 
        }

        yearHTML.innerText      = year;
        monthHTML.innerText     = month;
        dayHTML.innerText       = day;
        hourHTML.innerText      = hour;
        minuteHTML.innerText    = minute;
        secondHTML.innerText    = second;
        
        setInterval(calc, 1000);
    }
});

let iptal = () => image.style.visibility = "hidden";
setTimeout(iptal, 1000);

birthdayHTML.addEventListener("change", ()=>{
    background.style.backgroundImage = 'url("https://picsum.photos/id/903/800/600")';
});