'use strict';

angular.module('playerCreatorApp', []).config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
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


    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
   
}]);
