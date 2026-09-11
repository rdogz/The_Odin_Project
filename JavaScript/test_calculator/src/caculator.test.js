import { Calculator } from "./calculator.js";

const calc = new Calculator();

// add test
test("Add: 1 + 1 equals 2", () => {
  expect(calc.add(1, 1)).toBe(2);
});

// subtract test
test("Subtract: 1 - 1 equals 0", () => {
  expect(calc.subtract(1, 1)).toBe(0);
});

// divide test
test("Divide: 4 / 2 equals 2", () => {
  expect(calc.divide(4, 2)).toBe(2);
});

// multiply test
test("Multiply: 2 * 2 equals 4", () => {
  expect(calc.multiply(2, 2)).toBe(4);
});
