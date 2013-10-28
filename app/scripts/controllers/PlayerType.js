'use strict';

angular.module('playerCreatorApp').controller('PlayerTypeCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {

   	$scope.playerTypes = ['player', 'goalie', 'enforcer'];
   	$scope.selectedPlayerType = null;

   	$scope.teamName = 'newyorkrangers';
    $scope.jersey = 'home';
    $scope.playerNumber = '99';
    $scope.playerPosition = 'C';

    $scope.showInfo = function() {
    	$scope.infoVisible = true;
    };

	$scope.hideInfo = function() {
		$scope.infoVisible = false;
	};

	$scope.setPlayerType = function(type) {
        $scope.player = type;
        $routeParams.playerType = type;
	};

}]);
