var mongoose = require ('mongoose');

// Genres Schema
var genreSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Genre = module.exports = mongoose.model('Genre', genreSchema);

// Get Genres
module.exports.getGenres = function(callback, limit){
	Genre.find(callback).limit(limit);
}

// Add Genres
module.exports.addGenres = function(genre, callback){
	Genre.create(genre, callback);
}
