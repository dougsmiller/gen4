(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:part1Ctrl
	* @description
	* # part1Ctrl
	* Controller of the app
	*/

  	angular
		.module('part1')
		.controller('Part1Ctrl', Part1);

		Part1.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Part1() {
			/*jshint validthis: true */
			var vm = this;
			//vm.test = "controller";
			vm.title = "Simple Pie Chart"
			vm.options = {
				chart: {
					type: 'pieChart',
					height: 500,
					x: function(d){return d.key;},
					y: function(d){return d.y;},
					showLabels: true,
					duration: 500,
					labelThreshold: 0.01,
					labelSunbeamLayout: true,
					legend: {
						margin: {
							top: 5,
							right: 35,
							bottom: 5,
							left: 0
						}
					}
				}
			};

			vm.data = [
				{
					key: "One",
					y: 5
				},
				{
					key: "Two",
					y: 2
				},
				{
					key: "Three",
					y: 9
				},
				{
					key: "Four",
					y: 7
				},
				{
					key: "Five",
					y: 4
				},
				{
					key: "Six",
					y: 3
				},
				{
					key: "Seven",
					y: .5
				}
			];





		}

})();
