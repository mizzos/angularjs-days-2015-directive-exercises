var app = angular.module('app', []);

app.controller('AppController', function ($scope) {
    $scope.hamburg = {
        street: 'Am Stint 17',
        city: 'Hamburg'
    };

    $scope.berlin = {
        street: 'Am Kuhdamm 123',
        city: 'Berlin'
    };
});

app.directive('trZippy', function () {
    return {
        templateUrl: 'tr-zippy.tpl.html'
    };
});