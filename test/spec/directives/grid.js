/*jshint multistr: true */
'use strict';

describe('directive: grid', function() {
  var elm,
      scope,
      gridScope,
      data = [{name: 'Michael', surname: 'Jackson'}, {name: 'Eddie', surname: 'Vedder'}],
      template = '<div>\
                      <grid data="data" is-editable="false">\
                        <column property-name="name" is-editable="true" header="Name"></column>\
                        <column property-name="surname" is-editable="false" header="Surname"></column>\
                      </grid>\
                    </div>';

  beforeEach(module('jabraApp'));

  beforeEach(inject(function($rootScope, $compile) {
      scope = $rootScope.$new();
      scope.data = data;
      elm = $compile(template)(scope);
      $rootScope.$digest();
      gridScope = elm.find('.grid').scope();
  }));

  it('should have data', function() {
    expect(gridScope.data).toEqual(scope.data);
  });

  it('should have columns', function() {
    expect(gridScope.columns.length).toBe(2);

    expect(gridScope.columns[0].propertyName).toBe('name');
    expect(gridScope.columns[0].header).toBe('Name');
    expect(gridScope.columns[0].isEditable).toBe(true);

    expect(gridScope.columns[1].propertyName).toBe('surname');
    expect(gridScope.columns[1].header).toBe('Surname');
    expect(gridScope.columns[1].isEditable).toBe(false);
  });

  it('should have table with two columns', function(){
    expect(elm.find('tbody tr:first td').length).toBe(2);
  });

  it('should have table with two rows of data', function(){
    expect(elm.find('tbody tr').length).toBe(2);
  });

  it('should have valid headers', function() {
    expect(elm.find('thead tr th:first').text()).toBe('Name');
    expect(elm.find('thead tr th:last').text()).toBe('Surname');
  });

  it('should have valid data', function(){
    expect(elm.find('tbody tr:first td:first').text().trim()).toBe('Michael');
    expect(elm.find('tbody tr:first td:last').text().trim()).toBe('Jackson');

    expect(elm.find('tbody tr:last td:first').text().trim()).toBe('Eddie');
    expect(elm.find('tbody tr:last td:last').text().trim()).toBe('Vedder');
  });
});
