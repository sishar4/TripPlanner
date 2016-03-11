var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/trip_planner');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error'));

var Schema = mongoose.Schema;

var placeSchema = new Schema({
	address: String,
	city: String, 
	state: String,
	phone: String,
	location: [Number]

});

var hotelSchema = new Schema({
	name: String,
	place: [placeSchema], 
	num_stars: { type: Number, min: 1, max: 5 },
	amenities: String

});

var activitySchema = new Schema({
	name: String,
	place: [placeSchema], 
	age_range: String
});

var restaurantSchema = new Schema({
	name: String,
	place: [placeSchema], 
	cuisine: String,
	price: { type: Number, min: 1, max: 5 }

});

var Place = mongoose.model('Place', placeSchema);
var Hotel = mongoose.model('Hotel', hotelSchema);
var Activity = mongoose.model('Activity', activitySchema);
var Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = {
	Place: Place,
	Hotel: Hotel,
	Activity: Activity,
	Restaurant: Restaurant
};



