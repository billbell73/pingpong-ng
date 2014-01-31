'use strict';

describe('pingApp controllers', function() {
 
  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });
 
 
  beforeEach(module('pingApp'));
  beforeEach(module('pingpongServices'));
 
  describe('ScorerCtrl', function(){
    var scope, ctrl, $httpBackend;
 
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/dummy_data.json').
          respond([{flipped: false}]);
 
      scope = $rootScope.$new();
      ctrl = $controller('ScorerCtrl', {$scope: scope});
    }));
 
 
    it('should create "phones" model with 2 phones fetched from xhr', function() {
      expect(scope.message).toEqual(undefined);
      $httpBackend.flush();
 
      expect(scope.message).toEqualData({ gameOdd : false });
    });
 
 
    // it('should set the default value of orderProp model', function() {
    //   expect(scope.orderProp).toBe('age');
    // });
  });
 
 
});
