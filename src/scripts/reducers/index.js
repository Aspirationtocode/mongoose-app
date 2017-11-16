import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import usersReducer from './usersReducer';
import currentUserReducer from './currentUserReducer';

const allReducers = combineReducers({
	users: usersReducer,
	currentUser: currentUserReducer,
	router: routerReducer,
});

export default allReducers;
