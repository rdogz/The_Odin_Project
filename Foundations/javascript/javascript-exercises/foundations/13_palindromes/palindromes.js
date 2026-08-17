const palindromes = function (str) {
    const inputStr = str.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "");

    return inputStr === inputStr.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
