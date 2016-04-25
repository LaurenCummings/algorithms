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

algApp.controller('mergeSort', function($scope) {
	// $scope.inputArray = [3, 5, 2, 1, 7, 4, 6];
	$scope.inputArray = [3];

	$scope.update = function() {
		if ($scope.inputArray.length < 2) {
			$scope.sortedArray = $scope.inputArray;
		}
		else {
			$scope.sortedArray = 4;
		}
	};


});

