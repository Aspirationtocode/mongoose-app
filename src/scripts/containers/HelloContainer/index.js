import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import CustomHeader from '../../components/CustomHeader';
import CustomTextField from '../../components/CustomTextField';
import CustomButton from '../../components/CustomButton';
import db from '../../db';
import { changeCurrentUserData } from '../../actions';

class HelloContainer extends Component {
	constructor() {
		super();
		this.state = {
			currentName: null,
			currentSurname: null,
			currentAge: null,
		};
		this.updateCurrentState = this.updateCurrentState.bind(this);
		this.postUserData = this.postUserData.bind(this);
	}
	updateCurrentState(prop, value) {
		this.setState({
			[prop]: value,
		});
	}
	postUserData() {
		const { dispatch } = this.props;
		const { currentName, currentSurname, currentAge } = this.state;
		if (currentName && currentAge && currentSurname) {
			db.postNewUserData({ currentName, currentAge, currentSurname }).then(response => {
				const { statusText } = response;
				if (statusText === 'User is already a chat member') {
					dispatch(changeCurrentUserData(response.data));
				} else {
					dispatch(changeCurrentUserData(response.data));
				}
				dispatch(push('/chat'));
			});
		}
	}
	render() {
		return (
			<div className="hello-container">
				<CustomHeader text="Добро пожаловать в наш чат. Пожалуйста, введите своё имя и возраст:" />
				<div className="hello-container__form">
					<CustomTextField
						text="Ваше имя"
						handleChange={this.updateCurrentState}
						name="currentName"
					/>
					<CustomTextField
						text="Ваша фамилия"
						handleChange={this.updateCurrentState}
						name="currentSurname"
					/>
					<CustomTextField
						type="number"
						text="Ваш возраст"
						handleChange={this.updateCurrentState}
						name="currentAge"
					/>
				</div>
				<CustomButton label="Войти" type="entry" onClick={this.postUserData} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	users: state.users,
});

export default connect(mapStateToProps)(HelloContainer);
