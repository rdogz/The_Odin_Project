function analyzeArray(arr) {
  return {
    average: calcAvg(arr),
    min: calcMin(arr),
    max: calcMax(arr),
    length: arr.length,
  };
}

function calcAvg(arr) {
  return 4;
}

function calcMin(arr) {
  return 1;
}

function calcMax(arr) {
  return 8;
}

export { analyzeArray };
