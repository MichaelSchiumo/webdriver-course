describe('Test that the button is clickable once the AJAX loader completes loading', function () {
  it.skip('Attempts to click the button ASAP', function (done) {
    browser.url('/Ajax-Loader/index.html');
    browser.click('#button1');
  });

  it('Attempts to click on the button after 7 seconds', function (done) {
    browser.url('/Ajax-Loader/index.html');
    this.timeout(20000);
    browser.pause(7000);
    browser.click('#button1');
    browser.pause(7000);
  });
});
