'use strict';

var angular = require('angular');

module.exports = angular.module('pasquaJove', [

	require('angular-route'),
])

.config(function($routeProvider) {

	$routeProvider.otherwise({
		redirectTo: '/',
	});
})

.name;