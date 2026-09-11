const contains = function (obj, match) {
  for (const key in obj) {
    if (Object.is(obj[key], match)) {
      return true;
    }

    if (typeof obj[key] === "object") {
      if (contains(obj[key], match)) {
        return true;
      }
    }
  }

  return false;
};

// Do not edit below this line
module.exports = contains;
