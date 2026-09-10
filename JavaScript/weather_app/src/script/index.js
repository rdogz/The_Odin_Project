import "../css/style.css";
import "../css/reset.css";

const API_KEY = "BS237RFUVGMVKEQTF9XZYBNMU";
const button = document.querySelector("button");
const form = document.querySelector("form");
const currentTime = new Date().toLocaleTimeString();
const city = document.querySelector("input");
const weatherHeader = document.querySelector("#weather-header");
const weatherTemp = document.querySelector("#weather-temperature");
const weatherOther = document.querySelector("#weather-other");

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
    description: obj.description,
  };
};

function renderWeather(obj) {
  const h1 = document.createElement("h1");
  const des = document.createElement("p");
  const current = document.createElement("p");
  const feels = document.createElement("p");
  const tomorrow = document.createElement("p");
  const humidity = document.createElement("p");
  const up = document.createElement("p");
  const down = document.createElement("p");

  // header
  h1.innerText = obj.city;
  des.innerText = obj.description;
  // append header
  weatherHeader.appendChild(h1);
  weatherHeader.appendChild(des);

  // temperature
  current.innerText = `Current: ${obj.curTemp} F°`;
  tomorrow.innerText = `Tomorrow: ${obj.tomorrowTemp} F°`;
  feels.innerText = `Feels like: ${obj.curSensation} F°`;
  // append temperature
  weatherTemp.appendChild(current);
  weatherTemp.appendChild(tomorrow);
  weatherTemp.appendChild(feels);

  // other
  up.innerText = `Sun up: ${obj.sunUp}`;
  down.innerText = `Sun down: ${obj.sunDown}`;
  humidity.innerText = `Humidity: ${obj.curHumidity}`;
  // append other
  weatherOther.appendChild(up);
  weatherOther.appendChild(down);
  weatherOther.appendChild(feels);
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
