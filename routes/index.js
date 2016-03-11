var router = require('express').Router();
var models = require('../models');
var Promise = require('bluebird');

var Place = models.Place;
var Hotel = models.Hotel;
var Activity = models.Activity;
var Restaurant = models.Restaurant;

module.exports = router;

router.get('/', function(req, res, next) {
	var hotels = Hotel.find().sort('name');
	var activities = Activity.find().sort('name');
	var restaurants = Restaurant.find().sort('name');

	Promise.all([hotels, activities, restaurants]).then(function(data) {
		res.render('index', {hotels: data[0], activities: data[1], restaurants: data[2]});
	}).catch(next);
});

