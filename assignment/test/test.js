describe('myApp', function(){

  beforeEach(module('myApp'));

  it('Did you create the function $scope.plusOne()?', inject(function($controller) {
    var scope = {},
          ctrl = $controller('MainController', {$scope:scope});

    expect(scope.plusOne).toBeDefined();
  }));

  it('On the <p class="likes"> element, make sure to use ng-click to call the plusOne() function.', inject(function($controller) {
    var scope = {},
          ctrl = $controller('MainController', {$scope:scope});
    scope.plusOne(0);
    expect(scope.products[0].likes).toBe(1);
  }));
});
