'use strict';

describe('Controller: Manage190ContentCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var Manage190ContentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Manage190ContentCtrl = $controller('Manage190ContentCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Manage190ContentCtrl.awesomeThings.length).toBe(3);
  });
});
