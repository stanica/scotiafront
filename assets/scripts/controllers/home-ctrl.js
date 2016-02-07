Scotiafront.controller('HomeCtrl', ['$scope', '$window', 'API', function($scope, $window, API) {
	$scope.info = {
		'credit': null,
		'employed': null,
		'amount': null,
		'rate': null
	};

	$scope.attemptNewAccountCreation = function() {
		if (!!$scope.info.credit && !!$scope.info.employed && !!$scope.info.amount && !!$scope.info.rate) {
			$window.location.href = '/#/instantoffer/';
		}
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
