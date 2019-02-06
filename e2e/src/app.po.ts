import { browser, by, element, promise } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  clickSearchButton(): promise.Promise<void> {
    return element(by.css('.search__btn')).click();
  }

  isNoResponse() {
    return element(by.css('.errsearch')).isPresent();
  }

  clickLang() {
    return element(by.css('.search__lang')).click();
  }

  clickType() {
    return element(by.css('.search__rep')).click();
  }

  inputRequest() {
    return element(by.css('.search__input')).sendKeys('cms');
  }

  clickOptionsType() {
    return element.all(by.css('.search__rep option')).get(1).click();
  }

  clickOptionsLang() {
    return element.all(by.css('.search__lang option')).get(1).click();
  }

  sleep(time) {
    return browser.sleep(time);
  }
}
