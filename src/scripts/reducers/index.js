import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import usersReducer from './usersReducer';
import messagesReducer from './messagesReducer';
import currentUserReducer from './currentUserReducer';

const allReducers = combineReducers({
	users: usersReducer,
	messages: messagesReducer,
	currentUser: currentUserReducer,
	router: routerReducer,
});

export default allReducers;
