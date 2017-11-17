import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Message from './Message';

class MessagesList extends Component {
	render() {
		return (
			<Scrollbars style={{ height: 'calc(100vh - 130px)' }}>
				<ul className="messages-list">
					<Message
						name="Екатерина"
						surname="Кулажская"
						text="Я пришел к тебе с приветом, Рассказать, что солнце встало, Что оно горячим светом. По листам затрепетало."
						date="18 января, 13:54"
					/>
					<Message
						name="Екатерина"
						surname="Кулажская"
						text="Я пришел к тебе с приветом, Рассказать, что солнце встало, Что оно горячим светом. По листам затрепетало."
						date="18 января, 13:54"
						isCurrentUserMessage
					/>
					<Message
						name="Екатерина"
						surname="Кулажская"
						text="Я пришел к тебе с приветом, Рассказать, что солнце встало, Что оно горячим светом. По листам затрепетало."
						date="18 января, 13:54"
						isCurrentUserMessage
					/>
					<Message
						name="Екатерина"
						surname="Кулажская"
						text="Я пришел к тебе с приветом, Рассказать, что солнце встало, Что оно горячим светом. По листам затрепетало."
						date="18 января, 13:54"
						isCurrentUserMessage
					/>
					<Message
						name="Екатерина"
						surname="Кулажская"
						text="Я пришел к тебе с приветом, Рассказать, что солнце встало, Что оно горячим светом. По листам затрепетало."
						date="18 января, 13:54"
					/>
					<Message
						name="Екатерина"
						surname="Кулажская"
						text="Я пришел к тебе с приветом, Рассказать, что солнце встало, Что оно горячим светом. По листам затрепетало."
						date="18 января, 13:54"
					/>
					<Message
						name="Екатерина"
						surname="Кулажская"
						text="Я пришел к тебе с приветом, Рассказать, что солнце встало, Что оно горячим светом. По листам затрепетало."
						date="18 января, 13:54"
					/>
					<Message
						name="Екатерина"
						surname="Кулажская"
						text="Я пришел к тебе с приветом, Рассказать, что солнце встало, Что оно горячим светом. По листам затрепетало."
						date="18 января, 13:54"
					/>
					<Message
						name="Екатерина"
						surname="Кулажская"
						text="Я пришел к тебе с приветом, Рассказать, что солнце встало, Что оно горячим светом. По листам затрепетало."
						date="18 января, 13:54"
					/>
					<Message
						name="Екатерина"
						surname="Кулажская"
						text="Я пришел к тебе с приветом, Рассказать, что солнце встало, Что оно горячим светом. По листам затрепетало."
						date="18 января, 13:54"
					/>
					<Message
						name="Екатерина"
						surname="Кулажская"
						text="Я пришел к тебе с приветом, Рассказать, что солнце встало, Что оно горячим светом. По листам затрепетало."
						date="18 января, 13:54"
					/>
					<Message
						name="Екатерина"
						surname="Кулажская"
						text="Я пришел к тебе с приветом, Рассказать, что солнце встало, Что оно горячим светом. По листам затрепетало."
						date="18 января, 13:54"
					/>
					<Message
						name="Екатерина"
						surname="Кулажская"
						text="Я пришел к тебе с приветом, Рассказать, что солнце встало, Что оно горячим светом. По листам затрепетало."
						date="18 января, 13:54"
					/>
				</ul>
			</Scrollbars>
		);
	}
}

export default MessagesList;
