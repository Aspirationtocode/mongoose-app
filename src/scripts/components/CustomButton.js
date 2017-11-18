import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

const mainDarkColor = 'rgba(43, 43, 37, .6)';

class CustomButton extends Component {
	render() {
		const { label, type, onClick } = this.props;
		let backgroundColor;
		let labelStyle;
		if (type === 'entry') {
			backgroundColor = mainDarkColor;
			labelStyle = {
				color: '#fff',
				fontSize: 20,
			};
		}
		return (
			<FlatButton
				onClick={onClick}
				label={label}
				backgroundColor={backgroundColor}
				labelStyle={labelStyle}
				style={{ marginTop: '10px', paddingBottom: 40, maxWidth: 256 }}
			/>
		);
	}
}

export default CustomButton;
