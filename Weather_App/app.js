import dotenv from "dotenv";
dotenv.config();

const apikey = process.env.API_KEY;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const weatherImg = document.querySelector('.weather-condition-img');
const invalid = document.querySelector('.invalid');

async function Checkweather(city){

    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if(response.status == 404){
        invalid.style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }

    const data = await response.json();

    document.querySelector('.name').innerHTML= data.name;
    document.querySelector('.temp').innerHTML= Math.round(data.main.temp)+ "°c";
    document.querySelector('.humidity').innerHTML=data.main.humidity + " %";
    document.querySelector('.wind').innerHTML=data.wind.speed + ' km/h';

    if(data.weather[0].main == "Wind"){
        weatherImg.src = './Images/wind.png';
    }
    else if (data.weather[0].main == "Snow"){
        weatherImg.src = './Images/snow.png';
    }
    else if (data.weather[0].main == "Rain"){
        weatherImg.src = './Images/rain.png';
    }
    else if (data.weather[0].main == "Mist"){
        weatherImg.src = './Images/mist.png';
    }
    else if (data.weather[0].main == "Humidity"){
        weatherImg.src = './Images/humidity.png';
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherImg.src = './Images/drizzle.png';
    }
    else if (data.weather[0].main == "Clouds"){
        weatherImg.src = './Images/clouds.png';
    }
    else if (data.weather[0].main == "Clear"){
        weatherImg.src = './Images/clear.png';
    }
}

searchBtn.addEventListener("click",()=>{
    Checkweather(searchBox.value);
    document.querySelector(".weather").style.display = "block";
    invalid.style.display = 'none';
})




