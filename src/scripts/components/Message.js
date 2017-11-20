import React from 'react';
import moment from 'moment';
import Avatar from './Avatar';

export default ({ name, surname, text, date, isCurrentUserMessage }) => {
	const baseClasses = ['message'];
	const formattedDate = moment(date).fromNow();
	if (isCurrentUserMessage) {
		baseClasses.push('message--current-user');
	}
	return (
		<li className={baseClasses.join(' ')}>
			<Avatar name={name} surname={surname} type="message" />
			<div className="message-content">
				<div className="message-content__text">{text}</div>
				<div className="message-content__date">{formattedDate}</div>
			</div>
		</li>
	);
};
