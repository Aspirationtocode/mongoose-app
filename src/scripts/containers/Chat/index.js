import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import UsersEntered from '../../components/UsersEntered';
import MessageInput from '../../components/MessageInput';
import ChatContainer from '../ChatContainer/';

import {
	startFetchingUsers,
	startFetchingMessages,
	postMessage,
} from '../../actions';

import db from '../../db';

class Chat extends Component {
	constructor() {
		super();
		this.state = {
			isUserEnteredActive: true,
		};
		this.handleAdditionalButtonClick = this.handleAdditionalButtonClick.bind(
			this
		);
		this.handleExitButtonClick = this.handleExitButtonClick.bind(this);
		this.handleSendMessage = this.handleSendMessage.bind(this);
	}

	handleSendMessage(msg) {
		const { currentUser } = this.props;
		const { dispatch } = this.props;
		const msgData = {
			text: msg,
			author: currentUser,
			authorId: currentUser.id,
			date: new Date(),
		};
		if (msg.trim()) {
			db.postNewMessageData(msgData).then(response => {
				dispatch(startFetchingMessages(dispatch));
			});
		}
	}

	handleExitButtonClick() {
		const { dispatch } = this.props;
		dispatch(push('/'));
	}

	handleAdditionalButtonClick() {
		const { state } = this;
		this.setState({
			isUserEnteredActive: !state.isUserEnteredActive,
		});
	}

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(startFetchingUsers(dispatch));
		dispatch(startFetchingMessages(dispatch));
	}

	render() {
		const { state } = this;
		const { currentUser, users } = this.props;
		return (
			<div className="chat">
				<UsersEntered
					active={state.isUserEnteredActive}
					users={users.fetching ? null : users.data}
				/>
				<ChatContainer
					translated={state.isUserEnteredActive}
					handleAdditionalButtonClick={this.handleAdditionalButtonClick}
					handleExitButtonClick={this.handleExitButtonClick}
				/>
				<MessageInput
					currentUser={currentUser}
					handleSendMessage={this.handleSendMessage}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	currentUser: state.currentUser,
	users: state.users,
	messages: state.messages,
});

export default connect(mapStateToProps)(Chat);
