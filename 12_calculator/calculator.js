const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a, b) {
	return a + b
};

const multiply = function(...numbers) {
  return numbers * numbers
};

const power = function(num, power) {
	return num**power
};

const factorial = function(num) {
    for (let i = num - 1; i > 1; i--) {
      num *= i
    }
    return num
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
