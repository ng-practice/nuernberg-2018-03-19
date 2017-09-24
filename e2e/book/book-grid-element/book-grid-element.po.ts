import { browser, by, element } from 'protractor';

export class BookGridElementComponentPage {

  constructor() {
  browser.manage().logs()
  .get('browser').then(function(browserLog) {
  console.log('log: ' +
    require('util').inspect(browserLog));
});
  }
  navigateTo() {
    return browser.get('/');
  }

  getRatingOfFirstBookgridElement() {
    return element(by.tagName('tr-book-card')).$('.rating').getText();
  }

  getIncreaseButton() {
    return element(by.tagName('tr-book-card')).element(by.cssContainingText('button', '+'));
  }

}
