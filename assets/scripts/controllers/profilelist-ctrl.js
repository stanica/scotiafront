Scotiafront.controller('ProfileListCtrl', ['$scope', '$routeParams', 'API', function($scope, $routeParams, API) {
	// API.getAllProfiles().then(function(data) {
	// 	$scope.profiles = data;
	// });

	$scope.profiles = [
		{
			name: 'Alex',
			id: 1,
			image: '',
			amount: 2000,
			rate: 3.4
		},
		{
			name: 'Neil',
			id: 2,
			image: '',
			amount: 2800,
			rate: 3.6
		},
		{
			name: 'Rob',
			id: 3,
			image: '',
			amount: 1000,
			rate: 2.2
		}
	];	
}]);