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
    const attackResult = defender.gameboard.receiveAttack(coordinate);

    if (attackResult === "h" || attackResult === "m") {
      this.checkGameOver(attacker);

      if (!this.isGameOver) {
        if (this.playerTurn === 1) {
          this.playerTurn = 0;
          return [true, attackResult];
        } else {
          this.playerTurn = 1;
          return [true, attackResult];
        }
      }
    }

    return [true, attackResult];
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
