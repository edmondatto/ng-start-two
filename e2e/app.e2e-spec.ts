import { NgStartTwoPage } from './app.po';

describe('ng-start-two App', () => {
  let page: NgStartTwoPage;

  beforeEach(() => {
    page = new NgStartTwoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
