import axios from 'axios';

const db = {
	postNewUserData(userData) {
		return axios.post('http://192.168.0.75:4000/api/newUser', userData);
	},
	fetchUsers() {
		return axios.get('http://192.168.0.75:4000/api/users');
	},
	postNewMessageData(messageData) {
		return axios.post('http://192.168.0.75:4000/api/newMessage', messageData);
	},
	fetchMessages() {
		return axios.get('http://192.168.0.75:4000/api/messages');
	},
};

export default db;
