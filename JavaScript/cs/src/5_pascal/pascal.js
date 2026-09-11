const pascal = function (row) {
  let triangle = [];

  for (let col = 0; col < row; col++) {
    triangle.push(doPascal(col, row - 1));
  }

  return triangle;
};

function doPascal(col, row) {
  // base case
  if (col === 0 || col === row) {
    return 1;
  }

  return doPascal(col - 1, row - 1) + doPascal(col, row - 1);
}

// Do not edit below this line
module.exports = pascal;
