'use strict';

angular.module('playerCreatorApp').directive('playerThree', function () {
    return {
        templateUrl: '/views/players/player3.html',
        restrict: 'E',
        controller: 'PlayersPlayer3Ctrl',
        link: function postLink(scope, element, attrs) {
          
        }
    };
});