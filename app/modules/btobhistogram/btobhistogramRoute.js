'use strict';

/**
 * @ngdoc function
 * @name app.route:btobhistogramRoute
 * @description
 * # btobhistogramRoute
 * Route of the app
 */

angular.module('btobhistogram')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.btobhistogram', {
				url:'/btobhistogram',
				templateUrl: 'app/modules/btobhistogram/btobhistogram.html',
				controller: 'BtobhistogramCtrl',
				controllerAs: 'vm'
			});

		
	}]);
