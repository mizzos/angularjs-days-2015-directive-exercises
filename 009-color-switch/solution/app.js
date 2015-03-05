var app = angular.module('app', []);

app.directive('trColorSwitch', function () {

  var colors = ['#ff0000', '#00ff00', '#0000ff'];        

  var getRandomColor = function () {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return {
      template: '<button>Click to switch color</button>',
      restrict: 'E',
      replace: true,
      link: function(scope, element, attrs) {

        var changeColor = function () {
          element.css('background-color', getRandomColor())
        };

        element.on('click', changeColor);

        scope.$on('$destroy', function () {
          element.off('click', changeColor);
        });
      }
    };
});
