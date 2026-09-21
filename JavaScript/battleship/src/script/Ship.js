class Ship {
  constructor(length, initial) {
    this.length = length;
    this.hits = 0;
    this.initial = initial;
  }

  isSunk() {
    return !(this.length > this.hits);
  }

  hit() {
    if (this.hits < this.length) this.hits++;
  }
}

class Gameboard {
  constructor() {
    this.carrier = new Ship(5, "c");
    this.battleship = new Ship(4, "b");
    this.destroyer = new Ship(3, "d");
    this.submarine = new Ship(3, "s");
    this.patrolBoat = new Ship(2, "p");
    this.placedShip = "";
    this.board = Array.from({ length: 10 }, () => Array(10).fill(0));
  }
  // gameboard = grid 10x10

  placeShip(ship, coordinates, vertical = false) {
    if (this.placedShip.includes(ship.initial)) {
      return false;
    }

    const startX = coordinates[0];
    const startY = coordinates[1];

    const endX = vertical ? startX : startX + ship.length;
    const endY = vertical ? startY + ship.length : startY;

    if (
      startX < 0 ||
      startX > 10 ||
      endX < 0 ||
      endX > 10 ||
      startY < 0 ||
      startY > 10 ||
      endY < 0 ||
      endY > 10
    ) {
      return false;
    }

    for (let x = startX; x < (vertical ? startX + 1 : endX); x++) {
      for (let y = startY; y < (vertical ? endY : startY + 1); y++) {
        if (this.board[x][y] !== 0) {
          return false;
        }
      }
    }
    for (let x = startX; x < (vertical ? startX + 1 : endX); x++) {
      for (let y = startY; y < (vertical ? endY : startY + 1); y++) {
        this.board[x][y] = ship.initial;
      }
    }

    this.placedShip += ship.initial;
    return true;
  }

  receiveAttack([x, y]) {
    if (x < 0 || x > 9 || y < 0 || y > 9) {
      return false;
    }
    if (this.board[x][y] === "h" || this.board[x][y] === "m") {
      return false;
    }

    if (this.board[x][y] === 0) {
      this.board[x][y] = "m";
      return true;
    }

    switch (this.board[x][y]) {
      case "c":
        this.carrier.hit();
        break;
      case "b":
        this.battleship.hit();
        break;
      case "d":
        this.destroyer.hit();
        break;
      case "s":
        this.submarine.hit();
        break;
      case "p":
        this.patrolBoat.hit();
        break;

      default:
        return false;
    }

    this.board[x][y] = "h";
    return true;
  }

  allSunk() {
    if (
      this.carrier.isSunk() &&
      this.battleship.isSunk() &&
      this.destroyer.isSunk() &&
      this.submarine.isSunk() &&
      this.patrolBoat.isSunk()
    ) {
      return true;
    }
    return false;
  }
}

class Player {
  constructor(player = "Computer") {
    this.playerName = player;
    this.gameboard = new Gameboard();
  }
}

export { Ship, Gameboard, Player };
