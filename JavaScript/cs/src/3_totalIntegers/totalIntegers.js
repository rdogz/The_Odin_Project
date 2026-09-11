const totalIntegers = function (thing) {
  if (typeof thing === "object" || typeof thing === "array") {
    return recTotalIntegers(thing);
  }

  return undefined;
};

function recTotalIntegers(thing) {
  let sum = 0;
  if (typeof thing === "object") {
    for (const key in thing) {
      sum += recTotalIntegers(thing[key]);
    }
    //
  } else if (typeof thing === "array") {
    for (let i = 0; i < array.length; i++) {
      sum += recTotalIntegers(thing[i]);
    }
    //
  } else if (Number.isInteger(thing)) {
    return 1;
    //
  }

  return sum;
}

// Do not edit below this line
module.exports = totalIntegers;
