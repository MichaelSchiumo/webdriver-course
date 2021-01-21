beforeEach(function () {
  browser.url('/Ajax-Loader/index.html');
});

describe('Validate whether the click me button is visible', function () {
  it('Validate whether the click me button code is visible within the DOM', function (done) {
    this.timeout(20000);
    let clickMeButton = "//p[text()='CLICK ME!']";
    browser.waitForExist(clickMeButton, 8000, false);
  });

  it('Validate whether the click me button appears once the Ajax loader fully loads', function (done) {
    //increase over default timeout
    this.timeout(20000);

    let clickMeButton = "//p[text()='CLICK ME!']";

    //false means we want the button to be visible
    //8000 is the timeout for function
    //waits for the AJAX button to be visible to the user, even though it is present in the DOM
    browser.waitForVisible(clickMeButton, 8000, false);
  });
});
