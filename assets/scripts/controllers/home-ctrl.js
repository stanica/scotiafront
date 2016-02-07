Scotiafront.controller('HomeCtrl', ['$scope', '$window', '$timeout', 'API', function($scope, $window, $timeout, API) {
	$scope.info = {
		'credit': null,
		'employed': null,
		'amount': null,
		'rate': null
	};

	$scope.loading = false;

	$scope.attemptNewAccountCreation = function() {
		//if (!!$scope.info.credit && !!$scope.info.employed && !!$scope.info.amount && !!$scope.info.rate) {
			$scope.loading = true;
			$timeout(function() {
				$window.location.href = '/#/instantoffer/';
			}, 2100);
		//}
	};

    $('[type="checkbox"]').bootstrapSwitch();
    $('#creditSlider').slider({
        formatter: function(value) {
            return value;
        }
    });
    $('#interestSlider').slider({
        formatter: function(value) {
            return value + ' %';
        }
    });
}]);
