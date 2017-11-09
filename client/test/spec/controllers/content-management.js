'use strict';

describe('Controller: ContentManagementCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ContentManagementCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContentManagementCtrl = $controller('ContentManagementCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ContentManagementCtrl.awesomeThings.length).toBe(3);
  });
});
