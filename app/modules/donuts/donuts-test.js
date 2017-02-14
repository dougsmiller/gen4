(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:donutsTest
	 * @description
	 * # donutsTest
	 * Test of the app
	 */

	describe('donuts test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('angmat2');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('DonutsCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
