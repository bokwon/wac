// Number.prototype.toFixed()
// toFixed() method formats a number using fixed-point notation
// Syntax: numbObj.toFixed([digits])
// Return value: A string representing the given number using fixed-point notation.
// RangeError - if digits is too small or too large (support 0 and 20, inclusive)
// TypeError - if this method is invoked on an object that is not a Number.

// if numbObj is greater than 1e+21, this method simply calls Number.prototype.toString() and returns a string in exponential notation.

// You can't reliable round decimal point with JS built-in function.

// AccountingJS implementation
// .615 * 100 => 61.5 => Math.round(61.5) => 62 => 62/100 => 0.62
var toFixed = lib.toFixed = function(value, precision) {
		precision = checkPrecision(precision, lib.settings.number.precision);
		var power = Math.pow(10, precision);

		// Multiply up by precision, round accurately, then divide and use native toFixed():
		return (Math.round(lib.unformat(value) * power) / power).toFixed(precision);
};

// Watch and Code implementation
var toFixed = lib.toFixed = function(value, precision) {
		precision = checkPrecision(precision, lib.settings.number.precision);

		var exponentialForm = Number(lib.unformat(value) + 'e' + precision);
		var rounded = Math.round(exponentialForm);
		var finalResult = Number(rounded + 'e-' + precision).toFixed(precision);
		return finalResult;
};

// example.

10.265.toFixed() // "10"
10.265.toFixed(2) // "10.27"
10.235.toFixed(2) // "10.24" should be
0.615.toFixed(2) // "0.62" should be
1.005.toFixed(2) // "1.01" should be
1.005 * 100 = 100.49999999999999999

//1.005 * 100 ==> 100.5 ==> 101 ==> 1.01
//'1.005' ==> '100.5' move two decimal points
//'100.5'
// scientific notation
// 100.5 => 1.005e2 // 1.005 * 10^2 // A better way of writing 1.005 * 100
// 1.01 => 101e-2

// how computer represent number, how computer stores numbers
bartaz.github.io/ieee754-visualization/
// Numbers are sum of powers of 2.
whole number, fraction, decimal

//1 over 2 to the two.
//Read Math.round()
	
