(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:HomeCtrl
	* @description
	* # HomeCtrl
	* Controller of the app
	*/

	angular
		.module('angmat2')
		.controller('HomeCtrl', Home);

	Home.$inject = ['homeService'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Home(homeService) {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "Hello, angmat2!";
		vm.version = "1.0.0";
		vm.listFeatures = homeService.getFeaturesList();
		vm.displayToast = function(){alert("Hello")};
		vm.mapObject = {
			scope: 'world',
			options: {
				width: 1110,
				legendHeight: 60 // optionally set the padding for the legend
			},
			geographyConfig: {
				highlighBorderColor: '#EAA9A8',
				highlighBorderWidth: 2
			},
			fills: {
				'HIGH': '#CC4731',
				'MEDIUM': '#306596',
				'LOW': '#667FAF',
				'defaultFill': '#DDDDDD'
			},
			data: {

			},
		}

	}

})();
