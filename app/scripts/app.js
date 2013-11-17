'use strict';

angular.module('playerCreatorApp', []).config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {

    var $http,
        interceptor = ['$q', '$injector', function ($q, $injector) {
            var error;

            function success(response) {
                // get $http via $injector because of circular dependency problem
                $http = $http || $injector.get('$http');
                if($http.pendingRequests.length < 1) {
                    $('#spinner').hide();
                    $('#loadedContent').show();
                }
                return response;
            }

            function error(response) {
                // get $http via $injector because of circular dependency problem
                $http = $http || $injector.get('$http');
                if($http.pendingRequests.length < 1) {
                    $('#spinner').hide();
                    $('#loadedContent').show();
                }
                return $q.reject(response);
            }

            return function (promise) {
                $('#loadedContent').hide();
                $('#spinner').show();
                return promise.then(success, error);
            }
        }];

    $httpProvider.responseInterceptors.push(interceptor);

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

    $(function() {
        FastClick.attach(document.body);
    });

    if (!("ontouchstart" in document.documentElement)) {
        document.documentElement.className += " no-touch";
    }
   
}]);
