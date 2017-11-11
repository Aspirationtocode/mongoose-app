import React, { Component } from 'react';

class App extends Component {
	componentWillMount() {
		fetch('http://localhost:4000/api/persons')
			.then(data => data.json())
			.then(json => console.log(json));
	}
	render() {
		return (
			<div>
				<div>App</div>
			</div>
		);
	}
}

export default App;
