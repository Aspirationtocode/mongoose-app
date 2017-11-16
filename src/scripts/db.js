import axios from 'axios';
const db = {
	postNewUserData(userData) {
		return axios.post('http://localhost:4000/api/newUser', userData);
	},
};
export default db;
