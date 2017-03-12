var api = angular.module('api',['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home', {
            url:'/home',
            views:{
                'main':{
                    templateUrl : "views/home.html"
                   
                }
            }
        })    
        
    $urlRouterProvider.otherwise('/home');
}])