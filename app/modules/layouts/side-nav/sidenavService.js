(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:menuService
	 * @description
	 * # menuService
	 * Service of the app
	 */

  	angular
		.module('angmat2')
		.factory('MenuService', Menu);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Menu.$inject = ['$http'];

		function Menu ($http) {

			var menu = [

					{
						link: 'part1',
							name: 'Pie Chart'
					},

					{
						link: 'btobhistogram',
							name: 'Back to Back Histogram'
					},

					{
						link: 'donut',
							name: 'Donut'
					},

					{
						link: 'donuts',
							name: 'Sunburst'
					},

		  	];

			return {
				listMenu: function () {
					return menu;
				}
		  	}

		}

})();
