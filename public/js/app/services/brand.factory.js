angular.module('vapormos')
.factory('brandFactory', function(){
    return {
        all_brands: function(){
            return [
                'brand name 1',
                'brand name 2',
                'brand name 3',
                'brand name 4',
                'brand name 5',
                'brand name 6',
                'brand name 7',
                'brand name 8',
                'brand name 9',
                'brand name 10',
                'brand name 11',
                'brand name 12',
            ];
        }
    };
});