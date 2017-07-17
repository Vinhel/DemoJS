import { Demo00Page } from './app.po';

describe('demo00 App', () => {
  let page: Demo00Page;

  beforeEach(() => {
    page = new Demo00Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
