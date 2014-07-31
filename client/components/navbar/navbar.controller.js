'use strict';

angular.module('cvApp')
    .controller('NavbarCtrl', function($scope, $location, Auth) {
        $scope.menu = [{
            'title': 'Home',
            'link': '#home',
            'id': 'home'
        }, {
            'title': 'About me',
            'link': '#aboutme',
            'id': 'aboutme'
        }, {
            'title': 'What I do',
            'link': '#whatido',
            'id': 'whatido'
        }, {
            'title': 'My work',
            'link': '#mywork',
            'id': 'mywork'
        }, {
            'title': 'Contact',
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
