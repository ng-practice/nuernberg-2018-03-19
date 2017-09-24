import { browser, by, element } from 'protractor';

export class NgTrainingPage {
  navigateTo() {
    return browser.get('/');
  }

  getTopNavText() {
    return element(by.css('tr-book-top-navigation span.title')).getText();
  }
}
