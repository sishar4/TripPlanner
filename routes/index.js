var router = require('express').Router();
var models = require('./models');
var Promise = require('bluebird');

var Place = models.Place;
var Hotel = models.Hotel;
var Activity = models.Activity;
var Restaurant = models.Restaurant;

module.exports = router;