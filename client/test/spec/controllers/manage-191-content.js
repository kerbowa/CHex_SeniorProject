'use strict';

describe('Controller: Manage191ContentCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var Manage191ContentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Manage191ContentCtrl = $controller('Manage191ContentCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Manage191ContentCtrl.awesomeThings.length).toBe(3);
  });
});
