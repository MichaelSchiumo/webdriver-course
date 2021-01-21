beforeEach(function () {
  browser.url('/Accordion/index.html');
});
describe('Verify that the correct text appears on the accordion page', function () {
  it('Verify loading complete text is visible after a set duration of time', function () {
    //increase the default timeout for this test
    this.timeout = 20000;

    //create an element selector
    elem = $('#hidden-text');
    console.log('Current Text' + ':' + elem.getText());
    //confirm that this element contains any text
    elem.waitForText(1000);

    //wait for text to change and appear
    while (elem.getText() !== 'LOADING COMPLETE.') {
      browser.pause(1000);
    }

    //log the text that has appeared
    console.log(elem.getText());
  });
});
