'use strict';

describe('Controller: NotesCtrl', function () {

  // load the controller's module
  beforeEach(module('commonApp'));

  var NotesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NotesCtrl = $controller('NotesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
