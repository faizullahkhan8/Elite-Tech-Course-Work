const citySelect = document.getElementById("citySelect");
// const weatherIcon = document.getElementById("weatherIcon");
const degree = document.querySelectorAll("#degree");
const sunrise = document.getElementById("sunrise");
const wind = document.getElementById("wind");
const dayTime = document.getElementById("day-time");
const greeting = document.getElementById("greeting");
const clock = document.getElementById("clock");
const batteryIcon = document.getElementById("battery-icon");
const batteryPercentage = document.getElementById("battery-percentage");
const weatherStatusIconsITag = document.getElementById("weather-status-icon");

const API_KEY = "67b95e7118808926e9dc7a667eb8a116";

const weatherStatusIcons = {
    Clear: "fa-sun",
    Clouds: "fa-cloud",
    Rain: "fa-cloud-showers-heavy",
    Drizzle: "fa-cloud-rain",
    Thunderstorm: "fa-bolt",
    Snow: "fa-snowflake",
    Mist: "fa-smog",
    Smoke: "fa-smog",
    Haze: "fa-smog",
    Dust: "fa-smog",
    Fog: "fa-smog",
    Sand: "fa-smog",
    Ash: "fa-smog",
    Squall: "fa-wind",
    Tornado: "fa-wind",
};

window.addEventListener("load", (e) => {
    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        get_weather_from_cords(lat, lon);
    });
});

const get_weather = async (city) => {
    if (!city) return;

    const API_STRING_FOR_LAT_LON = `https://api.openweathermap.org/geo/1.0/direct?q=${city},PK&limit=1&appid=${API_KEY}`;

    try {
        const lat_log_response = await fetch(API_STRING_FOR_LAT_LON);
        const lat_lon_data = await lat_log_response.json();

        get_weather_from_cords(lat_lon_data[0].lat, lat_lon_data[0].lon);
    } catch (error) {
        console.log(error);
    }
};

const get_weather_from_cords = async (lat, lon) => {
    const API_STIRNG_FOR_WEATHER = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    try {
        const response = await fetch(API_STIRNG_FOR_WEATHER);
        const data = await response.json();

        // get suitable icon from the api
        // let iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        // weatherIcon.setAttribute("src", iconUrl);

        weatherStatusIconsITag.setAttribute(
            "class",
            `fas ${weatherStatusIcons[data.weather[0].main]}`
        );

        // get degree form kelvin and dispaly
        const kelvinTemp = data.main.temp;
        const celsiusTemp = kelvinTemp - 273.15;
        degree[0].innerText = `${celsiusTemp.toFixed(1)}`;
        degree[1].innerText = `${celsiusTemp.toFixed(1)}`;

        // set sunrise , wind
        sunrise.innerText = new Date(
            data.sys.sunrise * 1000
        ).toLocaleTimeString();

        wind.innerText = data.wind.speed;
    } catch (error) {
        console.log(error);
    }
};

citySelect.addEventListener("change", async (e) => {
    get_weather(e.target.value);
});

let daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

setInterval(() => {
    // set day and time
    const date = new Date();

    dayTime.innerText = `${daysOfTheWeek[date.getDay()]} ${
        date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
    } : ${date.getMinutes()} ${date.getHours() > 12 ? "PM" : "AM"}`;

    clock.innerText = `${
        date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
    } : ${date.getMinutes()}`;
}, 1000);

// greeting based on time
const hour = new Date().getHours();
if (hour >= 5 && hour < 12) {
    greeting.innerText = "Good Morning ☀️".toUpperCase();
} else if (hour >= 12 && hour < 17) {
    greeting.innerText = "Good Afternoon 🌤️".toUpperCase();
} else if (hour >= 17 && hour < 21) {
    greeting.innerText = "Good Evening 🌇".toUpperCase();
} else {
    greeting.innerText = "Good Night 🌙".toUpperCase();
}

// battery status by chatGPT
navigator.getBattery().then(function (battery) {
    const percentage = Math.round(battery.level * 100); // e.g., 0.76 → 76%

    let iconClass = "fa-battery-empty"; // default
    let colorClass = "white";

    if (percentage >= 80) {
        iconClass = "fa-battery-full";
    } else if (percentage >= 60) {
        iconClass = "fa-battery-three-quarters";
    } else if (percentage >= 40) {
        iconClass = "fa-battery-half";
    } else if (percentage >= 20) {
        iconClass = "fa-battery-quarter";
    } else {
        iconClass = "fa-battery-empty";
        colorClass = "red";
    }

    batteryIcon.innerHTML = `<i class="fas ${iconClass}" style="color:${colorClass}"></i>`;
    batteryPercentage.innerText = `${percentage}%`;
});
