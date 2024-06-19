
const api_key = "4646ca80c2766283ad854608bf6d0e61";
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const  weather_icon = document.querySelector(".weather-icon")

async function checkWeather(city){
const response = await fetch(api_url + city + `&appid=${api_key}`);
var data = await response.json();

console.log(data);

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

if(data.weather[0].main == "Clouds"){
    weather_icon.src = "images/clouds.png"
}
else if(data.weather[0].main == "Clear"){
    weather_icon.src = "images/clear.png"
}
else if(data.weather[0].main == "Rain"){
    weather_icon.src = "images/rain.png"
}
else if(data.weather[0].main == "Drizzle"){
    weather_icon.src = "images/drizzle.png"
}
else if(data.weather[0].main == "Mist"){
    weather_icon.src = "images/mist.png"
}
else if(data.weather[0].main == "Snow"){
    weather_icon.src = "images/snow.png"
}
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})
     

