'use strict';

angular.module('playerCreatorApp').factory('defaultPlayerService', [function() {

	return{
    	player: {
    		name: 'Mark Messier',
    		team: 'newyorkrangers',
    		jersey: 'home',
    		number: '11',
    		hand: 'left',
    		position: 'C'
    	},
    	goalie: {
    		name: 'Mike Richter',
    		team: 'newyorkrangers',
    		jersey: 'home',
    		number: '35',
    		hand: 'right',
    		position: 'G'
    	},
    	enforcer: {
    		name: 'Jeff Beukeboom',
    		team: 'newyorkrangers',
    		jersey: 'home',
    		number: '23',
    		hand: 'right',
    		position: 'D'
    	}
    };

}]);