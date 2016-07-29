angular.module('vapormos')
.controller('OurblendsController',[
'$http',
'$scope', 
'$location', 
'blendFactory',
'$routeParams',
function($http, $scope, $location, blendFactory, $routeParams){
    var blends = blendFactory.all_blends();
    var dataSet = [];
    var b = '';
    for(var i = 0; i < blends.length; i++){
        b = '';
        b += '<div class="row">';
            b += '<div class="col-md-6">';
                b += blends[i];
            b += '</div>';
            b += '<div class="col-md-6 text-right">';
                b += '<button class="btn btn-primary">';
                    b += '<i class="fa fa-cart-plus"></i> Add to Cart';
                b += '</button>';
            b += '</div>';
        b += '</div>';
        dataSet.push([b]);
    }

    $('#blend-datatable').DataTable({
        data: dataSet,
        columns: [{ title: "Name" }]
    });
}
]);