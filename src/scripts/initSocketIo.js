import io from 'socket.io-client';
import assign from 'object-assign';
import { ADD_USERS, ADD_MESSAGES } from './constants';

let socket = null;

export function chatMiddleware() {
	return next => action => {
		if (!action.isSocketReaction) {
			if (action.type === ADD_USERS) {
				socket.emit('action', { type: ADD_USERS, payload: action.payload });
			}
			if (action.type === ADD_MESSAGES) {
				socket.emit('action', {
					type: ADD_MESSAGES,
					payload: action.payload,
				});
			}
		}
		return next(action);
	};
}

export default function(store) {
	socket = io('https://react-redux-mongodb-chat.herokuapp.com');

	socket.on('action', action => {
		store.dispatch(assign({}, action, { isSocketReaction: true }));
	});
}
