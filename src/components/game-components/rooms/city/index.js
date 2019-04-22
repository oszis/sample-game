import React from 'react';
import { Link } from 'react-router-dom';

import withRoom from '../../../hoc/with-room';

const CityRoom = withRoom(() => {
	return (
		<div className="home room">
			Комната "City"
			<Link to="1">Домой</Link>
		</div>
	);
});

export default CityRoom;
