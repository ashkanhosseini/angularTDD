/*jshint multistr: true */
'use strict';

describe('directive: grid', function() {
  var elm,
    scope,
    gridScope,
    data = [{
      name: 'Michael',
      surname: 'Jackson'
    }, {
      name: 'Eddie',
      surname: 'Vedder'
    }],
    template = '<div>\
                      <grid data="data" is-editable="false">\
                        <column property-name="name" is-editable="true" header="Name" expression="nameTemplate"></column>\
                        <column property-name="surname" is-editable="false" header="Surname"></column>\
                      </grid>\
                    </div>';
                    
  beforeEach(module('angularTDD'));

  beforeEach(inject(function($rootScope, $compile) {
    scope = $rootScope;
    scope.data = data;
    scope.dummyFunc = function(){};
    scope.nameTemplate = '<div class="template-container" ng-click="$root.dummyFunc()">{{row.name}}</div>'
    elm = $compile(template)(scope);
    $rootScope.$digest();
    gridScope = elm.find('.grid').scope();
  }));

  it('should have data', function() {
    expect(gridScope.data).toEqual(scope.data);
  });

  it('should have columns', function() {
    expect(gridScope.columns.length).toBe(2);
    var firstColumn = gridScope.columns[0],
        secondColumn = gridScope.columns[1];

    expect(firstColumn.propertyName).toBe('name');
    expect(firstColumn.header).toBe('Name');
    expect(firstColumn.isEditable).toBe(true);
    expect(firstColumn.expression).toBe(scope.nameTemplate);

    expect(secondColumn.propertyName).toBe('surname');
    expect(secondColumn.header).toBe('Surname');
    expect(secondColumn.isEditable).toBe(false);
    expect(secondColumn.expression).toBeUndefined();
  });

  it('should have table with two columns', function() {
    expect(elm.find('tbody tr:first td').length).toBe(2);
  });

  it('should have table with two rows of data', function() {
    expect(elm.find('tbody tr').length).toBe(2);
  });

  it('should have valid headers', function() {
    expect(elm.find('thead tr th:first').text()).toBe('Name');
    expect(elm.find('thead tr th:last').text()).toBe('Surname');
  });

  it('should have valid data', function() {
    expect(elm.find('tbody tr:first td:first').text().trim()).toBe('Michael');
    expect(elm.find('tbody tr:first td:last').text().trim()).toBe('Jackson');

    expect(elm.find('tbody tr:last td:first').text().trim()).toBe('Eddie');
    expect(elm.find('tbody tr:last td:last').text().trim()).toBe('Vedder');
  });

  it('should call function in template when clicked', function() {
    spyOn(scope, 'dummyFunc');
    elm.find('.template-container').triggerHandler('click');
    expect(scope.dummyFunc).toHaveBeenCalled();
  });
});
