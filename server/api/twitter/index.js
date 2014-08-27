'use strict';

var express = require('express');
var controller = require('./tweet.controller');

var router = express.Router();

router.get('/last-tweet', controller.lastTweet);

module.exports = router;