describe("Midway: Testing Modules", function() {
  describe("App Module:", function() {
  	var expect = chai.expect;
    var module;
    before(function() {
      module = angular.module("pingApp");
    });

    it("should be registered", function() {
      expect(module).not.to.equal(null);
    });

    describe("Dependencies:", function() {

      var deps;
      var hasModule = function(m) {
        return deps.indexOf(m) >= 0;
      };
      before(function() {
        deps = module.value('pingApp').requires;
      });

      //you can also test the module's dependencies
      it("should have App.Controllers as a dependency", function() {
        expect(hasModule('pingpongControllers')).to.equal(true);
      });

      it("should have App.Services as a dependency", function() {
        expect(hasModule('pingpongServices')).to.equal(true);
      });
    });
  });
});