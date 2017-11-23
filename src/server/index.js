const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// set up express app
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const mongodbURI =
	'mongodb://aspiretocode:aspiretocode@ds113936.mlab.com:13936/chat-db';
// connect to mongodb
mongoose.connect(mongodbURI, { useMongoClient: true });

mongoose.Promise = global.Promise;

// set up static files
app.use(express.static(`${__dirname}/../../dist`));

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

app.get('/', (req, res) => {
	// res.sendFile(path.resolve(`${__dirname}/../../dist/index.html`));
	res.send(`
		<!DOCTYPE html> <html lang=en> <head> <meta charset=UTF-8> <meta name=viewport content="width=device-width,initial-scale=1"> <meta http-equiv=X-UA-Compatible content="ie=edge"> <link rel="shortcut icon" href=http://virtualdjradio.com/images/chat.png /> <title>Chat-app</title> </head> <body> <div id=root></div> <script type="text/javascript" src="bundle.js"></script></body> </html>
	`);
});

const appStart = () => {
	// listen for requests
	http.listen(process.env.PORT || 4000, () => {
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
};

module.exports = appStart;
