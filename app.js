var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json())

Genre = require ('./models/genre');
Book = require ('./models/book');

// Connect to Mongoose DB
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', function(req, res){
	res.send('Please use /api/books or /api/genres');
});

// Get All Books
app.get('/api/books', function(req, res){
	Book.getBooks(function(err, books){
		if(err){
			throw err;
		}
		res.json(books);
	})

});

// Get Book by ID
app.get('/api/books/:_id', function(req, res){
	Book.getBookById(req.params._id, function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	})

});

// Post Books
app.post('/api/books', function(req, res){
	var book = req.body;
	Book.addBook(book, function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	})

});

// PUT or Update Boook
app.post('/api/books/:_id', function(req, res){
	var id = req.params._id;
	var book = req.body;
	Book.updateGenre(id, book, {}, function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	})

});

// Get All Genres
app.get('/api/genres', function(req, res){
	Genre.getGenres(function(err, genres){
		if(err){
			throw err;
		}
		res.json(genres);
	})

});

// Post Genres
app.post('/api/genres', function(req, res){
	var genre = req.body;
	Genre.addGenres(genre, function(err, genre){
		if(err){
			throw err;
		}
		res.json(genre);
	})

});

// PUT or Update Genres
app.post('/api/genres/:_id', function(req, res){
	var id = req.params._id;
	var genre = req.body;
	Genre.updateGenre(id, genre, {}, function(err, genre){
		if(err){
			throw err;
		}
		res.json(genre);
	})

});

app.listen(3000);
console.log('Running on port 3000 ...');