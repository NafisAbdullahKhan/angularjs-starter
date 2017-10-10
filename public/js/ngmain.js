ngApp.run(['$rootScope', function($rootScope) { // instance-injector

}]);
// configure our routes
ngApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl : 'views/home.html',
            controller  : 'homeCtrl'
        })
        .otherwise({
            redirectTo: "/"
        });
}]);