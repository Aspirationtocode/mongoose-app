const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// set up express app
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

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
	})
);

app.use(cors({ origin: '*' }));

// initialize routes
app.use('/api', require('./routes/api'));

// listen for requests
http.listen(4000, () => {
	console.log('now listening for requests');
});

io.on('connection', socket => {
	console.log('a user connected');
	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
	socket.on('action', action => {
		io.emit('action', action);
	});
});
