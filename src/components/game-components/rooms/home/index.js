import React from 'react';
import { Link } from 'react-router-dom';

import withRoom from '../../../hoc/with-room';

const HomeRoom = withRoom(() => {
	return (
		<div className="home room">
			Комната "Home"
			<Link to="2">На улицу</Link>
		</div>
	);
});

export default HomeRoom;
