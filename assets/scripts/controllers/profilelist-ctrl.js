Scotiafront.controller('ProfileListCtrl', ['$scope', '$routeParams', '$window', 'API', function($scope, $routeParams, $window, API) {
	// API.getAllProfiles().then(function(data) {
	// 	$scope.profiles = data;
	// });

	$scope.profiles = [
		{
			name: 'Tyler Smith',
			id: 1,
			image: '/dist/images/face.png',
			percent: 90,
			location: 'North York, Ontario'
		},
		{
			name: 'Tyler Smith',
			id: 2,
			image: '/dist/images/Ivan.png',
			percent: 54,
			location: 'Ivan Joseph, Ontario'
		},
		{
			name: 'Deborah Parker',
			id: 3,
			image: '/dist/images/Deb.png',
			percent: 16,
			location: 'Toronto, Ontario'
		}
	];

	$scope.goToProfile = function(id) {
		$window.location.href = '/#/profile-view/' + id;
	};
}]);