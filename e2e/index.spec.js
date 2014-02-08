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

  function incrementTest(pointsElement) {
    pointsElement.getText().then(function(scoreBefore){
      pointsElement.click();
      pointsElement.getText().then(function(scoreAfter){
        expect(Number(scoreBefore) + 1).toEqual(Number(scoreAfter));
      })
    }); 
  }

  it('can increment player1\'s point score', function() {
    var p1Points = element(by.binding('score.p1points'));
    incrementTest(p1Points);
  });

  it('can increment player2\'s point score', function() {
    var p2Points = element(by.binding('score.p2points'));
    incrementTest(p2Points);
  });
 
  function decrementTest(pointsElement, backElement) {
    pointsElement.getText().then(function(scoreBefore){
      backElement.click();
      pointsElement.getText().then(function(scoreAfter){
        expect(Number(scoreBefore) - 1).toEqual(Number(scoreAfter));
      })
    }); 
  }

  it('can decrement player1\'s score', function() {
    var p1Points = element(by.binding('score.p1points'));
    var p1Back = element(by.className('p1-back'));

    decrementTest(p1Points, p1Back);
  });

  it('can decrement player2\'s score', function() {
    var p2Points = element(by.binding('score.p2points'));
    var p2Back = element(by.className('p2-back'));

    decrementTest(p2Points, p2Back);
  });

});


