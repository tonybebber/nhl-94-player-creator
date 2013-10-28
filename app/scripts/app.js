'use strict';

angular.module('playerCreatorApp', []).config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/playerType', {
            templateUrl: 'views/playerType.html',
            controller: 'PlayerTypeCtrl'
        })
        .when('/:playerType/teamSettings', {
            templateUrl: 'views/teamSettings.html',
            controller: 'TeamSettingsCtrl'
        })
        .when('/:playerType/:team/:jersey/playerSettings', {
            templateUrl: 'views/playerSettings.html',
            controller: 'PlayerSettingsCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
