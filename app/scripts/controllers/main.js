'use strict';

angular.module('playerCreatorApp').controller('MainCtrl', 
	['$scope', 'defaultPlayerService', function ($scope, defaultPlayerService) {
	
	$scope.teamName = defaultPlayerService.player.team;
    $scope.jersey = defaultPlayerService.player.jersey;
    $scope.playerNumber = defaultPlayerService.player.number;
    $scope.playerPosition = defaultPlayerService.player.position;

}]);
