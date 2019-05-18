import React from 'react';
import { Link } from 'react-router-dom';

const RoomLink = (link) => {

	const { style = {}, href, text } = link;

	return (
		<Link style={style} to={href}>{text}</Link>
	);
};

export default RoomLink;
