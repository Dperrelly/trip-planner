var express = require('express');
var router = express.Router();
var Promsie = require("bluebird");
var models = require("../models/");
var Hotel = models.Hotel;
var Activity = models.Activity;
var Restaurant = models.Restaurant;

/* GET home page. */
router.get('/', function(req, res, next) {
	var hotelPromise = Hotel.find({});
	var activityPromise = Activity.find({});
	var restaurantPromise = Restaurant.find({});

	Promsie.all([hotelPromise, activityPromise, restaurantPromise])
	.then(function(values) {
		console.log(values);
	})

    res.render('index');


});

module.exports = router;
