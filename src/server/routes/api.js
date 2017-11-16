const express = require('express');
const router = express.Router();
const User = require('../models/user');

// get a list of Persons from the db
router.post('/newUser', (req, res) => {
	const { currentName, currentAge, currentSurname } = req.body;
	User.findOne({ name: currentName, surname: currentSurname, age: currentAge }, (err, user) => {
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
	});
});

module.exports = router;
