'use strict';

var almostEqual = function (actual, expected) {
	var precision = 1e-11;
	return actual - expected < precision && expected - actual < precision;
};

module.exports = function (asinh, t) {
	t.test('should be correct for NaN', function (st) {
		st.equal(Math.asinh(NaN), NaN, 'asinh(NaN)');
		st.end();
	});

	t.test('should be correct for zeroes', function (st) {
		st.equal(Math.asinh(+0), +0, 'asinh(+0)');
		st.equal(Math.asinh(-0), -0, 'asinh(-0)');
		st.end();
	});

	t.test('should be correct for Infinities', function (st) {
		st.equal(Math.asinh(Infinity), Infinity, 'asinh(Infinity)');
		st.equal(Math.asinh(-Infinity), -Infinity, 'asinh(-Infinity)');
		st.end();
	});

	t.test('should be correct', function (st) {
		st.ok(almostEqual(Math.asinh(1234), 7.811163549201245), 'asinh(1234)');
		st.ok(almostEqual(Math.asinh(9.99), 2.997227420191335), 'asinh(9.99)');
		st.ok(almostEqual(Math.asinh(1e150), 346.0809111296668), 'asinh(1e150)');
		st.ok(almostEqual(Math.asinh(1e7), 16.811242831518268), 'asinh(1e7)');
		st.ok(almostEqual(Math.asinh(-1e7), -16.811242831518268), 'asinh(-1e7)');
		st.end();
	});

	t.test('is correct for extreme non-infinities', function (st) {
		st.notEqual(Math.asinh(1e+300), Infinity);
		st.ok(almostEqual(Math.asinh(1e+300), 691.4686750787736), 'asinh(1e+300)');
		st.end();
	});
};
