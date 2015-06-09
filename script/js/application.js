define(["angularAMD", "angular-route", "application-route", "angular-require", "angularUI",
	"ui.bootstrap", "jquery"], 
	function(angularAMD, angularRoute, appRouter){
		var application = angular.module("car", ["ngRoute", "ng", "ngRequire", 
			"ui.utils", "ui.bootstrap"]).config(["$routeProvider", function($routeProvider){
				angular.forEach(appRouter, function(value){
					$routeProvider.when(value[0], angularAMD.route(value[1]));	
				});
				
				$routeProvider.otherwise({redirectTo: "/car"});	
			}]);
			
			angular.resumeBootstrap = angular.noop;
			angularAMD.bootstrap(application, document);
			
			return angularAMD;
});