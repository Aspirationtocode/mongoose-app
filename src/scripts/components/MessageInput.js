import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Send from 'material-ui/svg-icons/content/send';

const styles = {
	hintStyle: {
		fontSize: 20,
	},
	inputStyle: {
		fontSize: 20,
		color: 'rgba(43, 43, 37, .8)',
	},
	underlineFocusStyle: {
		borderColor: '#ffea60',
	},
};

class MessageInput extends Component {
	render() {
		return (
			<div className="message-input">
				<TextField
					hintText="Введите сообщение"
					hintStyle={styles.hintStyle}
					inputStyle={styles.inputStyle}
					underlineFocusStyle={styles.underlineFocusStyle}
					style={{ width: 'calc(100% - 80px)' }}
					multiLine
				/>
				<div className="message-input__send">
					<IconButton>
						<Send color="rgba(0, 0, 0, 0.6)" />
					</IconButton>
				</div>
			</div>
		);
	}
}

export default MessageInput;
