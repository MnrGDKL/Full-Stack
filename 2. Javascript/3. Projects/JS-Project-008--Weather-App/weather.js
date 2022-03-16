
const form   = document.querySelector(".top-banner .container form");
const input  = document.querySelector("div.container input");
const msg    = document.querySelector(".top-banner span.msg");
const cities = document.querySelector(".ajax-section .container .cities");

const myKey  = localStorage.setItem("ApiKey",EncryptStringAES("5149084a770f00d9c29edfadb4a0981d"));

form.addEventListener("submit",(e)=>{
      getWeatherDataFromApi(input.value);
      input.value = "";
      input.focus();
      e.preventDefault();
})

const getWeatherDataFromApi = async (cityName) =>{
      const apiKey  = DecryptStringAES(localStorage.getItem("ApiKey"));
      const baseURL = "https://api.openweathermap.org/data/2.5/weather?";
      let units     = "metric";
      let lang      = "tr";

      let url = baseURL + "q=" + cityName + "&appid=" + apiKey + "&units=" + units + "&lang=" + lang;
      try {
            const response = await axios(url);
            const {name, sys, weather} = response.data;

            cities.innerHTML = `
                              <li class="city">
                                    <h2 class="city-name" data-name="${name}, ${sys.country}">
                                          <span>${name}</span>
                                          <sup>${sys.country}</sup>
                                    </h2>
                                    <div class="city-temp">1<sup>°C</sup></div>
                                    <figure>
                                          <img class="city-icon" src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png">
                                          <figcaption>${weather[0].description}</figcaption>
                                    </figure>
                              </li>`;
            document.body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?${cityName}")`;

      } catch(error){
            msg.innerText = "Please search for a valid city 😩";
            setTimeout(() => {msg.innerText = ""}, 3000);
      }
}