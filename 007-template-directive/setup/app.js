var app = angular.module('app', []);

app.controller('AppController', function ($scope) {
    $scope.address = {
        street: 'Am Stint 17',
        city: 'Hamburg'
    };
});
