const fibonacci = function(target) {
    if (target < 0) {
        return "OOPS";
    }

    if (target == 0) {
        return 0;
    }

    let a = 1;
    let b = 1;
    let c = 1;

    for (let i = 2; i < target; i++) {
        c = a + b;
        b = a;
        a = c;
    }

    return c;
};

// Do not edit below this line
module.exports = fibonacci;
