import React from 'react';
import ReactDOM from 'react-dom';

import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createHashHistory';

import { Provider } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import configureReduxStore from './configureReduxStore';
import initSocketIo from './initSocketIo';

import HelloContainer from './containers/HelloContainer/';
import Chat from './containers/Chat/';

import './importStatic';

const history = createHistory();

const muiTheme = getMuiTheme({
	fontFamily: 'RobotoCondensedRegular',
});

const store = configureReduxStore();
initSocketIo(store);

const completeComponentToRender = (
	<Provider store={store}>
		<MuiThemeProvider muiTheme={muiTheme}>
			<ConnectedRouter history={history}>
				<Switch>
					<Route exact path="/" component={HelloContainer} />
					<Route path="/chat" component={Chat} />
				</Switch>
			</ConnectedRouter>
		</MuiThemeProvider>
	</Provider>
);

ReactDOM.render(completeComponentToRender, document.getElementById('root'));
