/**
 * @ngdoc service
 * @name Myapp:dateFilter
 *
 * @description
 *
 *
 * */
angular.module('myApp')
    .filter('dateFilter', function(){
        return function(input) {
            return input;
        };
});

