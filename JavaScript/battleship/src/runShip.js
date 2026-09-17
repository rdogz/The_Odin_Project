import { Ship, Gameboard } from "./Ship.js";

const gameboard = new Gameboard();

// placeVertical(ship, coordinates)
//
gameboard.placeShip(gameboard.carrier, [0, 0], true);
gameboard.receiveAttack([0, 0]);
gameboard.receiveAttack([0, 1]);
gameboard.receiveAttack([0, 2]);
gameboard.receiveAttack([0, 3]);
gameboard.receiveAttack([0, 4]);

console.log(gameboard.board);
