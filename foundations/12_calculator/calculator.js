const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum, current) => sum + current, 0);
};

const multiply = function(array) {
    return array.reduce((product, current) => product * current);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
	let factorial = 1;

    for (let i = n; i > 1; i--) {
        factorial *= i;
    }

    return factorial;
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
