import assign from 'object-assign';

// import {
// 	ADD_SEARCH_PLAYERS,
// 	CLEAR_SEARCH_PLAYERS,
// 	START_FETCHING_SEARCH_PLAYERS,
// } from '../constants';

const initialState = {
	fetched: false,
	fetching: false,
	data: [],
	error: null,
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		default: {
			return state;
		}
	}
};

export default usersReducer;
