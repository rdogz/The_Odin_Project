import "../css/style.css";
import "../css/reset.css";

const API_KEY = "BS237RFUVGMVKEQTF9XZYBNMU";
const currentTime = new Date().toLocaleTimeString();
let tempMode = "F°";

// DOM stuff
const button = document.querySelector("button");
const form = document.querySelector("form");
const city = document.querySelector("#input-city");
const weatherHeader = document.querySelector("#weather-header");
const weatherTemp = document.querySelector("#weather-temperature");
const weatherOther = document.querySelector("#weather-other");
const toggle = document.querySelector(".toggle-temp");

toggle.addEventListener("click", () => {
  if (tempMode === "F°") {
    tempMode = "C°";
  } else {
    tempMode = "F°";
  }

  if (weatherTemp.innerHTML !== "") {
    const newTemp = toggleTemp({
      curTemp: Number(
        weatherTemp.children[0].innerText.split(": ")[1].split(" ")[0],
      ),
      tomorrowTemp: Number(
        weatherTemp.children[1].innerText.split(": ")[1].split(" ")[0],
      ),
      curSensation: Number(
        weatherTemp.children[2].innerText.split(": ")[1].split(" ")[0],
      ),
    });

    renderTemp(newTemp.curTemp, newTemp.tomorrowTemp, newTemp.curSensation);
  }
  toggle.innerText = tempMode;
});

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
  weatherHeader.innerHTML = "";
  weatherOther.innerHTML = "";

  weatherHeader.style.opacity = "1";

  const h1 = document.createElement("h1");
  const des = document.createElement("p");
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
  renderTemp(obj.curTemp, obj.tomorrowTemp, obj.curSensation);

  // other
  up.innerText = `Sun up: ${obj.sunUp}`;
  down.innerText = `Sun down: ${obj.sunDown}`;
  humidity.innerText = `Humidity: ${obj.curHumidity}`;
  // append other
  weatherOther.appendChild(up);
  weatherOther.appendChild(down);
  weatherOther.appendChild(humidity);
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

function toggleTemp(obj) {
  let temp = obj.curTemp;
  let tmrTemp = obj.tomorrowTemp;
  let feelTemp = obj.curSensation;

  if (tempMode === "C°") {
    temp = (temp - 32) / 1.8;
    tmrTemp = (tmrTemp - 32) / 1.8;
    feelTemp = (feelTemp - 32) / 1.8;

    return {
      curTemp: temp.toFixed(1),
      tomorrowTemp: tmrTemp.toFixed(1),
      curSensation: feelTemp.toFixed(1),
    };
  } else if (tempMode === "F°") {
    temp = temp * 1.8 + 32;
    tmrTemp = tmrTemp * 1.8 + 32;
    feelTemp = feelTemp * 1.8 + 32;

    return {
      curTemp: temp.toFixed(1),
      tomorrowTemp: tmrTemp.toFixed(1),
      curSensation: feelTemp.toFixed(1),
    };
  }
}

function renderTemp(a, b, c) {
  weatherTemp.innerHTML = "";

  const current = document.createElement("p");
  const feels = document.createElement("p");
  const tomorrow = document.createElement("p");

  current.innerText = `Current: ${a} ${tempMode}`;
  tomorrow.innerText = `Tomorrow: ${b} ${tempMode}`;
  feels.innerText = `Feels like: ${c} ${tempMode}`;

  weatherTemp.appendChild(current);
  weatherTemp.appendChild(tomorrow);
  weatherTemp.appendChild(feels);
}
