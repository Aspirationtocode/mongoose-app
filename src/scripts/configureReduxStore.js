import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createHashHistory';
import allReducers from './reducers';

export default function configureReduxStore() {
	const history = createHistory();

	const routerMid = routerMiddleware(history);

	const middleware = applyMiddleware(thunk, routerMid);

	const persistedState = localStorage.getItem('reduxState')
		? JSON.parse(localStorage.getItem('reduxState'))
		: {};

	const store = createStore(
		allReducers,
		persistedState,
		composeWithDevTools(middleware),
	);

	store.subscribe(() => {
		const currentState = store.getState();
		localStorage.setItem('reduxState', JSON.stringify(currentState));
	});

	return store;
}
