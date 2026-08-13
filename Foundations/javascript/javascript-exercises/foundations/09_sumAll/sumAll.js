const sumAll = function(start, end) {

    if (!(Number.isInteger(start)) || !(Number.isInteger(end))) {
        return "ERROR";
    } else if (start < 0 || end < 0) {
        return "ERROR";
    }

    if (end < start) {
        let temp = end;
        end = start;
        start = temp;
    }

    let result = 0;

    for (let i = start; i <= end; i++) {
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
