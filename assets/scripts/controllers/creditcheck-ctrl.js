Scotiafront.controller('CreditCheckCtrl', ['$scope', '$window', '$timeout', 'API', function($scope, $window, $timeout, API) {
	$scope.info = {};

	$scope.savings = 557;
	$scope.interest = 6;

	$scope.totals = {
		balance: 0,
		rate: 0,
		payment: 0
	};

	$scope.loading = false;

	$scope.infoRows = [
		{
			name: 'BMO Master Card',
			balance: 5600,
			rate: 12.7,
			payment: 250
		},
		{
			name: 'Student Loan',
			balance: 12450,
			rate: 0,
			payment: 250
		},
		{
			name: 'Mortgage',
			balance: 120000,
			rate: 4.5,
			payment: 1100
		},
		{
			name: 'HBC Credit Card',
			balance: 19000,
			rate: 29.9,
			payment: 500
		}
	];

	$scope.addRow = function() {
		$scope.infoRows.push({
			name: 'Name of Institution',
			balance: 0,
			rate: 0,
			payment: 0
		});
	};

	$scope.removeRow = function(index) {
		$scope.infoRows.splice(index, 1);
	};

	$scope.processInfo = function() {
		$scope.loading = true;
		$timeout(function() {
			$window.location.href = '/#/income-debt/';
		}, 2800);
	};

	$scope.$watch('infoRows', function() {
		var totals = {
			balance: 0,
			rate: 0,
			payment: 0
		};

		$scope.infoRows.forEach(function(e) {
			totals.balance += parseInt(e.balance);
			totals.rate += parseFloat(e.rate);
			totals.payment += parseInt(e.payment);
		});

		totals.rate /= $scope.infoRows.length;
		totals.rate = totals.rate.toFixed(2);

		$scope.totals = totals;
	}, true);
}]);