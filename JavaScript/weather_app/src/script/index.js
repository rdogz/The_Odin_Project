import "../css/style.css";
import "../css/reset.css";

const API_KEY = "BS237RFUVGMVKEQTF9XZYBNMU";
const button = document.querySelector("button");

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next5days?unitGroup=us&key=${API_KEY}`,
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

const cleanData = (obj) => {};

button.addEventListener("click", async () => {
  const weather = await getWeather("New York");

  console.log(weather);

  const weatherDescription = weather.description;
  const temperature = weather.days[0].tempmax;
  //TODO
  const sunUp = "weather.current";
  console.log(temperature);
});
