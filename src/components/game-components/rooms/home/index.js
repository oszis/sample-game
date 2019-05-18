import React from 'react';
import { Link } from 'react-router-dom';

import withRoom from '../../../hoc/with-room';
import Character from '../../../character';

const HomeRoom = withRoom(() => {
	return (
		<div className="home room">
			<div className="room__layer room__title">
				Комната "Home"
			</div>

			<div className="room__layer room__links">
				<Link to="2">На улицу</Link>
			</div>

			<div className="room__layer room__characters">
				<Character charId={"char1"}/>
			</div>
		</div>
	);
});

export default HomeRoom;
