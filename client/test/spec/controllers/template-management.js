'use strict';

describe('Controller: TemplateManagementCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var TemplateManagementCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TemplateManagementCtrl = $controller('TemplateManagementCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TemplateManagementCtrl.awesomeThings.length).toBe(3);
  });
});
