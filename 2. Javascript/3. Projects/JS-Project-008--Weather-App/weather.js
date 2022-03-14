
const input  = document.querySelector("input");
const submit = document.querySelector("button");
const msg    = document.querySelector(".msg");

const cities = document.querySelector(".cities");

const myKey  = "5149084a770f00d9c29edfadb4a0981d";
const baseURL= "https://api.openweathermap.org/data/2.5/weather?q=";

const citiesArr = [];

submit.addEventListener("click",(e)=>{
      const city = input.value;
      showWeather(city);
      input.value = "";
      input.focus();
      e.preventDefault();
});


const showWeather = async (city) => {
      const url = `${baseURL}${city}&appid=${myKey}&units=metric&lang=tr`;
      try{      
            const response = await axios({
                  url   : `${url}`,
                  method: "get"
            })
      const {data} = response;
      if(city == ""){
            msg.textContent = "Please search for a valid city 😩";
            setTimeout(() => {msg.innerText = ""}, 3000);
            }
      else if (citiesArr.includes(data.name)){
            msg.innerText = `You already show the weather for ${data.name}, Please search for another city 😉`;
            setTimeout(() => {msg.innerText = ""}, 3000);
      }

      else {
            cities.innerHTML+= `
                                    <ul class="city">
                                          <li class="city-name"> ${data.name} <sup> ${data.sys.country}</sup></li>
                                          <li class="city-temp"> ${Math.round(data.main.temp)}<sup>${"°C"}</sup></li>
                                          <li><img class="city-icon" src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icon"></li>
                                          <li><figcaption> ${data.weather[0].description} <figcaption></li>
                                    </ul> `;
                  citiesArr.push(data.name);
      }
      }
      catch(error){
            msg.innerText = `There is no city founded name with "${city}"`;
            setTimeout(() => {msg.innerText = ""}, 3000);
      }
}