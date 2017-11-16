const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create ninja Schema & model
const UserSchema = new Schema({
	name: String,
	surname: String,
	age: Number,
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
