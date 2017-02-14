'use strict';

/**
 * @ngdoc function
 * @name app.route:donutsRoute
 * @description
 * # donutsRoute
 * Route of the app
 */

angular.module('donuts')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.donuts', {
				url:'/donuts',
				templateUrl: 'app/modules/donuts/donuts.html',
				controller: 'DonutsCtrl',
				controllerAs: 'vm'
			});

		
	}]);
