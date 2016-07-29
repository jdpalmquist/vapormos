angular.module('vapormos')
.controller('CustomjuiceController',[
'$http',
'$scope', 
'$location', 
'flavorFactory',
'$routeParams',
function($http, $scope, $location, flavorFactory, $routeParams){
    var flavors = flavorFactory.make_dropdown();

    jQuery('#flavor_1').append(flavors);
    jQuery('#flavor_2').append(flavors);

    $scope.clear_form = function(){
        if(confirm("Are you sure you want to clear the form?")){
            $scope.flavor_1 = '';
            $scope.boost_1 = '';
            $scope.flavor_2 = '';
            $scope.boost_2 = '';
            $scope.pg_vg = '';
            $scope.nic_lvl = '';
            $scope.flavor_adds = '';
            $scope.bottle_size = '';
            $scope.bottle_type = '';            
        }
    };  

    $scope.add_to_order = function(){

    }; 

    $scope.continue = function(){

    };
}
]);