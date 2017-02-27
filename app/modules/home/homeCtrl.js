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
	angular
		.module('angmat2')
		.controller('dialogCtrl', dialogCtrl);



	Home.$inject = ['homeService','$mdDialog'];
	dialogCtrl.$inject = ['$mdDialog'];
	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/


	function dialogCtrl($mdDialog){

		var vm = this;
		vm.answer = function(answer){
			alert(answer);
			$mdDialog.hide();

		}

	}


	function Home(homeService,$mdDialog,$log) {
		/*jshint validthis: true */
		var vm = this;
		vm.status = "";
		vm.title = "Hello, angmat2!";
		vm.version = "1.0.0";
		vm.listFeatures = homeService.getFeaturesList();
		/*
		vm.displayToast = function(event){
			console.info(event);
			var confirm = $mdDialog.confirm()
				.title('Are you sure to delete the record?')
				.textContent('Record will be deleted permanently.')
				.ariaLabel('TutorialsPoint.com')
				.targetEvent(event)
				.ok('Yes')
				.cancel('No');
			$mdDialog.show(confirm).then(function() {
				vm.status = 'Record deleted successfully!';
			}, function() {
				vm.status = 'You decided to keep your record.';
			});
			};
*/


		vm.displayDialog = function(event) {
			$mdDialog.show({
				clickOutsideToClose: true,
				controller: 'dialogCtrl as vm',
				preserveScope: true,
				templateUrl: "./templateHTML.html"
				});
		};









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
