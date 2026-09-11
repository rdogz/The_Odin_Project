function fibs(n) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    if (i < 2) {
      arr.push(i);
    } else {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  }

  return arr;
}

function fibsRec(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(doFibsRec(i));
  }

  return arr;
}
function doFibsRec(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  return doFibsRec(n - 1) + doFibsRec(n - 2);
}

export { fibs, fibsRec };
