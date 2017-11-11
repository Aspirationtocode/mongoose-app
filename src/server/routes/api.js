const express = require('express');
const router = express.Router();
const Person = require('../models/person');

// get a list of Persons from the db
router.get('/persons', (req, res) => {
	const currentPerson = Person.findOne({ name: 'Evgeniy' }).then(result => {
		res.send(result);
	});
});

module.exports = router;
