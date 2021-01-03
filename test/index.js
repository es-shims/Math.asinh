'use strict';

var asinh = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	runTests(asinh, t);

	t.end();
});
