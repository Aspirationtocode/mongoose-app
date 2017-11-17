import React, { Component } from 'react';
import CustomHeader from './CustomHeader';
import UsersEnteredUser from './UsersEnteredUser';

class UsersEntered extends Component {
	render() {
		const { active } = this.props;
		const baseClasses = ['users-entered'];

		active && baseClasses.push('users-entered--active');

		return (
			<ul className={baseClasses.join(' ')}>
				<CustomHeader text="Недавно вошедшие:" />
				<ul className="users-entered-list">
					<UsersEnteredUser name="Евгений" surname="Кулажский" time="10:52" />
				</ul>
			</ul>
		);
	}
}

export default UsersEntered;
