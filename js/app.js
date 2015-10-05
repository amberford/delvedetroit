var app = angular.module('delveApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/',
	{
		controller: 'FeaturesCtrl',
		templateUrl: 'featuresView.html'
	});
	$routeProvider.when('/neighborhoods',
	{
		controller: 'NeighborhoodsCtrl',
		templateUrl: 'neighborhoodsView.html'
	});
	$routeProvider.when('/safety',
	{
		controller: 'SafetyCtrl',
		templateUrl: 'safetyView.html'
	});
	$routeProvider.otherwise(
	{ 
		redirectTo: '/404',
		controller: 'WhoopsController',
		templateUrl: '404' 
	});
});