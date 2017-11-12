import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
const mainDarkColor = 'rgba(43, 43, 37, .6)';

class CustomButton extends Component {
	constructor() {
		super();
	}
	render() {
		const { label, type } = this.props;
		const { state } = this;
		let backgroundColor, labelStyle;
		if (type === 'entry') {
			backgroundColor = mainDarkColor;
			labelStyle = {
				color: '#fff',
				fontSize: 20,
			};
		}
		return (
			<FlatButton
				label={label}
				backgroundColor={backgroundColor}
				labelStyle={labelStyle}
				style={{ marginTop: '10px', paddingBottom: 40 }}
			/>
		);
	}
}

export default CustomButton;
