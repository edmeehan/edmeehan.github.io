(function() {
	"use strict";
	var app = angular.module('directives', []);

	app.directive( 'channelPreview', function ( $compile ) {
    return {
      restrict: 'AE',
      scope: { text: '@' },
      template: '',
      controller: function ( $scope, $element ) {
        $scope.$parent.newVideo = function () {
          var el = $compile( '<div><iframe data-ng-src="{{ channelObj.src }}" id="{{ channelObj.id }}"></iframe></div>' )( $scope.$parent );
          $($element).children().remove();
          $element.append( el );
        };
      }
    };
  });

})();