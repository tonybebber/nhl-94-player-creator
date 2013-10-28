'use strict';

angular.module('playerCreatorApp').directive('playerOne', function () {
    return {
      	templateUrl: '/views/players/player1.html',
      	restrict: 'E',
      	controller: 'PlayersPlayer1Ctrl',
      	link: function postLink(scope, element, attrs) {
        	
      	}
    };
});
