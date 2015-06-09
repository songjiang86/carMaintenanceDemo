require.config({
	baseUrl: "script/js",
	path: {
		/*Angular js and 3rd part*/
		"angular": "lib/angular",	
		"angular-route": "lib/angular-route",
		"angular-require": "lib/angular-require",
		"angularAMD": "lib/angularAMD",
		"ngload": "lib/ngload",
		"application-router" : "application-router",
		
		/*Angular bootstrap ui*/
		"angularUI": "lib/ui-utils",
		"ui.bootstrap": "lib/ui-bootstrap-tpls-0.11.0",
		
		/* Shapper jQuery*/
		"jquery": "lib/jquery"
	},
	shim: {
		"angular-route": ["angular"],
		"angular-require": ["angular"],
		"angularAMD": ["angular"],
		"angularUI": ["angular"],
		"ng-load": ["angularAMD"],
		"ui.bootstrap": ["angular"]
	},
	map: {
		"*": {
			"css": "lib/css"
		}
	},
	deps: ["application"]
});