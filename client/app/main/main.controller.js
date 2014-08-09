'use strict';

angular.module('cvApp')
    .controller('MainCtrl', function($scope, $translate, $timeout) {
        $scope.changeLanguage = function(langKey) {
            $translate.use(langKey);
        };
        $scope.$translate = $translate;
        $timeout(function() {
        	$scope.showName = true;
        }, 1000);
    });
