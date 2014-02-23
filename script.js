	    // creación del modulo angular llamdo scotchApp
	   var scotchApp = angular.module('scotchApp', ['ngRoute']);

	    // configure our routes
	    //	scotchApp.config(function ($routeProvider, $locationProvider)
	   scotchApp.config(function ($routeProvider, $locationProvider) {
	       $routeProvider

	       // ruta para inicio
	       .when('/', {
	           templateUrl: 'paginas/home.html',
	           controller: 'mainController'
	       })

	       // ruta para la página nosotros
	       .when('/nosotros', {
	           templateUrl: 'paginas/nosotros.html',
	           controller: 'nosotrosController'
	           //	        controller: 'mainController'

	       })

	       // ruta para la página de galeria
	       .when('/galeria', {
	           templateUrl: 'paginas/galeria.html',
	           controller: 'galeriaController'
	           //	        controller: 'mainController'

	       })
	           .when('/contacto', {
	               templateUrl: 'paginas/contacto.html',
	               controller: 'contactoController'
	               //	            controller: 'mainController'

	           });
	       //	    $locationProvider.html5Mode(true);

	   });

	    //	// create the controller and inject Angular's $scope
	    //	scotchApp.controller('mainController', function($scope) {
	    //		// create a message to display in our view
	    //		$scope.message = 'Everyone come and see how good I look!';
	    //	});
	    //
	    //	scotchApp.controller('aboutController', function($scope) {
	    //		$scope.message = 'Look! I am an about page.';
	    //	});
	    //
	    //	scotchApp.controller('contactController', function($scope) {
	    //		$scope.message = 'Contact us! JK. This is just a demo.';
	    //	});

	    // create the controller and inject Angular's $scope
	   scotchApp.controller('mainController', function ($scope) {
	       // create a message to display in our view
	       $scope.message = 'Everyone come and see how good I look!';
	   });

	   scotchApp.controller('nosotrosController', function ($scope) {
	       $scope.message = 'Look! I am an about page.';
	   });
	   scotchApp.controller('galeriaController', function ($scope) {
	       $scope.message = 'Look! I am an about page.';
	   });
	   scotchApp.controller('contactoController', function ($scope) {
	       $scope.message = 'Look! I am an about page.';
	   });

	 