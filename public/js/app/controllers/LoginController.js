angular.module('vapormos')
.controller('LoginController',[
'$http',
'$scope', 
'$location', 
'loginVerify',
'$routeParams',
function($http, $scope, $location, loginVerify, $routeParams){
    $scope.login = function(){
         var username = $scope.username;
         loginVerify.setloggedin(true);
         loginVerify.setusername(username);
         $location.path('/index');
    };
}
]);