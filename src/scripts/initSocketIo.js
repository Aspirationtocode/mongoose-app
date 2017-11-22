import io from 'socket.io-client';
import assign from 'object-assign';
import { ADD_USERS, ADD_MESSAGES } from './constants';

let socket = null;

export function chatMiddleware() {
	return next => action => {
		if (!action.isSocketReaction) {
			switch (action.type) {
				case ADD_USERS: {
					socket.emit('action', { type: ADD_USERS, payload: action.payload });
				}
				case ADD_MESSAGES: {
					socket.emit('action', {
						type: ADD_MESSAGES,
						payload: action.payload,
					});
				}
				default: {
					return null;
				}
			}
		}
		return next(action);
	};
}

export default function(store) {
	socket = io('http://192.168.0.75:4000');

	socket.on('action', action => {
		store.dispatch(assign({}, action, { isSocketReaction: true }));
	});
}
