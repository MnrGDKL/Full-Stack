
const years     = document.getElementById("years");
const months    = document.getElementById("months");
const days      = document.getElementById("days");
const hours     = document.querySelector("#hours");
const minutes   = document.querySelector("#minutes");
const seconds   = document.querySelector("#seconds");
const countdown = document.querySelector("#countdown");
const loading   = document.querySelector(".loading");

window.addEventListener("load", ()=>{
    loading.style.display = "block";
    setTimeout(()=>{
        loading.style.display = "none";
        countdown.style.display = "flex";
    }, 1000);
    
    let h2Elements  = document.getElementsByTagName("h2");
    
    // for (let index = 0; index < h2Elements.length; index++) {
    //     h2Elements[index].innerHTML = "00";
    // }
    
    let h2Elements2 = countdown.querySelectorAll("h2");
    // console.log(h2Elements2);

    // h2Elements2.forEach(each => {
    //     each.innerHTML = "00";
    // });

    [...h2Elements].forEach(element => {
        element.innerHTML = "00";
    });
});


let selectedBirthday = new Date();
let birthdayInput   = document.querySelector("input[name=birthday]");



birthdayInput.addEventListener("change", (event)=>{
    console.log(event.target.value);
    selectedBirthday = new Date(event.target.value);
    if (selectedBirthday > new Date()){
        alert("Birthday is not bigger than today");
        return;
    }
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80')";

    loading.style.display = "block";
    setTimeout(()=>{
        loading.style.display = "none";
        countdown.style.display = "flex";
    }, 1000);
    setInterval(updateCountdown, 1000);
});


const updateCountdown = ()=>{
    let dobYear    = selectedBirthday.getFullYear();
    let dobMonth   = selectedBirthday.getMonth();
    let dobDay     = selectedBirthday.getDate();
    let dobHour    = selectedBirthday.getHours();
    let dobMinute  = selectedBirthday.getMinutes();
    let dobSecond  = selectedBirthday.getSeconds();

    let now           = new Date();

    let currentYear   = now.getFullYear();
    let currentMonth  = now.getMonth();
    let currentDay    = now.getDate();
    let currentHour   = now.getHours();
    let currentMinute = now.getMinutes();
    let currentSecond = now.getSeconds();

    let yearofAge     = currentYear - dobYear;
    let monthofAge    = currentMonth - dobMonth;
    let dayofAge      = currentDay - dobDay;
    let hourofAge     = currentHour - dobHour;
    let minuteofAge   = currentMinute - dobMinute;
    let secondofAge   = currentSecond - dobSecond;
    console.log(currentMonth);

    if (secondofAge < 0){
        minuteofAge -= 1;
        secondofAge += 60;
    }

    if (minuteofAge < 0){
        hourofAge -= 1;
        minuteofAge += 60;
    }

    if (hourofAge < 0){
        dayofAge -= 1;
        hourofAge += 24;
    } 

    if (dayofAge < 0) {
        monthofAge -= 1;
        switch (currentMonth) {
            case (1 || 3 || 5 || 7 || 8 || 10 || 12):
                dayofAge += 31;
                break;
            case (2):
                dayofAge += 28;
            default:
                dayofAge += 30;
                break;
        }
    }       

    if (monthofAge < 0){
        yearofAge -= 1;
        monthofAge += 12;
    }

    years.innerText     = yearofAge.toString().padStart(2, "0");
    months.innerText    = monthofAge.toString().padStart(2, "0");
    days.innerText      = dayofAge.toString().padStart(2, "0");
    hours.innerText     = hourofAge.toString().padStart(2, "0");
    minutes.innerText   = minuteofAge.toString().padStart(2, "0");
    seconds.innerText   = secondofAge.toString().padStart(2, "0");


}