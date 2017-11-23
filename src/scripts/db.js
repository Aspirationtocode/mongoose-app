import axios from 'axios';
import domen from './domen';

const db = {
	postNewUserData(userData) {
		return axios.post(`${domen}/api/newUser`, userData);
	},
	fetchUsers() {
		return axios.get(`${domen}/api/users`);
	},
	postNewMessageData(messageData) {
		return axios.post(`${domen}/api/newMessage`, messageData);
	},
	fetchMessages() {
		return axios.get(`${domen}/api/messages`);
	},
};

export default db;
