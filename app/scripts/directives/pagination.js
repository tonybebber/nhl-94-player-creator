'use strict';

angular.module('playerCreatorApp').directive('pagination', [function () {
    return {
      	templateUrl: '/views/pagination.html',
      	restrict: 'E',
      	link: function postLink(scope, element, attrs) {
      		
      		scope.$watch(function() {
      			scope.next = attrs.next;
      			scope.back = attrs.back;
      		});
        	
      	}
    };
}]);
