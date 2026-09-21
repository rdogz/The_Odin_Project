import { Player } from "./Ship.js";

class renderGame {
  constructor() {
    this.coordinate;
  }
  drawGameboard(player) {
    const boardDiv = document.createElement("div");
    const boardWidth = 10;
    const boardHeight = 10;

    for (let i = boardHeight - 1; i >= 0; i--) {
      for (let j = 0; j < boardWidth; j++) {
        const newSquare = document.createElement("div");
        newSquare.classList.add("boardSquare");
        newSquare.setAttribute("id", `${j},${i}`);

        newSquare.addEventListener("click", () => {
          let coordinate = [];
          coordinate.push(Number(newSquare.id.charAt(0)));
          coordinate.push(Number(newSquare.id.charAt(2)));
          this.coordinate = coordinate;
        });

        boardDiv.appendChild(newSquare);
      }
    }

    boardDiv.setAttribute("id", `${player.playerName}`);
    boardDiv.classList.add("board");
    return boardDiv;
  }

  eraseHTML(body) {
    body.innerHTML = "";
  }

  drawPlayerSection(p) {
    const div = document.createElement("div");
    const playerName = document.createElement("h1");

    playerName.innerText = `${p.playerName}`;

    div.appendChild(playerName);

    div.classList.add("playerDiv");
    return div;
  }

  drawComputerSection(p) {
    const div = document.createElement("div");
    const playerName = document.createElement("h1");

    playerName.innerText = `${p.playerName}`;

    div.appendChild(playerName);

    div.classList.add("computerDiv");
    return div;
  }

  drawShips(player) {
    const board = player.gameboard;
    const playerDiv = document.querySelector(".playerDiv");

    const carrier = board.carrier;
    const battleship = board.battleship;
    const destroyer = board.destroyer;
    const submarine = board.submarine;
    const patrolBoat = board.patrolBoat;

    const carrierButton = document.createElement("h2");
    const battleshipButton = document.createElement("h2");
    const destroyerButton = document.createElement("h2");
    const submarineButton = document.createElement("h2");
    const patrolBoatButton = document.createElement("h2");

    playerDiv.appendChild(carrierButton);
    playerDiv.appendChild(battleshipButton);
    playerDiv.appendChild(destroyerButton);
    playerDiv.appendChild(submarineButton);
    playerDiv.appendChild(patrolBoatButton);
  }
}

export { renderGame };
