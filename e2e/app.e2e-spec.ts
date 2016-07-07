import { Angular2SignupFormPage } from './app.po';

describe('angular2-signup-form App', function() {
  let page: Angular2SignupFormPage;

  beforeEach(() => {
    page = new Angular2SignupFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
