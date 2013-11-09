'use strict';

angular.module('playerCreatorApp').directive('numberAndPosition', ['$timeout', function ($timeout) {
    return {
      	templateUrl: '/views/players/numberAndPosition.html',
  		restrict: 'E',
  		scope: true,
  		link: function postLink(scope, element, attrs) {
  			if (attrs.playerType === 'enforcer') {
  				scope.playerNumber = scope.enforcerNumber;
  				scope.playerPosition = scope.enforcerPosition;
  			} else if (attrs.playerType === 'goalie') {
  				scope.playerNumber = scope.goalieNumber;
  				scope.playerPosition = scope.goaliePosition;
  			}
  		}
    };
}]);