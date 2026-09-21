import { Player } from "./Ship.js";
import { Game } from "./Game.js";

async function playGame() {
  const playerName = await prompt("Player name: ");
  const player = new Player(playerName);
  let computerMoves = new Set();

  const game = new Game(player);

  game.start();

  for (let i = 0; i < 2; i++) {
    await placeAllShips(game.players[i]);
  }

  while (game.isGameOver === false) {
    let move;

    if (game.playerTurn === 0) {
      move = await playerCoordinates();
      game.turn(move);
    } else {
      move = await computerCoordinates(computerMoves);
      game.turn(move);
    }

    console.log(
      `${game.players[game.playerTurn].playerName}'s getting attacked. Move: ${move}`,
    );
    console.log(game.players[game.playerTurn].gameboard.board);
  }
}

function playerCoordinates() {
  const coordinates = prompt("Insert the coordinates: ");

  const x = coordinates.split(",")[0];
  const y = coordinates.split(",")[1];

  return [Number(x), Number(y)];
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

async function placeAllShips(p) {
  let coo = [];
  if (p.playerName === "Computer") {
    coo.push(computerCoordinates());
    coo.push(computerCoordinates());
    coo.push(computerCoordinates());
    coo.push(computerCoordinates());
    coo.push(computerCoordinates());
  } else {
    console.log("Place carrier:");
    coo.push(await playerCoordinates());
    console.log("Place battleship:");
    coo.push(await playerCoordinates());
    console.log("Place destroyer:");
    coo.push(await playerCoordinates());
    console.log("Place submarine:");
    coo.push(await playerCoordinates());
    console.log("Place patrol boat:");
    coo.push(await playerCoordinates());
  }

  let i = 0;
  p.gameboard.placeShip(p.gameboard.carrier, coo[i++], false);
  p.gameboard.placeShip(p.gameboard.battleship, coo[i++]);
  p.gameboard.placeShip(p.gameboard.destroyer, coo[i++]);
  p.gameboard.placeShip(p.gameboard.submarine, coo[i++]);
  p.gameboard.placeShip(p.gameboard.patrolBoat, coo[i++]);
}

export { playGame };
