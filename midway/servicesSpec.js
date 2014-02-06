describe("Midway: Testing Services", function() {

	var expect = chai.expect;
  var tester;
  beforeEach(function() {
    if(tester) {
      tester.destroy();
    }
    tester = ngMidwayTester('pingApp');
  });

  // it('should perform a JSONP operation to youtube and fetch data', 
  //   function(done) {

  //   var $yt = tester.inject('Data');
  //   expect($yt).not.to.equal(null);
  //   done();
  //   //this is the first video ever uploaded on youtube
  //   //so I doubt it will be removed anytime soon
  //   //and should be a good testing item
  //   var youtubeID = 'jNQXAC9IVRw';

  //   // $yt.findVideo(youtubeID, false,
  //   //   function(q, data) {
  //   //     expect(data).not.to.equal(null);
  //   //     expect(data.id).to.equal(youtubeID);
  //   //     done();
  //   //   }
  //   // );
  // });

});
