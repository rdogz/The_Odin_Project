import { mergeSort } from "./mergeSort.js";

test("sort [3, 2, 1, 13, 8, 5, 0, 1] should equal [0, 1, 1, 2, 3, 5, 8, 13]", () => {
  expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([
    0, 1, 1, 2, 3, 5, 8, 13,
  ]);
});

test.skip("sort [5, 4, 3, 2, 1] should equal [1, 2, 3, 4, 5]", () => {
  expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
});

test.skip("sort [1, 2, 3, 4, 5] should equal [1, 2, 3, 4, 5]", () => {
  expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test.skip("sort [3, 1, 2, 1, 3] should equal [1, 1, 2, 3, 3]", () => {
  expect(mergeSort([3, 1, 2, 1, 3])).toEqual([1, 1, 2, 3, 3]);
});

test.skip("sort [10] should equal [10]", () => {
  expect(mergeSort([10])).toEqual([10]);
});

test.skip("sort [] should equal []", () => {
  expect(mergeSort([])).toEqual([]);
});

test.skip("sort [7, 2, 9, 4, 1, 6] should equal [1, 2, 4, 6, 7, 9]", () => {
  expect(mergeSort([7, 2, 9, 4, 1, 6])).toEqual([1, 2, 4, 6, 7, 9]);
});
