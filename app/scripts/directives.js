var pingpongDirectives = angular.module('pingpongDirectives', []);

pingpongDirectives.directive('serveball', function() {

  return {
    restrict: "E",
    replace: true,
    scope: {
      pnumber: '@'
    },
    template: '<img id="p{{pnumber}}marker" class="p{{pnumber}}serveball"' + 
               'src="images/serveball.svg">'
  }
})
