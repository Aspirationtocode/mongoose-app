import io from 'socket.io-client';
import assign from 'object-assign';
import { startFetchingUsers } from './actions';
import { ADD_USERS } from './constants';

const socket = null;

export function chatMiddleware(store) {
	return next => action => {
		const { dispatch } = store;
		const result = next(action);

		if (action.type === ADD_USERS && !action.isSocketReaction) {
			socket.emit('action', { type: ADD_USERS, payload: action.payload });
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
