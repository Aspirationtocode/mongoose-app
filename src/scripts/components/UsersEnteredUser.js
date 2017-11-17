import React from 'react';
import Avatar from './Avatar';

export default ({ name, surname, time }) => {
	const fullName = `${name} ${surname}`;
	return (
		<div className="users-entered-user">
			<Avatar name={name} surname={surname} />
			<div className="users-entered-user__info">
				<div className="users-entered-user__name">{fullName}</div>
				<div className="users-entered-user__time">{time}</div>
			</div>
		</div>
	);
};
