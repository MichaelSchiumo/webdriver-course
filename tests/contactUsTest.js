const request = require('sync-request');

beforeEach(function () {
  browser.url('/Contact-Us/contactus.html');
});

describe('Test Contact Us form WebdriverUni', function () {
  let res = request(
    'GET',
    'http://jsonplaceholder.typicode.com/posts/1/comments'
  );
  let contactUsDetails = JSON.parse(res.getBody().toString('utf8'));

  let firstNameSelector = "[name='first_name']";
  let lastNameSelector = "[name='last_name']";
  let emailSelector = "[name='email']";
  let commentSelector = 'textarea';
  let successfulSubmissionSelector = '#contact_reply h1';
  let unsuccessfulSubmissionSelector = 'body';
  let submitButtonSelector = "[type='submit']";

  function setFirstName(firstName) {
    return browser.setValue(firstNameSelector, firstName);
  }

  function setLastName(lastName) {
    return browser.setValue(lastNameSelector, lastName);
  }

  function setEmail(email) {
    return browser.setValue(emailSelector, email);
  }

  function setComment(comment) {
    return browser.setValue(commentSelector, comment);
  }

  function clickSubmitButton() {
    return browser.click(submitButtonSelector);
  }

  function confirmSuccessfulSubmission() {
    let validateSubmissionHeader = browser.waitUntil(function () {
      return (
        browser.getText(successfulSubmissionSelector) ===
        'Thank You for your Message!'
      );
    }, 3000);
    expect(validateSubmissionHeader, 'Successful Submission Message DNE!').to.be
      .true;
  }

  function confirmUnsuccessfulSubmission() {
    let validateSubmissionHeader = browser.waitUntil(function () {
      return (
        browser.getText(unsuccessfulSubmissionSelector) ===
        'Error: all fields are required'
      );
    }, 3000);
    //validate that the page title contains the following text
    expect(browser.getText(unsuccessfulSubmissionSelector)).to.include(
      'Error: all fields are required'
    );
  }

  contactUsDetails.forEach(function (contactUsDetail) {
    it('Should be able to submit a successful submission via contact us form', function (done) {
      setFirstName('joe');
      setLastName('smith');
      setEmail(contactDetail.email);
      setComment(contactDetail.body);
      clickSubmitButton();
      confirmSuccessfulSubmission();
    });
  });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
    setFirstName('mike');
    setLastName('woods');
    setEmail('mikewoods@gmail.com');
    clickSubmitButton();
    confirmUnsuccessfulSubmission();
  });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
    browser.setValue("[name='first_name']", 'Sarah');
    browser.setValue("[name='email']", 'sarah_woods@mail.com');
    browser.click("[type='submit']");

    var successfulContactConfirmation = browser.isExisting('#contact_reply h1');
    expect(
      successfulContactConfirmation,
      'Successful submission Message does not exist'
    ).to.be.false;
  });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
    browser.setValue("[name='first_name']", 'Jim');
    browser.setValue("[name='last_name']", 'Jomes');
    browser.click("[type='submit']");

    var errorText = browser.getText('body');
    expect(errorText).to.include('Error: all fields are required');

    var errorText = browser.isVisible('body');
    expect(errorText, 'Error message is not visible').to.be.true;
  });
});
