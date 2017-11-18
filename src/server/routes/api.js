const express = require('express');

const router = express.Router();
const User = require('../models/user');

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
		},
	);
});

router.get('/users', (req, res) => {
	User.find({}, function(err, users) {
		res.status(200);
		res.send(users);
	});
});

module.exports = router;
