var app = angular.module('delveApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/',
	{
		controller: 'FeaturesCtrl',
		templateUrl: '/partials/featuresView.html'
	});
	$routeProvider.when('/neighborhoods',
	{
		controller: 'NeighborhoodsCtrl',
		templateUrl: '/partials/neighborhoodsView.html'
	});
	$routeProvider.when('/safety',
	{
		controller: 'SafetyCtrl',
		templateUrl: '/partials/safetyView.html'
	});
	$routeProvider.otherwise(
	{ 
		redirectTo: '/404',
		controller: 'WhoopsController',
		templateUrl: '/partials/404.html' 
	});
});