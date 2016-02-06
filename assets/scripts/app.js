var Scotiafront = angular.module('Scotiafront', ['ngRoute', "ngAnimate"]);

Scotiafront.config(['$compileProvider', function ($compileProvider) {
	$compileProvider.debugInfoEnabled(false);
}]);

Scotiafront.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeCtrl'
	}).when('/login/', {
		templateUrl: 'templates/login.html',
		controller: 'LoginCtrl'
	}).when('/signup/', {
		templateUrl: 'templates/signup.html',
		controller: 'SignupCtrl'
	}).otherwise({
		redirectTo: '/'
	});
}]);