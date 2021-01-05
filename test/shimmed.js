'use strict';

require('../auto');

require('../'); // to ensure no side effects

var test = require('tape');
var keys = require('reflect.ownkeys');
var defineProperties = require('define-properties');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(Math.asinh.length, 1, 'Math.asinh has a length of 1');

	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Math.asinh.name, 'asinh', 'Math.asinh has name "asinh"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Math, 'asinh'), 'Math.asinh is not enumerable');
		et.end();
	});

	t.match(keys(Math.asinh).sort().join('|'), /^(arguments\|caller\|)?length|name(\|prototype)?$/, 'has no unexpected own keys');

	runTests(Math.asinh, t);

	t.end();
});
