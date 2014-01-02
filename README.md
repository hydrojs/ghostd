[![NPM
version](https://badge.fury.io/js/hydro-ghostd.png)](http://badge.fury.io/js/hydro-ghostd)
[![Build Status](https://secure.travis-ci.org/hydrojs/hydro-ghostd.png)](http://travis-ci.org/hydrojs/hydro-ghostd)
[![Coverage Status](https://coveralls.io/repos/hydrojs/hydro-ghostd/badge.png?branch=master)](https://coveralls.io/r/hydrojs/hydro-ghostd?branch=master)

# hydro-ghostd

## Synopsis

PhantomJS Ghost Driver launcher for hydro.

## Usage

Config:

```js
hydro.set({
  plugins: ['hydro-ghostd'],
  ghostd: {
    port: 9003 // Web Driver port, default: 9003, optional
  }
});
```

## Installation

#### npm:

```bash
npm install hydro-ghostd
```

## Tests

```bash
$ npm test
```

## License

The MIT License (see LICENSE)
