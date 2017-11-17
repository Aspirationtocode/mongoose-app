import React from 'react';
export default ({ name, surname, type }) => {
	const baseClasses = ['avatar'];
	if (type) {
		baseClasses.push(`avatar--${type}`);
	}
	return <div className={baseClasses.join(' ')}>{`${name[0]}${surname[0]}`}</div>;
};
