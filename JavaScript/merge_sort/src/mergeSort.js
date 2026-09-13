function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  return sort(arr);
}

function sort(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    return merge(sort(getLeftHalf(arr)), sort(getRightHalf(arr)));
  }
}

function merge(leftArr, rightArr) {
  let newArr = [];
  let index = 0;
  let i = 0;
  let j = 0;

  while (i < leftArr.length || j < rightArr.length) {
    if (j === rightArr.length) {
      newArr[index++] = leftArr[i++];
    } else if (i === leftArr.length) {
      newArr[index++] = rightArr[j++];
    } else if (leftArr[i] <= rightArr[j]) {
      newArr[index++] = leftArr[i++];
    } else {
      newArr[index++] = rightArr[j++];
    }
  }
  return newArr;
}

function getLeftHalf(arr) {
  return arr.slice(0, Math.floor(arr.length / 2));
}

function getRightHalf(arr) {
  return arr.slice(Math.floor(arr.length / 2), arr.length);
}

export { mergeSort };
