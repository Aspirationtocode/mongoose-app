import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { Route, Switch } from 'react-router';

import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

import allReducers from './reducers';

const history = createHistory();

const routerMid = routerMiddleware(history);

const middleware = applyMiddleware(thunk, routerMid);

const store = createStore(
	allReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	middleware,
);

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import HelloContainer from './containers/HelloContainer/';
import Chat from './containers/Chat/';

import '../index.html';
import '../styles/main.styl';

const muiTheme = getMuiTheme({
	fontFamily: 'RobotoCondensedRegular',
});

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider muiTheme={muiTheme}>
			<ConnectedRouter history={history}>
				<Switch>
					<Route exact path="/" component={Chat} />
					<Route exact path="/chat" component={Chat} />
				</Switch>
			</ConnectedRouter>
		</MuiThemeProvider>
	</Provider>,

	document.getElementById('root'),
);
