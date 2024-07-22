//create variables to store API key and API URL
const apiKey = "2d2b5f440c61be41bf32d9ed601b4531";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

//create variables for input box and button
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

//create variable for weather icon
const weatherIcon = document.querySelector(".weather-icon")


//write a function, passing in the city object, that checks for blank input, error and city name
async function checkWeather(city){
    if(searchBox.value === ""){
        alert("You must write something!");
        return;
    }

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        //display error meaasge and hide weather info 
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        
        //changing weather icon image
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
        
        //display weather info and hide error meaasge
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        
    }

    searchBox.value = "";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});

  
        