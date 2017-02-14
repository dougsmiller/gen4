(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:donutTest
	 * @description
	 * # donutTest
	 * Test of the app
	 */

	describe('donut test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('angmat2');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('DonutCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
