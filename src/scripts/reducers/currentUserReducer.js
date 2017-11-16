import assign from 'object-assign';

import { CHANGE_CURRENT_USER_DATA } from '../constants';

const initialState = {
	id: null,
	name: null,
	surname: null,
	age: null,
};

const currentUserReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_CURRENT_USER_DATA: {
			return assign({}, state, action.payload);
		}
		default: {
			return state;
		}
	}
};

export default currentUserReducer;
