'use strict';

app.factory('cordova', [
	'$q',
	'$window',

	function($q, $window) {
		var d = $q.defer(),
			resolved = false;
		this.ready = d.promise;

		document.addEventListener('deviceready', function() {
			resolved = true;
			d.resolve($window.cordova);
		});

		// Check to make sure we didn't miss the
		// event (just in case)
		setTimeout(function() {
			if (!resolved) {
				if ($window.cordova) {
					d.resolve($window.cordova);
				}
			}
		}, 3000);

		// Public API here
		return this;
	}
]);
