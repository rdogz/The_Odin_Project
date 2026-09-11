import { caesarCipher } from "./caesarCipher.js";

test("shift 1 'abc' to be 'bcd'", () => {
  expect(caesarCipher("abc", 1)).toMatch("bcd");
});
