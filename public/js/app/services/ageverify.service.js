angular.module('vapormos')
.service('ageVerify', function(){
    var that = this;

    this.verification_needed = function(){
        if(typeof(Storage) !== "undefined") {
            // attempt to retreive the age verification            
            var ageverify = localStorage.getItem('ageverify');
            //is the ageverify set?
            if(ageverify == null || typeof ageverify == 'undefined'){
                return true;   
            }
            return false;
        } else {
            // Sorry! No Web Storage support..
            // use a cookie instead?
            return false;
        }
    };

    this.setmarker = function(){
        if(typeof(Storage) !== "undefined") {
            localStorage.setItem('ageverify', true);
        } else {
            // Sorry! No Web Storage support..
            // add to cookie????  
        }
    };        
});