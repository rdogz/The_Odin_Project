import { Player } from "./Ship.js";
import { renderGame } from "./renderGameStuff.js";
import { Game } from "./Game.js";

const form = document.querySelector("form");
const input = document.querySelector("input");
const body = document.querySelector("body");
const startButton = document.createElement("button");
startButton.disabled = true;

let vertical = false;
let ship;
let coordinate;

async function playGame(game) {
  game.start();
  console.log(game);
  const draw = new renderGame();
  let computerMoves = new Set();
  let move = [];
  let moveResult = [];
  let id = "";

  while (!game.isGameOver) {
    if (game.playerTurn === 0) {
      while (true) {
        id = await getPlayerCoordinates(game.players[1]);
        move = [id.charAt(0), id.charAt(2)];
        moveResult = game.turn(move);
        if (moveResult[0]) {
          break;
        }
      }
      draw.updateBoard(
        `${game.players[game.playerTurn].playerName}:${id}`,
        moveResult[1],
      );
    } else {
      while (true) {
        move = computerCoordinates(computerMoves);
        moveResult = game.turn(move);
        if (moveResult[0]) {
          break;
        }
      }
      draw.updateBoard(
        `${game.players[game.playerTurn].playerName}:${move}`,
        moveResult[1],
      );
    }
    console.log(
      `${game.players[game.playerTurn].playerName}'s getting attacked. Move: ${move}. Move result: ${moveResult[1]}`,
    );
  }

  body.innerHTML = "";
  const winner = document.createElement("h1");
  console.log(game.winner.playerName);
  winner.innerText = `winner: ${game.winner.playerName}`;
  body.appendChild(winner);
}

function computerCoordinates(attackedCoordinates = new Set()) {
  const boardSize = 10;
  let x, y, key;

  do {
    x = Math.floor(Math.random() * boardSize);
    y = Math.floor(Math.random() * boardSize);
    key = `${x},${y}`;
  } while (attackedCoordinates.has(key));

  attackedCoordinates.add(key);
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

async function placePlayerShips(p, draw) {
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
      draw.renderShip(ship, coor, vertical);
    }
  }

  h3.innerText = "All ships placed";
  return;
}

function placeComputerShips(c) {
  const b = c.gameboard;
  const boardSize = 10;

  const ships = [
    b.carrier,
    b.battleship,
    b.destroyer,
    b.submarine,
    b.patrolBoat,
  ];

  for (const ship of ships) {
    let placed = false;
    let attempts = 0;

    while (!placed) {
      if (++attempts > 1000) {
        throw new Error(
          "Couldn't place a computer ship, check placeShip's return value",
        );
      }

      const coor = computerCoordinates();
      const isVertical = Math.random() < 0.5;

      placed = b.placeShip(ship, coor, isVertical);
      console.log(ship);
    }
  }
}
// BEFORE GAME PAGE LOAD
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const draw = new renderGame();
  const player = new Player(input.value);
  const game = new Game(player);

  draw.eraseHTML(body);
  const boardDiv = draw.drawGameboard(player);
  const playerDiv = draw.drawPlayerSection(player);
  playerDiv.appendChild(boardDiv);

  const computer = game.players[1];
  const computerBoard = draw.drawGameboard(computer);
  const computerDiv = draw.drawComputerSection(computer);
  computerDiv.appendChild(computerBoard);

  startButton.innerText = "Start";
  startButton.addEventListener("click", () => {
    startButton.disabled = true;
    document.querySelector("h3").remove();
    playGame(game);
  });
  body.appendChild(startButton);
  body.appendChild(playerDiv);
  body.appendChild(computerDiv);
  placePlayerShips(player, draw);
  placeComputerShips(game.players[1]);
  startButton.disabled = false;
});
