import React, { Component } from 'react';
import HelloContainer from './HelloContainer';

class App extends Component {
	// componentWillMount() {
	// 	fetch('http://localhost:4000/api/persons')
	// 		.then(data => data.json())
	// 		.then(json => console.log(json));
	// }
	render() {
		return (
			<div className="root">
				<HelloContainer />
			</div>
		);
	}
}

export default App;
