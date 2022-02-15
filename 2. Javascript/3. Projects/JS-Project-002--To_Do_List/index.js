const newEvent = document.querySelector(".add-event-input");
const addBtn   = document.querySelector(".add-btn");
const eventUl  = document.querySelector(".event-ul");

const activeEv = document.querySelector(".active-event");
const totalEv  = document.querySelector(".total-event");

addBtn.addEventListener("click", ()=>{
    if (newEvent.value == ""){
        // alert("Enter an event name");
        Swal.fire(
            'Opps...',
            'Missing Event Name!',
            'error'
          )
    }
    else{
        // let eventText = newEvent.value;
        AddEvent(newEvent.value);
        activeEv.textContent = currentEventNumbers();
        totalEv.textContent = totalEventNumbers()
    }
});

eventUl.addEventListener("click", (e)=>{
    let item = e.target;
    
    if (item.classList.contains("fa-check-square")){
        item.parentElement.parentElement.classList.toggle("checked");
        item.classList.toggle("checked-icon");
        activeEv.textContent = currentEventNumbers();
        totalEv.textContent = totalEventNumbers()
    }
    else if (item.classList.contains("fa-trash")){
        item.parentElement.parentElement.remove();
        activeEv.textContent = currentEventNumbers();
        totalEv.textContent = totalEventNumbers()
    }

});


function AddEvent(eventText){
    let div = document.createElement("div");
    div.classList.add("event-div");
    // eventUl.appendChild(div);
    eventUl.prepend(div);

    let checkBtn = document.createElement("button");
    checkBtn.classList.add("event-check-btn");
    checkBtn.innerHTML = "<i class='fas fa-check-square'></i>";
    div.appendChild(checkBtn);

    let li = document.createElement("li");
    li.classList.add("event-li");
    li.innerText = eventText;
    div.appendChild(li);

    let trashBtn = document.createElement("button");
    trashBtn.classList.add("event-trash-btn");
    trashBtn.innerHTML = "<i class='fas fa-trash'></i>";
    div.appendChild(trashBtn);

    newEvent.value = "";
    newEvent.focus();
}

function totalEventNumbers(){
    let total = eventUl.childElementCount;
    return total;
}

function currentEventNumbers(){
    let current = document.querySelectorAll(".checked");
    return current.length;
}




