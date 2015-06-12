angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};

  $scope.getLinks = function() {
    Links.getLinks()
      .then(function(data) {
        $scope.data.links = data;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.init = function() {
    $scope.getLinks();
  };

  $scope.init();

});
