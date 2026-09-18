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
    checkPlayers();
    this.gameRunning = true;
    this.isGameOver = false;
    this.playerTurn = 0;
  }

  checkPlayers() {
    if (this.players[0].gameboard === undefined) {
      this.players[0] = new Player("Player 1");
    }
  }

  async turn(getMove) {
    if (!this.gameRunning) return;

    const attacker = this.players[this.playerTurn];
    const defender = this.players[1 - this.playerTurn];

    const coordinate = await getMove(attacker, defender);
    defender.gameboard.receiveAttack(coordinate);

    this.checkGameOver(defender);

    if (!this.isGameOver) {
      if (this.playerTurn === 1) {
        this.playerTurn = 0;
      } else {
        this.playerTurn = 1;
      }
    }
  }

  checkGameOver(defender) {
    if (defender.gameboard.allShipsSunk()) {
      this.isGameOver = true;
      this.winner = this.players[this.playerTurn];
      this.gameOver();
    }
  }

  gameOver() {
    if (this.isGameOver) {
      this.gameRunning = false;
    }
  }
}

export { Game };
