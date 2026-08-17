const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const sum = (a) => a.reduce((sum, current) => {
    return sum + current;
}, 0);

const multiply = (a) => a.reduce((sum, current) => {
    return sum * current;
}, 1);
/*const multiply = function(a, b) {
    return a * b;
};*/

const power = function(base, exponent) {
    let total = 1;

    if (exponent == 0) {
        return 1;
    } else if (exponent > 0) {
        for (let i = 0; i < exponent; i++){
            total *= base;
        }	
        return total;
    } else {
        exponent *= -1;
        for (let i = 0; i < exponent; i++){
            total *= base;
        }	
        return 1/total;
    }	
};

const factorial = function(num) {
    let fact = 1;

    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
	
    return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
