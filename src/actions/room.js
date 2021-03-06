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

const removeRoomDialogEvents = (roomsList) => {
	return {
		type: 'ROOM_REMOVE_DIALOG_EVENTS',
		payload: roomsList
	}
};

export {
	loadRooms,
	getRoomsList,
	roomsLength,
	removeRoomDialogEvents,
};
