import { Player } from "./Ship.js";
import { renderGame } from "./renderGameStuff.js";
import { Game } from "./Game.js";

const form = document.querySelector("form");
const input = document.querySelector("input");
const body = document.querySelector("body");

let vertical = false;
let ship;
let coordinate;

async function playGame(game) {
  game.start();
  const tried = new Set();

  while (!game.isGameOver) {
    if (game.playerTurn === 0) {
      const id = await getPlayerCoordinates(game.players[1]);
      console.log(id);
      game.turn(id);
      console.log(game.players[0].gameboard.board);
    } else {
      await new Promise((r) => setTimeout(r, 500));
      game.turn(pickComputerMove(tried));
    }
  }
}

function pickComputerMove(tried) {
  let x, y, key;
  do {
    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * 10);
    key = `${x},${y}`;
  } while (tried.has(key));

  tried.add(key);
  return [x, y];
}

function getPlayerCoordinates(player) {
  return new Promise((resolve) => {
    const board = document.getElementById(player.playerName);

    function handler(e) {
      const square = e.target.closest(".boardSquare");
      if (!square) return;

      board.removeEventListener("click", handler);
      resolve(square.id);
    }

    board.addEventListener("click", handler);
  });
}

async function placePlayerShips(p) {
  const b = p.gameboard;
  const playerDiv = document.querySelector(".playerDiv");
  const h3 = document.createElement("h3");
  playerDiv.appendChild(h3);

  const ships = [
    { ship: b.carrier, label: "carrier" },
    { ship: b.battleship, label: "battleship" },
    { ship: b.destroyer, label: "destroyer" },
    { ship: b.submarine, label: "submarine" },
    { ship: b.patrolBoat, label: "patrol boat" },
  ];

  for (const { ship, label } of ships) {
    let placed = false;

    while (!placed) {
      h3.innerText = `Select ${label} coordinates`;

      const id = await getPlayerCoordinates(p);
      const coor = [Number(id.charAt(0)), Number(id.charAt(2))];
      console.log(ship);
      console.log(coor);
      placed = b.placeShip(ship, coor, vertical);

      if (!placed) h3.innerText = `Can't place the ${label} there, try again`;
    }
  }

  h3.innerText = "All ships placed";
  return;
}
// BEFORE GAME PAGE LOAD
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const draw = new renderGame();
  const player = new Player(input.value);
  const game = new Game(player);
  const startButton = document.createElement("button");

  draw.eraseHTML(body);
  const boardDiv = draw.drawGameboard(player);
  const playerDiv = draw.drawPlayerSection(player);
  playerDiv.appendChild(boardDiv);

  const computer = game.players[1];
  const computerBoard = draw.drawGameboard(computer);
  const computerDiv = draw.drawComputerSection(computer);
  computerDiv.appendChild(computerBoard);

  startButton.addEventListener("click", () => {
    startButton.disabled = true;
    playGame(game);
  });

  startButton.innerText = "Start";
  body.appendChild(startButton);
  body.appendChild(playerDiv);
  body.appendChild(computerDiv);
  placePlayerShips(player);
});
