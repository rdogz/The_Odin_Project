const reverseString = function(inputString) {
    newString = "";

    let inputStringLength = inputString.length;
    for (let i = 0; i <= inputStringLength; i++) {
        newString = newString + inputString.charAt(inputStringLength - i);
    }

    console.log(newString);
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
