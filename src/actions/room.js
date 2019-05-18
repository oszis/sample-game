const roomsLength = (newRooms) => {
	return {
		type: 'ROOMS_LENGTH',
		payload: newRooms,
	};
};

const getRoomsList = () => {
	return {
		type: 'ROOM_GET_LIST',
	};
};

const loadRooms = (roomsList) => {
	return {
		type: 'ROOM_SET_LIST',
		payload: roomsList,
	};
};

export {
	loadRooms,
	getRoomsList,
	roomsLength,
};
