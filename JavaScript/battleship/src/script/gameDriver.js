import { Player } from "./Ship.js";

const body = document.querySelector("body");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log("joe mama");
  player = new Player();
  eraseHTML();
  drawPlayerBoard(player);
});

function eraseHTML() {
  body.innerHTML = "";
}

function drawGameboard() {
  eraseHTML();
}

function drawPlayerBoard(p) {
  const boardWidth = 10;
  const boardHeight = 10;

  const playerDiv = document.createElement("div");
  playerDiv.classList.add("board");

  for (let i = 0; i < boardHeight; i++) {
    for (let j = 0; j < boardWidth; j++) {
      const newSquare = document.createElement("div");
      newSquare.classList.add("boardSquare");
      newSquare.setAttribute("id", `${j},${i}`);

      newSquare.addEventListener("click", () => {
        console.log(newSquare.id);
      });
      playerDiv.appendChild(newSquare);
    }
  }

  body.appendChild(playerDiv);
}
