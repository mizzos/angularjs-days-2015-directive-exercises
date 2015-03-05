var app = angular.module('app', []);

app.directive('trZippy', function () {
return {
      templateUrl: 'tr-zippy.tpl.html',
      restrict: 'E',
      replace: true,
      transclude: true,
      scope: {
        title: '=',
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
