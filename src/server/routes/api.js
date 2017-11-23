const express = require('express');

const router = express.Router();
const User = require('../models/user');
const Message = require('../models/message');

router.get('/', (req, res) => {
	res.sendFile('index.html');
});

router.post('/newUser', (req, res) => {
	const { currentName, currentAge, currentSurname } = req.body;
	User.findOne(
		{ name: currentName, surname: currentSurname, age: currentAge },
		(err, user) => {
			if (user) {
				res.status(200);
				res.statusMessage = 'User is already a chat member';
				res.send({
					name: user.name,
					surname: user.surname,
					age: user.age,
					id: user._id.toString(),
				});
			} else {
				const user = new User({
					name: currentName,
					surname: currentSurname,
					age: currentAge,
				});
				user.save(() => {
					console.log('done.');
				});
				res.status(200);
				res.send({
					name: user.name,
					surname: user.surname,
					age: user.age,
					id: user._id.toString(),
				});
			}
		}
	);
});

router.get('/users', (req, res) => {
	User.find({}, (err, users) => {
		res.status(200);
		res.send(users);
	});
});

router.post('/newMessage', (req, res) => {
	const { text, author, authorId, date } = req.body;
	const message = new Message({
		text,
		author,
		authorId,
		date,
	});
	message.save(() => {
		console.log('done.');
	});
	res.status(200);
	res.send(message);
});

router.get('/messages', (req, res) => {
	Message.find({}, (err, messages) => {
		res.status(200);
		res.send(messages);
	});
});

module.exports = router;
