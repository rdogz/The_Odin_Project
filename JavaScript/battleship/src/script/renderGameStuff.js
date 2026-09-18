import { Player } from "./Ship.js";

const body = document.querySelector("body");
const form = document.querySelector("form");
const input = document.querySelector("input");

class renderGame {
  constructor() {
    this.coordinate;
  }
  drawGameboard() {
    const boardDiv = document.createElement("div");
    const boardWidth = 10;
    const boardHeight = 10;

    for (let i = 0; i < boardHeight; i++) {
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

    boardDiv.classList.add("board");
    return boardDiv;
  }

  eraseHTML() {
    body.innerHTML = "";
  }
}

export { renderGame };
