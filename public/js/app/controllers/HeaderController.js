angular.module('vapormos')
.controller('HeaderController',[
'$scope', 
'$location', 
'loginVerify',
'$routeParams',
function($scope, $location, loginVerify, $routeParams){
    $scope.loggedin = false;
    $scope.username = '';
    if(loginVerify.getloggedin()){
        $scope.loggedin = true;
        $scope.username = loginVerify.getusername();
    }
}
]);