const mongoose = require('mongoose');
const User = require('./user');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
	text: String,
	author: User.schema,
	authorId: String,
	date: Date,
});

const Message = mongoose.model('message', MessageSchema);

module.exports = Message;
