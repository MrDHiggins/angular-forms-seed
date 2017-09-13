import { AngularFormsSeedPage } from './app.po';

describe('angular-forms-seed App', () => {
  let page: AngularFormsSeedPage;

  beforeEach(() => {
    page = new AngularFormsSeedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
