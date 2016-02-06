Scotiafront.controller('SignupCtrl', ['$scope', '$rootScope', 'API', function($scope, $rootScope, API) {
	$scope.currentStep = 0;
	$scope.stepTemplates = [
		'/templates/signup/step1.html',
		'/templates/signup/step2.html',
		'/templates/signup/step3.html',
	];

	$scope.signupData = {
		info: {},
		interest: {}
	};

	$scope.moveStep = function(increment) {
		var newStep = $scope.currentStep + increment;

		if (newStep >= 0 && newStep < $scope.stepTemplates.length) {
			$scope.currentStep = newStep;
		}
	};

	$scope.moveToStep = function(step) {
		$scope.currentStep = step;
	};
}]);