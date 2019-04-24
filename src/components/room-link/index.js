import React from 'react';
import { Link } from 'react-router-dom';

const RoomLink = (link) => {

	const { style = {}, linkTo, text } = link;

	return (
		<Link style={style} to={linkTo}>{text}</Link>
	);
};

export default RoomLink;
