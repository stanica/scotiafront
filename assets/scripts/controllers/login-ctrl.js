Scotiafront.controller('LoginCtrl', ['$scope', '$window', 'API', function($scope, $window, API) {
	$scope.credentials = {
		'email': null,
		'password': null
	};

	$scope.attemptLogin = function() {
		if (!!$scope.credentials.email && !!$scope.credentials.password) {
			$window.location.href = '/#/dashboard/';
		}
	};
}]);