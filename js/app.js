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
	$routeProvider.when('/Grand_Circus',
	{
		controller: 'GrandCircusCtrl',
		templateUrl: '/partials/grandCircus.html'
	});
	$routeProvider.when('/Campus_Martius',
	{
		controller: 'CampusMartiusCtrl',
		templateUrl: '/partials/campusMartius.html'
	});
	$routeProvider.when('/Greektown',
	{
		controller: 'GreektownCtrl',
		templateUrl: '/partials/greektown.html'
	});
	$routeProvider.when('/Riverfront',
	{
		controller: 'RiverfrontCtrl',
		templateUrl: '/partials/riverfront.html'
	});
	$routeProvider.otherwise(
	{ 
		redirectTo: '/404',
		controller: 'WhoopsController',
		templateUrl: '/partials/404.html' 
	});
});
