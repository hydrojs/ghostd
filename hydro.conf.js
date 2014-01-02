/**
 * External dependencies.
 */

var wd = require('wd');

/**
 * Ghost Driver port.
 */

var PORT = 9003;

/**
 * Web driver.
 */

var webd = wd.remote({ port: PORT });

/**
 * Test config.
 *
 * @param {Object} hydro
 * @api public
 */

module.exports = function(hydro) {
  hydro.set({
    attach: global,
    timeout: 10000,
    proxies: {
      test: 'addTest'
    },
    suite: 'hydro-ghostd',
    formatter: 'hydro-simple',
    plugins: [
      require('./')
    ],
    ghostd: {
      port: PORT,
    },
    globals: {
      browser: webd,
      assert: require('assert')
    },
    tests: [
      'test/*.js'
    ]
  });
};
