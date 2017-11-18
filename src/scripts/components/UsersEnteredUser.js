import React from 'react';
import Avatar from './Avatar';

export default ({ name, surname, age }) => {
	const fullName = `${name} ${surname}`;
	return (
		<li className="users-entered-user">
			<Avatar name={name} surname={surname} />
			<div className="users-entered-user__info">
				<div className="users-entered-user__name">{fullName}</div>
				<div className="users-entered-user__age">{age} лет</div>
			</div>
		</li>
	);
};
