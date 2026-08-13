const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    } else if (num == 0) {
        return "";
    }

    let newString = string;

    for (let i = 0; i < num - 1; i++) {
        newString = newString + string;
    }

    return newString;
};

// Do not edit below this line
module.exports = repeatString;
