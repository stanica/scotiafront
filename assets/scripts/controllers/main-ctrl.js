Scotiafront.controller('MainCtrl', ['$scope', '$window', 'API', function($scope, $window, API) {
	// instantoffer
	$scope.instantoffer = {
		interest: 4.9,
		savings: 459
	};
	

	// megainfo
	$scope.megainfo = {
		form: {},
		submit: function() {
			$window.location.href = '/#/creditcheck/';
		}
	};
	
	// creditcheck
	// In its own controller

	// income-debt
	$scope.incomedebt = {
		form: {},
		submit: function() {
			$window.location.href = '/#/asset/';
		}
	};

	// asset
	$scope.asset = {
		form: {},
		submit: function() {
			$window.location.href = '/#/solution/';
		}
	};

	// solution
	$scope.solution = {
		tips: [
			'Buy less drugs',
			'Buy less alchohol',
			'You have transit pass and a car, consider one or the other',
			'Consider a cheaper internet plan'
		],
		rates: [
			{
				bank: 'BMO',
				rate: 6.7
			},
			{
				bank: 'Scotiabnank',
				rate: 5.9
			}
		],
		submit: function() {
			$window.location.href = '/#/budget/';
		}
	};

	// budget
	$scope.budget = {
		submit: function() {
			$window.location.href = '/#/verify/';
		}
	};

	// verify
	$scope.verify = {
		rate: 3.2,
		savings: 512,
		submit: function() {
			$window.location.href = '/#/profile-preview/';
		}
	};

	// conclusion
	$scope.profilepreview = {
		submit: function() {
			$window.location.href = '/#/conclusion/';
		}
	};

	// conclusion
	$scope.conclusion = {
		submit: function() {
			$window.location.href = '/#/profile-view/2';
		}
	};
}]);