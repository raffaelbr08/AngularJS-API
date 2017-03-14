var api = angular.module('api',['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home', {
            url:'/home',                      
            templateUrl: "views/home.html", 
            controller:  "ctrlHome"          
        }).state('header', {
            url:'/header', 
            views:{
                header:{templateUrl:"header.html"}
            }                   
                     
        });   
        
        
    $urlRouterProvider.otherwise('/');
}]);