import React from 'react';
import { Link } from 'react-router-dom';

import withRoom from '../../../hoc/with-room';

const CityRoom = withRoom(() => {
	return (
		<div className="home room">
			<div className="room__layer room__title">
				Комната "City"
			</div>
			<div className="room__layer room__links">
				<Link to="1">Домой</Link>
			</div>
			<div className="room__layer room__characters">

			</div>
		</div>
	);
});

export default CityRoom;
