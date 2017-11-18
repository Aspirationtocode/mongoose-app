import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import UsersEntered from '../../components/UsersEntered';
import MessageInput from '../../components/MessageInput';
import ChatContainer from '../ChatContainer/';

import { startFetchingUsers } from '../../actions';

class Chat extends Component {
	constructor() {
		super();
		this.state = {
			isUserEnteredActive: true,
		};
		this.handleAdditionalButtonClick = this.handleAdditionalButtonClick.bind(
			this,
		);
		this.handleExitButtonClick = this.handleExitButtonClick.bind(this);
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
				<MessageInput currentUser={currentUser} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	currentUser: state.currentUser,
	users: state.users,
});

export default connect(mapStateToProps)(Chat);
