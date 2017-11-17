import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import db from '../../db';
import UsersEntered from '../../components/UsersEntered';
import MessageInput from '../../components/MessageInput';
import ChatContainer from '../ChatContainer/';

class Chat extends Component {
	constructor() {
		super();
		this.state = {
			isUserEnteredActive: false,
		};
		this.handleAdditionalButtonClick = this.handleAdditionalButtonClick.bind(this);
	}
	handleAdditionalButtonClick() {
		const { state } = this;
		this.setState({
			isUserEnteredActive: !state.isUserEnteredActive,
		});
	}
	render() {
		const { state } = this;
		return (
			<div className="chat">
				<UsersEntered active={state.isUserEnteredActive} />
				<ChatContainer
					translated={state.isUserEnteredActive}
					handleAdditionalButtonClick={this.handleAdditionalButtonClick}
				/>
				<MessageInput />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	users: state.users,
});

export default connect(mapStateToProps)(Chat);
