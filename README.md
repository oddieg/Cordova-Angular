# Basic Cordova - Angular App.

Based on http://www.digitalaholic.com/how-to-setup-cordova-angularjs-app/


Prerequisites :

1. Install NodeJs from http://nodejs.org on your local system.

2. Install Yeoman
	$ npm install -g yo

3. Install Grunt
	$ npm install -g grunt-cli

4. Install Bower
	$ npm install -g bower

5. Install Yeoman's AngularJS Generator
	$ npm install -g generator-angular

6. Install Cordova
	$ npm install -g cordova



To build follow the following steps:

Create the Directory
$ mkdir angular-cordova

Enter directory
$ cd angular-cordova

Run Yeoman with Angular
$ yo angular

Test that it works
$ grunt serve

Create the Cordova App
$ cordova create cordova com.example.angular-cordova AngularCordova

In Gruntfile.js, change dist: 'dist' to dist: 'www' on line 25.
Open app/index.html file and add following just after google analytics sample code:
<script type="text/javascript" src="cordova.js"></script>

Create a new Angular Factory Serice
$ yo angular:factory cordova

Once done, now you can find newly created file in app/scripts/services/cordova.js

Update the cordova factory code with the following:

var d = $q.defer(),
resolved = false;

var self = this;
this.ready = d.promise;

        document.addEventListener('deviceready', function () {
    resolved = true;
    d.resolve($window.cordova);
});

// Check to make sure we didn't miss the
// event (just in case)
setTimeout(function () {
    if (!resolved) {
        if ($window.cordova) d.resolve($window.cordova);
    }
}, 3000);

// Public API here
return this;

# Cordova-Angular
