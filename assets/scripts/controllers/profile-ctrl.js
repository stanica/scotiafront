Scotiafront.controller('ProfileCtrl', ['$scope', '$routeParams', 'API', function($scope, $routeParams, API) {
	// API.getUserByID($routeParams.userid).then(function(data) {
	// 	$scope.user = data;
	// });

	$scope.user = {
		name: 'Tyler Smith',
		employed: false,
		location: 'North York, Ontario',
		currentamount: 9000,
		totalamount: 10000,
	};

	$scope.amountpercent = (($scope.user.currentamount / $scope.user.totalamount) * 100).toFixed(0);

	$scope.endorserList = [
		{
			id: 1,
			img: '/dist/images/lori.png'
		},
		{
			id: 2,
			img: '/dist/images/lori.png'
		},
		{
			id: 3,
			img: '/dist/images/lori.png'
		},
		{
			id: 4,
			img: '/dist/images/lori.png'
		},
		{
			id: 5,
			img: '/dist/images/lori.png'
		},
		{
			id: 6,
			img: '/dist/images/lori.png'
		},
		{
			id: 7,
			img: '/dist/images/lori.png'
		},
		{
			id: 11,
			img: '/dist/images/lori.png'
		},
		{
			id: 12,
			img: '/dist/images/lori.png'
		},
		{
			id: 13,
			img: '/dist/images/lori.png'
		},
		{
			id: 14,
			img: '/dist/images/lori.png'
		},
		{
			id: 15,
			img: '/dist/images/lori.png'
		},
		{
			id: 16,
			img: '/dist/images/lori.png'
		},
		{
			id: 17,
			img: '/dist/images/lori.png'
		}
	];
}]);