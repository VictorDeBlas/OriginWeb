'use strict';

var pasquaJoveApp;

pasquaJoveApp = angular
	.module('pasquaJove', [
		'ngRoute'
	]);

pasquaJoveApp.config(configFunction);

configFunction.$inject = ['$routeProvider'];

function configFunction($routeProvider) {
	$routeProvider
		.otherwise({
			redirectTo:'/',
			controller: 'MainController',
			controllerAs: 'vm'
		})
}