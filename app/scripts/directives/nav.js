'use strict';

angular.module('playerCreatorApp').directive('nav', ['$route', '$location', function ($route, $location) {
    return {
      	templateUrl: '/views/nav.html',
      	restrict: 'E',
      	link: function postLink(scope, element, attrs) {

      		var checkIsHome = function() {
      			if ($location.$$path === '/') {
      				scope.isHome = true;
      			} else {
      				scope.isHome = false;
      			}
      		};

      		checkIsHome();

      		scope.$on('$locationChangeStart', function(event, next, current) { 
				checkIsHome();      			
			});

    	 }
    };
}]);
