describe('my test spec', function() {
  var expect = chai.expect;
  var tester;
  beforeEach(function() {
    tester = ngMidwayTester('pingApp');
  });

  afterEach(function() {
    tester.destroy();
    tester = null;
  });

  // it('should have a working home page', function(done) {
  //   // tester.visit('/index.html#/4', function() {
  //   //   // expect(tester.path()).to.equal('/');
  //   //   // expect(tester.viewElement().html()).to.contain('Back');

  //   //   // var scope = tester.viewScope();
  //   //   // expect(scope.p1points).to.equal('');
  //   //   // done();
  //   // });
  // });
});