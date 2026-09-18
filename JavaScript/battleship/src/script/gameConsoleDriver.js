import { Player } from "./Ship.js";
import { Game } from "./Game.js";

async function playGame() {
  const playerName = prompt("Player name: ");
  const player = new Player(playerName);
  let computerMoves = new Set();

  const game = new Game(player);

  game.start();

  while (game.isGameOver === false) {
    let move;

    if (game.playerTurn === 0) {
      move = await playMove();
      game.turn(move);
    } else {
      move = await computerMove(computerMoves);
      game.turn(move);
    }

    console.log(
      `${game.players[game.playerTurn].player}'s getting attacked. Move: ${move}`,
    );
    console.log(game.players[game.playerTurn].gameboard.board);
  }
}

function playMove() {
  const coordinates = prompt("Insert the atack coordinates: ");

  const x = coordinates.split(",")[0];
  const y = coordinates.split(",")[1];

  return [Number(x), Number(y)];
}

function computerMove(attackedCoordinates = new Set()) {
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
