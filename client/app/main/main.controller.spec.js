'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('cvApp'));
  beforeEach(module('socketMock'));

  var MainCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('test', function(){
    expect(true).toBe(true);
  })

});
