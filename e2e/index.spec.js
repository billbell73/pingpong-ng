describe('E2E: Testing Scorer view', function() {

	beforeEach(function() {
    browser.get('/app/index.html#/4');
  });
  
  it('should have title', function() {
    expect(browser.getTitle()).toBe('Ping Scorer');
  });

  it('should have back button', function() {
    var back = $('.p1-back');
    expect(back.getText()).toEqual('Back');
  });

  it('should have game score', function() {
    var gameScore = element(by.binding('score.p2games'));
    expect(gameScore.getText()).toEqual('0');
  });

  it('should increment point score', function() {
    var p1Points = element(by.binding('score.p1points'));
    expect(p1Points.getText()).toEqual('4')
    
    p1Points.click()
 		var afterClick = p1Points.getText();
 		expect(afterClick).toEqual('5')
    // expect(b4Click + 1).toEqual(afterClick);
  });

});


