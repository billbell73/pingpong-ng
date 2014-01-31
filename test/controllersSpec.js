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
          respond([{"p1points": 5, 
                    "p2points": 3,
                    "p1games": 0,
                    p2games: 1,
                    "serving": 0
                  }]);
 
      scope = $rootScope.$new();
      ctrl = $controller('ScorerCtrl', {$scope: scope});
    }));
 
 
    it('should create "score" model with scores fetched from xhr', function() {
      expect(scope.score).toEqual(undefined);
      $httpBackend.flush();
 
      expect(scope.score).toEqualData({"p1points": 5, 
                                        "p2points": 3,
                                        "p1games": 0,
                                        "p2games": 1,
                                        "serving": 0
                                      });
    });
 
 
    it('should set p2games on ScorerCtrl scope to 1', function() {
      $httpBackend.flush();
      expect(scope.p2games).toBe(1);
    });
  });
 
 
});
