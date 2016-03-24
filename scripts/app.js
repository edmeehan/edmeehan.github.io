(function(){
  "use strict";
  var app = angular.module('MPsite', ['ngRoute']);

  app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/postal-regulations', {
        templateUrl: 'views/postal-regulations.html',
      }).
      when('/direct-mail', {
        templateUrl: 'views/direct-mail.html',
      }).
      otherwise({
        redirectTo: '/404',
        templateUrl: 'views/404.html'
      });
  }]);

})();