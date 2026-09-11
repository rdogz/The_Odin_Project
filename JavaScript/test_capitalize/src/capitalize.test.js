import { capitalize } from "./capitalize.js";

test("'cat' becomes 'Cat'", () => {
  expect(capitalize("cat")).toMatch("Cat");
});

test("'hello friend' becomes 'Hello friend'", () => {
  expect(capitalize("hello friend")).toMatch("Hello friend");
});
