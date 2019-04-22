import React from 'react';
import { Link } from 'react-router-dom';

import withRoom from '../../../hoc/with-room';
import Character from '../../../character';

const HomeRoom = withRoom(() => {
	return (
		<div className="home room">
			Комната "Home"
			<Link to="2">На улицу</Link>

			<Character charId={"char1"}/>
		</div>
	);
});

export default HomeRoom;
