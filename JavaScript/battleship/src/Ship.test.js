import { Ship, Gameboard } from "./Ship.js";

const ship = new Ship(4);

// SHIP
test("ship length should equal 4", () => {
  expect(ship.length).toBe(4);
});

test("ship hit should equal 0 if not hit", () => {
  expect(ship.hits).toBe(0);
});

test("ship hit should equal 1 after one hit", () => {
  ship.hit();
  expect(ship.hits).toBe(1);
});

test("ship should not be sunk", () => {
  expect(ship.isSunk()).toBe(false);
});

test("ship should be sunk", () => {
  for (let i = 0; i < ship.length; i++) {
    ship.hit();
  }
  expect(ship.isSunk()).toBe(true);
});

// GAMEBOARD
let gameboard;
beforeEach(() => {
  gameboard = new Gameboard();
});

test("ship was placed", () => {
  expect(gameboard.placeShip(gameboard.destroyer, [0, 0], true)).toBe(true);
});

test("used coordinate was not placed", () => {
  gameboard.placeShip(gameboard.carrier, [0, 0], true);
  expect(gameboard.placeShip(gameboard.destroyer, [0, 0], true)).toBe(false);
});

test("carrier was hit", () => {
  gameboard.placeShip(gameboard.carrier, [0, 0], true);
  gameboard.receiveAttack([0, 0]);
  expect(gameboard.carrier.hits).toBe(1);
});

test("battleship was hit", () => {
  gameboard.placeShip(gameboard.battleship, [0, 0], true);
  gameboard.receiveAttack([0, 0]);
  expect(gameboard.battleship.hits).toBe(1);
});

test("destroyer was hit", () => {
  gameboard.placeShip(gameboard.destroyer, [0, 0], true);
  gameboard.receiveAttack([0, 0]);
  expect(gameboard.destroyer.hits).toBe(1);
});

test("destroyer was hit", () => {
  gameboard.placeShip(gameboard.submarine, [0, 0], true);
  gameboard.receiveAttack([0, 0]);
  expect(gameboard.submarine.hits).toBe(1);
});
test("destroyer was hit", () => {
  gameboard.placeShip(gameboard.patrolBoat, [0, 0], true);
  gameboard.receiveAttack([0, 0]);
  expect(gameboard.patrolBoat.hits).toBe(1);
});
test("destroyer was hit twice", () => {
  gameboard.placeShip(gameboard.patrolBoat, [0, 0], true);
  gameboard.receiveAttack([0, 0]);
  gameboard.receiveAttack([1, 0]);
  expect(gameboard.patrolBoat.hits).toBe(1);
});

test("carrier was sunk", () => {
  gameboard.placeShip(gameboard.carrier, [0, 0], true);
  gameboard.receiveAttack([0, 0]);
  gameboard.receiveAttack([0, 1]);
  gameboard.receiveAttack([0, 2]);
  gameboard.receiveAttack([0, 3]);
  gameboard.receiveAttack([0, 4]);

  expect(gameboard.carrier.isSunk()).toBe(true);
});
