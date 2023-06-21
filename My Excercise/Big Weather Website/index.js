const checkBtn = document.querySelector(".checkBtn");
const results = document.querySelector(".results");
const searchBar = document.querySelector("#searchBar");




checkBtn.addEventListener("click",async function(){
    const APIKey = '22de3d04c61f8958eada69282f7c1b31';
    const city = searchBar.value;

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`);
    const data = await response.json()
   console.log(data);

   results.innerHTML = `  <div class="information">
   <div class="weather">
       <h3 class="cityName">${searchBar.value}</h3>
       <h2 class="temperature">${data.main.temp.toFixed(2)}°C</h2>
   </div>
   <div class="otherInfo">
       <p>Wind ${data.wind.speed.toFixed(2)}m/s</p>
       <p>Pressure ${data.main.pressure} hPa</p>
       <p>Humidity ${data.main.humidity}%</p>
   </div>
</div>`
    

})