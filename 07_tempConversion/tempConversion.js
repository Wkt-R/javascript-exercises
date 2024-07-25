const convertToCelsius = function(degree) {
  let conv = (degree - 32) / 1.8;
  return Math.round(conv * 10) / 10;
};

const convertToFahrenheit = function(degree) {
  let conv = (degree * 1.8) + 32;
  return Math.round(conv * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
