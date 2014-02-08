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

  it('can increment a player1\'s point score', function() {
    var p1Points = element(by.binding('score.p1points'));

    p1Points.getText().then(function(scoreBefore){
      p1Points.click();
      p1Points.getText().then(function(scoreAfter){
        expect(Number(scoreBefore) + 1).toEqual(Number(scoreAfter));
      })
    });	
  });

  it('can increment a player2\'s point score', function() {
    var p2Points = element(by.binding('score.p2points'));
    incrementTest(p2Points);
  });

  function incrementTest(pointsElement) {
    pointsElement.getText().then(function(scoreBefore){
      pointsElement.click();
      pointsElement.getText().then(function(scoreAfter){
        expect(Number(scoreBefore) + 1).toEqual(Number(scoreAfter));
      })
    }); 
  }

  it('can decrement a player\'s score', function() {
    var p2Points = element(by.binding('score.p2points'));
    var p2Back = element(by.className('p2-back'));

    p2Points.getText().then(function(scoreBefore){
      p2Back.click();
      p2Points.getText().then(function(scoreAfter){
        expect(Number(scoreBefore) - 1).toEqual(Number(scoreAfter));
      })
    }); 
  });

});


