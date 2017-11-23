import axios from 'axios';

const db = {
	postNewUserData(userData) {
		return axios.post(
			'https://react-redux-mongodb-chat.herokuapp.com/api/newUser',
			userData
		);
	},
	fetchUsers() {
		return axios.get(
			'https://react-redux-mongodb-chat.herokuapp.com/api/users'
		);
	},
	postNewMessageData(messageData) {
		return axios.post(
			'https://react-redux-mongodb-chat.herokuapp.com/api/newMessage',
			messageData
		);
	},
	fetchMessages() {
		return axios.get(
			'https://react-redux-mongodb-chat.herokuapp.com/api/messages'
		);
	},
};

export default db;
