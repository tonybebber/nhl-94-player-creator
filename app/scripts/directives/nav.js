'use strict';

angular.module('playerCreatorApp').directive('nav', function () {
    return {
      	templateUrl: '/views/nav.html',
      	restrict: 'E',
      	link: function postLink(scope, element, attrs) {

      		// initialize bootstrap tooltip functionality on nav
        	$('.btn-steps .chiclet, .btn-github .chiclet').tooltip({
    				placement: 'right'
    			});

    	}
    };
});
