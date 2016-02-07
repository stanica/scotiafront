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
	}).when('/profile/:userid?', {
		templateUrl: 'templates/profile.html',
		controller: 'ProfileCtrl'
	}).when('/instantoffer/', {
		templateUrl: 'templates/instantoffer.html',
		controller: 'MainCtrl'
	}).when('/megainfo/', {
		templateUrl: 'templates/megainfo.html',
		controller: 'MainCtrl'
	}).when('/creditcheck/', {
		templateUrl: 'templates/creditcheck.html',
		controller: 'CreditCheckCtrl'
	}).when('/income-debt/', {
		templateUrl: 'templates/income-debt.html',
		controller: 'MainCtrl'
	}).when('/asset/', {
		templateUrl: 'templates/asset.html',
		controller: 'MainCtrl'
	}).when('/solution/', {
		templateUrl: 'templates/solution.html',
		controller: 'MainCtrl'
	}).when('/budget/', {
		templateUrl: 'templates/budget.html',
		controller: 'MainCtrl'
	}).when('/verify/', {
		templateUrl: 'templates/verify.html',
		controller: 'MainCtrl'
	}).when('/profile-preview/', {
		templateUrl: 'templates/profile-preview.html',
		controller: 'MainCtrl'
	}).when('/conclusion/', {
		templateUrl: 'templates/conclusion.html',
		controller: 'MainCtrl'
	}).when('/profile-view/:userid?', {
		templateUrl: 'templates/profile-view.html',
		controller: 'ProfileCtrl'
	}).when('/providing-loan/', {
		templateUrl: 'templates/providing-loan.html',
		controller: 'LoanCtrl'
	}).when('/profile-list/', {
		templateUrl: 'templates/profile-list.html',
		controller: 'ProfileListCtrl'
	}).when('/dashboard/', {
		templateUrl: 'templates/dashboard.html',
		controller: 'DashboardCtrl'
	}).otherwise({
		redirectTo: '/'
	});
}]);