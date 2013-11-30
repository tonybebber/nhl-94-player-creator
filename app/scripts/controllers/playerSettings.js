'use strict';

angular.module('playerCreatorApp').controller('PlayerSettingsCtrl', 
    ['$scope', '$routeParams', '$timeout', 'defaultPlayerService', function ($scope, $routeParams, $timeout, defaultPlayerService) {

	$scope.teamName = $routeParams.team;
	$scope.jersey = $routeParams.jersey;
    $scope.player = $routeParams.playerType;

    $scope.hand = defaultPlayerService.player.hand;

    if ($routeParams.playerType === 'player') {
        $scope.playerNumber = defaultPlayerService.player.number;
        $scope.playerPosition = defaultPlayerService.player.position;    
    } else if ($routeParams.playerType === 'goalie') {
        $scope.playerNumber = defaultPlayerService.goalie.number;
        $scope.playerPosition = defaultPlayerService.goalie.position;  
    } else {
        $scope.playerNumber = defaultPlayerService.enforcer.number;
        $scope.playerPosition = defaultPlayerService.enforcer.position; 
    }

  	$scope.hands = [
  		{
  			name: 'left',
  			displayName: 'Left Handed'
  		},
  		{
  			name: 'right',
  			displayName: 'Right Handed'
  		}
    ]

    $scope.positions = [
        {
            value: 'C',
            display: 'Center'
        },
        {
            value: 'L',
            display: 'Left Wing'
        },
        {
            value: 'R',
            display: 'Right Wing'
        },
        {
            value: 'D',
            display: 'Defense'
        },
        {
            value: 'G',
            display: 'Goalie'
        }
    ]

    if ($scope.player !== 'goalie') {
        $scope.positions = _.filter($scope.positions, function(data) {
            return data.value !== 'G';
        });
    } else {
        $scope.positions = _.filter($scope.positions, function(data) {
            return data.value === 'G';
        })
    }

    $scope.numbers = (function() {
        var numbersArray = [];
        for (var i = 1; i < 100; i++) {
            numbersArray.push(i.toString());
        }
        return numbersArray;
    })();

    $scope.lastPage = true;
    $scope.lastClass = 'last-page-back-button';

    $scope.infoToggleVal = true;
    $scope.infoVisible = true;
    $scope.toggleInfo = function() {
        $scope.infoToggleVal = !$scope.infoToggleVal;
        if ($scope.infoToggleVal === true) {
            $scope.infoVisible = true;
        } else {
            $scope.infoVisible = false;
        }
    };

    $scope.starToggleVal = true;
    $scope.starVisible = true;
    $scope.toggleStar = function() {
        $scope.starToggleVal = !$scope.starToggleVal;
        if ($scope.starToggleVal === true) {
            $scope.starVisible = true;
        } else {
            $scope.starVisible = false;
        }
    };

    $scope.openDownloader = function() {

        $('.spinner-small').css('visibility', 'visible');

        if ($('#finalPlayer').length > 0) {
            $('#finalPlayer').remove();
        }
        
        var element = document.querySelector('.playerWrap');
        html2canvas(element, {
            onrendered: function(canvas) {
                var playerImg = canvas.toDataURL("image/png");

                var template = '<ul id="finalPlayer" class="thumbnails modal hide fade">' + 
                                    '<li class="span3">' +
                                        '<div class="thumbnail">' +
                                            '<a href="data:image/png;'+playerImg+'" download="nhl94player.png">' +
                                                '<img class="tooltipPlayer" src="'+playerImg+'" title="Click to download your player!"/>' +
                                            '</a>' +
                                            '<p><a href="data:image/png;'+playerImg+'" download="nhl94player.png" class="btn btn-primary btn-next">Download Player <i class="icon-download"></i></a></p>' +
                                        '</div>' +
                                    '</li>' +
                                '</ul>';

                $('body').append(template);
                $('#finalPlayer').modal({});

                $timeout(function() {
                    $('.spinner-small').css('visibility', 'hidden');
                }, 3000);
            }
        });
    }

}]);
