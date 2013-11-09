'use strict';

angular.module('playerCreatorApp').controller('PlayerTypeCtrl', 
  ['$scope', '$routeParams', 'defaultPlayerService', function ($scope, $routeParams, defaultPlayerService) {

 	$scope.playerTypes = ['player', 'goalie', 'enforcer'];
 	$scope.selectedPlayerType = null;

  // team/jersey defaults
 	$scope.teamName = defaultPlayerService.player.team;
  $scope.jersey = defaultPlayerService.player.jersey;
  
  // player defaults
  $scope.playerNumber = defaultPlayerService.player.number;
  $scope.playerPosition = defaultPlayerService.player.position;

  // goalie defaults
  $scope.goalieNumber = defaultPlayerService.goalie.number;
  $scope.goaliePosition = defaultPlayerService.goalie.position;

  // enforcer defaults
  $scope.enforcerNumber = defaultPlayerService.enforcer.number;
  $scope.enforcerPosition = defaultPlayerService.enforcer.position;

  $scope.infoVisible = {};

  $scope.showInfo = function(num) {
  	$scope.infoVisible[num] = true;
  };

	$scope.hideInfo = function(num) {
		$scope.infoVisible[num] = false;
	};

	$scope.setPlayerType = function(type) {
    $scope.player = type;
    $routeParams.playerType = type;
	};

}]);
