angular.module('vapormos')
.controller('AgeVerifyController',[
'$scope', 
'ageVerify',
'$location', 
'$routeParams',
function($scope, ageVerify, $location, $routeParams){
    $(window).ready(function(){
        if(ageVerify.verification_needed()){
            console.log("age verification needed");            
            jQuery('#ageVerifyModal').modal({
                backdrop: 'static',
                keyboard: true,
                show: true
            });                       
        }
        else{
            console.log("age verification not needed");
        }        
    });

    $scope.age_verified = function(){
        //mark this user as age-verified
        ageVerify.setmarker();
        //close the modal
        jQuery('#ageVerifyModal').modal('hide');
    };
}
]);