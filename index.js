/**
 * External dependencies.
 */

var seltron = require('seltron');

/**
 * Start PhnatomJS Ghost Driver before all
 * and shut it down after all.
 *
 * Options:
 *
 * - port: Ghost Driver port
 *
 * @param {Hydro} hydro
 * @api public
 */

module.exports = function(hydro) {
  var opts = hydro.get('ghostd') || {};
  var driver = null;
  opts.port = opts.port || 9003;

  hydro.on('pre:all', function(suite, done) {
    seltron('phantomjs', opts.port, function(err, proc) {
      if (err) throw err;
      driver = proc;
      done();
    });
  });

  hydro.on('post:all', function() {
    driver.kill();
  });
};
