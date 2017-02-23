/*!
* angmat2 - v0.0.1 - MIT LICENSE 2017-02-23. 
* @author Angmodular
*/
(function() {
	'use strict';

	/**
	 * @ngdoc index
	 * @name app
	 * @description
	 * # app
	 *
	 * Main modules of the application.
	 */

	angular.module('angmat2', [
		'ngResource',
		'ngAria',
		 'ngMaterial',
		'ngMdIcons',
		'ngCookies',
		'ngAnimate',
		'ngSanitize',
		'ui.router',
		'nvd3',
		'home',
		'part1',
		'btobhistogram',
		'donut',
		'donuts',
		'datamaps',
	]);

})();

(function () {
	'use strict';

	/**
	 * @ngdoc configuration file
	 * @name app.config:config
	 * @description
	 * # Config and run block
	 * Configutation of the app
	 */


	angular
		.module('angmat2')
		.config(configure)
		.run(runBlock);

	configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

	function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

		$locationProvider.hashPrefix('!');

		// This is required for Browser Sync to work poperly
		$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

		
		$urlRouterProvider
			.otherwise('/dashboard');
		
	}

	runBlock.$inject = ['$rootScope'];

	function runBlock($rootScope) {
		'use strict';

		console.log('AngularJS run() function...');
	}


})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:btobhistogramModule
	 * @description
	 * # btobhistogramModule
	 * Module of the app
	 */

  	angular.module('btobhistogram', []);

})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:donutModule
	 * @description
	 * # donutModule
	 * Module of the app
	 */

  	angular.module('donut', []);

})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:donutsModule
	 * @description
	 * # donutsModule
	 * Module of the app
	 */

  	angular.module('donuts', []);

})();

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.module:homeModule
	* @description
	* # homeModule
	* Module of the app
	*/

	angular.module('home', []);
})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:part1Module
	 * @description
	 * # part1Module
	 * Module of the app
	 */

  	angular.module('part1', []);

})();

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

'use strict';

/**
 * @ngdoc function
 * @name app.route:donutsRoute
 * @description
 * # donutsRoute
 * Route of the app
 */

angular.module('donuts')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.donuts', {
				url:'/donuts',
				templateUrl: 'app/modules/donuts/donuts.html',
				controller: 'DonutsCtrl',
				controllerAs: 'vm'
			});

		
	}]);

'use strict';

	/**
	* @ngdoc function
	* @name app.route:HomeRoute
	* @description
	* # HomeRoute
	* Route of the app
	*/

angular.module('angmat2')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			
			.state('home', {
				url: '',
				abstract: true,
				templateUrl: 'app/modules/home/home.html',
				controller: 'HomeCtrl',
				controllerAs: 'vm'
			})
			.state('home.dashboard', {
				url:'/dashboard',
				templateUrl: 'app/modules/home/dashboard.html'
			});
			
	}]);

'use strict';

/**
 * @ngdoc function
 * @name app.route:part1Route
 * @description
 * # part1Route
 * Route of the app
 */

