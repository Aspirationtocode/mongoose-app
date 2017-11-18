import React, { Component } from 'react';
import { connect } from 'react-redux';

import IconButton from 'material-ui/IconButton';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import CustomHeader from '../../components/CustomHeader';
import MessagesList from '../../components/MessagesList';

class ChatContainer extends Component {
	render() {
		const { handleAdditionalButtonClick, translated } = this.props;
		const baseClasses = ['chat-container'];

		if (translated) {
			baseClasses.push('chat-container--translated');
		}

		return (
			<div className={baseClasses.join(' ')}>
				<div className="chat-container__top-line">
					<IconButton onClick={handleAdditionalButtonClick}>
						{translated ? (
							<ChevronLeft color="rgba(43, 43, 37, .9)" />
						) : (
							<ChevronRight color="rgba(43, 43, 37, .9)" />
						)}
					</IconButton>
					<CustomHeader text="Добро пожаловать в главную комнату чата." />
				</div>
				<MessagesList />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	users: state.users,
});

export default connect(mapStateToProps)(ChatContainer);
