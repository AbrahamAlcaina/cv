'use strict';
angular.module('cvApp')
    .controller('TwitterCtrl', function($scope, $sce,  twitter) {    	 
    	$scope.lastTweet ={};
    	twitter.getLastTweet().then(function(tweet){
    		$scope.lastTweet.text = tweet.text;
    		if (tweet.entities && tweet.entities.media)
    		{
    			$scope.lastTweet.image = $sce.trustAsResourceUrl(tweet.entities.media[0].media_url);
    		}
    	});
    });
