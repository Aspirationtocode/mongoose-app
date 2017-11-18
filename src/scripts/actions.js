import {
	CHANGE_CURRENT_USER_DATA,
	START_FETCHING_USERS,
	ADD_USERS,
} from './constants';

import db from './db';

export function changeCurrentUserData(currentUserData) {
	return { type: CHANGE_CURRENT_USER_DATA, payload: currentUserData };
}

export function startFetchingUsers(dispatch) {
	return () => {
		dispatch({ type: START_FETCHING_USERS });
		db.fetchUsers().then(response => {
			const users = response.data;
			dispatch({ type: ADD_USERS, payload: users });
		});
	};
}
