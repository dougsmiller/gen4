(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:part1Test
	 * @description
	 * # part1Test
	 * Test of the app
	 */

	describe('part1 test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('angmat2');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('Part1Ctrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
