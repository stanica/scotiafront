Scotiafront.controller('ProfileCtrl', ['$scope', '$routeParams', 'API', function($scope, $routeParams, API) {
	// API.getUserByID($routeParams.userid).then(function(data) {
	// 	$scope.user = data;
	// });

	$scope.user = {
		name: 'Tyler Smith',
		employed: false,
		location: 'Toronto, Ontario',
		currentamount: 7500,
		totalamount: 10000,
	};

	$scope.amountpercent = (($scope.user.currentamount / $scope.user.totalamount) * 100).toFixed(0);
}]);