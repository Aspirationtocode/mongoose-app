import React, { Component } from 'react';
import { connect } from 'react-redux';

import IconButton from 'material-ui/IconButton';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import Exit from 'material-ui/svg-icons/action/exit-to-app';
import CustomHeader from '../../components/CustomHeader';
import MessagesList from '../../components/MessagesList';

class ChatContainer extends Component {
	render() {
		const {
			handleAdditionalButtonClick,
			handleExitButtonClick,
			translated,
		} = this.props;
		const { currentUser } = this.props;
		const baseClasses = ['chat-container'];

		if (translated) {
			baseClasses.push('chat-container--translated');
		}

		return (
			<div className={baseClasses.join(' ')}>
				<div className="chat-container__top-line">
					<div className="chat-container__top-line--left-part">
						<IconButton onClick={handleAdditionalButtonClick}>
							{translated ? (
								<ChevronLeft color="rgba(43, 43, 37, .9)" />
							) : (
								<ChevronRight color="rgba(43, 43, 37, .9)" />
							)}
						</IconButton>
						<CustomHeader
							text={`${currentUser.name} ${
								currentUser.surname
							}, добро пожаловать в главную комнату чата.`}
						/>
					</div>

					<div className="chat-container__exit-icon" title="Выйти">
						<IconButton onClick={handleExitButtonClick}>
							<Exit color="rgba(43, 43, 37, .9)" />
						</IconButton>
					</div>
				</div>
				<MessagesList />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	users: state.users,
	currentUser: state.currentUser,
});

export default connect(mapStateToProps)(ChatContainer);
