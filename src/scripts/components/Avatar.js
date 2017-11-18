import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ name, surname, type }) => {
	const baseClasses = ['avatar'];
	if (type) {
		baseClasses.push(`avatar--${type}`);
	}
	return (
		<div className={baseClasses.join(' ')}>{`${name[0]}${surname[0]}`}</div>
	);
};

Avatar.defaultProps = {
	type: 'regular',
};

Avatar.propTypes = {
	name: PropTypes.string.isRequired,
	surname: PropTypes.string.isRequired,
	type: PropTypes.string,
};

export default Avatar;
