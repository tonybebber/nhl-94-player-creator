'use strict';

angular.module('playerCreatorApp').directive('starUnder', function () {
    return {
      	templateUrl: '/views/players/star.html',
  		restrict: 'E',
  		link: function postLink(scope, element, attrs) {
    	
  		}
    };
});
