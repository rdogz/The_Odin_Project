import { Player } from "./Ship.js";

const body = document.querySelector("body");
const form = document.querySelector("form");
const input = document.querySelector("input");

let vertical = false;
let ship;
let coordinate;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  player = new Player(input.value);
  eraseHTML();
  console.log(player.gameboard.battleship);
  const board = drawGameboard();
  const playerDiv = drawPlayerSection(player);
  const ships = drawShips;
  playerDiv.appendChild(board);

  body.appendChild(playerDiv);
});

function eraseHTML() {
  body.innerHTML = "";
}

function drawGameboard() {
  const boardDiv = document.createElement("div");
  const boardWidth = 10;
  const boardHeight = 10;

  for (let i = 0; i < boardHeight; i++) {
    for (let j = 0; j < boardWidth; j++) {
      const newSquare = document.createElement("div");
      newSquare.classList.add("boardSquare");
      newSquare.setAttribute("id", `${j},${i}`);

      newSquare.addEventListener("click", () => {
        coordinate = [];
        coordinate.push(Number(newSquare.id.charAt(0)));
        coordinate.push(Number(newSquare.id.charAt(2)));
        console.log(coordinate);
      });

      boardDiv.appendChild(newSquare);
    }
  }

  boardDiv.classList.add("board");
  return boardDiv;
}

function drawPlayerSection(p) {
  const div = document.createElement("div");
  const playerName = document.createElement("h1");

  playerName.innerText = `${p.player}`;

  div.appendChild(playerName);

  div.classList.add("playerDiv");
  return div;
}

function drawShips() {
  const selectionDiv = document.createElement("div");

  const carrier = document.createElement("div");
  const battleship = document.createElement("div");
  const destroyer = document.createElement("div");
  const submarine = document.createElement("div");
  const patrolBoat = document.createElement("div");
}
