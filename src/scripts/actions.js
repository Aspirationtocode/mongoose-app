export const CHANGE_CURRENT_USER_DATA = 'CHANGE_CURRENT_USER_DATA';

export function changeCurrentUserData(currentUserData) {
	return { type: CHANGE_CURRENT_USER_DATA, payload: currentUserData };
}
