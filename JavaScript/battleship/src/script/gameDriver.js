import { Player } from "./Ship.js";
import { renderGame } from "./renderGameStuff.js";
import { Game } from "./Game.js";
import { playGame } from "./gameConsoleDriver.js";

const body = document.querySelector("body");
const form = document.querySelector("form");
const input = document.querySelector("input");

let vertical = false;
let ship;
let coordinate;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const draw = new renderGame();
  const player = new Player(input.value);

  draw.eraseHTML();
  console.log(player.gameboard.battleship);
  const board = draw.drawGameboard();
  const playerDiv = drawPlayerSection(player);
  playerDiv.appendChild(board);

  body.appendChild(playerDiv);
});

function drawPlayerSection(p) {
  const div = document.createElement("div");
  const playerName = document.createElement("h1");

  playerName.innerText = `${p.player}`;

  div.appendChild(playerName);

  div.classList.add("playerDiv");
  return div;
}
