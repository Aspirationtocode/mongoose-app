import React, { Component } from 'react';
import CustomHeader from '../../components/CustomHeader';
import CustomTextField from '../../components/CustomTextField';
import CustomButton from '../../components/CustomButton';

class HelloContainer extends Component {
	render() {
		return (
			<div className="hello-container">
				<CustomHeader text="Добро пожаловать в наш чат. Пожалуйста, введите своё имя и возраст:" />
				<div className="hello-container__form">
					<CustomTextField text="Ваше имя" />
					<CustomTextField type="number" text="Ваш возраст" />
				</div>
				<CustomButton label="Войти" type="entry" />
			</div>
		);
	}
}

export default HelloContainer;
