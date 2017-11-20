import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import CircularProgress from 'material-ui/CircularProgress';

import Message from './Message';

class MessagesList extends Component {
	constructor() {
		super();
		this.renderMessages = this.renderMessages.bind(this);
	}
	renderMessages() {
		const { messages, currentUser } = this.props;
		if (messages.data) {
			if (messages.data.length) {
				return messages.data.map(message => (
					<Message
						name={message.author.name}
						surname={message.author.surname}
						text={message.text}
						date={message.date}
						key={message._id}
						isCurrentUserMessage={message.authorId === currentUser.id}
					/>
				));
			}
			return <div>Сообщений нет</div>;
		}
		return <CircularProgress />;
	}
	render() {
		return (
			<Scrollbars style={{ height: 'calc(100vh - 130px)' }}>
				<ul className="messages-list">{this.renderMessages()}</ul>
			</Scrollbars>
		);
	}
}

export default MessagesList;
