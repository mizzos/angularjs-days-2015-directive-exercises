var app = angular.module('app', []);

app.directive('trAddress', function () {
    return {
        templateUrl: 'tr-address.tpl.html',
        scope: {
            address: '='
        }
    };
});

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
