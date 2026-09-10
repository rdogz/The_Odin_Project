import "../css/style.css";
import "../css/reset.css";

const img = document.querySelector("img");
const button = document.querySelector("button");
const searches = [
  "cats",
  "dogs",
  "pizza",
  "funny",
  "dance",
  "love",
  "happy",
  "sad",
  "witch",
  "heart",
  "sad cat",
  "happy cat",
  "crazy dance",
  "random",
  "skibidi",
  "67",
  "rizzler",
  "amongus",
];

button.addEventListener("click", () => {
  getCats();
});

async function getCats() {
  const randomSearch = searches[Math.floor(Math.random() * searches.length)];
  console.log(randomSearch);

  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=<YOUR_API_KEY>&s=${randomSearch}`,
    );
    const imgData = await response.json();
    img.src = imgData.data.images.original.url;
  } catch (error) {
    console.error(error);
  }
}
