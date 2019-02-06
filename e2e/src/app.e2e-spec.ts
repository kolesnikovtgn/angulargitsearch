import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('project angulargitsearch', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('be supposed to redirect to search', async () => {
    page.navigateTo();
    const url = await browser.getCurrentUrl();
    expect(url).toContain('/search');
  });

  it('be supposed to not send request if not filled fields', () => {
    page.clickSearchButton();
    expect(page.isNoResponse()).toBeTruthy('no response - get page');
  });

  it('be supposed to fill fields for send request and get response', () => {
    page.clickType();
    page.sleep(500);
    page.clickOptionsType();
    page.sleep(500);
    page.clickLang();
    page.sleep(500);
    page.clickOptionsLang();
    page.sleep(500);
    page.inputRequest();
    page.sleep(500);
    page.clickSearchButton();
    page.sleep(500);
    expect(page.isNoResponse()).toBeFalsy('no response - get page');
  });
});
