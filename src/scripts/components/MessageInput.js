import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Send from 'material-ui/svg-icons/content/send';
import Avatar from './Avatar';

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
		const { currentUser } = this.props;
		const { name, surname } = currentUser;
		return (
			<div className="message-input">
				<Avatar name={name} surname={surname} type="message-input" />
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
