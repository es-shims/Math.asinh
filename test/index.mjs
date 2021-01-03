import asinh, * as asinhModule from 'math.asinh';
import test from 'tape';
import runTests from './tests.js';

test('as a function', (t) => {
	runTests(asinh, t);

	t.end();
});

test('named exports', async (t) => {
	t.deepEqual(
		Object.keys(asinhModule).sort(),
		['default', 'shim', 'getPolyfill', 'implementation'].sort(),
		'has expected named exports',
	);

	const { shim, getPolyfill, implementation } = asinhModule;
	t.equal(await import('math.asinh/shim'), shim, 'shim named export matches deep export');
	t.equal(await import('math.asinh/implementation'), implementation, 'implementation named export matches deep export');
	t.equal(await import('math.asinh/polyfill'), getPolyfill, 'getPolyfill named export matches deep export');

	t.end();
});
