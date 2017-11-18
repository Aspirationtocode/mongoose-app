import React, { Component } from 'react';

import CircularProgress from 'material-ui/CircularProgress';

import CustomHeader from './CustomHeader';
import UsersEnteredUser from './UsersEnteredUser';
import CurrentUserInfo from './CurrentUserInfo';

class UsersEntered extends Component {
	constructor() {
		super();
		this.renderUsers = this.renderUsers.bind(this);
	}

	renderUsers(users) {
		if (users) {
			if (users.length) {
				return users.map(user => (
					<UsersEnteredUser
						name={user.name}
						surname={user.surname}
						age={user.age}
						key={user._id}
					/>
				));
			}
			return <CustomHeader text="Пока нет ни одного пользователя" />;
		}
		return <CircularProgress />;
	}
	render() {
		const { active } = this.props;
		const { users } = this.props;
		const baseClasses = ['users-entered'];

		if (active) {
			baseClasses.push('users-entered--active');
		}

		return (
			<ul className={baseClasses.join(' ')}>
				{/* <CurrentUserInfo /> */}
				<CustomHeader text="Пользователи чата:" />
				<ul className="users-entered-list">{this.renderUsers(users)}</ul>
			</ul>
		);
	}
}

export default UsersEntered;
