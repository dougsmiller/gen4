'use strict';

/**
 * @ngdoc function
 * @name app.route:donutRoute
 * @description
 * # donutRoute
 * Route of the app
 */

angular.module('donut')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.donut', {
				url:'/donut',
				templateUrl: 'app/modules/donut/donut.html',
				controller: 'DonutCtrl',
				controllerAs: 'vm'
			});

		
	}]);
