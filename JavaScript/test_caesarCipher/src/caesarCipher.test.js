import { caesarCipher } from "./caesarCipher.js";

test("shift 1 'abc' to be 'bcd'", () => {
  expect(caesarCipher("abc", 1)).toMatch("bcd");
});

test("shift 3 'xyz' to be 'abc'", () => {
  expect(caesarCipher("xyz", 3)).toMatch("abc");
});

test("shift 3 'HeLLo' to be 'KhOOr'", () => {
  expect(caesarCipher("HeLLo", 3)).toMatch("KhOOr");
});

test("shift 3 'Hello, World!' to be 'Khoor, Zruog!'", () => {
  expect(caesarCipher("Hello, World!", 3)).toMatch("Khoor, Zruog!");
});
