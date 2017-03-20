var api = angular.module('api',['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home', {
            url:'/home',                      
            templateUrl: "views/home.html", 
            controller:  "ctrlHome"          
        })
        
        
    $urlRouterProvider.otherwise('/home');
}]);