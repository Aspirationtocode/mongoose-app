import assign from 'object-assign';
import { START_FETCHING_MESSAGES, ADD_MESSAGES } from '../constants';

const initialState = {
	fetched: false,
	fetching: false,
	data: [],
	error: null,
};

const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGES: {
			return assign({}, state, {
				data: action.payload,
				fetching: false,
			});
		}
		case START_FETCHING_MESSAGES: {
			return assign({}, state, { fetching: true });
		}
		default: {
			return state;
		}
	}
};

export default messagesReducer;
