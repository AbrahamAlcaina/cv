'use strict';

angular.module('cvApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('/', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            });
    });
