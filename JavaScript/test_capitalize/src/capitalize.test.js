import { capitalize } from "./capitalize.js";

test("'cat' becomes 'Cat'", () => {
  expect(capitalize("cat")).toMatch("Cat");
});
