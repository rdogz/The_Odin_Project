function reverseString(str) {
  let newStr = "";

  for (let i = str.length; i >= 0; i--) {
    newStr += str.charAt(i);
  }

  return newStr;
}

export { reverseString };
