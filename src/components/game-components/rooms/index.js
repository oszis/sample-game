import React from 'react';

import withRoom from '../../hoc/with-room';

const Room = withRoom(() => {
	return (
		<div className="home room">
			<div className="room__layer room__title">
				{/*	Слой различного текста */}
			</div>

			<div className="room__layer room__links">
				{/*	Слой ссылок*/}
			</div>

			<div className="room__layer room__characters">
				{/*Слой персонажей*/}
			</div>
		</div>
	);
});

export default Room;
