import { Calculator } from "./calculator.js";

const calc = new Calculator();

// add test
test("Add: 1 + 1 equals 2", () => {
  expect(calc.add(1, 1)).toBe(2);
});

test("Add: 5 + 6 equals 11", () => {
  expect(calc.add(5, 6)).toBe(11);
});

// subtract test
test("Subtract: 1 - 1 equals 0", () => {
  expect(calc.subtract(1, 1)).toBe(0);
});

test("Subtract: 2 - 40 equals -38", () => {
  expect(calc.subtract(2, 40)).toBe(-38);
});

// divide test
test("Divide: 4 / 2 equals 2", () => {
  expect(calc.divide(4, 2)).toBe(2);
});

test("Divide: 25 / 5 equals 5", () => {
  expect(calc.divide(25, 5)).toBe(5);
});

// multiply test
test("Multiply: 2 * 2 equals 4", () => {
  expect(calc.multiply(2, 2)).toBe(4);
});

test("Multiply: 10 * 100 equals 1000", () => {
  expect(calc.multiply(10, 100)).toBe(1000);
});
