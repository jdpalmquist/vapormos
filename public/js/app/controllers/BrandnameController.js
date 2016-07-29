angular.module('vapormos')
.controller('BrandnameController',[
'$http',
'$scope', 
'$location', 
'brandFactory',
'$routeParams',
function($http, $scope, $location, brandFactory, $routeParams){
    var brands = brandFactory.all_brands();
    var dataSet = [];
    var b = '';
    for(var i = 0; i < brands.length; i++){
        b = '';
        b += '<div class="row">';
            b += '<div class="col-md-6">';
                b += brands[i];
            b += '</div>';
            b += '<div class="col-md-6 text-right">';
                b += '<button class="btn btn-primary">';
                    b += '<i class="fa fa-cart-plus"></i> Add to Cart';
                b += '</button>';
            b += '</div>';
        b += '</div>';
        dataSet.push([b]);
    }

    $('#brand-datatable').DataTable({
        data: dataSet,
        columns: [{ title: "Name" }]
    });
}
]);