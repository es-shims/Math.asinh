'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimMathAsinh() {
	var polyfill = getPolyfill();
	define(
		Math,
		{ asinh: polyfill },
		{ asinh: function () { return Math.asinh !== polyfill; } }
	);
	return polyfill;
};
