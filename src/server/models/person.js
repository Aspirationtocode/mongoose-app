const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create ninja Schema & model
const PersonSchema = new Schema({
	name: String,
	age: Number,
	skills: [String],
});

const Person = mongoose.model('person', PersonSchema);

module.exports = Person;
