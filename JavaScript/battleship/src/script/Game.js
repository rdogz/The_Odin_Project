import { Player } from "./Ship.js";

class Game {
  constructor(player1 = "Player 1", player2 = "Computer") {
    this.players = [player1, new Player(player2)];
    this.gameRunning = false;
    this.playerTurn = 0;
    this.isGameOver = false;
    this.winner;
  }

  start() {
    this.checkPlayers();
    this.gameRunning = true;
    this.isGameOver = false;
    this.playerTurn = 0;
  }

  checkPlayers() {
    if (this.players[0].gameboard === undefined) {
      this.players[0] = new Player("Player 1");
    }
  }

  turn(coordinate) {
    if (!this.gameRunning) return [false, null];

    const attacker = this.players[this.playerTurn];
    const defender = this.players[1 - this.playerTurn];
    const result = defender.gameboard.receiveAttack(coordinate);

    if (result === false) return [false, null]; // invalid or repeated

    if (defender.gameboard.allSunk()) {
      this.winner = attacker;
      this.isGameOver = true;
      this.gameRunning = false;
    } else {
      this.playerTurn = 1 - this.playerTurn;
    }

    return [true, result, defender.playerName];
  }

  checkGameOver(defender) {
    for (let i = 0; i < 2; i++) {
      if (this.players[i].gameboard.allSunk()) {
        this.winner = this.players[this.playerTurn];
        this.isGameOver = true;
        this.gameOver();
      }
    }
  }

  gameOver() {
    if (this.isGameOver) {
      this.gameRunning = false;
    }
  }
}

export { Game };
