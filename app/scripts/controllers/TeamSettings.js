'use strict';

angular.module('playerCreatorApp').controller('TeamSettingsCtrl', 
	['$scope', '$routeParams', 'teamsService', 'defaultPlayerService', function ($scope, $routeParams, teamsService, defaultPlayerService) {

    if ($routeParams.playerType === 'player') {
        $scope.playerNumber = defaultPlayerService.player.number;
        $scope.playerPosition = defaultPlayerService.player.position;    
    } else if ($routeParams.playerType === 'goalie') {
        $scope.playerNumber = defaultPlayerService.goalie.number;
        $scope.playerPosition = defaultPlayerService.goalie.position;  
    } else {
        // enforcer num and pos go here
    }

	$scope.selectedTeam = $scope.teamName = defaultPlayerService.player.team;
    $scope.selectedJersey = $scope.jersey = defaultPlayerService.player.jersey;

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
