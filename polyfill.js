'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	var original = Math.asinh;
	if (
		!original
		// IE 11 TP has an imprecise asinh: reports Math.asinh(-1e7) as not exactly equal to -Math.asinh(1e7)
		|| original(-1e7) !== original(1e7) // eslint-disable-line no-magic-numbers
		// Chrome < 54 asinh returns ∞ for large numbers and should not
		|| original(1e+300) === Infinity // eslint-disable-line no-magic-numbers
	) {
		return implementation;
	}
	return original;
};
