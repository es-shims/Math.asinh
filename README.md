# Math.asinh <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
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

[package-url]: https://npmjs.org/package/math.asinh
[npm-version-svg]: https://versionbadg.es/es-shims/Math.asinh.svg
[deps-svg]: https://david-dm.org/es-shims/Math.asinh.svg
[deps-url]: https://david-dm.org/es-shims/Math.asinh
[dev-deps-svg]: https://david-dm.org/es-shims/Math.asinh/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Math.asinh#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/math.asinh.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/math.asinh.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/math.asinh.svg
[downloads-url]: https://npm-stat.com/charts.html?package=math.asinh
[codecov-image]: https://codecov.io/gh/es-shims/Math.asinh/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/Math.asinh/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/es-shims/Math.asinh
[actions-url]: https://github.com/es-shims/Math.asinh/actions
