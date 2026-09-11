function analyzeArray(arr) {
  return {
    average: calcAvg(arr),
    min: calcMin(arr),
    max: calcMax(arr),
    length: arr.length,
  };
}

function calcAvg(arr) {
  const d = arr.length;
  const sum = arr.reduce((a, b) => {
    return a + b;
  });

  return sum / d;
}

function calcMin(arr) {
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  return min;
}

function calcMax(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  return max;
}

export { analyzeArray };
