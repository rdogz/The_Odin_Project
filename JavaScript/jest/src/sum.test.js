import { sum } from "./sum.js";

test("add 1 and two to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
