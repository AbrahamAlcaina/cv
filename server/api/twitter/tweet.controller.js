'use strict';
var twitter = require('twit');
var config = require('../../config/environment');

exports.lastTweet = function(req, res) {
    // twitter    
    var twit = new twitter({
        consumer_key: config.twitter.key,
        consumer_secret: config.twitter.consumerSecret,
        access_token: config.twitter.token,
        access_token_secret: config.twitter.tokenSecret
    });

    twit.get('statuses/user_timeline', function(error, reply) {
        if (error)
            return res.json(error);
        res.json(reply);
    });
};
