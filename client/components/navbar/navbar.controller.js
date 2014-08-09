'use strict';

angular.module('cvApp')
    .controller('NavbarCtrl', function($scope, $location, Auth) {
        $scope.menu = [{
            'title': 'HOME',
            'link': '#home',
            'id': 'home'
        }, {
            'title': 'ABOUT_ME',
            'link': '#aboutme',
            'id': 'aboutme'
        }, {
            'title': 'WHAT_I_DO',
            'link': '#whatido',
            'id': 'whatido'
        }, {
            'title': 'MY_WORK',
            'link': '#mywork',
            'id': 'mywork'
        }, {
            'title': 'CONTACT',
            'link': '#contacttome',
            'id': 'contacttome'
        }];

        $scope.isCollapsed = true;
        $scope.isLoggedIn = Auth.isLoggedIn;
        $scope.isAdmin = Auth.isAdmin;
        $scope.getCurrentUser = Auth.getCurrentUser;

        $scope.logout = function() {
            Auth.logout();
            $location.path('/login');
        };

        $scope.isActive = function(route) {
            return route === $location.path();
        };
    });
