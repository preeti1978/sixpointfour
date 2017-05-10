import { SixpointfourPage } from './app.po';

describe('sixpointfour App', function() {
  let page: SixpointfourPage;

  beforeEach(() => {
    page = new SixpointfourPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
