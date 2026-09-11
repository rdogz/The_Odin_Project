import { fibs, fibsRec } from "./fibs.js";

test("fibs: 8 | expected: [0, 1, 1, 2, 3, 5, 8, 13]", () => {
  expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});
test("fibs: 2 | expected: [0, 1]", () => {
  expect(fibs(2)).toEqual([0, 1]);
});
test("fibs: 0 | expected: []", () => {
  expect(fibs(0)).toEqual([]);
});

test("fibsRec: 8 | expected: [0, 1, 1, 2, 3, 5, 8, 13]", () => {
  expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});
test("fibsRec: 0 | expected: []", () => {
  expect(fibsRec(0)).toEqual([]);
});
test("fibsRec: 2 | expected: [0, 1]", () => {
  expect(fibsRec(2)).toEqual([0, 1]);
});
