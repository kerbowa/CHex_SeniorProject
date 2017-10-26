'use strict';

describe('Controller: TeamManagementCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var TeamManagementCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeamManagementCtrl = $controller('TeamManagementCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TeamManagementCtrl.awesomeThings.length).toBe(3);
  });
});
