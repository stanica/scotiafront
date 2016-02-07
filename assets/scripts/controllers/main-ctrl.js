Scotiafront.controller('MainCtrl', ['$scope', '$window', '$timeout', 'API', function($scope, $window, $timeout, API) {
	$scope.loading = false;

	// instantoffer
	$scope.instantoffer = {
		interest: 4.9,
		savings: 459
	};

	// megainfo
	$scope.megainfo = {
		form: {},
		submit: function() {
			$scope.loading = true;
			$timeout(function() {
				$window.location.href = '/#/creditcheck/';
			}, 3300);
		}
	};

	// creditcheck
	// In its own controller

	// income-debt
	$scope.incomedebt = {
		form: {},
		submit: function() {
			$scope.loading = true;
			$timeout(function() {
				$window.location.href = '/#/asset/';
			}, 1300);
		}
	};

	// asset
	$scope.asset = {
		form: {},
		submit: function() {
			$scope.loading = true;
			$timeout(function() {
				$window.location.href = '/#/solution/';
			}, 900);
		}
	};

	// solution
	$scope.solution = {
		tips: [
			'Rent out your spare bedroom',
            'Buy groceries instead of take-out',
            'Learn new skills to get a better job',
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
			$window.location.href = '/#/verify/';
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
			$scope.loading = true;
			$timeout(function() {
				$window.location.href = '/#/profile-view/2/';
			}, 1400);
		}
	};

	// conclusion
	$scope.profilepreview = {
		submit: function() {
			$scope.loading = true;
			$timeout(function() {
				$window.location.href = '/#/conclusion/';
			}, 1000);
		}
	};

	// conclusion
	$scope.conclusion = {
		submit: function() {
			$window.location.href = '/#/profile-view/2';
		}
	};
}]);
