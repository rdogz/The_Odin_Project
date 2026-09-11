function caesarCipher(str, shift) {
  let crypt = "";
  shift = ((shift % 26) + 26) % 26;

  let code = getUTF(str);
  code = addNum(code, shift);
  crypt = codeToString(code);

  return crypt;
}

function getUTF(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr[i] = str.charCodeAt(i);
  }

  return arr;
}

function addNum(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0x41 && arr[i] <= 0x5a) {
      if (arr[i] + num > 0x5a) {
        arr[i] -= 26;
      }
      arr[i] += num;
    } else if (arr[i] >= 0x61 && arr[i] <= 0x7a) {
      if (arr[i] + num > 0x7a) {
        arr[i] -= 26;
      }
      arr[i] += num;
    }
  }

  return arr;
}

function codeToString(arr) {
  let returnString = "";
  for (let i = 0; i < arr.length; i++) {
    returnString += String.fromCharCode(arr[i]);
  }

  return returnString;
}

export { caesarCipher };
