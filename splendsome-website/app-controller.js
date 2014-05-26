if (Meteor.isClient) {

  appController = ['$scope', function($scope) {

    $scope.logo = {
      origin: [0.5, 0.5]
    };

    $scope.surprise = function() {
      $scope.logo.origin = [0, 0];
    };

  }];

}
