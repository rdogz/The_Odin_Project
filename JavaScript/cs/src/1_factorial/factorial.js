const factorial = function (n) {
  if (!Number.isInteger(n) || n < 0) {
    return undefined;
  }

  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// Do not edit below this line
module.exports = factorial;
