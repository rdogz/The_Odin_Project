import { reverseString } from "./reverseString.js";

test("'abc' becomes 'cba'", () => {
  expect(reverseString("abc")).toMatch("cba");
});

test("'cat' becomes 'tac'", () => {
  expect(reverseString("cat")).toMatch("tac");
});

test("'Hello, friend' becomes 'dneirf ,olleH'", () => {
  expect(reverseString("Hello, friend")).toMatch("dneirf ,olleH");
});
