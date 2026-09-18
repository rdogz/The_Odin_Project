import { Player } from "./Ship.js";
import { renderGame } from "./renderGameStuff.js";
import { Game } from "./Game.js";

function playGame() {
  const playerName = prompt("Player name: ");
  const player = new Player(playerName);

  const game = new Game(player);

  while (game.isGameOver === false) {
    game.turn(playMove());
  }
}

playMove();
