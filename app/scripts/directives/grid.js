'use strict';

angular.module('angularTDD').directive('grid', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/directive-grid.html',
    transclude: true,
    // replace: true,
    scope: true, //Added for prototypical inheritance so user can pass template with expressions
    /*
    {
      data: "=",
      tableClasses: "@"
    },
    */
    controller: function($scope, $attrs) {
      $scope.data = $scope.$eval($attrs.data);
      $scope.tableClasses = $attrs.tableClasses;
      $scope.columns = [];
      this.addColumn = function(column) {
        $scope.columns.push(column);
      };
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
      header: "@",
      expression: "="
    },
    link: function(scope, element, attrs, gridCtrl ) {
      gridCtrl.addColumn({
        propertyName: scope.propertyName,
        isEditable: scope.isEditable,
        header: scope.header,
        expression: scope.expression
      });
    }
  };
});
