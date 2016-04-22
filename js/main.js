var algApp = angular.module('algApp', []);

algApp.controller('collatzCtrl', function($scope) {
	$scope.collatzInput = 10;

	$scope.update = function() {
		$scope.collatzNumSteps = 0;
		$scope.collatzStart = $scope.collatzInput;
		$scope.collatzSteps = [];
		while($scope.collatzStart > 1) {
			if ($scope.collatzStart % 2 == 0) {
				$scope.collatzStart = $scope.collatzStart / 2;
			}
			else {
				$scope.collatzStart = (3 * $scope.collatzStart) + 1;
			}
			$scope.collatzSteps.push($scope.collatzStart);
			$scope.collatzNumSteps += 1;
		}
	};

});

