'use strict';

angular.module('cvApp')
    .controller('MainCtrl', function($scope, $translate) {
        $scope.changeLanguage = function(langKey) {
            $translate.use(langKey);
        };
        $scope.$translate = $translate;
    });
