const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/chat', { useMongoClient: true });
mongoose.Promise = global.Promise;

// set up static files
app.use(express.static('public'));

// use body-parser middleware
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	}),
);

app.use(cors({ origin: '*' }));

// initialize routes
app.use('/api', require('./routes/api'));

// listen for requests
app.listen(4000, () => {
	console.log('now listening for requests');
});
