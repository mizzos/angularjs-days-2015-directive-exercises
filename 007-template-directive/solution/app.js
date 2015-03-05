var app = angular.module('app', []);

app.directive('trAddress', function () {
    return {
        templateUrl: 'tr-address.tpl.html'
    };
});

app.controller('AppController', function ($scope) {
    $scope.address = {
        street: 'Am Stint 17',
        city: 'Hamburg'
    };
});

app.controller('SecondController', function ($scope) {
    // $scope.address = {
    //     street: 'Kuhdamm 34',
    //     city: 'Berlin'
    // };
});
