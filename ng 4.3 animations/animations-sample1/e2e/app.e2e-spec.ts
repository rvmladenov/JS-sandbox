import { AnimationsSample1Page } from './app.po';

describe('animations-sample1 App', () => {
  let page: AnimationsSample1Page;

  beforeEach(() => {
    page = new AnimationsSample1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
