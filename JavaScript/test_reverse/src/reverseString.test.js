import { reverseString } from "./reverseString.js";

test("'abc' becomes 'cba'", () => {
  expect(reverseString("abc")).toMatch("cba");
});
