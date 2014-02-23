// create the controller and inject Angular's $scope
ideasHierro.controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

ideasHierro.controller('nosotrosController', function ($scope) {
    $scope.message = 'Look! I am an about page.';
});
ideasHierro.controller('galeriaController', function ($scope) {
    $scope.message = 'Look! I am an about page.';
});
ideasHierro.controller('contactoController', function ($scope) {
    $scope.message = 'Look! I am an about page.';
});
