define(["angularAMD", "angular-require", "angularUI",
	"ui.bootstrap", "jquery"], 
	function(angularAMD, angularRoute, appRouter){
		var app = angular.module("car", ["ng", "ui.bootstrap"]);
		app.config(function($routeProvider){
			$routeProvider.when(
				'home', 
				angularAMD.route({
					templateUrl: "home.html",
					controller: "HomeController.js",
					controllerUrl: 'script/js/controllers/HomeController.js'
				})
			);
		})
			
		return anngularAMD.bootstrap(app);	
});