'use strict';

angular.module('playerCreatorApp').directive('playerTwo', function () {
    return {
      	templateUrl: '/views/players/player2.html',
      	restrict: 'E',
      	controller: 'PlayersPlayer2Ctrl',
      	link: function postLink(scope, element, attrs) {
        	
      	}
    };
});