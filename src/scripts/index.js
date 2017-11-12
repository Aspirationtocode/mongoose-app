import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import App from './containers/App';
import '../index.html';
import '../styles/main.styl';

const muiTheme = getMuiTheme({
	fontFamily: 'RobotoCondensedRegular',
});

ReactDOM.render(
	<MuiThemeProvider muiTheme={muiTheme}>
		<App />
	</MuiThemeProvider>,
	document.getElementById('root'),
);
