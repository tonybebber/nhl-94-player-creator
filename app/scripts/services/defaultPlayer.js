'use strict';

angular.module('playerCreatorApp').factory('defaultPlayerService', [function() {

	return{
    	player: {
    		team: 'newyorkrangers',
    		jersey: 'home',
    		number: '11',
    		hand: 'left',
    		position: 'C'
    	},
    	goalie: {
    		team: 'newyorkrangers',
    		jersey: 'home',
    		number: '35',
    		hand: 'right',
    		position: 'G'
    	}
    };

}]);