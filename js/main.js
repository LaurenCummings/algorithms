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
	$scope.inputArray = [3, 5, 2, 1, 7, 4, 6];

	$scope.update = function() {

		mergeSort($scope.inputArray);

	};

function mergeSort(arr) {
	if (arr.length < 2) {
		$scope.sortedArray = arr;
	}
	else {
		var mid = Math.floor(arr.length / 2);
		alert(arr.slice(0,mid));
		alert(mergeSort([3,5,2]));
		// var subLeft = mergeSort(arr.slice(0,mid));

		// var subRight = mergeSort(arr.slice(mid));

		// $scope.sortedArray = merge(subLeft, subRight);
	}
}

// function merge(a,b) {
// 	var result = [];
// 	while (a.length > 0 && b.length > 0) {
// 		result.push(a[0] < b[0]? a.shift() : b.shift());
// 		return result.concat(a.length? a : b);
// 	}
// }

});

