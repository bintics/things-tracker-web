import { ThingsTrackerWebPage } from './app.po';

describe('things-tracker-web App', function() {
  let page: ThingsTrackerWebPage;

  beforeEach(() => {
    page = new ThingsTrackerWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
