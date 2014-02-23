
// angular.js main app initialization
// creación del modulo para trabajar con angular y lo llamamos ideasHierro
var ideasHierro = angular.module('ideasHierro', []);

// configuracón de las rutas
ideasHierro.config(function ($routeProvider) {
        $routeProvider

        // ruta para index(introducción)
        .when('/', {
            templateUrl: 'paginas/home.html',
            controller: 'mainController'
        })

        // ruta para la página rechazo
        .when('/nosotros', {
            templateUrl: 'paginas/nosotros.html',
            controller: 'nosotrosController'
        })

        // ruta para la página de infecciones
        .when('/galeria', {
            templateUrl: 'paginas/galeria.html',
            controller: 'galeriaController'
        })
        .when('/contacto', {
            templateUrl: 'paginas/contacto.html',
            controller: 'contactoController'
        })
         // onclick event handlers
//        $scope.showForm = function () {
//          $('.contactRow').slideToggle();
//        };
//        $scope.closeForm = function () {
//          $('.contactRow').slideUp();
//        };
//
//        // save the 'Contact Us' form
//        $scope.save = function () {
//          $scope.loaded = true;
//          $scope.process = true;
//          $http.post('sendemail.php', $scope.message).success(function () {
//              $scope.success = true;
//              $scope.process = false;
//          });
//        };
  	});