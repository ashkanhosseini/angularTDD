'use strict';

angular.module('angularTDD').directive('grid', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/directive-grid.html',
    transclude: true,
    scope: {
      data: "="
    },
    controller: function($scope) {
      $scope.columns = [];
      this.addColumn = function(column) {
        $scope.columns.push(column);
      };
      /*Private methods*/
    }
  };
})

.directive('column', function() {
  return {
    require: '^grid',
    restrict: 'E',
    replace: true,
    scope: {
      propertyName: "@",
      isEditable: "=",
      header: "@"
    },
    link: function(scope, element, attrs, gridCtrl) {
      gridCtrl.addColumn({
        propertyName: scope.propertyName,
        isEditable: scope.isEditable,
        header: scope.header
      });
    }
  };
});
