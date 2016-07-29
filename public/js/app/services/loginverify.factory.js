angular.module('vapormos')
.factory('loginVerify', function(){
    var logged_in = false;
    var username = '';
    return {
        getloggedin: function(){
            return logged_in;
        },
        setloggedin: function(x){
            logged_in = x;
        },
        getusername: function(){
            return username;
        },
        setusername: function(x){
            username = x;
        }
    };
});