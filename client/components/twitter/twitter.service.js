'use strict';

angular.module('cvApp')
    .factory('twitter', function($http, $q) {
        var self = {};
        self.getLastTweet = function() {
            var defered = $q.defer();
            $http.get('api/twitter/last-tweet')
                .success(function(data){
                	if (data && data.length > 0)
                	{
                		defered.resolve(data[0]);
                	}
                	else {
                		defered.reject;
                	}	
                })
            	.error(defered.reject);                
            return defered.promise;
        };
        return {
        	getLastTweet: self.getLastTweet
        };
    });
