# Math.asinh <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ESnext spec-compliant `Math.asinh` shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-map-objects).

## Getting started

```sh
npm install --save math.asinh
```

## Usage/Examples

```js
console.log(Math.asinh(-1)); // -0.881373587019543
console.log(Math.asinh(0)); // 0
console.log(Math.asinh(2)); // 1.4436354751788103
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/es-shims/math.asinh
[npm-version-svg]: https://versionbadg.es/es-shims/math.asinh.svg
[deps-svg]: https://david-dm.org/es-shims/math.asinh.svg
[deps-url]: https://david-dm.org/es-shims/math.asinh
[dev-deps-svg]: https://david-dm.org/es-shims/math.asinh/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/math.asinh#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/es-shims/math.asinh.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/es-shims/math.asinh.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/es-shims/math.asinh.svg
[downloads-url]: https://npm-stat.com/charts.html?package=es-shims/math.asinh
