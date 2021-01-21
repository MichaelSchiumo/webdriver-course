describe('Test the webdriveruniversity homepage', function () {
  it('Outputs the height of the homepage carousel', function () {
    browser.url('/');
    browser.pause(2000);
    let divCarouselHeight = browser.getCssProperty(
      '#udemy-promo-code-thumbnail',
      'height'
    );
    console.log(divCarouselHeight);
  });
});
