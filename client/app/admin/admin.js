'use strict';

angular.module('cvApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('admin', {
            	url: '/admin',
                templateUrl: 'app/admin/admin.html',
                controller: 'AdminCtrl'
            });
    });
