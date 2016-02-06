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
	}).when('/creditinfo/', {
		templateUrl: 'templates/creditinfo.html',
		controller: 'CreditInfoCtrl'
	}).when('/profile/:userid?', {
		templateUrl: 'templates/profile.html',
		controller: 'ProfileCtrl'
	}).otherwise({
		redirectTo: '/'
	});
}]);