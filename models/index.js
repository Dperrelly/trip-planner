var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dropDatabase');
mongoose.connection.on('error', console.error.bind(console, 'MongoDb connection error: '));

var placeSchema = new mongoose.Schema({
	address: {type: String},
	city: {type: String},
	state: {type: String},
	phone: {type: String},
	location: {type:[Number]}
});

var hotelSchema = new mongoose.Schema({
	name: {type: String},
	place: {type: [placeSchema]},
	num_stars: {type: Number, min: 1, max: 5},
	amenities: {type: String}
});

var activitySchema = new mongoose.Schema({
	name: {type: String, required: true},
	place: {type: [placeSchema]},
	age_range: {type: String}
});

var restaurantSchema = new mongoose.Schema({
	name: {type: String},
	place: {type: [placeSchema]},
	cuisines: {type: String},
	price: {type: Number, min: 1, max: 5}
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