import io from 'socket.io-client';
import assign from 'object-assign';
import { startFetchingUsers } from './actions';
import { ADD_USERS, ADD_MESSAGES } from './constants';

const socket = null;

export function chatMiddleware(store) {
	return next => action => {
		const { dispatch } = store;

		if (action.type === ADD_USERS && !action.isSocketReaction) {
			socket.emit('action', { type: ADD_USERS, payload: action.payload });
		}

		if (action.type === ADD_MESSAGES && !action.isSocketReaction) {
			socket.emit('action', { type: ADD_MESSAGES, payload: action.payload });
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
