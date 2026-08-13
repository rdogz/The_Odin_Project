const convertToCelsius = function(fahTemp) {
    let conversion = (fahTemp - 32) / 1.8; 
    if (Number.isInteger(conversion)) {
        return conversion;
    }

    return Math.round(conversion * 10) / 10;
};

const convertToFahrenheit = function(celTemp) {
    let conversion = celTemp * 1.8 + 32; 
    if (Number.isInteger(conversion)) {
        return conversion;
    }

    return Math.round(conversion * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
