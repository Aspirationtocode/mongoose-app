import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

const mainDarkColor = 'rgba(43, 43, 37, .6)';

const styles = {
	underlineStyle: {
		borderColor: mainDarkColor,
	},
	inputStyle: {
		fontSize: '20px',
	},
	underlineFocusStyle: { borderColor: mainDarkColor },
	floatingLabelStyle: {
		color: mainDarkColor,
		fontSize: '20px',
	},
	floatingLabelFocusStyle: {
		color: mainDarkColor,
	},
};

class CustomTextField extends Component {
	constructor() {
		super();
		this.state = {
			text: '',
		};
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	handleInputChange(event, value) {
		this.setState({
			text: value,
		});
	}
	render() {
		const { text, type } = this.props;
		const { state } = this;
		return (
			<TextField
				floatingLabelText={text}
				inputStyle={styles.inputStyle}
				floatingLabelStyle={styles.floatingLabelStyle}
				underlineFocusStyle={styles.underlineFocusStyle}
				underlineStyle={styles.underlineStyle}
				floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
				value={state.text}
				onChange={this.handleInputChange}
				type={type}
			/>
		);
	}
}

export default CustomTextField;
