beforeEach(function () {
  browser.url('/Accordion/index.html');
});

describe('Validates text is present', function () {
  it('Verifies text exists within the loading div container', function () {
    this.timeout(20000);
    let text = browser.waitForValue('#hidden-text', 2000);
    console.log(text);
    browser.pause(5000);
  });
});
