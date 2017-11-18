import assign from 'object-assign';
import { START_FETCHING_USERS, ADD_USERS } from '../constants';

const initialState = {
	fetched: false,
	fetching: false,
	data: [],
	error: null,
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_USERS: {
			console.log('i want to add users');
			return assign({}, state, {
				fetched: true,
				fetching: false,
				data: action.payload,
			});
		}
		case START_FETCHING_USERS: {
			return assign({}, state, { fetching: true });
		}
		default: {
			return state;
		}
	}
};

export default usersReducer;
