beforeEach(function () {
  browser.url('/Accordion/index.html');
});

describe('Validates that the loading functionality works properly', function () {
  it('Verifies relevant text LOADING COMPLETE appears after a period of time', function () {
    this.timeout(20000);
    browser.waitUntil(
      function () {
        return browser.getText('#hidden-text') === 'LOADING COMPLETE.';
      },
      12000,
      'expected text to be different'
    );
    browser.pause(5000);
  });
});
