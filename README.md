# Popsicle No Cache

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

> Prevent caching of HTTP requests.

## Installation

```
npm install popsicle-no-cache --save
```

## Usage

```js
import { middleware, toFetch } from "popsicle";
import { Request } from "popsicle/dist/node";
import { noCache } from "popsicle-no-cache";

const fetch = toFetch([noCache(), middleware], Request);
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/popsicle-no-cache.svg?style=flat
[npm-url]: https://npmjs.org/package/popsicle-no-cache
[downloads-image]: https://img.shields.io/npm/dm/popsicle-no-cache.svg?style=flat
[downloads-url]: https://npmjs.org/package/popsicle-no-cache
[travis-image]: https://img.shields.io/travis/serviejs/popsicle-no-cache.svg?style=flat
[travis-url]: https://travis-ci.org/serviejs/popsicle-no-cache
[coveralls-image]: https://img.shields.io/coveralls/serviejs/popsicle-no-cache.svg?style=flat
[coveralls-url]: https://coveralls.io/r/serviejs/popsicle-no-cache?branch=master
