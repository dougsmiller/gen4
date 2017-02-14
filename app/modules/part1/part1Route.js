'use strict';

/**
 * @ngdoc function
 * @name app.route:part1Route
 * @description
 * # part1Route
 * Route of the app
 */

angular.module('part1')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.part1', {
				url:'/part1',
				templateUrl: 'app/modules/part1/part1.html',
				controller: 'Part1Ctrl',
				controllerAs: 'vm'
			});

		
	}]);
