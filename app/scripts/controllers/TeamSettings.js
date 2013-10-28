'use strict';

angular.module('playerCreatorApp').controller('TeamSettingsCtrl', 
	['$scope', '$routeParams', 'teamsService', function ($scope, $routeParams, teamsService) {

	$scope.selectedTeam = $scope.teamName = 'newyorkrangers';
    $scope.selectedJersey = $scope.jersey = 'home';
    $scope.playerNumber = '99';
    $scope.playerPosition = 'C';
    $scope.selectedJersey = $scope.jersey;
    $scope.player = $routeParams.playerType;

    // get all teams and use in select
    teamsService.getTeams(function(data) {
    	$scope.allTeams = data;
        // get selected teams jersey array
        for (var i = 0, allTeamsLen = $scope.allTeams.length; i < allTeamsLen; i++) {
            if ($scope.allTeams[i].team === $scope.teamName) {
                $scope.teamsJerseys = $scope.allTeams[i].jerseys;
                $scope.selectedJersey = $scope.jersey;
                return;
            }
        }
    });

    $scope.$watch('selectedTeam', function(nv, ov) {
    	if (nv) {
    		$scope.teamName = nv;
    	}
    });

    $scope.$watch('selectedJersey', function(nv, ov) {
    	if (nv) {
    		$scope.jersey = nv;
    	}
    });

}]);
