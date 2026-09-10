import "../css/style.css";
import "../css/reset.css";

const API_KEY = "BS237RFUVGMVKEQTF9XZYBNMU";
const button = document.querySelector("button");
const form = document.querySelector("form");
const currentTime = new Date().toLocaleTimeString();
const city = document.querySelector("input");
const weatherDiv = document.querySelector("#weather-display");

console.log(`Current time: ${currentTime}`);

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next1days?unitGroup=us&key=${API_KEY}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

const cleanData = (obj) => {
  return {
    city: obj.resolvedAddress,
    curTemp: obj.days[0].temp,
    tomorrowTemp: obj.days[1].temp,
    curSensation: obj.days[0].feelslike,
    curHumidity: obj.days[0].humidity,
    sunUp: obj.days[0].sunrise,
    sunDown: obj.days[0].sunset,
    weatherDescription: obj.description,
  };
};

function renderWeather(obj) {
  const tempP = document.createElement("p");
  tempP.innerText = obj.curTemp;

  weatherDiv.appendChild(tempP);
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    const weather = await getWeather(city.value);
    const data = cleanData(weather);

    renderWeather(data);
    console.log(data);
  } catch {
    throw new Error("HTTP error");
  }
});
