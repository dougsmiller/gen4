(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:btobhistogramTest
	 * @description
	 * # btobhistogramTest
	 * Test of the app
	 */

	describe('btobhistogram test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('angmat2');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('BtobhistogramCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
