var app = angular.module('app', []);

app.directive('trTabs', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    controller: function($scope) {
      var tabs = $scope.tabs = [];

      $scope.select = function(tab) {
        angular.forEach(tabs, function(tab) {
          tab.selected = false;
        });
        tab.selected = true;
      };

      this.addTab = function(tab) {
        if (tabs.length === 0) {
          $scope.select(tab);
        }
        tabs.push(tab);
      };
    },
    templateUrl: 'tr-tabs.tpl.html'
  };
})

app.directive('trTab', function() {
  return {
    require: '^trTabs',
    restrict: 'E',
    transclude: true,
    scope: {
      title: '@'
    },
    link: function(scope, element, attrs, tabsCtrl) {
      tabsCtrl.addTab(scope);
    },
    templateUrl: 'tr-tab.tpl.html'
  };
});