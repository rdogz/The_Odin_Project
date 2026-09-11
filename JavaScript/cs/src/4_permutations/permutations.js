const permutations = function (arr) {
  return curPerm(arr);
};

function curPerm(arr) {
  if (arr.length === 0) {
    return [[]];
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const remaining = arr.slice(0, i).concat(arr.slice(i + 1));

    const permutations = curPerm(remaining);

    for (const permutation of permutations) {
      result.push([current, ...permutation]);
    }
  }

  return result;
}
// Do not edit below this line
module.exports = permutations;
