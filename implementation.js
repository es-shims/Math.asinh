'use strict';

var log1p = require('math.log1p');

var sqrt = Math.sqrt;
var abs = Math.abs;
var LOG2E = Math.LOG2E;
var $Number = Number;

module.exports = function asinh(value) {
	var x = $Number(value);
	if (x === 0 || 1 / x === 0) {
		return x;
	}

	var a = abs(x);
	var aSquared = a * a;
	// eslint-disable-next-line no-magic-numbers
	var s = x > 0 ? 1 : -1;
	if (a < 1) {
		return s * log1p(a + (aSquared / (sqrt(aSquared + 1) + 1)));
	}
	return s * (log1p((a / 2) + (sqrt(1 + (1 / aSquared)) * a / 2) - 1) + (1 / LOG2E));
};
