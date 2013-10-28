'use strict';

angular.module('playerCreatorApp').controller('PlayerSettingsCtrl', ['$scope', '$routeParams', '$timeout', function ($scope, $routeParams, $timeout) {

	$scope.teamName = $routeParams.team;
	$scope.jersey = $routeParams.jersey;
    $scope.player = $routeParams.playerType;

    $scope.hand = 'left';
    $scope.playerNumber = '99';
    $scope.playerPosition = 'C';

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

    $scope.openDownloader = function() {
        if ($('#finalPlayer').length > 0) {
            $('#finalPlayer').remove();
        }
        var element = document.querySelector('.playerWrap');
        html2canvas(element, {
            onrendered: function(canvas) {
                var playerImg = canvas.toDataURL("image/png");
                $('body').append('<img id="finalPlayer" class="modal hide fade" tabindex="-1" src="'+playerImg+'"/>');
                $('#finalPlayer').modal({});
            }
        });
    }

}]);