angular.module('part1')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.part1', {
				url:'/part1',
				templateUrl: 'app/modules/part1/part1.html',
				controller: 'Part1Ctrl',
				controllerAs: 'vm'
			});

		
	}]);

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:btobhistogramCtrl
	* @description
	* # btobhistogramCtrl
	* Controller of the app
	*/

  	angular
		.module('btobhistogram')
		.controller('BtobhistogramCtrl', Btobhistogram);

		Btobhistogram.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Btobhistogram() {
			/*jshint validthis: true */
			var vm = this;


			vm.title = "Simple Pie Chart"
			vm.options = {
				chart: {
					type: 'multiBarHorizontalChart',
					height: 450,
					x: function(d){return d.label;},
					y: function(d){return d.value;},
					//yErr: function(d){ return [-Math.abs(d.value * Math.random() * 0.3), Math.abs(d.value * Math.random() * 0.3)] },
					showControls: true,
					showValues: true,
					duration: 500,
					xAxis: {
						showMaxMin: false
					},
					yAxis: {
						axisLabel: 'Values',
						tickFormat: function(d){
							return d3.format(',.2f')(d);
						}
					}
				}
			};

			vm.data = [
				{
					"key": "Series1",
					"color": "#d62728",
					"values": [
						{
							"label" : "Group A" ,
							"value" : -1.8746444827653
						} ,
						{
							"label" : "Group B" ,
							"value" : -8.0961543492239
						} ,
						{
							"label" : "Group C" ,
							"value" : -0.57072943117674
						} ,
						{
							"label" : "Group D" ,
							"value" : -2.4174010336624
						} ,
						{
							"label" : "Group E" ,
							"value" : -0.72009071426284
						} ,
						{
							"label" : "Group F" ,
							"value" : -0.77154485523777
						} ,
						{
							"label" : "Group G" ,
							"value" : -0.90152097798131
						} ,
						{
							"label" : "Group H" ,
							"value" : -0.91445417330854
						} ,
						{
							"label" : "Group I" ,
							"value" : -0.055746319141851
						}
					]
				},
				{
					"key": "Series2",
					"color": "#1f77b4",
					"values": [
						{
							"label" : "Group A" ,
							"value" : 25.307646510375
						} ,
						{
							"label" : "Group B" ,
							"value" : 16.756779544553
						} ,
						{
							"label" : "Group C" ,
							"value" : 18.451534877007
						} ,
						{
							"label" : "Group D" ,
							"value" : 8.6142352811805
						} ,
						{
							"label" : "Group E" ,
							"value" : 7.8082472075876
						} ,
						{
							"label" : "Group F" ,
							"value" : 5.259101026956
						} ,
						{
							"label" : "Group G" ,
							"value" : 0.30947953487127
						} ,
						{
							"label" : "Group H" ,
							"value" : 0
						} ,
						{
							"label" : "Group I" ,
							"value" : 0
						}
					]
				}
			]




		}

})();

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:donutCtrl
	 * @description
	 * # donutsCtrl
	 * Controller of the app
	 */

	angular
		.module('donut')
		.controller('DonutCtrl', Donut);

	Donut.$inject = [];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Donut() {
		/*jshint validthis: true */
		var vm = this;
		vm.options = {
			chart: {
				type: 'pieChart',
				height: 450,
				donut: true,
				x: function(d){return d.key;},
				y: function(d){return d.y;},
				showLabels: true,

				pie: {
					startAngle: function(d) { return d.startAngle/2 -Math.PI/2 },
					endAngle: function(d) { return d.endAngle/2 -Math.PI/2 }
				},
				duration: 500,
				legend: {
					margin: {
						top: 5,
						right: 140,
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

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:donutsCtrl
	* @description
	* # donutsCtrl
	* Controller of the app
	*/

  	angular
		.module('donuts')
		.controller('DonutsCtrl', Donuts);

		Donuts.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Donuts() {
			/*jshint validthis: true */
			var vm = this;
			vm.options = {
				chart: {
					type: 'sunburstChart',
					height: 450,
					color: d3.scale.category20c(),
					duration: 250
				}
			};

			vm.data = [{
				"name": "flare",
				"children": [
					{
						"name": "analytics",
						"children": [
							{
								"name": "cluster",
								"children": [
									{"name": "AgglomerativeCluster", "size": 3938},
									{"name": "CommunityStructure", "size": 3812},
									{"name": "HierarchicalCluster", "size": 6714},
									{"name": "MergeEdge", "size": 743}
								]
							},
							{
								"name": "graph",
								"children": [
									{"name": "BetweennessCentrality", "size": 3534},
									{"name": "LinkDistance", "size": 5731},
									{"name": "MaxFlowMinCut", "size": 7840},
									{"name": "ShortestPaths", "size": 5914},
									{"name": "SpanningTree", "size": 3416}
								]
							},
							{
								"name": "optimization",
								"children": [
									{"name": "AspectRatioBanker", "size": 7074}
								]
							}
						]
					},
					{
						"name": "animate",
						"children": [
							{"name": "Easing", "size": 17010},
							{"name": "FunctionSequence", "size": 5842},
							{
								"name": "interpolate",
								"children": [
									{"name": "ArrayInterpolator", "size": 1983},
									{"name": "ColorInterpolator", "size": 2047},
									{"name": "DateInterpolator", "size": 1375},
									{"name": "Interpolator", "size": 8746},
									{"name": "MatrixInterpolator", "size": 2202},
									{"name": "NumberInterpolator", "size": 1382},
									{"name": "ObjectInterpolator", "size": 1629},
									{"name": "PointInterpolator", "size": 1675},
									{"name": "RectangleInterpolator", "size": 2042}
								]
							},
							{"name": "ISchedulable", "size": 1041},
							{"name": "Parallel", "size": 5176},
							{"name": "Pause", "size": 449},
							{"name": "Scheduler", "size": 5593},
							{"name": "Sequence", "size": 5534},
							{"name": "Transition", "size": 9201},
							{"name": "Transitioner", "size": 19975},
							{"name": "TransitionEvent", "size": 1116},
							{"name": "Tween", "size": 6006}
						]
					},
					{
						"name": "data",
						"children": [
							{
								"name": "converters",
								"children": [
									{"name": "Converters", "size": 721},
									{"name": "DelimitedTextConverter", "size": 4294},
									{"name": "GraphMLConverter", "size": 9800},
									{"name": "IDataConverter", "size": 1314},
									{"name": "JSONConverter", "size": 2220}
								]
							},
							{"name": "DataField", "size": 1759},
							{"name": "DataSchema", "size": 2165},
							{"name": "DataSet", "size": 586},
							{"name": "DataSource", "size": 3331},
							{"name": "DataTable", "size": 772},
							{"name": "DataUtil", "size": 3322}
						]
					},
					{
						"name": "display",
						"children": [
							{"name": "DirtySprite", "size": 8833},
							{"name": "LineSprite", "size": 1732},
							{"name": "RectSprite", "size": 3623},
							{"name": "TextSprite", "size": 10066}
						]
					},
					{
						"name": "flex",
						"children": [
							{"name": "FlareVis", "size": 4116}
						]
					},
					{
						"name": "physics",
						"children": [
							{"name": "DragForce", "size": 1082},
							{"name": "GravityForce", "size": 1336},
							{"name": "IForce", "size": 319},
							{"name": "NBodyForce", "size": 10498},
							{"name": "Particle", "size": 2822},
							{"name": "Simulation", "size": 9983},
							{"name": "Spring", "size": 2213},
							{"name": "SpringForce", "size": 1681}
						]
					},
					{
						"name": "query",
						"children": [
							{"name": "AggregateExpression", "size": 1616},
							{"name": "And", "size": 1027},
							{"name": "Arithmetic", "size": 3891},
							{"name": "Average", "size": 891},
							{"name": "BinaryExpression", "size": 2893},
							{"name": "Comparison", "size": 5103},
							{"name": "CompositeExpression", "size": 3677},
							{"name": "Count", "size": 781},
							{"name": "DateUtil", "size": 4141},
							{"name": "Distinct", "size": 933},
							{"name": "Expression", "size": 5130},
							{"name": "ExpressionIterator", "size": 3617},
							{"name": "Fn", "size": 3240},
							{"name": "If", "size": 2732},
							{"name": "IsA", "size": 2039},
							{"name": "Literal", "size": 1214},
							{"name": "Match", "size": 3748},
							{"name": "Maximum", "size": 843},
							{
								"name": "methods",
								"children": [
									{"name": "add", "size": 593},
									{"name": "and", "size": 330},
									{"name": "average", "size": 287},
									{"name": "count", "size": 277},
									{"name": "distinct", "size": 292},
									{"name": "div", "size": 595},
									{"name": "eq", "size": 594},
									{"name": "fn", "size": 460},
									{"name": "gt", "size": 603},
									{"name": "gte", "size": 625},
									{"name": "iff", "size": 748},
									{"name": "isa", "size": 461},
									{"name": "lt", "size": 597},
									{"name": "lte", "size": 619},
									{"name": "max", "size": 283},
									{"name": "min", "size": 283},
									{"name": "mod", "size": 591},
									{"name": "mul", "size": 603},
									{"name": "neq", "size": 599},
									{"name": "not", "size": 386},
									{"name": "or", "size": 323},
									{"name": "orderby", "size": 307},
									{"name": "range", "size": 772},
									{"name": "select", "size": 296},
									{"name": "stddev", "size": 363},
									{"name": "sub", "size": 600},
									{"name": "sum", "size": 280},
									{"name": "update", "size": 307},
									{"name": "variance", "size": 335},
									{"name": "where", "size": 299},
									{"name": "xor", "size": 354},
									{"name": "_", "size": 264}
								]
							},
							{"name": "Minimum", "size": 843},
							{"name": "Not", "size": 1554},
							{"name": "Or", "size": 970},
							{"name": "Query", "size": 13896},
							{"name": "Range", "size": 1594},
							{"name": "StringUtil", "size": 4130},
							{"name": "Sum", "size": 791},
							{"name": "Variable", "size": 1124},
							{"name": "Variance", "size": 1876},
							{"name": "Xor", "size": 1101}
						]
					},
					{
						"name": "scale",
						"children": [
							{"name": "IScaleMap", "size": 2105},
							{"name": "LinearScale", "size": 1316},
							{"name": "LogScale", "size": 3151},
							{"name": "OrdinalScale", "size": 3770},
							{"name": "QuantileScale", "size": 2435},
							{"name": "QuantitativeScale", "size": 4839},
							{"name": "RootScale", "size": 1756},
							{"name": "Scale", "size": 4268},
							{"name": "ScaleType", "size": 1821},
							{"name": "TimeScale", "size": 5833}
						]
					},
					{
						"name": "util",
						"children": [
							{"name": "Arrays", "size": 8258},
							{"name": "Colors", "size": 10001},
							{"name": "Dates", "size": 8217},
							{"name": "Displays", "size": 12555},
							{"name": "Filter", "size": 2324},
							{"name": "Geometry", "size": 10993},
							{
								"name": "heap",
								"children": [
									{"name": "FibonacciHeap", "size": 9354},
									{"name": "HeapNode", "size": 1233}
								]
							},
							{"name": "IEvaluable", "size": 335},
							{"name": "IPredicate", "size": 383},
							{"name": "IValueProxy", "size": 874},
							{
								"name": "math",
								"children": [
									{"name": "DenseMatrix", "size": 3165},
									{"name": "IMatrix", "size": 2815},
									{"name": "SparseMatrix", "size": 3366}
								]
							},
							{"name": "Maths", "size": 17705},
							{"name": "Orientation", "size": 1486},
							{
								"name": "palette",
								"children": [
									{"name": "ColorPalette", "size": 6367},
									{"name": "Palette", "size": 1229},
									{"name": "ShapePalette", "size": 2059},
									{"name": "SizePalette", "size": 2291}
								]
							},
							{"name": "Property", "size": 5559},
							{"name": "Shapes", "size": 19118},
							{"name": "Sort", "size": 6887},
							{"name": "Stats", "size": 6557},
							{"name": "Strings", "size": 22026}
						]
					},
					{
						"name": "vis",
						"children": [
							{
								"name": "axis",
								"children": [
									{"name": "Axes", "size": 1302},
									{"name": "Axis", "size": 24593},
									{"name": "AxisGridLine", "size": 652},
									{"name": "AxisLabel", "size": 636},
									{"name": "CartesianAxes", "size": 6703}
								]
							},
							{
								"name": "controls",
								"children": [
									{"name": "AnchorControl", "size": 2138},
									{"name": "ClickControl", "size": 3824},
									{"name": "Control", "size": 1353},
									{"name": "ControlList", "size": 4665},
									{"name": "DragControl", "size": 2649},
									{"name": "ExpandControl", "size": 2832},
									{"name": "HoverControl", "size": 4896},
									{"name": "IControl", "size": 763},
									{"name": "PanZoomControl", "size": 5222},
									{"name": "SelectionControl", "size": 7862},
									{"name": "TooltipControl", "size": 8435}
								]
							},
							{
								"name": "data",
								"children": [
									{"name": "Data", "size": 20544},
									{"name": "DataList", "size": 19788},
									{"name": "DataSprite", "size": 10349},
									{"name": "EdgeSprite", "size": 3301},
									{"name": "NodeSprite", "size": 19382},
									{
										"name": "render",
										"children": [
											{"name": "ArrowType", "size": 698},
											{"name": "EdgeRenderer", "size": 5569},
											{"name": "IRenderer", "size": 353},
											{"name": "ShapeRenderer", "size": 2247}
										]
									},
									{"name": "ScaleBinding", "size": 11275},
									{"name": "Tree", "size": 7147},
									{"name": "TreeBuilder", "size": 9930}
								]
							},
							{
								"name": "events",
								"children": [
									{"name": "DataEvent", "size": 2313},
									{"name": "SelectionEvent", "size": 1880},
									{"name": "TooltipEvent", "size": 1701},
									{"name": "VisualizationEvent", "size": 1117}
								]
							},
							{
								"name": "legend",
								"children": [
									{"name": "Legend", "size": 20859},
									{"name": "LegendItem", "size": 4614},
									{"name": "LegendRange", "size": 10530}
								]
							},
							{
								"name": "operator",
								"children": [
									{
										"name": "distortion",
										"children": [
											{"name": "BifocalDistortion", "size": 4461},
											{"name": "Distortion", "size": 6314},
											{"name": "FisheyeDistortion", "size": 3444}
										]
									},
									{
										"name": "encoder",
										"children": [
											{"name": "ColorEncoder", "size": 3179},
											{"name": "Encoder", "size": 4060},
											{"name": "PropertyEncoder", "size": 4138},
											{"name": "ShapeEncoder", "size": 1690},
											{"name": "SizeEncoder", "size": 1830}
										]
									},
									{
										"name": "filter",
										"children": [
											{"name": "FisheyeTreeFilter", "size": 5219},
											{"name": "GraphDistanceFilter", "size": 3165},
											{"name": "VisibilityFilter", "size": 3509}
										]
									},
									{"name": "IOperator", "size": 1286},
									{
										"name": "label",
										"children": [
											{"name": "Labeler", "size": 9956},
											{"name": "RadialLabeler", "size": 3899},
											{"name": "StackedAreaLabeler", "size": 3202}
										]
									},
									{
										"name": "layout",
										"children": [
											{"name": "AxisLayout", "size": 6725},
											{"name": "BundledEdgeRouter", "size": 3727},
											{"name": "CircleLayout", "size": 9317},
											{"name": "CirclePackingLayout", "size": 12003},
											{"name": "DendrogramLayout", "size": 4853},
											{"name": "ForceDirectedLayout", "size": 8411},
											{"name": "IcicleTreeLayout", "size": 4864},
											{"name": "IndentedTreeLayout", "size": 3174},
											{"name": "Layout", "size": 7881},
											{"name": "NodeLinkTreeLayout", "size": 12870},
											{"name": "PieLayout", "size": 2728},
											{"name": "RadialTreeLayout", "size": 12348},
											{"name": "RandomLayout", "size": 870},
											{"name": "StackedAreaLayout", "size": 9121},
											{"name": "TreeMapLayout", "size": 9191}
										]
									},
									{"name": "Operator", "size": 2490},
									{"name": "OperatorList", "size": 5248},
									{"name": "OperatorSequence", "size": 4190},
									{"name": "OperatorSwitch", "size": 2581},
									{"name": "SortOperator", "size": 2023}
								]
							},
							{"name": "Visualization", "size": 16540}
						]
					}
				]
			}];

		}

})();

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


		vm.displayToast = function(event) {
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

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:LayoutCtrl
	* @description
	* # LayoutCtrl
	* Controller of the app
	*/

	angular
		.module('angmat2')
		.controller('LayoutCtrl', Layout);

	Layout.$inject = ['$mdSidenav', '$cookies', '$state', '$mdToast', '$mdDialog'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Layout($mdSidenav, $cookies, $state, $mdToast, $mdDialog ) {
		/*jshint validthis: true */
		var vm = this;

		vm.toggleSidenav = function (menuId) {
			$mdSidenav(menuId).toggle();
		};

		vm.changePassword = function () {
			$mdToast.show(
				$mdToast.simple()
				.content('Password clicked!')
				.position('top right')
				.hideDelay(2000)
			);
		};

		vm.changeProfile = function (ev) {
			$mdDialog.show({
				controller: DialogController,
				templateUrl: 'tabDialog.tmpl.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose:true
			})
			.then(function(answer) {
				$mdToast.show(
					$mdToast.simple()
					.content('You said the information was "' + answer + '".')
					.position('top right')
					.hideDelay(2000)
				);

			}, function() {
				$mdToast.show(
					$mdToast.simple()
					.content('You cancelled the dialog.')
					.position('top right')
					.hideDelay(2000)
				);
			});

			function DialogController($scope, $mdDialog) {
				$scope.hide = function() {
					$mdDialog.hide();
				};

				$scope.cancel = function() {
					$mdDialog.cancel();
				};

				$scope.answer = function(answer) {
					$mdDialog.hide(answer);
				};
			}
		};


		vm.logOut = function () {

			alert('Implement your Function Here');
			// $cookies.put('dev_appserver_login', ' ');
			//$state.go('out', {}, {reload: true});

		};

		var originatorEv;
		vm.openMenu = function ($mdOpenMenu, ev) {
			originatorEv = ev;
			$mdOpenMenu(ev);
		};

	}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:SidenavCtrl
	* @description
	* # SidenavCtrl
	* Controller of the app
	*/
	angular
		.module('angmat2')
		.controller('SidenavCtrl', SidenavCtrl)
		.controller('SettingsCtrl', SettingsCtrl);

	// Injecting Denpendencies

	SidenavCtrl.$inject = ['$mdSidenav', '$state', '$mdBottomSheet', '$mdToast', 'MenuService', '$scope'];
	SettingsCtrl.$inject = ['$mdBottomSheet'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function SidenavCtrl($mdSidenav, $state, $mdBottomSheet, $mdToast, MenuService, $scope) {
		/*jshint validthis: true */
		var vm = this;

		vm.toggleSidenav = function (menuId) {
			$mdSidenav(menuId).toggle();
		};

		vm.closeSidenav = function() {
			$mdSidenav('left').close();
		};

		// Close menu on small screen after click on menu item.
		// Only use $scope in controllerAs when necessary; for example, publishing and subscribing events using $emit, $broadcast, $on or $watch.
		$scope.$on('$stateChangeSuccess', vm.closeSidenav);

		vm.menu = MenuService.listMenu();

		vm.admin = [
			{
				link: 'showListBottomSheet($event)',
				title: 'Settings',
				icon: 'settings'
			}
		];

		vm.navigateTo = function (target) {

			var page = target;

			$state.go(page);

		};

		vm.showSettingsBottom = function ($event) {
			vm.alert = '';
			$mdBottomSheet.show({
				template: '<md-bottom-sheet class="md-grid" layout="column" ng-cloak><div layout="row" layout-align="center center"><h4>With clickOutsideToClose option, drag down or press ESC to close</h4></div><md-list flex layout="row" layout-align="center center"><md-list-item ng-repeat="item in vm.items"><md-button class="md-grid-item-content" ng-click="vm.listItemClick($index)"><md-icon class="md-48">{{item.icon}}</md-icon><div class="md-grid-text"> {{ item.name }} </div></md-button></md-list-item></md-list></md-bottom-sheet>',
				controller: 'SettingsCtrl',
				controllerAs: 'vm',
				targetEvent: $event
			}).then(function (clickedItem) {
				$mdToast.show(
					$mdToast.simple()
					.content(clickedItem.name + ' clicked!')
					.position('top right')
					.hideDelay(2000)
				);
			});
		};

	}

	function SettingsCtrl($mdBottomSheet) {
		/*jshint validthis: true */
		var vm = this;

		vm.items = [
			{name: 'Roles', icon: 'assignment_ind'},
			{name: 'Notes', icon: 'speaker_notes'},
			{name: 'Tasks', icon: 'view_list'},
			{name: 'Inbox', icon: 'inbox'}
		];

		vm.listItemClick = function ($index) {
			var clickedItem = vm.items[$index];
			$mdBottomSheet.hide(clickedItem);
		};
	}

})();

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

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:homeService
	* @description
	* # homeService
	* Service of the app
	*/

	angular.module('angmat2')
		.factory('homeService', homeService);

	homeService.$inject = ['$http'];

	function homeService($http) {

		var list = [
			{"feature": "Implemented Best Practices, following: John Papa's Guide"},
			{"feature": "Using Controller AS syntax"},
			{"feature": "Wrap Angular components in an Immediately Invoked Function Expression (IIFE)"},
			{"feature": "Declare modules without a variable using the setter syntax"},
			{"feature": "Using named functions"},
			{"feature": "Including Unit test with Karma"},
			{"feature": "Including UI options for Bootstrap or Angular-Material"},
			{"feature": "Including Angular-Material-Icons for Angular-Material UI"},
			{"feature": "Dynamic Menu generator for both themes"},
			{"feature": "Grunt task for Production and Development"}
		];

		return {
			getFeaturesList: getFeaturesList
		};

		function getFeaturesList() {
			return list;
		}

	}

})();

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
							name: 'Part1'
					},
			    
					{
						link: 'btobhistogram',
							name: 'Btobhistogram'
					},
			    
					{
						link: 'donut',
							name: 'Donut'
					},
			    
					{
						link: 'donuts',
							name: 'Donuts'
					},
			    
		  	];

			return {
				listMenu: function () {
					return menu;
				}
		  	}

		}

})();

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
