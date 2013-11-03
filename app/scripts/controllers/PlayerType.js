'use strict';

angular.module('playerCreatorApp').controller('PlayerTypeCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {

 	$scope.playerTypes = ['player', 'goalie', 'enforcer'];
 	$scope.selectedPlayerType = null;

 	$scope.teamName = 'newyorkrangers';
  $scope.jersey = 'home';
  $scope.playerNumber = '99';
  $scope.playerPosition = 'C';



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
