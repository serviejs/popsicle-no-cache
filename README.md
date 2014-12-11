# Popsicle No Cache

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

Prevent caching of HTTP requests.

## Installation

```bash
npm install popsicle-no-cache --save
```

## Usage

```javascript
var request = require('popsicle');
var nocache = require('popsicle-no-cache');

request('/users.json')
  .use(nocache());
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/popsicle-no-cache.svg?style=flat
[npm-url]: https://npmjs.org/package/popsicle-no-cache
[travis-image]: https://img.shields.io/travis/blakeembrey/popsicle-no-cache.svg?style=flat
[travis-url]: https://travis-ci.org/blakeembrey/popsicle-no-cache
[coveralls-image]: https://img.shields.io/coveralls/blakeembrey/popsicle-no-cache.svg?style=flat
[coveralls-url]: https://coveralls.io/r/blakeembrey/popsicle-no-cache?branch=master
