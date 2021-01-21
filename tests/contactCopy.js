browser.addCommand(
  'submitDataViaContactUsForm',
  function (firstName, lastName, email, comments) {
    if (firstName) {
      browser.setValue("[name='first_name']", firstName);
    }

    if (lastName) {
      browser.setValue("[name='last_name']", lastName);
    }

    if (email) {
      browser.setValue("[name='email']", email);
    }

    if (comments) {
      browser.setValue("[name='message']", comments);
    }

    browser.click("[type='submit']");
  }
);
