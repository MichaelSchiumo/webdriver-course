const { expect } = require('chai');

beforeEach(function () {
  browser.url('/Hidden-Elements/index.html');
});

describe('Test whether hidden elements exist', function () {
  it('Button display is set to non display but still exists in html dom therefore should return true', function (done) {
    // #not-displayed;
    let isEnabled = browser.isExisting('#not-displayed');
    console.log(isEnabled);
    expect(isEnabled).to.equal(true);
  });

  it('Button display is set to visibility hidden but still exists in html dom therefore should return true', function (done) {
    // #visibility-hidden;
    let isEnabled = browser.isExisting('#visibility-hidden');
    console.log(isEnabled);
    expect(isEnabled).to.equal(true);
  });

  it('Button display is set to zero opacity but still exists in html dom therefore should return true', function (done) {
    // #zero-opacity;
    let isEnabled = browser.isExisting('#zero-opacity');
    console.log(isEnabled);
    expect(isEnabled).to.equal(true);
  });

  it('Header text is visible and exists in the html dom therefore should return true', function (done) {
    // h1;
    let isEnabled = browser.isExisting('h1');
    console.log(isEnabled);
    expect(isEnabled).to.equal(true);
  });

  it('There is no such element with the id of #no-such-element within the html dom therefore should return false', function (done) {
    // #no-such-element;
    let isEnabled = browser.isExisting('#no-such-element');
    console.log(isEnabled);
    expect(isEnabled).to.equal(false);
  });
});
