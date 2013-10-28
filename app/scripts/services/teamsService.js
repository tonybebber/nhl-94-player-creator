'use strict';

angular.module('playerCreatorApp').factory('teamsService', ['$http', function($http) {

	return{
    	getTeams: function(callback){
	        $http.get('/scripts/json/teams.json').success(function(response) {
	        	if (callback) {
	        		callback(response);
	        	}
		    });
      	}
    };

}]);