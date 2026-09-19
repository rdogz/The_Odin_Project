import { Player } from "./Ship.js";
import { Game } from "./Game.js";

async function playGame() {
  const playerName = prompt("Player name: ");
  const player = new Player(playerName);
  let computerMoves = new Set();

  const game = new Game(player);

  game.start();

  console.log("Place carrier");
  const carrierLocation = await playerCoordinates();
  console.log("Place battleship");
  const battleshipLocation = await playerCoordinates();
  console.log("Place destroyer");
  const destroyerLocation = await playerCoordinates();
  console.log("Place submarine");
  const submarineLocation = await playerCoordinates();
  console.log("Place patrol boat");
  const patrolBoatLocation = await playerCoordinates();

  game.players[0].gameboard.placeShip(
    game.players[0].gameboard.carrier,
    carrierLocation,
    false,
  );
  game.players[0].gameboard.placeShip(
    game.players[0].gameboard.battleship,
    battleshipLocation,
  );
  game.players[0].gameboard.placeShip(game.players[0].gameboard.destroyer);
  game.players[0].gameboard.placeShip(game.players[0].gameboard.submarine);
  game.players[0].gameboard.placeShip(game.players[0].gameboard.patrolBoat);

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
      `${game.players[game.playerTurn].player}'s getting attacked. Move: ${move}`,
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

playGame();
export { playGame };
