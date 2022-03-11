const seatSelection   = document.querySelector(".container");
const movies          = document.querySelector("#movie");
const clearData       = document.querySelector(".clear");

const count           = document.querySelector("#count");
const film            = document.querySelector("#film");
const total           = document.querySelector("#total");


function setLocal(){
      localStorage.setItem("Selected Seats", selectedSeats());
      localStorage.setItem("Selected Movie", selectedMovie())
      localStorage.setItem("Selected Movie Price",selectedMoviePrice());
}

function selectedSeats(){
      const seats = document.querySelectorAll(".row .seat");
      let selectedSeats = [];
      seats.forEach((seat, index)=>{
            if (seat.classList.contains("selected")){
                  selectedSeats.push(index);
            }
      })
      return selectedSeats;
}

function selectedMovie(){
      return movies.options[movies.selectedIndex].innerText.split("(")[0];
}

function selectedMoviePrice(){
      return movies.options[movies.selectedIndex].value;
}

function calculations(){
      count.textContent = selectedSeats().length;
      film.textContent  = localStorage.getItem("Selected Movie");
      total.textContent = localStorage.getItem("Selected Movie Price") * selectedSeats().length;
}

movies.addEventListener("change",()=>{
     localStorage.setItem("Selected Movie", selectedMovie())
     localStorage.setItem("Selected Movie Price",selectedMoviePrice());
     calculations();
});


seatSelection.addEventListener("click", (e)=>{
     if (e.target.classList.contains("seat") 
            && !e.target.classList.contains("occupied")){
                  e.target.classList.toggle("selected");
                  document.querySelector(".screen").innerText = "Data Stored";
                  setTimeout(() => {
                        document.querySelector(".screen").innerText = "";
                  }, 500);
            }
      console.log(selectedSeats());
      setLocal();
      calculations();


});

window.addEventListener("load", ()=>{

      const seats = document.querySelectorAll(".row .seat");
      const selectedSeats = localStorage.getItem("Selected Seats").split(",");
      for (const seat of selectedSeats) {
            seats[seat].classList.add("selected");
      }
      const options = document.querySelectorAll("#movie option")
      options.forEach((movie, index) => {
            if (movie.value == localStorage.getItem("Selected Movie Price")){
                  movie.setAttribute("selected",true);
            }
      });
      calculations();
});

clearData.addEventListener("click", ()=>{
      localStorage.removeItem("Selected Seats");
      localStorage.removeItem("Selected Movie");
      localStorage.removeItem("Selected Movie Price");
      document.querySelector(".screen").innerText = "Data Removed";
      setTimeout(() => {
            window.location.reload();
      }, 500);
      setTimeout(() => {
            document.querySelector(".screen").innerText = "";
      }, 500);
})

