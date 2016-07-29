angular.module('vapormos')
.controller('FooterController',[
'$scope', 
'$location', 
'$routeParams',
function($scope, $location, loginVerify, $routeParams){
    //get the host url
    var parser = document.createElement('a');
    parser.href = document.URL;
    $scope.host = parser.hostname;
    $scope.year = moment().format("YYYY");
}
]);