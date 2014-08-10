'use strict';

angular.module('cvApp')
    .controller('MainCtrl', function($scope, $translate, $timeout) {
        $scope.changeLanguage = function(langKey) {
            $translate.use(langKey);
        };
        $scope.$translate = $translate;

        $timeout(function() {
        	$scope.showName = true;
        }, 500);

        $scope.skills = [
        	{title:'WEB_DESIGN', percentage:'70'}, 
        	{title:'WEB_DEVELOPMENT', percentage:'80'},
        	{title:'SOFTWARE_ENGINERING', percentage:'95'},
        	{title:'BACKED_DEVELOPMENT', percentage:'85'},
        	{title:'TEAM_MANAGEMENT', percentage:'90'}
        ];
    });
