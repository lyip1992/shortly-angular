angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function() {
    Links.addLink($scope.link)
      .then(function(data) {
        $scope.newLink = data;
        console.log($scope.newLink.title);
        console.log($scope.newLink.url);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});
