test('Ghost Driver is running', function(done) {
  browser.init({ browserName: 'phantomjs' }, function() {
    browser.get('http://example.com', function() {
      browser.title(function(err, title) {
        assert(title);
        done();
      });
    });
  });
});
