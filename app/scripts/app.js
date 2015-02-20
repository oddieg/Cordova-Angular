'use strict';

var app = angular.module('geoffTestApp', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ngRoute'
]);


app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'MainCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
});


/**
 * Run is another entry point: "get executed after the injector is created and are used to kickstart the application."
 * Description @ http://stackoverflow.com/questions/20663076/angularjs-app-run-documentation
 */
app.run([
	'cordova',

	function(cordova) {
		cordova.ready.then(function() {
			console.log('Cordova is ready');
		});
	}
]);
