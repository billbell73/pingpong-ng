describe("E2E: Testing Routes", function() {


  it('URL should contain match id', function() {
    browser.get('/app/index.html#/4');
    expect(browser.getCurrentUrl()).toMatch(/\/4/);
  });

  it('should redirect to root given unexpected URL', function() {
    browser.get('/app/index.html#/hello/there');
    expect(browser.getCurrentUrl()).toBe('http://localhost:8000/app/index.html#/');
  });

});