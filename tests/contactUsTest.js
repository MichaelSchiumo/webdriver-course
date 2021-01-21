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
    setFirstName('Linds');
    setEmail('linds@gmail.com');
    clickSubmitButton();
    confirmUnsuccessfulSubmission();
  });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
    setLastName('Biden');
    setEmail('potus@gmail.com');
    clickSubmitButton();
  });
});
