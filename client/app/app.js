'use strict';

angular.module('cvApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'btford.socket-io',
    'pascalprecht.translate',
    'ngScrollSpy'
])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('base', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            });

        $locationProvider.html5Mode(true);
        $httpProvider.interceptors.push('authInterceptor');
    })
    .config(function($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: '/languages/',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('en');
    })
    .factory('authInterceptor', function($rootScope, $q, $cookieStore, $location) {
        return {
            // Add authorization token to headers
            request: function(config) {
                config.headers = config.headers || {};
                if ($cookieStore.get('token')) {
                    config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
                }
                return config;
            },

            // Intercept 401s and redirect you to login
            responseError: function(response) {
                if (response.status === 401) {
                    $location.path('/login');
                    // remove any stale tokens
                    $cookieStore.remove('token');
                    return $q.reject(response);
                } else {
                    return $q.reject(response);
                }
            }
        };
    })
    .run(function($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function(event, next) {
        if (next.authenticate && !Auth.isLoggedIn()) {
            $location.path('/login');
        }
    });
});
